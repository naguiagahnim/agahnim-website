import { useState } from "react";

export default function About() {

    const [videoLoaded, setVideoLoaded] = useState(false);

    return (
        <div className="bg-light-pink-ouga bg-cover bg-center h-screen w-screen">
            {!videoLoaded && (
                <img className="fixed top-0 left-0 w-screen h-screen object-cover z-0" src="/images/about.webp"/>)}
            <video className="fixed top-0 left-0 w-screen h-screen object-cover z-0" autoPlay muted loop src="/videos/about.webm" preload="auto" onLoadedData={() => setVideoLoaded(true)}></video>

            <div className="bg-radial-[at_center] from-pink-ouga from-40% to-lavender-ouga to-90% relative z-10 flex flex-col items-center px-4 space-y-4 max-w-4xl mx-auto p-6 mt-4 border-4 border-t-white border-l-white border-r-black border-b-black">
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
                            I'm <span className="text-xl text-darkerer-pink-ouga">Agahnim</span>, a <span className="text-blue-ouga">transgender</span> music producer and developer from <span className="text-darkerer-pink-ouga">France</span>, while I also like to engage in many activities such as viola da gamba, video games, reading and whatever hobby I find exciting or interesting.
                            <br/><br/>
                            I've been playing the <span className="text-darkerer-pink-ouga">viola da gamba</span> since I was 6, and it's honestly what made me fall in love with <span className="text-darkerer-pink-ouga">baroque music</span> and classical music for that matter. Surprisingly, I never thought I'd like it so much! I suppose it's a love that's acquired over time.
                            <br/><br/>
                            I've always loved reading and video games, in my own world so to speak! Although I've changed, I've always kept that part of me.
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
                                <h1>Music</h1>
                                <img src="/gifs/globe.gif" width="20px" />
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt faucibus tincidunt. Morbi molestie nisl dolor. Quisque vel auctor quam. Donec ullamcorper posuere consectetur. Morbi risus felis, accumsan in tristique sit amet, hendrerit eu augue. Pellentesque convallis interdum purus, id interdum tortor porta laoreet. Donec vitae urna orci. Duis auctor non nunc fermentum tristique. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}