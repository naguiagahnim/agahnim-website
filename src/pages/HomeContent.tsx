import { useEffect, useRef, useState } from "react";
import { Marquee } from "../components/Marquee";

export default function HomeContent() {

    const citations: string[] = [   
        '"The Oracle of the Bibou doth whisper \'neath the moon\'s pale gaze."',
        '"He who doth watch in the shadow, seeth all."',
        '"Verily, even pixels bear a soul, thus speaketh the Bibou."',
        '"Dread not the error, for \'tis but the path unto the light."',
        '"Let thy heart guide thy mouse, O child of the web."',
        '"Each click be a prayer, and the Oracle doth hear."',
        '"Rise, and partake of a biscuit, for the road be long."',
        '"This day, thou shalt walk upon the feather of a dove."',
        '"The owl doth watch thee. Forget not thine duties."',
        '"A rain of pixels shall fall this very night."',
        '"The neighbour\’s cat doth conspire. Be wary, O soul."',
        '"Thy click is not in vain, for the Bibou hath seen thee."',
        '"Verily, \'tis Monday... and courage thou shalt need."',
        '"Fear not the dark, for the Bibou lurks there, awaiting food."',
        '"The Bibou\'s gaze pierceth the soul..."'

    ];

    const [, setCitationActuelle] = useState("");
    const [texteAffiche, setTexteAffiche] = useState("");
    const intervalRef = useRef<number | null>(null);
    const bibouRef = useRef<HTMLImageElement>(null);

    const ttText = (texte: string) => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      
        let accumulatedText = "";
        let index = 0;
      
        intervalRef.current = window.setInterval(() => {
          if (index < texte.length) {
            accumulatedText += texte.charAt(index);
            setTexteAffiche(accumulatedText);
            index++;
          } else {
            intervalRef.current && clearInterval(intervalRef.current);
          }
        }, 40);
      };

    const handleBibouHover = () => {
        if (bibouRef.current) {
            bibouRef.current.src = "/images/bibou.webp"
        }
        const newQuote = citations[Math.floor(Math.random() * citations.length)];
        setCitationActuelle(newQuote);
        ttText(newQuote);
    }

    const handleBibouLeave = () => {
        if (bibouRef.current) {
            bibouRef.current.src = "/images/boubou.webp"
        }
    }

    useEffect(() => {
        const index = Math.floor(Math.random() * citations.length);
        setCitationActuelle(citations[index]);
        
        return () => {
            if (intervalRef.current !== null) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return (
        <div className="bg-radial-[at_center] from-pink-ouga from-40% to-lavender-ouga to-90% bg-cover bg-center h-screen w-screen overflow-hidden">
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
                            <br/><br/>
                            This website is inspired by the <span className="text-darkerer-pink-ouga">vaporwave aesthetic</span> and the old PCs I used to tinker with when I was a kid.
                            I’ve always had a soft spot for that nostalgic look — the soft colors, the glitchy textures, the strange mix of melancholy and comfort.
                            It feels good to bring that vibe into something I built with my own hands.
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

                    <div className="bg-white bg-opacity-80 p-4 rounded shadow-md flex-[0.3] font-dotgothic">
                        <h1 className="text-darkerer-pink-ouga">Socials !</h1>
                        <div className="flex flex-row space-x-10 mt-3">
                            <a href="https://github.com/naguiagahnim" target="_blank"><img src="/icons/github.webp" width="30px" className="hover:animate-bounce"/></a>
                            <a href="https://open.spotify.com/intl-fr/artist/4BPUhsH6krKkCNFrdMZnZF?si=E3luyIf0S_yfJRmm82S5OA" target="_blank"><img src="/icons/spotify.webp" width="30px" className="hover:animate-bounce"/></a>
                            <a href="https://www.instagram.com/agahnim_music/" target="_blank"><img src="/icons/insta.webp" width="30px" className="hover:animate-bounce"/></a>
                        </div>
                        <img src="/gifs/divider.gif" className="mt-4"/>
                        <div className="flex flex-col items-center mt-4">
                            <h1 className="text-darkerer-pink-ouga mb-2">Consult the oracle of the Bibou</h1>
                            <div className="w-[100px]">
                                <img
                                    ref={bibouRef}
                                    src="/images/boubou.webp"
                                    width="100px"
                                    className="cursor-pointer mx-auto"
                                    onMouseEnter={handleBibouHover}
                                    onMouseLeave={handleBibouLeave}
                                />
                            </div>
                            {texteAffiche && (
                                <p className="text-xs text-center mt-2 font-dotgothic w-full transition-opacity duration-500">
                                    {texteAffiche}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
