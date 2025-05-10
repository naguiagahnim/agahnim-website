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
            <video className="fixed top-0 left-0 w-screen h-screen object-cover z-0" autoPlay muted loop src="/videos/about.webm" preload="auto" onLoadedData={() => setVideoLoaded(true)}></video>

            <div className="bg-radial-[at_center] from-pink-ouga from-40% to-lavender-ouga to-90% relative z-10 flex flex-col items-center px-12 space-y-4 max-w-4xl mx-auto p-6 mt-4">
                <div className="flex space-x-4">
                    <div className="bg-white bg-opacity-80 p-4 rounded shadow-md flex-1 text-center font-dotgothic">
                        <p className="text-sm">
                            <img src="/gifs/aboutme.gif" className="mb-2"></img>
                            <img src="/images/pfp.webp"></img>
                        </p>
                    </div>

                    <div className="bg-white bg-opacity-80 p-4 rounded shadow-md flex-1 text-center font-dotgothic">
                        <img src="/gifs/title.gif"/>
                        <p className="mt-4">
                            I'm <span className="text-xl text-darkerer-pink-ouga">Agahnim</span>, a <span className="text-blue-ouga">transgender</span> music producer and developer from <span className="text-darkerer-pink-ouga">France</span>.
                            <br/><br/>
                            I've been playing the <span className="text-darkerer-pink-ouga">viola da gamba</span> since I was 6. Since, you probably don't know what my instrument is, I dedicated a <span onClick={() => scrollToId("wtfis")} className="text-blue-ouga decoration-current underline">section</span> to it if you have the faith to scroll down this page, because I think it deserves more recognition outside the few people who are very interested in Baroque music. It's thanks to this instrument that I fell in love with <span className="text-darkerer-pink-ouga">baroque music</span> and classical music for that matter.
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt faucibus tincidunt. Morbi molestie nisl dolor. Quisque vel auctor quam. Donec ullamcorper posuere consectetur. Morbi risus felis, accumsan in tristique sit amet, hendrerit eu augue. Pellentesque convallis interdum purus, id interdum tortor porta laoreet. Donec vitae urna orci. Duis auctor non nunc fermentum tristique. </p>
                        </div>
                        <div className="flex flex-col items-center bg-light-pink-ouga rounded border-3 border-t-[#a2d2ff] border-l-[#a2d2ff] border-r-[#cdb4db] border-b-[#cdb4db]">
                            <div className="flex items-center justify-center space-x-2 mb-2 bg-[url(/gifs/divider.gif)] px-2">
                                <img src="/gifs/globe.gif" width="20px" />
                                <h1>Literature</h1>
                                <img src="/gifs/globe.gif" width="20px" />
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt faucibus tincidunt. Morbi molestie nisl dolor. Quisque vel auctor quam. Donec ullamcorper posuere consectetur. Morbi risus felis, accumsan in tristique sit amet, hendrerit eu augue. Pellentesque convallis interdum purus, id interdum tortor porta laoreet. Donec vitae urna orci. Duis auctor non nunc fermentum tristique. </p>
                        </div>
                        <div className="flex flex-col items-center bg-light-pink-ouga rounded border-3 border-t-[#a2d2ff] border-l-[#a2d2ff] border-r-[#cdb4db] border-b-[#cdb4db]">
                            <div className="flex items-center justify-center space-x-2 mb-2 bg-[url(/gifs/divider.gif)] px-2">
                                <img src="/gifs/globe.gif" width="20px" />
                                <h1>Other</h1>
                                <img src="/gifs/globe.gif" width="20px" />
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt faucibus tincidunt. Morbi molestie nisl dolor. Quisque vel auctor quam. Donec ullamcorper posuere consectetur. Morbi risus felis, accumsan in tristique sit amet, hendrerit eu augue. Pellentesque convallis interdum purus, id interdum tortor porta laoreet. Donec vitae urna orci. Duis auctor non nunc fermentum tristique. </p>
                        </div>
                    </div>
                </div>
                <div id="wtfis" className="bg-white bg-opacity-80 p-4 rounded shadow-md font-dotgothic">
                    <img src="/gifs/wtfis.gif" className="mx-auto"/>
                    <div className="grid grid-cols-2 text-center mt-4 gap-10">
                        <div className="flex flex-col items-center bg-light-pink-ouga rounded border-3 border-t-[#a2d2ff] border-l-[#a2d2ff] border-r-[#cdb4db] border-b-[#cdb4db]">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt faucibus tincidunt. Morbi molestie nisl dolor. Quisque vel auctor quam. Donec ullamcorper posuere consectetur. Morbi risus felis, accumsan in tristique sit amet, hendrerit eu augue. Pellentesque convallis interdum purus, id interdum tortor porta laoreet. Donec vitae urna orci. Duis auctor non nunc fermentum tristique. </p>
                        </div>
                        <div className="flex flex-col items-center bg-light-pink-ouga rounded border-3 border-t-[#a2d2ff] border-l-[#a2d2ff] border-r-[#cdb4db] border-b-[#cdb4db]">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt faucibus tincidunt. Morbi molestie nisl dolor. Quisque vel auctor quam. Donec ullamcorper posuere consectetur. Morbi risus felis, accumsan in tristique sit amet, hendrerit eu augue. Pellentesque convallis interdum purus, id interdum tortor porta laoreet. Donec vitae urna orci. Duis auctor non nunc fermentum tristique. </p>
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