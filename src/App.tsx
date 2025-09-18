import { Routes, Route } from "react-router-dom";



import Home from "./pages/home";
import NotFoundPage from "./pages/error";
import ProjectDetails from "./components/ProjectDetails";
import { useEffect } from "react";
import { useUser } from "./contexts/UserProvider";



function App() {
  const { activeLanguage } = useUser()
  useEffect(() => {
    if (activeLanguage === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
      document.documentElement.setAttribute("lang", "ar");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.setAttribute("lang", activeLanguage);
    }
  }, [activeLanguage]);
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/project/:projectId" element={<ProjectDetails />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
