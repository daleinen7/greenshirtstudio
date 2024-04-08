// netlify/functions/getAirtableData.js

exports.handler = async (event, context) => {
  console.log('Event: ', event);
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

    const sessionInfo = data.records.map((record) => {
      return {
        id: record.id,
        name: record.fields['Photographer Name'],
        description: record.fields['Description'],
        month: record.fields['Month'],
        dayOfMonth: record.fields['Day of Month'],
        dayOfWeek: record.fields['Day of week'],
        time: record.fields['Time of shoot'],
        price: record.fields['Price'],
        image: record.fields['Headshot Page Card Image'][0]['url'],
      };
    });

    return {
      statusCode: 200,
      body: JSON.stringify(sessionInfo),
    };
  } catch (error) {
    console.error('Error fetching data from Airtable:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch data from Airtable' }),
    };
  }
};
