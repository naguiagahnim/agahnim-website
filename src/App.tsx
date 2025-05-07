import { Routes, Route, useLocation } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Home from "./pages/Home"
import Music from "./pages/Music";
import About from "./pages/About";
import Dev from "./pages/Dev";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <div className="crt relative z-99">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/dev" element={<Dev/>} />
          <Route path="/music" element={<Music/>} />
        </Routes>
      </div>
    </AnimatePresence>
  );
}