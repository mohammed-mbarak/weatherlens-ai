import CurrentWeatherCard from "../weather/CurrentWeatherCard";
import WeatherMetrics from "../weather/WeatherMetrics";
import HourlyForecast from "../weather/HourlyForecast";
import DailyForecast from "../weather/DailyForecast";
import WeatherSearch from "../weather/WeatherSearch";
import Loader from "../common/Loader";

function WeatherDisplay({
  current,
  coords,
  loading,
  searching,
  searchError,
  onSearch,
  onClear,
}) {
  return (
    <div className="w-full">
      <WeatherSearch
        onSearch={onSearch}
        onClear={onClear}
        hasData={!!current}
      />

      {searchError && (
        <p className="text-sm text-red-400 bg-slate-800 px-4 py-2">
          {searchError}
        </p>
      )}

      {/* Empty state */}
      {!coords && !searching && !loading && (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center text-slate-400 bg-white w-full">
          <span className="text-6xl mb-4">🌍</span>
          <p className="text-lg font-medium text-slate-600">
            Search for a city to see its weather
          </p>
          <p className="text-sm mt-1">Enter any city name above to get started</p>
        </div>
      )}

      {/* Loader — shows immediately on search click */}
      {(searching || loading) && (
        <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white w-full">
          <Loader />
          <p className="text-sm text-slate-400 mt-3">Fetching weather data...</p>
        </div>
      )}

      {/* Weather data */}
      {!searching && !loading && current && (
        <>
          <CurrentWeatherCard data={current} />
          <WeatherMetrics data={current} />
          <HourlyForecast data={current} />
          <DailyForecast data={current} />
        </>
      )}
    </div>
  );
}

export default WeatherDisplay;