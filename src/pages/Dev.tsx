export default function Dev() {
    return (
        <div className="bg-light-pink-ouga bg-cover bg-center h-screen w-screen">
            <video className="fixed top-0 left-0 w-screen h-screen object-cover z-0" autoPlay muted loop src="/videos/dev.webm" preload="auto"></video>
            <div className="bg-radial-[at_center] from-pink-ouga from-40% to-lavender-ouga to-90% mt-4 relative z-10 flex flex-col items-center px-4 space-y-4 max-w-4xl mx-auto p-6">
                <div className="bg-white bg-opacity-80 p-4 rounded shadow-md">
                    <p className="text-sm font-dotgothic">
                        I always had an interest in development. 
                    </p>
                </div>

                <div className="bg-white bg-opacity-80 p-4 rounded shadow-md">
                    <p className="text-sm font-dotgothic">
                        Et quand l’ombre viendra, que la musique demeure, veilleuse éternelle de mes pensées.
                    </p>
                </div>

                <div className="flex space-x-4">
                    <div className="bg-white bg-opacity-80 p-4 rounded shadow-md flex-1">
                        <p className="text-sm font-dotgothic">
                            Et quand l’ombre viendra, que la musique demeure, veilleuse éternelle de mes pensées.
                        </p>
                    </div>

                    <div className="bg-white bg-opacity-80 p-4 rounded shadow-md flex-[0.5]">
                        <p className="text-sm font-dotgothic">
                            Et quand l’ombre viendra, que la musique demeure, veilleuse éternelle de mes pensées.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}