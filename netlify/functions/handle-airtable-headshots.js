const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async ({ body, headers }) => {
  // console.log('BODY: ', body);

  try {
    // check the webhook to make sure it’s valid
    const stripeEvent = stripe.webhooks.constructEvent(
      body,
      headers['stripe-signature'],
      process.env.AIRTABLE_HEADSHOT_WH_SECRET
    );

    // only do stuff if this is a successful Stripe Checkout purchase
    if (stripeEvent.type === 'checkout.session.completed') {
      const eventObject = stripeEvent.data.object;

      // return if class session signup
      if (eventObject.metadata.className) {
        return {
          statusCode: 200,
          body: JSON.stringify({
            received: true,
            message: 'Class signup webhook; no need to do anything',
          }),
        };
      }

      const metadata = stripeEvent.data.object.metadata;
      console.log('Metadata: ', metadata);

      const airtableEndpoint = `https://api.airtable.com/v0/${process.env.AIRTABLE_HEADSHOT_BASE}/${metadata['Record ID']}`;

      // const event = body.data.object;

      // Update the Airtable record using the fetch API
      const airtableUpdateResponse = await fetch(airtableEndpoint, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                'Client Name': eventObject.customer_details.name,
                'Client Email': eventObject.customer_details.email,
                'Client Phone Number': eventObject.customer_details.phone,
                'Booking Status': 'Booked',
              },
            },
          ],
        }),
      });

      // Get the response from Airtable
      const airtableUpdateData = await airtableUpdateResponse.json();
      console.log('Airtable Update Response: ', airtableUpdateData);

      console.log('Webhook successful!');

      return {
        statusCode: 200,
        body: JSON.stringify({ received: true, message: airtableUpdateData }),
      };
    }

    return { statusCode: 200, body: 'no purpose' };
  } catch (err) {
    console.log(`Stripe webhook failed with ${err}`);

    return {
      statusCode: 400,
      body: `Webhook Error: ${err}`,
    };
  }
};
