import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HomeContent from "./HomeContent";

export default function Home() {

  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    const fromLanding = sessionStorage.getItem("fromLanding");

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
            <audio src="/audio/startup.mp3" autoPlay playsInline/>
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