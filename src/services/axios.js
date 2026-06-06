import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.PROD
    ? "/api"
    : import.meta.env.VITE_API_BASE_URL,
  headers: import.meta.env.PROD
    ? {}
    : {
        Authorization: `Bearer ${import.meta.env.VITE_WEATHER_AI_API_KEY}`,
      },
});

export default api;