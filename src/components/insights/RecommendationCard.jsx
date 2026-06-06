function RecommendationCard({ recommendation, index }) {
  return (
    <div className="w-full bg-white px-6 py-4 border-b border-slate-100 flex gap-4 items-start">
      <div className="shrink-0 w-7 h-7 bg-sky-500 flex items-center justify-center text-white text-xs font-bold">
        {index + 1}
      </div>
      <div>
        <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">
          Recommendation
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">{recommendation}</p>
      </div>
    </div>
  );
}

export default RecommendationCard;