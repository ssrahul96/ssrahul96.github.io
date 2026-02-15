import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import ResumeViewer from "./components/ResumeViewer";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/resume" element={<ResumeViewer />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<Index />} />
    </Routes>
  );
};

export default AppRoutes;
