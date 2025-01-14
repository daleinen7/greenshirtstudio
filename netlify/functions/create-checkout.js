exports.handler = async ({ body }) => {
  const params = JSON.parse(body);
  console.log('Serverside baby!', params.paymentType);

  console.log('This is a ', params.test ? 'test' : 'live', ' purchase.');

  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

  try {
    const session = await stripe.checkout.sessions.create({
      success_url: `${params.success_url}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: params.cancel_url,
      payment_method_types: ['card'],
      line_items: params.lineItems,
      mode: params.paymentType,
      allow_promotion_codes: params.promotion,
      phone_number_collection: {
        enabled: true,
      },
      metadata: {
        dayOfWeek: params.dayOfWeek,
        contentfulEntryId: params.contentfulEntryId,
        session: params.session,
        className: params.className,
        time: params.time,
        instructor: params.instructor,
        classDates: params.classDates,
        location: params.location,
      },
    });

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
