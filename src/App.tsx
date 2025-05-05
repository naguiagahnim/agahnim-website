import { Routes, Route, useLocation } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Home from "./pages/Home"

export default function App() {
  const location = useLocation();

  return (
    <div className="crt">
    <Routes location={location}>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/home" element={<Home/>} />
    </Routes>
    </div>
  );
}