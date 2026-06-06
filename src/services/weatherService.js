import api from "./axios";

export const getCurrentWeather = (lat, lon) =>
  api.get("/current", {
    params: {
      lat,
      lon,
      ai: false,
    },
  });

export const getForecast = (lat, lon) =>
  api.get("/forecast", {
    params: {
      lat,
      lon,
      days: 7,
      ai: false,
    },
  });

export const getInsights = (lat, lon) =>
  api.get("/insights", {
    params: {
      lat,
      lon,
      ai: true,
    },
  });

export const getUsage = () =>
  api.get("/usage");