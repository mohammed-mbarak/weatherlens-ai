import { useEffect, useState } from "react";
import { fetchInsights } from "../services/insightsService";
import useWeatherStore from "../store/weatherStore";

export const useInsights = (lat, lon) => {
  const [loading, setLoading] = useState(false);
  const setInsights = useWeatherStore((s) => s.setInsights);

  useEffect(() => {
    if (lat == null || lon == null) return;

    const load = async () => {
      setLoading(true);

      try {
        const res = await fetchInsights(lat, lon);
        setInsights(res.data);
      } catch (err) {
        console.error("❌ Insights fetch failed:", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [lat, lon, setInsights]);

  return { loading };
};