```javascript
const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const fs = require('fs');
const path = require('path');

// Load Stripe configuration
const stripeConfigPath = path.join(__dirname, '../../payments/stripe_config.json');
const stripeConfig = JSON.parse(fs.readFileSync(stripeConfigPath, 'utf8'));

router.post('/create-checkout-session', async (req, res) => {
  const { priceId } = req.body;

  // Create a new Checkout Session for the order
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: stripeConfig.success_url,
    cancel_url: stripeConfig.cancel_url,
  });

  res.send({
    sessionId: session.id,
  });
});

router.post('/webhook', (req, res) => {
  const event = req.body;

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      // Here you should update your database and fulfill the order
      console.log(`Successful payment for session ${session.id}`);
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a response to acknowledge receipt of the event
  res.json({received: true});
});

module.exports = router;
```