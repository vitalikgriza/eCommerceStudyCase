import { Router, Request } from 'express';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

const router = Router();


interface PaymentIntentRequest {
  amount: number;
  currency?: string;
}

router.post('/intent', async (req: Request<PaymentIntentRequest>, res) => {
  try {
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: req.body.currency || 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.json({ status: 'OK', data: paymentIntent.client_secret });
  } catch (e: any) {
    res.status(400).json({ status: 'FAILED', error: "Failed to create payment intent"});
  }
});

export default router;
