import { useNavigate } from "react-router-dom";

export default function LandingPage() {
    const navigate = useNavigate();
    const handleEnter = () => {
        sessionStorage.setItem("fromLanding", "true");
        navigate("/home");
    }
    return (
        <div className="landing-page">
          <h1>Bienvenue, voyageur céleste</h1>
          <button onClick={handleEnter}>
            Entrer en la cité intérieure
          </button>
        </div>
    );  
}