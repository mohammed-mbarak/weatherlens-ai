function QuotaProgress({ used = 0, limit = 1 }) {
  const percent = Math.min((used / limit) * 100, 100);

  const barColor =
    percent >= 90
      ? "bg-red-500"
      : percent >= 70
      ? "bg-amber-400"
      : "bg-sky-500";

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs text-slate-400 uppercase tracking-wide font-medium">
          Usage
        </span>
        <span
          className={`text-xs font-bold ${
            percent >= 90
              ? "text-red-400"
              : percent >= 70
              ? "text-amber-400"
              : "text-sky-400"
          }`}
        >
          {Math.round(percent)}%
        </span>
      </div>

      <div className="w-full bg-slate-700 h-2">
        <div
          className={`${barColor} h-2 transition-all duration-700`}
          style={{ width: `${percent}%` }}
        />
      </div>

      <div className="flex justify-between mt-2">
        <span className="text-xs text-slate-500">{used} used</span>
        <span className="text-xs text-slate-500">{limit} total</span>
      </div>
    </div>
  );
}

export default QuotaProgress;