const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async ({ body, headers }) => {
  const params = JSON.parse(body);
  console.log("Serverside baby!", params.paymentType);

  const session = await stripe.checkout.sessions.create({
    success_url: `${headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${headers.origin}/cancel`,
    payment_method_types: ["card"],
    line_items: params.lineItems,
    mode: params.paymentType,
    metadata: { dayOfWeek: params.dayOfWeek, databaseId: params.dbid },
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      sessionId: session.id,
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    }),
  };
};