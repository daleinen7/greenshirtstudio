const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST_KEY);

const API_ENDPOINT = `${process.env.BACKEND_URL}/wp-json/wp/v2/class`;

exports.handler = async ({ body, headers }) => {
  try {
    // check the webhook to make sure it’s valid
    const stripeEvent = stripe.webhooks.constructEvent(
      body,
      headers["stripe-signature"],
      // process.env.STRIPE_WEBHOOK_SECRET
      process.env.STRIPE_WEBHOOK_TEST_SECRET
    );

    // only do stuff if this is a successful Stripe Checkout purchase
    if (stripeEvent.type === "checkout.session.completed") {
      const eventObject = stripeEvent.data.object;

      const metadata = stripeEvent.data.object.metadata;
      console.log("Metadata: ", metadata);

      // console.log("BODY: ", body);
      // console.log("HEADERS: ", headers);

      // if purchase is a subscription
      if (eventObject.mode === "subscription") {
        const date = new Date();
        const oneMonthOut = new Date(date.setMonth(date.getMonth() + 1));

        const subscription = await stripe.subscriptions.retrieve(
          eventObject.subscription
        );

        console.log("This should cancel.");

        await stripe.subscriptions.update(eventObject.subscription, {
          cancel_at: oneMonthOut,
        });
      }

      let spotsLeft;

      // get current count of seats
      const response = await fetch(`${API_ENDPOINT}/${metadata.databaseId}`)
        .then((res) => res.json())
        .then((data) => {
          spotsLeft = data?.acf?.spots_left;
        });

      console.log("Spots left after initial call: ", spotsLeft);

      const headers = {
        "Content-Type": "application/json",
        "User-Agent": "Netlify Function",
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
        Authorization: process.env.WP_AUTH,
      };
      // `Basic ${Buffer.from(
      //   process.env.WP_USER + ":" + process.env.WP_PW,
      //   "utf-8"
      // ).toString("base64")}`,

      // "Basic " +
      // Buffer.from(process.env.WP_USER + ":" + process.env.WP_PW).toString(
      //   "base64"
      // ),

      console.log(
        "Here's what's being sent: ",
        JSON.stringify({
          acf: {
            spots_left: spotsLeft - 1,
          },
        })
      );

      const update = await fetch(`${API_ENDPOINT}/${metadata.databaseId}`, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify({
          acf: {
            spots_left: spotsLeft - 1,
          },
        }),
      });

      console.log("SPOTS LEFT UPDATE: ", update);

      console.log("Webhook successful!");

      return {
        statusCode: 200,
        body: JSON.stringify({ received: true, message: update }),
      };
    }

    return { statusCode: 200, body: "no purpose" };
  } catch (err) {
    console.log(`Stripe webhook failed with ${err}`);

    return {
      statusCode: 400,
      body: `Webhook Error: ${err}`,
    };
  }
};
