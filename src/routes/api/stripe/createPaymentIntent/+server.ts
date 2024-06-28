import { json } from '@sveltejs/kit';
import Stripe from 'stripe';

const stripe = new Stripe(import.meta.env.VITE_STRIPE_SEC, {
  apiVersion: '2023-08-16'
});

export async function POST({ request }) {
  const body = await request.json();
  let customer = body.customer;

  const setupIntent = await stripe.paymentIntents.create({
    amount: 27900,
    customer: customer,
    currency: 'usd',
    automatic_payment_methods: { enabled: true },
    capture_method: 'automatic'
  });

  return json({
    clientSecret: setupIntent.client_secret,
    customer: customer.id,
    paymentMethod: setupIntent.payment_method_configuration_details?.id
  });
}
