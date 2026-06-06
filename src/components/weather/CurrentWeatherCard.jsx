function CurrentWeatherCard({ data }) {
  if (!data) return null;

  const location = data.location;
  const current = data.current;

  return (
    <div className="bg-linear-to-br from-slate-900 to-slate-800 text-white p-6 w-full">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-slate-400 text-sm font-medium uppercase tracking-widest mb-1">
            Current Weather
          </p>
          <h2 className="text-2xl font-bold text-white">
            {location?.timezone?.replace("_", " ") || "Unknown location"}
          </h2>
          <p className="text-slate-400 text-sm mt-1">{location?.country ?? ""}</p>
        </div>

        {current?.icon && (
          <img src={current.icon} alt="weather icon" className="w-16 h-16" />
        )}
      </div>

      <div className="mt-6 flex items-end gap-4">
        <p className="text-7xl font-bold tracking-tight">
          {current?.temperature ?? "--"}
          <span className="text-4xl text-slate-300">°C</span>
        </p>
      </div>

      <p className="mt-3 text-slate-300 text-base capitalize">
        {current?.condition_text ||
          current?.description ||
          `Condition code: ${current?.condition_code}`}
      </p>

      <div className="mt-5 flex gap-6 border-t border-slate-700 pt-4">
        <div>
          <p className="text-xs text-slate-500 uppercase tracking-wide">Wind</p>
          <p className="text-sm font-semibold text-slate-200 mt-0.5">
            {current?.wind_speed ?? "--"} km/h
          </p>
        </div>
        <div>
          <p className="text-xs text-slate-500 uppercase tracking-wide">Direction</p>
          <p className="text-sm font-semibold text-slate-200 mt-0.5">
            {current?.wind_direction ?? "--"}°
          </p>
        </div>
        <div>
          <p className="text-xs text-slate-500 uppercase tracking-wide">Condition</p>
          <p className="text-sm font-semibold text-slate-200 mt-0.5">
            {current?.condition_code ?? "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeatherCard;