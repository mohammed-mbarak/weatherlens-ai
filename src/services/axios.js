import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // MUST be https://api.weather-ai.co/v1
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_WEATHER_AI_API_KEY}`,
  },
});

export default api;