exports.handler = async (event) => {
  console.log("Serverside baby!");

  // const session = await stripe.checkout.sessions.create({
  //   payment_method_types: ['card'],
  //   billing_address_collection: 'auto',
  //   shipping_address_collection: {
  //     allowed_countries: ['US', 'CA', 'IN'],
  //   },
  //   success_url: `${process.env.URL}/success`,
  //   cancel_url: process.env.URL,
  //   line_items: lineItems,
  // });

  // return {
  //   statusCode: 200,
  //   body: JSON.stringify({
  //     sessionId: session.id,
  //     publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  //   }),
  // };

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: " la la la",
    }),
  };
};
