const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async ({ body, headers }) => {
  console.log("YO! THAT WEB HOOK BE CALLED BRO!");
  try {
    console.log("AIGHT WE TRY THIS SHIT RIGHT HERE.");
    // check the webhook to make sure it’s valid
    const stripeEvent = stripe.webhooks.constructEvent(
      body,
      headers["stripe-signature"],
      process.env.STRIPE_WEBHOOK_SECRET
    );

    const newDate = new Date(date.setMonth(date.getMonth() + 1));

    // only do stuff if this is a successful Stripe Checkout purchase
    if (stripeEvent.type === "checkout.session.completed") {
      const eventObject = stripeEvent.data.object;
      console.log("And this is the real candy: ", eventObject);

      const subscription = await stripe.subscriptions.retrieve(
        eventObject.subscription
      );
      stripe.subscriptions.update(eventObject.subscription, {
        cancel_at: newDate,
      });
    }

    console.log(
      "YO YO YO YOU KNOW THAT CHECKOUT SESSION WAS COMPLETED! LOOK AT THIS SHIT!"
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ received: true }),
    };
  } catch (err) {
    console.log("You Foul Melvin");
    console.log(`Stripe webhook failed with ${err}`);

    return {
      statusCode: 400,
      body: `Webhook Error: ${err.message}`,
    };
  }
};
