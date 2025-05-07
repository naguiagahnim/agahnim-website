import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import HomeContent from "./HomeContent";

export default function Home() {

  const [shouldAnimate, setShouldAnimate] = useState(false)
  const startupRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const fromLanding = sessionStorage.getItem("fromLanding");

    if (startupRef.current) {
      startupRef.current.volume = 0.5;
    }

    if (fromLanding) {
      setShouldAnimate(true)
      sessionStorage.removeItem("fromLanding")
    }
  }, []);

    return (
      <>
        {shouldAnimate ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <audio ref={startupRef} src="/audio/startup.mp3" autoPlay playsInline/>
            <HomeContent/>
          </motion.div>
        ) : (
          <div>
            <HomeContent/>
        </div>
        )}
      </>
    )
  }