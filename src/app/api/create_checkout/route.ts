import Stripe from "stripe";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  const { id, address, email, name, ...body } = await request.json();
  console.log(id);

  // 1. Retrieve the customer - create if absent
  let customer;
  try {
    customer = await stripe.customers.retrieve(id);
  } catch (err) {
    console.log("Error: ", err);
    customer = await stripe.customers.create({
      address: {
        city: address.city,
        country: address.country,
        postal_code: address.postal_code,
        state: address.state,
        line1: address.line1,
        line2: address.line2 || undefined, // Only include if provided
      },
      email: email,
      name: name,
    });
  }

  const checkoutResponse = await stripe.checkout.sessions.create({
    mode: "payment",
    success_url: "http://localhost:3000/success",
    client_reference_id: id,
    metadata: {
      ...body,
      // Include address in metadata if needed for your records
      address_line1: address.line1,
      address_line2: address.line2 || "",
      address_city: address.city,
      address_state: address.state,
      address_postal_code: address.postal_code,
      address_country: address.country,
    },
    customer: customer.id,
    line_items: [
      {
        price_data: {
          product: "prod_SYggE88FLjHaqt",
          currency: "INR",
          unit_amount: body.amount * 100,
        },
        quantity: 1,
      },
    ],
  });
  
  if (checkoutResponse.url) {
    return Response.json({ url: checkoutResponse.url }, { status: 200 });
  } else {
    return Response.json({ error: "Could not create checkout session!" }, { status: 500 });
  }
}