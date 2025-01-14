const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const API_ENDPOINT = `${process.env.BACKEND_URL}/wp-json/wp/v2/class`;

// Separate function to handle the WordPress update asynchronously
const updateWordPress = async (metadata) => {
  try {
    let spotsLeft;

    // Sometimes databaseid is undefined, so we'll set it to dbid if that's the case
    if (metadata.databaseId === undefined) {
      metadata.databaseId = metadata.dbid;
    }

    // get current count of seats
    const response = await fetch(`${API_ENDPOINT}/${metadata.databaseId}`)
      .then((res) => res.json())
      .then((data) => {
        spotsLeft = data?.acf?.spots_left;
      });

    // console.log('Spots left after initial call: ', spotsLeft);

    const auth = Buffer.from(
      process.env.WP_USER + ':' + process.env.WP_PW
    ).toString('base64');

    // cast Spots Left to a number
    spotsLeft = Number(spotsLeft);

    let newSpotsLeft = spotsLeft - 1;

    console.log(
      "Here's what's being sent: ",
      JSON.stringify({
        acf: {
          spots_left: newSpotsLeft,
        },
      })
    );

    const url = `${API_ENDPOINT}/${metadata.databaseId}`;

    console.log('URL: ', url);

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
    // // Get Response body //
    // const updateResponse = await update.json();

    //console.log("SPOTS LEFT UPDATE: ", update);
    console.log('Webhook successful!');
    console.log('Update Response: ', updateResponse);
  } catch (err) {
    console.error('Error updating WordPress: ', err);
  }
};

exports.handler = async ({ body, headers }) => {
  console.log('BODY: ', body);
  // console.log("HEADERS: ", headers);
  try {
    // check the webhook to make sure it’s valid
    const stripeEvent = stripe.webhooks.constructEvent(
      body,
      headers['stripe-signature'],
      process.env.STRIPE_WEBHOOK_SECRET
    );

    // only do stuff if this is a successful Stripe Checkout purchase
    if (stripeEvent.type === 'checkout.session.completed') {
      const eventObject = stripeEvent.data.object;
      const metadata = stripeEvent.data.object.metadata;
      // console.log('Metadata: ', metadata);

      // Immediately respond to Stripe
      let responseBody = { received: true };

      // if purchase is a subscription
      if (eventObject.mode === 'subscription') {
        const date = new Date();
        const oneMonthOut = new Date(date.setMonth(date.getMonth() + 1));

        const subscription = await stripe.subscriptions.retrieve(
          eventObject.subscription
        );

        console.log('This should cancel.');

        await stripe.subscriptions.update(eventObject.subscription, {
          cancel_at: oneMonthOut,
        });

        responseBody.subscriptionUpdated = true;
      }

      console.log('now update wordpress with metadata: ', metadata);

      // Perform the WordPress update asynchronously
      updateWordPress(metadata);

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
