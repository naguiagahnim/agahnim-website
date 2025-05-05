import { useNavigate } from "react-router-dom";

export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="landing-page">
          <h1>Bienvenue, voyageur céleste</h1>
          <button onClick={() => navigate('/home')}>
            Entrer en la cité intérieure
          </button>
        </div>
    );  
}