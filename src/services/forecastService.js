import api from "./axios";

export const getForecast = (lat, lon) => {
  return api.get("/forecast", {
    params: { lat, lon },
  });
};