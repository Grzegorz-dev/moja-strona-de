import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { phone } = body;

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.eu",
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

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Błąd:", err);
    return new Response(JSON.stringify({ ok: false }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}


