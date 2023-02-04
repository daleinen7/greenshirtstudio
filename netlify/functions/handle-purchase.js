const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const API_ENDPOINT = `${process.env.BACKEND_URL}/wp-json/wp/v2/class`;

exports.handler = async ({ body, headers }) => {
  try {
    // here we're going to have a fall back if the webhook fails

    // check the webhook to make sure it’s valid
    let stripeEvent = stripe.webhooks.constructEvent(
      body,
      headers["stripe-signature"],
      process.env.STRIPE_WEBHOOK_SECRET
    );

    // only do stuff if this is a successful Stripe Checkout purchase
    if (stripeEvent.type === "checkout.session.completed") {
      const eventObject = stripeEvent.data.object;

      const metadata = stripeEvent.data.object.metadata;
      console.log("Metadata: ", metadata);

      console.log("HEADERS: ", headers);
      console.log("BODY: ", body);
      console.log("EVENT: ", stripeEvent);

      // if purchase is a subscription
      if (eventObject.mode === "subscription") {
        console.log("Event is a subscription");
        const date = new Date();
        const oneMonthOut = new Date(date.setMonth(date.getMonth() + 1));

        const subscription = await stripe.subscriptions.retrieve(
          eventObject.subscription
        );

        console.log("This should cancel.");

        await stripe.subscriptions.update(eventObject.subscription, {
          cancel_at: oneMonthOut,
        });
      } else {
        console.log("Event is not a subscription");
      }

      let spotsLeft;

      // get current count of seats
      const response = await fetch(`${API_ENDPOINT}/${metadata.databaseId}`)
        .then((res) => res.json())
        .then((data) => {
          spotsLeft = data?.acf?.spots_left;
        });

      console.log("SPOTS LEFT: ", spotsLeft);

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

      if (spotsLeft) {
        const update = await fetch(`${API_ENDPOINT}/${metadata.databaseId}`, {
          method: "PUT",
          headers: headers,
          body: JSON.stringify({
            acf: {
              spots_left: spotsLeft - 1,
            },
          }),
        });

        console.log("RESPONSE FROM WP FOR SPOTS LEFT UPDATE: ", update);
      }

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
