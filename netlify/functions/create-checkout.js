exports.handler = async ({ body, headers }) => {
  const params = JSON.parse(body);
  // return {
  //   statusCode: 200,
  //   body: JSON.stringify({
  //     message: params
  //   })
  // }
  // console.log("Serverside baby!", params.paymentType);

  console.log("This is a ", params.test ? "test" : "live", " purchase.");

  const stripe = require("stripe")(
    params.test
      ? process.env.STRIPE_SECRET_TEST_KEY
      : process.env.STRIPE_SECRET_KEY
  );

  // console.log("GATSBY URL ENVIRONMENT: ", process.env.GATSBY_URL_ENVIRONMENT);

  // console.log("Params Available: ", params);

  try {
    const createSessionBody = {
      success_url: `${process.env.GATSBY_URL_ENVIRONMENT}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.GATSBY_URL_ENVIRONMENT}/cancel`,
      payment_method_types: ["card"],
      line_items: params.lineItems,
      mode: params.paymentType,
      allow_promotion_codes: params.promotion,
      metadata: { dayOfWeek: params.dayOfWeek, databaseId: params.dbid },
    }
    // console.log(createSessionBody);
    const session = await stripe.checkout.sessions.create(createSessionBody);

    // console.log("SESSION: ", session);
    createSessionBody.success_url = `${process.env.GATSBY_URL_ENVIRONMENT}/success?session_id=${session.id}`;
    return {
      statusCode: 200,
      body: JSON.stringify({
        sessionId: session.id,
        lineItems: createSessionBody.line_items,
        mode: createSessionBody.mode,
        successUrl: createSessionBody.success_url,
        cancelUrl: createSessionBody.cancel_url,
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
      }),
    };
  } catch (error) {
    console.log("This failed I see", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error }),
    };
  }
};
