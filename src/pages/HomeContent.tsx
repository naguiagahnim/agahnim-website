import { Marquee } from "../components/Marquee";

export default function HomeContent() {
    return (
        <div className="bg-light-pink-ouga bg-cover bg-center h-screen w-screen overflow-hidden">
            <div className="relative z-10 flex flex-col items-center px-4 space-y-4 max-w-4xl mx-auto p-6 mt-4">
                <div className="w-[400px]">
                    <img src="/images/welcome.webp" width="400px"/>
                    <Marquee className="py-1 mb-4 font-dotgothic">&nbsp;彡★Welcome to my little corner of the Web★彡&nbsp;</Marquee>
                </div>
                <div className="flex space-x-4">
                    <div className="bg-white bg-opacity-80 p-4 rounded shadow-md flex-1">
                        <p className="text-sm font-dotgothic">
                            Thank you for visiting my website !
                            For now it's still a <span className="text-darkerer-pink-ouga">work in progress</span> but I'm sure you will see changes if you come back from time to time :)
                            <br/><br/>
                            My name is <span className="text-darkerer-pink-ouga">Agahnim</span> 
                            <span className="ml-1 px-2 py-[1px] text-xs rounded-full bg-blue-ouga text-white font-semibold">she/her</span>, I'm a <span className="text-darkerer-pink-ouga">developer</span> and <span className="text-darkerer-pink-ouga">music producer</span> from <span className="text-darkerer-pink-ouga">France</span> !
                            <br/><br/>
                            I created this website not just to <span className="text-darkerer-pink-ouga">improve</span> my web development skills, but also because it's <span className="inline-block text-darkerer-pink-ouga animate-bounce">fun</span> to build a project like this. It's a small, personal space on the internet, away from the social climate, which is getting <span className="text-red-700">worse and worse</span>
                        </p>
                        <div className="flex flex-row space-x-4 mt-3">
                            <img src="/badges/queer.webp"/>
                            <img src="/badges/skywardsword.webp" width="100px"/>
                            <img src="/badges/transrightsnow.webp"/>
                            <img src="/badges/88x31computer.gif"/>
                            <img src="/badges/cssisawesome.webp"/>
                        </div>
                        <div className="flex flex-row space-x-4 mt-3">
                            <img src="/badges/kirby.gif" width="30%"/>
                            <img src="/badges/trans.gif" width="30%"/>
                            <img src="/badges/pink.gif" width="30%"/>
                        </div>
                    </div>

                    <div className="bg-white bg-opacity-80 p-4 rounded shadow-md flex-[0.3]">
                    </div>
                </div>
            </div>
        </div>
    )
}
