function UsageCard({ used, limit }) {
  const remaining = limit - used;
  const percent = Math.min((used / limit) * 100, 100);

  const status =
    percent >= 90 ? "Critical" : percent >= 70 ? "Moderate" : "Healthy";

  const statusColor =
    percent >= 90
      ? "text-red-400 bg-red-900"
      : percent >= 70
      ? "text-amber-400 bg-amber-900"
      : "text-sky-400 bg-sky-900";

  return (
    <div className="w-full bg-slate-800 p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-slate-400 uppercase tracking-widest font-medium mb-1">
            API Usage
          </p>
          <h2 className="text-2xl font-bold text-white">{used.toLocaleString()}</h2>
          <p className="text-slate-400 text-sm mt-1">
            of {limit.toLocaleString()} requests used
          </p>
        </div>

        <span
          className={`text-xs font-semibold px-3 py-1 ${statusColor}`}
        >
          {status}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6 pt-5 border-t border-slate-700">
        <div>
          <p className="text-xs text-slate-500 uppercase tracking-wide">Remaining</p>
          <p className="text-lg font-bold text-sky-400 mt-1">
            {remaining.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-xs text-slate-500 uppercase tracking-wide">Consumed</p>
          <p className="text-lg font-bold text-slate-200 mt-1">
            {used.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UsageCard;