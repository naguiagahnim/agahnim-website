import { useState } from "react";

export default function About() {

    const [videoLoaded, setVideoLoaded] = useState(false);

    function scrollToId(id: string) {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    }


    return (
        <div className="bg-light-pink-ouga bg-cover bg-center h-screen w-screen">
            {!videoLoaded && (
                <img className="fixed top-0 left-0 w-screen h-screen object-cover z-0" src="/images/about.webp"/>)}
            <video className="fixed top-0 left-0 w-screen h-screen object-cover z-0" autoPlay muted playsInline loop src="/videos/about.webm" preload="auto" onLoadedData={() => setVideoLoaded(true)}></video>

            <div className="bg-radial-[at_center] from-pink-ouga from-40% to-lavender-ouga to-90% relative z-10 flex flex-col items-center px-12 space-y-4 max-w-4xl mx-auto p-6 mt-4">

                <div className="flex space-x-4">
                    <div className="bg-white bg-opacity-80 p-4 rounded shadow-md flex-1 text-center font-dotgothic">
                        <p className="text-sm">
                            <img src="/gifs/aboutme.gif" className="mb-2"></img>
                            <img src="/gifs/divider.gif"/>
                            <img src="/images/pfp.webp" className="my-4"></img>
                            <img src="/gifs/divider.gif" className="mb-4"/>
                            <div className="flex flex-row space-x-15">
                                <img src="/gifs/tekken.gif" width="150px" className="border-3 border-t-[#a2d2ff] border-l-[#a2d2ff] border-r-[#cdb4db] border-b-[#cdb4db]"/>
                                <img src="/gifs/abstract.gif" width="150px" className="border-3 border-t-[#a2d2ff] border-l-[#a2d2ff] border-r-[#cdb4db] border-b-[#cdb4db]"/>
                            </div>
                        </p>
                    </div>

                    <div className="bg-white bg-opacity-80 p-4 rounded shadow-md flex-1 text-center font-dotgothic">
                        <img src="/gifs/title.gif"/>
                        <p className="mt-4">
                            I'm <span className="text-xl text-darkerer-pink-ouga">Agahnim</span>, a <span className="text-blue-ouga">transgender</span> music producer and developer from <span className="text-darkerer-pink-ouga">France</span>.
                            <br/><br/>
                            I've been playing the <span className="text-darkerer-pink-ouga">viola da gamba</span> since I was 6. Since, you probably don't know what my instrument is, I dedicated a <span onClick={() => scrollToId("wtfis")} className="text-blue-ouga decoration-current underline hover:cursor-pointer">section</span> to it further down this page, because I think it deserves more recognition outside the few people who are very interested in Baroque music. It's thanks to this instrument that I fell in love with <span className="text-darkerer-pink-ouga">baroque music</span> and classical music for that matter.
                            <br/><br/>
                            I've been interested in development and computing in general since I was very young. It all started with the desire to make video games myself! I remember playing Xenoblade Chronicles X at the time. I started taking a few courses in Construct 2 and Unity, and haven't stopped programming since. Now, I'd consider myself a global amateur! I've got an acceptable level that lets me get by, because I'm pretty much a jack-of-all-trades, but I've still got a lot to learn!
                            <br/><br/>
                            Apart from that, I love reading and playing video games, big surprise coming from a developer I know.
                            <br/><br/>
                            Also, I love <span className="text-pink-ouga">pink</span>, as you may have already noticed.
                            <br/><br/>
                            Lately, I’ve been thinking about rebranding my whole social media presence, but I have no idea of what to choose to be honest.
                        </p>
                    </div>
                </div>
                <div className="bg-white bg-opacity-80 p-4 rounded shadow-md font-dotgothic">
                    <img src="/gifs/areasofinterest.gif" className="mx-auto"/>
                    <div className="grid grid-cols-3 text-center mt-4 gap-10">

                        <div className="flex flex-col items-center bg-light-pink-ouga rounded border-3 border-t-[#a2d2ff] border-l-[#a2d2ff] border-r-[#cdb4db] border-b-[#cdb4db]">
                            <div className="flex items-center justify-center space-x-2 mb-2 bg-[url(/gifs/divider.gif)] px-2">
                                <img src="/gifs/globe.gif" width="20px" />
                                <h1>Video games</h1>
                                <img src="/gifs/globe.gif" width="20px" />
                            </div>
                            <ul className="list-disc list-inside">
                                <li>Zelda aka my favorite license (especially Skyward Sword!)</li>
                                <li>FromSoftware games (especially DS1, DS2 and ER)</li>
                                <li>Death Stranding</li>
                                <li>All Metal Gear games (especially MGS5 and Ground Zeroes and excluding Rising)</li>
                                <li>Hotline Miami 1 & 2</li>
                                <li>Katana ZERO</li>
                                <li>Pokemon Violet (yep)</li>
                                <li>Kirby Star Allies</li>
                                <li>Dead Cells</li>
                                <li>Alien : Isolation</li>
                                <li>Tekken 8</li>
                                <li>Blasphemous</li>
                                <li>Warframe...</li>
                            </ul>
                        </div>

                        <div className="flex flex-col items-center bg-light-pink-ouga rounded border-3 border-t-[#a2d2ff] border-l-[#a2d2ff] border-r-[#cdb4db] border-b-[#cdb4db]">
                            <div className="flex items-center justify-center space-x-2 mb-2 bg-[url(/gifs/divider.gif)] px-2">
                                <img src="/gifs/globe.gif" width="20px" />
                                <h1>Literature</h1>
                                <img src="/gifs/globe.gif" width="20px" />
                            </div>
                            <ul className="list-inside list-disc">
                                <li>Boris Vian (my favourite author)</li>
                                <li>Albert Camus</li>
                                <li>Terry Pratchett</li>
                                <li>François Villon</li>
                                <li>Fyodor Dostoevsky...</li>
                            </ul>
                        </div>

                        <div className="flex flex-col items-center bg-light-pink-ouga rounded border-3 border-t-[#a2d2ff] border-l-[#a2d2ff] border-r-[#cdb4db] border-b-[#cdb4db]">
                            <div className="flex items-center justify-center space-x-2 mb-2 bg-[url(/gifs/divider.gif)] px-2">
                                <img src="/gifs/globe.gif" width="20px" />
                                <h1>Music</h1>
                                <img src="/gifs/globe.gif" width="20px" />
                            </div>
                            <ul className="list-disc list-inside">
                                <li>Carpenter Brut (my favorite artist)</li>
                                <li>Vaporwave / Synthwave</li>
                                <li>Barber beats</li>
                                <li>French touch</li>
                                <li>Baroque</li>
                                <li>Classical</li>
                                <li>Heavy Metal</li>
                                <li>Jazz...</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col text-center items-center bg-light-pink-ouga rounded border-3 border-t-[#a2d2ff] border-l-[#a2d2ff] border-r-[#cdb4db] border-b-[#cdb4db]">
                            <div className="flex items-center justify-center space-x-2 mb-2 bg-[url(/gifs/divider.gif)] px-2">
                                <img src="/gifs/globe.gif" width="20px" />
                                <h1>Other</h1>
                                <img src="/gifs/globe.gif" width="20px" />
                            </div>
                            <ul className="list-disc list-inside">
                                <li><a className="underline" href="https://www.fragrantica.fr/members/60572" target="_blank">Perfumery</a></li>
                                <li><a className="underline" href="https://github.com/naguiagahnim" target="_blank">Computer science (obviously)</a></li>
                                <li>Bodybuilding and calisthenics (hate the community, love the sport)</li>
                            </ul>
                        </div>
                </div>

                <div id="wtfis" className="bg-white bg-opacity-80 p-6 rounded-xl shadow-md font-dotgothic space-y-6">
  
                    <div className="text-center">
                        <img src="/gifs/wtfis.gif" className="mx-auto rounded-lg shadow-inner" />
                    </div>

                    <div className="flex flex-col md:flex-row md:space-x-6 items-start">
                        
                        <div className="flex-shrink-0 mb-4 md:mb-0">
                        <img src="/images/savall.webp" alt="Jordi Savall and his Viola da Gamba" className="w-[300px] rounded-md shadow-lg" />
                        <p className="italic text-sm text-center mt-2 max-w-[300px]">The Viola da Gamba, played by Catalan gambist, choral conductor and orchestra leader Jordi Savall.</p>
                        </div>

                        <div className="text-sm text-justify p-3 flex-1">
                        The viola da gamba, or simply gamba, is a bowed string instrument that was popular in the Renaissance and Baroque periods, mainly from the 15th to the 18th centuries. Its name means “viol of the leg” in Italian, because it’s played between the legs, much like a modern cello (but without the end pin).
                        It is often played either alone or with other instruments such as the harpsichord or the renaissance recorder, instruments with which you may be more familiar.
                        If you've ever listened to some of Bach's music, chances are you've heard viola da gamba without knowing it.
                        <br/><br/>
                        The viola da gamba was said to be the closest instrument to the human voice. Its rich sound, which I personally find magnificent, is what immediately attracted me when I heard one of my classmates play it for the first time.
                        <br/><br/>
                        If you would like to learn more about this instrument, I encourage you to do so! For example, you can familiarize yourself with certain composers, such as the aforementioned Bach, Marin Marais, Jean de Sainte-Colombe or Karl Friedrich Abel! A well-known film representing the music of the period, and particularly that for the viola da gamba, is All The Mornings of The World, which you may already have seen (also keep in mind that the actor who plays Marin Marais when he's an adult is a disgusting bastard).
                        </div>

                    </div>
                </div>


            </div>
            <div className="hover:animate-bounce fixed bottom-0 right-0 z-50 w-[250px]">
                <a href="https://www.youtube.com/watch?v=jIQ6UV2onyI" target="_blank"><img src="/images/bibu2.webp" width="250px"/></a>
            </div>
            <div className="hover:animate-bounce fixed top-60 left-0 z-999">
                <img src="/images/bibidraw.webp" width="200px"/>
            </div>
        </div>
    )
}