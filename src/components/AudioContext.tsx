import { createContext, useRef, useContext } from "react";

const AudioContext = createContext<{
  play: () => void;
} | null>(null);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const play = () => {
    const el = audioRef.current;
    if (el) {
      el.volume = 0.5;
      el.play().catch((e) => {
        console.log("Erreur de lecture :", e);
      });
    }
  };

  return (
    <AudioContext.Provider value={{ play }}>
      <audio ref={audioRef} src="/audio/startup.mp3" preload="auto" />
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error("useAudio doit être utilisé dans AudioProvider");
  return ctx;
}
