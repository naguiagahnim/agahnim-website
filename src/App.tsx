import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Home from "./pages/Home"

export default function App() {

  return (
    <Routes location={location}>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/home" element={<Home/>} />
    </Routes>
  );
}