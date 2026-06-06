function DailyForecast({ data }) {
  if (!data?.daily) return null;

  return (
    <div className="w-full bg-white">
      <div className="px-4 py-3 border-b border-slate-100">
        <h2 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
          7-Day Forecast
        </h2>
      </div>

      <div className="divide-y divide-slate-100">
        {data.daily.map((d, i) => (
          <div
            key={i}
            className="flex justify-between items-center px-4 py-3"
          >
            <div className="flex items-center gap-3">
              {d.icon && (
                <img src={d.icon} alt="icon" className="w-8 h-8" />
              )}
              <p className="text-sm font-medium text-slate-700">
                {d.date ?? "--"}
              </p>
            </div>

            <div className="text-right">
              <p className="font-bold text-slate-800 text-sm">
                {d.temp_max ?? "--"}° / {d.temp_min ?? "--"}°
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                {d.condition ?? d.condition_code ?? "N/A"}
              </p>
              {d.precipitation_sum != null && (
                <p className="text-xs text-sky-500 font-medium">
                  {d.precipitation_sum} mm
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailyForecast;