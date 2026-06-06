import axios from "axios";

export const handler = async (event) => {
  console.log("Function hit — path:", event.path);
  console.log("Query params:", event.queryStringParameters);

  const apiPath = event.path
    .replace("/.netlify/functions/weather", "")
    .replace("/api", "");

  const finalPath = apiPath || "/current";

  console.log("Calling weather-ai path:", finalPath);

  const params = { ...event.queryStringParameters };

  try {
    const response = await axios.get(
      `https://api.weather-ai.co/v1${finalPath}`,
      {
        params,
        headers: {
          Authorization: `Bearer ${process.env.VITE_WEATHER_AI_API_KEY}`,
        },
      }
    );

    console.log("Success — status:", response.status);

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(response.data),
    };
  } catch (err) {
    console.log("Error:", err?.response?.status, err?.response?.data);

    return {
      statusCode: err?.response?.status ?? 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        error: err?.response?.data ?? "Proxy error",
        path: finalPath,
        params,
      }),
    };
  }
};