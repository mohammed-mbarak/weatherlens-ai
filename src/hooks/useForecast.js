import { useEffect, useState } from "react";
import { getForecast } from "../services/forecastService";
import useWeatherStore from "../store/weatherStore";

export const useForecast = (lat, lon) => {
  const [loading, setLoading] = useState(false);
  const setForecast = useWeatherStore((s) => s.setForecast);

  useEffect(() => {
    if (lat == null || lon == null) return;

    const load = async () => {
      setLoading(true);

      try {
        const res = await getForecast(lat, lon);
        setForecast(res.data.daily);
      } catch (err) {
        console.error("Forecast fetch failed:", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [lat, lon, setForecast]);

  return { loading };
};