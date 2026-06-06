import useWeatherStore from "../store/weatherStore";
import MainLayout from "../components/layouts/MainLayout";
import InsightCard from "../components/insights/InsightCard";
import RecommendationCard from "../components/insights/RecommendationCard";
import { useInsights } from "../hooks/useInsights";
import Loader from "../components/common/Loader";

function InsightsPage() {
  const insights = useWeatherStore((s) => s.insights);
  const coords = useWeatherStore((s) => s.coords); // ← from store

  const { loading } = useInsights(coords?.lat, coords?.lon);

  return (
    <MainLayout>
      <div className="w-full">

        {/* Header */}
        <div className="bg-slate-900 px-6 py-5">
          <p className="text-xs text-slate-400 uppercase tracking-widest font-medium mb-1">
            AI Powered
          </p>
          <h1 className="text-2xl font-bold text-white">Weather Insights</h1>
          <p className="text-slate-400 text-sm mt-1">
            {coords
              ? "AI-generated analysis for your searched city"
              : "Search for a city on the home page first"}
          </p>
        </div>

        {/* No city searched */}
        {!coords && !loading && (
          <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white text-center text-slate-400">
            <span className="text-6xl mb-4">🤖</span>
            <p className="text-lg font-medium text-slate-600">No city selected</p>
            <p className="text-sm mt-1">
              Go to the home page and search for a city first
            </p>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white">
            <Loader />
            <p className="text-sm text-slate-400 mt-3">
              Generating AI insights...
            </p>
          </div>
        )}

        {/* No insights returned */}
        {!loading && coords && !insights && (
          <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white text-center text-slate-400">
            <span className="text-6xl mb-4">💭</span>
            <p className="text-lg font-medium text-slate-600">No insights available</p>
            <p className="text-sm mt-1">
              Try searching for a different city
            </p>
          </div>
        )}

        {/* Content */}
        {!loading && insights && (
          <>
            <InsightCard insight={insights?.summary} />

            {insights?.recommendations?.length > 0 && (
              <div className="w-full">
                <div className="bg-slate-900 px-6 py-3">
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-medium">
                    Recommendations
                  </p>
                </div>

                {insights.recommendations.map((r, i) => (
                  <RecommendationCard key={i} recommendation={r} index={i} />
                ))}
              </div>
            )}
          </>
        )}

      </div>
    </MainLayout>
  );
}

export default InsightsPage;