import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const { phone } = body;

  if (!phone) {
    return NextResponse.json({ ok: false, error: "Brak numeru telefonu" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: "mail.slowiaczek.pl",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER, // kontakt@slowiaczek.pl
      pass: process.env.MAIL_PASS  // wpisz to samo hasło, co do logowania do roundcube
    },
  });

  await transporter.sendMail({
    from: `"Wycena" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_RECEIVER,
    subject: "Prośba o darmową wycenę",
    html: `<p><b>Numer telefonu:</b> ${phone}</p>`,
  });

  return NextResponse.json({ ok: true });
}
