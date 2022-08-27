const fetch = require("node-fetch");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async ({ body, headers }) => {
  // console.log("BODY: ", body);
  // console.log("HEADERS: ", headers);

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

      if (body.data.object.data.subscription) {
        const date = new Date();
        const oneMonthOut = new Date(date.setMonth(date.getMonth() + 1));
      }

      const subscription = await stripe.subscriptions.retrieve(
        eventObject.subscription
      );

      await stripe.subscriptions.update(eventObject.subscription, {
        cancel_at: oneMonthOut,
      });
    }

    // POST
    fetch({
      path: "/wp/v2/https://greenshirtstudio.com/wp-json/wp/v2/class/281075}",
      method: "GET",
      data: {
        acf: {
          author: "Abraham (Abe) Simpson",
        },
      },
    }).then((res) => {
      console.log("This fuckin guy:", res);
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ received: true }),
    };
  } catch (err) {
    console.log(`Stripe webhook failed with ${err}`);

    return {
      statusCode: 400,
      body: `Webhook Error: ${err.message}`,
    };
  }
};
