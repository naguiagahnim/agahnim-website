export default function HomeContent() {
    return (
        <div className="bg-light-pink-ouga bg-cover bg-center h-screen w-screen">
            <div>
                <img src="/gifs/globe.gif" width="5%" className="float-left"></img>
                <img src="/gifs/globe.gif" width="5%" className="float-right"></img>
            </div>
            <div className="relative z-10 flex flex-col items-center px-4 space-y-4 max-w-4xl mx-auto p-6">
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