import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();
  const { name, email, phone, message } = body;

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.eu", // lub smtp.gmail.com lub inny SMTP
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,      // Twój login SMTP
      pass: process.env.MAIL_PASS,      // Hasło SMTP lub "app password"
    },
  });

  try {
    await transporter.sendMail({
      from: `"Formularz-pomoc techniczna" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_RECEIVER, // Gdzie wiadomość ma trafić
      subject: `Nowe zgłoszenie od ${name}`,
      html: `
        <p><b>Imię i nazwisko:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Telefon:</b> ${phone}</p>
        <p><b>Wiadomość:</b><br/>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ ok: true }));
  } catch (error) {
    console.error("Błąd wysyłki:", error);
    return new Response(JSON.stringify({ ok: false, error: "Mail error" }), { status: 500 });
  }
}
