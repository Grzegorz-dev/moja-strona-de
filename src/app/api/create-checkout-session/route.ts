import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export async function POST(req: Request) {
  const { priceId } = await req.json(); // <- WAŻNE

  if (!priceId) {
    return NextResponse.json({ error: "Brak priceId" }, { status: 400 });
  }

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: "http://localhost:3000/klienci?success=true",
    cancel_url: "http://localhost:3000/klienci?canceled=true",
  });

  return NextResponse.json({ url: session.url }); // <- to trafia do res.json()
}


