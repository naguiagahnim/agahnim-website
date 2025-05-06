import AudioPlayer from "../components/AudioPlayer";
import Navbar from "../components/Navbar";

export default function Music() {
    return (
        <div className="bg-light-pink-ouga bg-cover bg-center h-screen w-screen">
            <Navbar />

            <video
                className="fixed top-0 left-0 w-screen h-screen object-cover z-0"
                autoPlay
                muted
                loop
                src="/videos/music.mp4"
                preload="auto"
            ></video>

            <div className="relative z-10 flex flex-col items-center px-4 space-y-4">
                <AudioPlayer />

                <div className="bg-white bg-opacity-80 p-4 rounded shadow-md">
                    <p className="text-sm font-dotgothic">
                        O douce mélodie des jours passés, que ta voix résonne dans mes souvenirs…
                    </p>
                </div>

                <div className="bg-white bg-opacity-80 p-4 rounded shadow-md">
                    <p className="text-sm font-dotgothic">
                        Et quand l’ombre viendra, que la musique demeure, veilleuse éternelle de mes pensées.
                    </p>
                </div>
            </div>
        </div>
    );
}
