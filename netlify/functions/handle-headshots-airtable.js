exports.handler = async ({ body, headers }) => {
  try {
    const parsedBody = JSON.parse(body);
    const airtableEndpoint = `https://api.airtable.com/v0/${process.env.AIRTABLE_HEADSHOT_BASE}`;

    const response = await fetch(airtableEndpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_HEADSHOT_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          Date: new Date().toISOString(),
          Name: parsedBody.name,
          Pronouns: parsedBody.pronouns,
          Email: parsedBody.email,
          'Phone Number': parsedBody.phone,
          'Customer Type':
            parsedBody.otherCustomerType ?? parsedBody.customerType,
          Availability: parsedBody.availability,
          Schedule: parsedBody.schedule,
          'Additional Comments': parsedBody.additionalComment,
        },
      }),
    });

    const data = await response.json();
    if (data.error) throw data.error;

    return {
      statusCode: 200,
      body: JSON.stringify({ received: true, message: data }),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: err,
      }),
    };
  }
};
