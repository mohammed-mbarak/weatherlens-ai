import { useEffect, useState } from "react";
import { getCurrentWeather } from "../services/weatherService";
import useWeatherStore from "../store/weatherStore";

export const useCurrentWeather = (lat, lon) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const setCurrent = useWeatherStore((s) => s.setCurrent);

  useEffect(() => {
    // ← Skip entirely if coords are null (no city searched yet)
    if (lat == null || lon == null) return;

    const loadWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await getCurrentWeather(lat, lon);
        setCurrent(res.data);
      } catch (err) {
        console.error("❌ Weather fetch failed:", err);
        setError("Failed to load weather data.");
      } finally {
        setLoading(false);
      }
    };

    loadWeather();
  }, [lat, lon, setCurrent]);

  return { loading, error };
};