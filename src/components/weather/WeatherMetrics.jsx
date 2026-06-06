function WeatherMetrics({ data }) {
  if (!data) return null;

  const current = data.current;

  const metrics = [
    { label: "Wind Speed", value: `${current?.wind_speed ?? "--"} km/h`, icon: "💨" },
    { label: "Direction", value: `${current?.wind_direction ?? "--"}°`, icon: "🧭" },
    { label: "Condition", value: current?.condition_code ?? "N/A", icon: "🌤" },
  ];

  return (
    <div className="grid grid-cols-3 w-full">
      {metrics.map(({ label, value, icon }, i) => (
        <div
          key={label}
          className={`bg-slate-800 p-4 flex flex-col items-center text-center ${
            i !== metrics.length - 1 ? "border-r border-slate-700" : ""
          }`}
        >
          <span className="text-2xl mb-2">{icon}</span>
          <p className="text-xs text-slate-400 uppercase tracking-wide font-medium">
            {label}
          </p>
          <p className="text-slate-200 font-semibold mt-1 text-sm">{value}</p>
        </div>
      ))}
    </div>
  );
}

export default WeatherMetrics;