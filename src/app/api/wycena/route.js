import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();
  const { phone } = body;

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.eu", // zamień na swój SMTP
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Wycena" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_RECEIVER,
      subject: "Prośba o darmową wycenę",
      html: `<p><b>Numer telefonu:</b> ${phone}</p>`,
    });

    return new Response(JSON.stringify({ ok: true }));
  } catch (err) {
    console.error("Błąd wysyłki wyceny:", err);
    return new Response(JSON.stringify({ ok: false }), { status: 500 });
  }
}

