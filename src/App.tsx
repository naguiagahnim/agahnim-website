import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Music from "./pages/Music";
import About from "./pages/About";
import Dev from "./pages/Dev";
import { AudioProvider } from "./components/AudioContext.tsx";
import Navbar from "./components/Navbar.tsx";

export default function App() {
  const location = useLocation();

  return (
    <AudioProvider>
      <div className="crt relative z-99 h-screen w-screen flex flex-col overflow-hidden">
      {location.pathname !== "/" && <Navbar />}
        <div className="flex-1 overflow-y-auto">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dev" element={<Dev />} />
            <Route path="/music" element={<Music />} />
          </Routes>
        </div>
      </div>
    </AudioProvider>
  );
}
