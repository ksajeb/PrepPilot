import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import LandingPage from "../pages/LandingPage";
import Dashboard from "../pages/Home/Dashboard";
import PrepPilot from "../pages/PrepPilot/PrepPilot";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/prep-pilot/:sessionId" element={<PrepPilot />} />
    </Routes>
  );
};

export default AppRoutes;
