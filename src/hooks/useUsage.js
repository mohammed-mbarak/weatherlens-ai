import { useEffect, useState } from "react";
import { getUsage } from "../services/usageService";
import useWeatherStore from "../store/weatherStore";

export const useUsage = () => {
  const [loading, setLoading] = useState(false);
  const setUsage = useWeatherStore((s) => s.setUsage);

  useEffect(() => {
    const load = async () => {
      setLoading(true);

      try {
        const res = await getUsage();

        setUsage(res.data);
      } catch (err) {
        console.error("❌ Usage fetch failed:", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [setUsage]);

  return { loading };
};