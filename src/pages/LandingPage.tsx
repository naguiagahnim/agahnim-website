import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAudio } from "../components/AudioContext";

export default function LandingPage() {
    const [leaving, setLeaving] = useState(false);
    const navigate = useNavigate();
    const { play } = useAudio();

    const handleEnter = () => {
        play();

        setLeaving(true);
        sessionStorage.setItem("fromLanding", "true");
        setTimeout(() => {
            navigate("/home");
        }, 1000);
    };


    return (
        <AnimatePresence>
            {!leaving && (
                <motion.div
                    className="relative z-10 flex flex-col items-center justify-center h-screen"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div
                        className="absolute bg-red-500 z-10 hover:cursor-pointer"
                        style={{
                            top: '21%',
                            left: '56%',
                            width: '28%',
                            height: '45%',
                        }}
                        onClick={handleEnter}
                    ></div>
                    <video className="fixed top-0 left-0 w-screen h-screen object-cover z-0" autoPlay muted loop src="/videos/landing.webm"></video>
                    <div className="absolute inset-x-0 bottom-0 z-10 text-white text-center animate-pulse font-dotgothic text-lg bg-lavender-ouga">
                        <p>Welcome, please enter the screen to continue your visit.</p>
                        <p className="text-sm">Headphones recommended</p>
                        <p className="text-sm">Best viewed on a computer</p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
