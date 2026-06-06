import useWeatherStore from "../store/weatherStore";
import MainLayout from "../components/layouts/MainLayout";
import ForecastCard from "../components/weather/ForecastCard";
import { useForecast } from "../hooks/useForecast";
import Loader from "../components/common/Loader";

function ForecastPage() {
  const forecast = useWeatherStore((s) => s.forecast);
  const coords = useWeatherStore((s) => s.coords); // ← from store, not hardcoded

  const { loading } = useForecast(coords?.lat, coords?.lon);

  return (
    <MainLayout>
      <div className="w-full">

        {/* Header */}
        <div className="bg-slate-900 px-6 py-5">
          <p className="text-xs text-slate-400 uppercase tracking-widest font-medium mb-1">
            Weather
          </p>
          <h1 className="text-2xl font-bold text-white">7-Day Forecast</h1>
          <p className="text-slate-400 text-sm mt-1">
            {coords
              ? "Showing forecast for searched city"
              : "Search for a city on the home page first"}
          </p>
        </div>

        {/* No city searched yet */}
        {!coords && !loading && (
          <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white text-center text-slate-400">
            <span className="text-6xl mb-4">📅</span>
            <p className="text-lg font-medium text-slate-600">No city selected</p>
            <p className="text-sm mt-1">
              Go to the home page and search for a city first
            </p>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white">
            <Loader />
            <p className="text-sm text-slate-400 mt-3">Loading forecast...</p>
          </div>
        )}

        {/* Forecast grid */}
        {!loading && coords && forecast?.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y divide-slate-100">
            {forecast.map((item, i) => (
              <ForecastCard key={i} item={item} />
            ))}
          </div>
        )}

      </div>
    </MainLayout>
  );
}

export default ForecastPage;