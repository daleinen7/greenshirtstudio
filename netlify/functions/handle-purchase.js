const fetch = require("node-fetch");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const API_ENDPOINT = "https://greenshirtstudio.com/wp-json/wp/v2/class";

exports.handler = async ({ body, headers }) => {
  try {
    // check the webhook to make sure it’s valid
    const stripeEvent = stripe.webhooks.constructEvent(
      body,
      headers["stripe-signature"],
      process.env.STRIPE_WEBHOOK_SECRET
    );

    // only do stuff if this is a successful Stripe Checkout purchase
    if (stripeEvent.type === "checkout.session.completed") {
      const eventObject = stripeEvent.data.object;

      const metadata = stripeEvent.data.object.metadata;
      console.log(metadata);

      // console.log("BODY: ", body);
      // console.log("HEADERS: ", headers);

      if (body?.data?.object?.data?.subscription) {
        const date = new Date();
        const oneMonthOut = new Date(date.setMonth(date.getMonth() + 1));

        const subscription = await stripe.subscriptions.retrieve(
          eventObject.subscription
        );

        await stripe.subscriptions.update(eventObject.subscription, {
          cancel_at: oneMonthOut,
        });
      }

      let spotsLeft;

      console.log(
        "WHY DO I DO THIS? ",
        `${API_ENDPOINT}/${metadata.databaseId}`
      );

      // get current count of seats
      const response = await fetch(`${API_ENDPOINT}/${metadata.databaseId}`)
        .then((res) => res.json())
        .then((data) => {
          spotsLeft = data.acf.spots_left;
        });

      const headers = {
        "Accept-Encoding": "gzip, deflate, br",
        Accept: "*/*",
        "User-Agent": "Netlify Function",
        "Content-Type": "application/json",
        Connection: "keep-alive",
        Authorization:
          "Basic " +
          Buffer.from(process.env.WP_USER + ":" + process.env.WP_PW).toString(
            "base64"
          ),
      };

      const update = await fetch(`${API_ENDPOINT}/${metadata.databaseId}`, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify({
          acf: {
            spots_left: spotsLeft - 1,
          },
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => console.log("THIS IS THE PUT: ", data));

      return {
        statusCode: 200,
        body: JSON.stringify({ received: true }),
      };
    }

    return { statusCode: 200, body: "no purpose" };
  } catch (err) {
    console.log(`Stripe webhook failed with ${err}`);

    return {
      statusCode: 400,
      body: `Webhook Error: ${err.message}`,
    };
  }
};
