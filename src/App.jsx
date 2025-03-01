import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import YogaDashboard from "./components/YogaDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import NotFound from "./components/NotFound";
import WaterRepelBackground from "./components/WaterRepelBackground";

function App() {
  return (
    <WaterRepelBackground>

    <Routes>
      <Route path="/" element={<LandingPage />} />

      {/* Prevent logged-in users from accessing Login & Register */}
      <Route element={<PublicRoute />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>

      {/* Only logged-in users can access Dashboard */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<YogaDashboard />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
    </WaterRepelBackground>
  );
}

export default App;
