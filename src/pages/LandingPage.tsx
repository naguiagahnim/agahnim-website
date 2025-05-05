import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {

    const [leaving, setLeaving] = useState(false);
    const navigate = useNavigate();


    const handleEnter = () => {
        setLeaving(true);
        sessionStorage.setItem("fromLanding", "true");
        setTimeout(() => {
          navigate("/home");
        }, 1000);
    }
    return (
        <AnimatePresence>
        {!leaving && (
            <motion.div
                className="landing-page bg-[url(/images/landing.jpg)] bg-cover bg-center h-screen w-screen"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <h1>Bienvenue, voyageur céleste</h1>
                <button className="bg-blue-100" onClick={handleEnter}>
                    Entrer en la cité intérieure
                </button>
            </motion.div>
        )}
    </AnimatePresence>
    );  
}