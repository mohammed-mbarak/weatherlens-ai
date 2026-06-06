import useWeatherStore from "../store/weatherStore";
import MainLayout from "../components/layouts/MainLayout";
import UsageCard from "../components/usage/UsageCard";
import QuotaProgress from "../components/usage/QuotaProgress";
import { useUsage } from "../hooks/useUsage";
import Loader from "../components/common/Loader";

function UsagePage() {
  const usage = useWeatherStore((s) => s.usage);
  const { loading } = useUsage();

  if (loading || !usage) {
    return (
      <MainLayout>
        <Loader />
      </MainLayout>
    );
  }

  const total =
    usage?.limits?.requests ??
    usage?.limits?.total ??
    1;

  const remaining =
    usage?.remaining?.requests ??
    0;

  const used = total - remaining;

  return (
    <MainLayout>
      <div className="space-y-4">
        <UsageCard used={used} limit={total} />

        <QuotaProgress used={used} limit={total} />

        <div className="text-xs text-gray-500">
          Plan: {usage?.plan ?? "unknown"}
        </div>
      </div>
    </MainLayout>
  );
}

export default UsagePage;