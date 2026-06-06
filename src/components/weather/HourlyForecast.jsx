function HourlyForecast({ data }) {
  if (!data?.hourly) return null;

  return (
    <div className="w-full bg-white">
      <div className="px-4 py-3 border-b border-slate-100">
        <h2 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
          Hourly Forecast
        </h2>
      </div>

      <div className="flex overflow-x-auto">
        {data.hourly.slice(0, 12).map((h, i) => (
          <div
            key={i}
            className={`shrink-0 w-20 py-4 flex flex-col items-center text-center ${
              i !== 0 ? "border-l border-slate-100" : ""
            }`}
          >
            <p className="text-xs text-slate-400 font-medium">
              {h.time?.split("T")[1] ?? "--"}
            </p>

            {h.icon && (
              <img src={h.icon} alt="icon" className="w-8 h-8 my-2" />
            )}

            <p className="font-bold text-slate-800 text-sm">
              {h.temperature ?? "--"}°
            </p>

            <p className="text-xs text-slate-400 mt-0.5">
              {h.wind_speed ?? "--"} km/h
            </p>

            {h.precipitation_probability != null && (
              <p className="text-xs text-sky-500 font-medium mt-0.5">
                {h.precipitation_probability}%
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HourlyForecast;