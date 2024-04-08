// netlify/functions/getAirtableData.js

exports.handler = async (event, context) => {
  const eventBody = JSON.parse(event.body);

  console.log('Event: ', eventBody);

  try {
    const fetch = (await import('node-fetch')).default;
    const response = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_HEADSHOT_BASE}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_HEADSHOT_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data from Airtable');
    }

    const data = await response.json();

    const sessionInfo = data.records.filter((record) => {
      return record.id === eventBody.id;
    });

    console.log('Session Info: ', sessionInfo);

    return {
      statusCode: 200,
      body: JSON.stringify(
        sessionInfo.length ? sessionInfo : { error: 'No data found' }
      ),
    };
  } catch (error) {
    console.error('Error fetching data from Airtable:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch data from Airtable' }),
    };
  }
};
