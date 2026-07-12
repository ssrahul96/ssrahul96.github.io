import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResumeViewer from "./components/ResumeViewer";
import Index from "./pages/Index";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/resume" element={<ResumeViewer />} />
      <Route path="*" element={<Index />} />
    </Routes>
  </BrowserRouter>
);

export default App;
