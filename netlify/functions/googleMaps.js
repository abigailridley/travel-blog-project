const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "API key is missing in environment variables.",
      }),
    };
  }

  const url = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;

  try {
    // Fetch data from Google Maps API
    const response = await fetch(url);
    const data = await response.json();

    // Return the data
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error fetching Google Maps data.",
        error: error.message,
      }),
    };
  }
};
