import axios from "axios";

// Open-Meteo geocoding: city name → lat/lon (free, no key needed)
// Required because weather-ai.co has no city search endpoint — all endpoints need coordinates
export const getCoordinates = async (city) => {
  const res = await axios.get("https://geocoding-api.open-meteo.com/v1/search", {
    params: {
      name: city,
      count: 1,
      language: "en",
      format: "json",
    },
  });

  const result = res.data?.results?.[0];

  if (!result) throw new Error(`City "${city}" not found`);

  return {
    data: {
      location: {
        lat: result.latitude,
        lon: result.longitude,
        timezone: result.timezone,
        country: result.country_code,
        name: result.name,
      },
    },
  };
};