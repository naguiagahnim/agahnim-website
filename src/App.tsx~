import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Music from "./pages/Music";
import About from "./pages/About";
import Dev from "./pages/Dev";
import { AudioProvider } from "./components/AudioContext.tsx";
import Navbar from "./components/Navbar.tsx";
import ScrollToTop from "./components/ScrollToTop.ts";
import { useRef } from "react";
import MiniPlayer from "./components/MiniPlayer.tsx";
import Shrines from "./pages/Shrines.tsx"

export default function App() {
  const location = useLocation();
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <AudioProvider>
      <div className="crt relative z-99 h-screen w-screen flex flex-col">
      {location.pathname !== "/" && <Navbar />}
        <div id="mainDiv" ref={scrollRef} className="flex-1 overflow-y-auto overflow-x-hidden">
          <ScrollToTop scrollRef={scrollRef} />
          {location.pathname !== "/" && location.pathname !== "/music" && location.pathname !== "/shrines" && (
            <div className="fixed top-18 left-0 z-999">
              <MiniPlayer />
            </div>
          )}
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dev" element={<Dev />} />
            <Route path="/music" element={<Music />} />
            <Route path="/shrines" element={<Shrines />} />
          </Routes>
        </div>
      </div>
    </AudioProvider>
  );
}
