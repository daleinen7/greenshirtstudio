const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async ({ body, headers }) => {
  const params = JSON.parse(body);
  console.log("Serverside baby!", params.paymentType);

  console.log("GATSBY URL ENVIRONMENT: ", process.env.GATSBY_URL_ENVIRONMENT);

  console.log("Body: ", body);

  const session = await stripe.checkout.sessions.create({
    success_url: `${process.env.GATSBY_URL_ENVIRONMENT}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.GATSBY_URL_ENVIRONMENT}/cancel`,
    payment_method_types: ["card"],
    line_items: params.lineItems,
    mode: params.paymentType,
    allow_promotion_codes: body.promotion,
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
