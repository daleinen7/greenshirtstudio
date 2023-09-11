const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST_KEY);

const API_ENDPOINT = `${process.env.BACKEND_URL}/wp-json/wp/v2/class`;

exports.handler = async ({ body, headers }) => {
  console.log('BODY: ', body);
  // console.log("HEADERS: ", headers);
  try {
    // check the webhook to make sure it’s valid
    const stripeEvent = stripe.webhooks.constructEvent(
      body,
      headers['stripe-signature'],
      process.env.STRIPE_WEBHOOK_TEST_SECRET
    );

    // only do stuff if this is a successful Stripe Checkout purchase
    if (stripeEvent.type === 'checkout.session.completed') {
      const eventObject = stripeEvent.data.object;

      const metadata = stripeEvent.data.object.metadata;
      // console.log('Metadata: ', metadata);

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
      }

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

      // console.log(
      //   "Here's what's being sent: ",
      //   JSON.stringify({
      //     acf: {
      //       spots_left: newSpotsLeft,
      //     },
      //   })
      // );

      const url = `${API_ENDPOINT}/${metadata.databaseId}`;

      // console.log('URL: ', url);

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

      // Get Response body
      const updateResponse = await update.json();

      //console.log("SPOTS LEFT UPDATE: ", update);
      // console.log('Update Response: ', updateResponse);

      const airtableEndpoint = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}/`;

      // const event = body.data.object;

      console.log('Airtable Endpoint:', airtableEndpoint);

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
                // 'Stripe Transaction ID': '12345678987654321',
                // 'First Name': 'test',
                // 'Last Name': 'name',
                'Email Address': 'daleinen@gmail.com',
                'Phone Number': '123-432-1234',
                'Payment Amount': '$34.00',
                Session: 'August',
                'Class Title': 'Meisner 1',
                'Class Time': '4:00 pm',
                'Day of Week': 'Thursday',
                Instructor: 'Jack Schultz',
                'Class Dates': 'list?',
                Location: 'Green Shirt Sudio X',
                'Stripe Transaction ID': eventObject.id,
                'First Name': eventObject.customer_details.name,
                'Last Name': eventObject.customer_details.name,
                // 'Email Address': event.customer_details.email,
                // 'Phone Number': event.customer_details.phone,
                // 'Payment Amount': event.amount_total,
                // Session: event.metadata.session,
                // 'Class Title': event.metadata.className,
                // 'Class Time': event.metadata.time,
                // 'Day of Week': event.metadata.dayOfWeek,
                // Instructor: event.metadata.instructor,
                // // 'Class Dates': event.metadata.classDates,
                // Location: event.metadata.location,
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
        body: JSON.stringify({ received: true, message: update }),
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
