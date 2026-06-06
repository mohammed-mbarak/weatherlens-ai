import { useState } from "react";
import useWeatherStore from "../store/weatherStore";
import MainLayout from "../components/layouts/MainLayout";
import WeatherDisplay from "../components/home/WeatherDisplay";

import { useCurrentWeather } from "../hooks/useCurrentWeather";
import { getCoordinates } from "../services/geoService";

function HomePage() {
  const current = useWeatherStore((s) => s.current);
  const setCurrent = useWeatherStore((s) => s.setCurrent);
  const setCoords = useWeatherStore((s) => s.setCoords); // ← pull from store

  const [localCoords, setLocalCoords] = useState(null);
  const [searching, setSearching] = useState(false);
  const [searchError, setSearchError] = useState(null);

  const { loading } = useCurrentWeather(localCoords?.lat, localCoords?.lon);

  const handleSearch = async (city) => {
    if (!city.trim()) return;

    setSearchError(null);
    setCurrent(null);
    setSearching(true);

    try {
      const res = await getCoordinates(city);
      const location = res.data?.location;
      const lat = location?.lat;
      const lon = location?.lon;

      if (!lat || !lon) {
        setSearchError(`Could not find "${city}". Try another city name.`);
        return;
      }

      setLocalCoords({ lat, lon });
      setCoords({ lat, lon }); // ← persist to store for other pages
    } catch (err) {
      console.error("❌ City search failed:", err);
      setSearchError("City not found. Please try another search.");
    } finally {
      setSearching(false);
    }
  };

  const handleClear = () => {
    setLocalCoords(null);
    setCoords(null); // ← clear from store too
    setCurrent(null);
    setSearchError(null);
    setSearching(false);
  };

  return (
    <MainLayout>
      <WeatherDisplay
        current={current}
        coords={localCoords}
        loading={loading}
        searching={searching}
        searchError={searchError}
        onSearch={handleSearch}
        onClear={handleClear}
      />
    </MainLayout>
  );
}

export default HomePage;