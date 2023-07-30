exports.handler = async ({ body, headers }) => {
  const params = JSON.parse(body);
  console.log('Serverside baby!', params.paymentType);

  console.log('This is a ', params.test ? 'test' : 'live', ' purchase.');

  const stripe = require('stripe')(
    params.test
      ? process.env.STRIPE_SECRET_TEST_KEY
      : process.env.STRIPE_SECRET_KEY
  );

  console.log('GATSBY URL ENVIRONMENT: ', process.env.GATSBY_URL_ENVIRONMENT);

  console.log('Params Available: ', params);

  try {
    const session = await stripe.checkout.sessions.create({
      success_url: `${process.env.GATSBY_URL_ENVIRONMENT}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.GATSBY_URL_ENVIRONMENT}/cancel`,
      payment_method_types: ['card'],
      line_items: params.lineItems,
      mode: params.paymentType,
      allow_promotion_codes: params.promotion,
      phone_number_collection: {
        enabled: true,
      },
      metadata: {
        dayOfWeek: params.dayOfWeek,
        databaseId: params.dbid,
        session: params.session,
        className: params.className,
      },
    });

    console.log('SESSION: ', session);

    return {
      statusCode: 200,
      body: JSON.stringify({
        sessionId: session.id,
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
      }),
    };
  } catch (error) {
    console.log('This failed I see', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error }),
    };
  }
};
