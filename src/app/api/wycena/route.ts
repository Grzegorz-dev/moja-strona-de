import { NextResponse } from "next/server";
import * as nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { phone } = body;

    if (!phone) {
      return NextResponse.json({ ok: false, error: "Brak numeru telefonu" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.eu", // lub inny SMTP (np. smtp.gmail.com)
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Wycena" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_RECEIVER,
      subject: "Prośba o darmową wycenę",
      html: `<p><b>Numer telefonu:</b> ${phone}</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Błąd podczas wysyłki maila:", error);
    return NextResponse.json({ ok: false, error: "Błąd serwera" }, { status: 500 });
  }
}
