import { formatDate } from "../../utils/formatDate";

function ForecastCard({ item }) {
  return (
    <div className="bg-white p-4 border-b border-slate-100 w-full">
      <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">
        {formatDate(item.date)}
      </p>

      <p className="text-2xl font-bold text-slate-800">
        {item.temp_max ?? "--"}°C
      </p>

      <div className="mt-2 space-y-1">
        <p className="text-xs text-slate-500">
          Min: {item.temp_min ?? "--"}°C
        </p>
        <p className="text-xs text-sky-500 font-medium">
          Rain: {item.precipitation_sum ?? "0"} mm
        </p>
      </div>
    </div>
  );
}

export default ForecastCard;