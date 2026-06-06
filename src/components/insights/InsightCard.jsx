function InsightCard({ insight }) {
  if (!insight) return null;

  return (
    <div className="w-full bg-slate-800 px-6 py-5">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sky-400 text-lg">🤖</span>
        <p className="text-xs text-slate-400 uppercase tracking-widest font-medium">
          AI Insight
        </p>
      </div>
      <p className="text-slate-200 text-sm leading-relaxed">{insight}</p>
    </div>
  );
}

export default InsightCard;