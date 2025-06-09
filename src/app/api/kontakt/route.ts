import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, message } = body;

  if (!name || !email || !phone || !message) {
    return NextResponse.json({ ok: false, error: "Brak wymaganych pól" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: "mail.slowiaczek.pl", // z SeoHost
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Formularz - pomoc techniczna" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_RECEIVER,
      subject: `Nowe zgłoszenie od ${name}`,
      html: `
        <p><b>Imię i nazwisko:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Telefon:</b> ${phone}</p>
        <p><b>Wiadomość:</b><br/>${message}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("❌ Błąd wysyłki zgłoszenia pomocy:", error);
    return NextResponse.json({ ok: false, error: "Błąd serwera" }, { status: 500 });
  }
}

