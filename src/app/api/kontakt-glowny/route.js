import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();
  const { name, email, phone, message } = body;

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.eu", // lub Twój SMTP
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Formularz Kontakt" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_RECEIVER,
      subject: "Nowa wiadomość z podstrony KONTAKT",
      html: `
        <p><b>Imię:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Telefon:</b> ${phone}</p>
        <p><b>Wiadomość:</b><br/>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ ok: true }));
  } catch (err) {
    console.error("Błąd wysyłki z kontaktu:", err);
    return new Response(JSON.stringify({ ok: false }), { status: 500 });
  }
}

