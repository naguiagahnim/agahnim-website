export default function About() {
    return (
        <div className="bg-light-pink-ouga bg-cover bg-center h-screen w-screen">
            <video className="fixed top-0 left-0 w-screen h-screen object-cover z-0" autoPlay muted loop src="/videos/about.webm" preload="auto" poster="/images/about.webp"></video>
            <div className="bg-radial-[at_center] from-pink-ouga from-40% to-lavender-ouga to-90% relative z-10 flex flex-col items-center px-4 space-y-4 max-w-4xl mx-auto p-6 mt-4">
                <div className="flex space-x-4">
                    <div className="bg-white bg-opacity-80 p-4 rounded shadow-md flex-1">
                        <p className="text-sm font-dotgothic">
                            Hey ! I'm Agahnim, a French developer and music producer.
                        </p>
                    </div>

                    <div className="bg-white bg-opacity-80 p-4 rounded shadow-md flex-1">
                        <p className="text-lg font-dotgothic text-center bg-[url(/gifs/divider.gif)]">
                            Agahnim | she/her
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}