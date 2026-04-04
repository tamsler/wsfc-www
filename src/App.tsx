import { Navigate, Route, Routes } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import AboutPage from "./pages/AboutPage";
import CoachesPage from "./pages/CoachesPage";
import CodeOfConductPage from "./pages/CodeOfConductPage";
import FeesPage from "./pages/FeesPage";
import FieldsPage from "./pages/FieldsPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import TryoutsPage from "./pages/TryoutsPage";

export default function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/tryouts" element={<TryoutsPage />} />
        <Route path="/fees" element={<FeesPage />} />
        <Route path="/coaches" element={<CoachesPage />} />
        <Route path="/code-of-conduct" element={<CodeOfConductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/fields" element={<FieldsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </SiteLayout>
  );
}
