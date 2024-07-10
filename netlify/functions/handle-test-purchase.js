const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST_KEY);
const fetch = require('node-fetch'); // Ensure you have node-fetch installed
const API_ENDPOINT = `${process.env.BACKEND_URL}/wp-json/wp/v2/class`;

exports.handler = async ({ body, headers }) => {
  console.log('BODY: ', body);

  try {
    const stripeEvent = stripe.webhooks.constructEvent(
      body,
      headers['stripe-signature'],
      process.env.STRIPE_WEBHOOK_TEST_SECRET
    );

    if (stripeEvent.type === 'checkout.session.completed') {
      const eventObject = stripeEvent.data.object;
      const metadata = stripeEvent.data.object.metadata;

      // Immediately respond to Stripe
      let responseBody = { received: true };

      if (eventObject.mode === 'subscription') {
        const date = new Date();
        const oneMonthOut = new Date(date.setMonth(date.getMonth() + 1));

        const subscription = await stripe.subscriptions.retrieve(
          eventObject.subscription
        );

        await stripe.subscriptions.update(eventObject.subscription, {
          cancel_at: oneMonthOut,
        });

        responseBody.subscriptionUpdated = true;
      }

      // Perform the WordPress update asynchronously
      (async () => {
        try {
          let spotsLeft;
          if (metadata.databaseId === undefined) {
            metadata.databaseId = metadata.dbid;
          }

          const response = await fetch(
            `${API_ENDPOINT}/${metadata.databaseId}`
          );
          const data = await response.json();
          spotsLeft = data?.acf?.spots_left;

          const auth = Buffer.from(
            process.env.WP_USER + ':' + process.env.WP_PW
          ).toString('base64');

          spotsLeft = Number(spotsLeft);
          let newSpotsLeft = spotsLeft - 1;

          const url = `${API_ENDPOINT}/${metadata.databaseId}`;

          const update = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Basic ${auth}`,
            },
            body: JSON.stringify({
              acf: {
                spots_left: newSpotsLeft,
              },
            }),
          });

          const updateResponse = await update.json();
          console.log('Update Response: ', updateResponse);
        } catch (err) {
          console.error('Error updating WordPress: ', err);
        }
      })();

      return {
        statusCode: 200,
        body: JSON.stringify(responseBody),
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
