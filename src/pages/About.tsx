export default function About() {
    return (
        <div className="bg-light-pink-ouga bg-cover bg-center h-screen w-screen">
            <img className="fixed top-0 left-0 w-screen h-screen object-cover z-0" src="/images/about.webp"/>
            <video className="fixed top-0 left-0 w-screen h-screen object-cover z-1" autoPlay muted loop src="/videos/about.webm" preload="auto"></video>
            <div className="bg-radial-[at_center] from-pink-ouga from-40% to-lavender-ouga to-90% relative z-10 flex flex-col items-center px-4 space-y-4 max-w-4xl mx-auto p-6 mt-4">
                <div className="flex space-x-4">
                    <div className="bg-white bg-opacity-80 p-4 rounded shadow-md flex-1">
                        <p className="text-sm font-dotgothic">
                            Hey ! I'm Agahnim, a French developer and music producer.
                        </p>
                    </div>

                    <div className="bg-white bg-opacity-80 p-4 rounded shadow-md flex-1 text-center font-dotgothic">
                        <img src="/gifs/title.gif" width="600px"></img>
                        <p className="mt-4"></p>
                    </div>
                </div>
            </div>
        </div>
    )
}