const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async ({ body, headers }) => {
  console.log("Serverside baby!");

  const params = JSON.parse(body);

  const session = await stripe.checkout.sessions.create({
    success_url: `${headers.origin}/success`,
    cancel_url: `${headers.origin}/cancel`,
    payment_method_types: ["card"],
    line_items: params.lineItems,
    mode: params.paymentType,
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      sessionId: session.id,
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    }),
  };
};
