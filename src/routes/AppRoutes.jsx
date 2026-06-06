import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ForecastPage from "../pages/ForecastPage";
import InsightsPage from "../pages/InsightsPage";
import UsagePage from "../pages/UsagePage";
import NotFoundPage from "../pages/NotFoundPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/forecast" element={<ForecastPage />} />
      <Route path="/insights" element={<InsightsPage />} />
      <Route path="/usage" element={<UsagePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;