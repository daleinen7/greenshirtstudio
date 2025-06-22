exports.handler = async ({ body }) => {
  const params = JSON.parse(body);
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
        session: params.session,
        classTitle: params.classTitle,
        time: params.time,
        instructor: params.instructor,
        classDates: params.classDates,
        location: params.location,
        contentfulEntryId: params.contentfulEntryId,
      },
      consent_collection: {
        terms_of_service: 'required',
      },
      custom_text: {
        terms_of_service_acceptance: {
          message: `I agree to the [Attendance and Cancellation policies](${params.cancel_url}).`,
        },
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
