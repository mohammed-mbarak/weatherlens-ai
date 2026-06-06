import api from "./axios";

export const fetchInsights = (lat, lon) => {
  return api.get("/insights", {
    params: { lat, lon },
  });
};