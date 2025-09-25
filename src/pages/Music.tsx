import { useState } from "react";
import AudioPlayer from "../components/AudioPlayer";
import { Marquee } from "../components/Marquee";
export default function Music() {

    const[videoLoaded, setVideoLoaded] = useState(false);

    return (
        <div className="bg-light-pink-ouga bg-cover bg-center min-h-screen w-screen" >

            {!videoLoaded && (
                <img className="fixed top-0 left-0 w-screen h-screen object-cover z-0" src="/images/music.webp"/>)}
            <video className="fixed top-0 left-0 w-screen h-screen object-cover z-0" playsInline autoPlay muted loop src="/videos/music.webm" preload="auto" onLoadedData={() => setVideoLoaded(true)}></video>

            <div className="bg-[url(/images/tiledbgpink.webp)] relative z-10 flex flex-col items-center px-12 space-y-4 max-w-4xl mx-auto mt-4 p-6 border-5 border-darker-pink-ouga">
                <img src="/gifs/music.gif"/>
                <div className="flex flex-row items-center space-x-12 bg-light-pink-ouga border-3 border-t-[#a2d2ff] border-l-[#a2d2ff] border-r-[#cdb4db] border-b-[#cdb4db] p-5">
                    <AudioPlayer />
                    <div className="w-[200px]">
                        <a href="https://share.amuse.io/rEhNMOytyfeg" target="_blank">
                            <img src="/images/life.webp" width="200" />
                        </a>
                        <Marquee className="text-black py-1 mb-4 font-dotgothic">&nbsp;彡★LIFE - Available on all platforms★彡&nbsp;</Marquee>
                    </div>
                </div>

                <div className="bg-white bg-opacity-80 p-4 rounded shadow-md">
                    <p className="text-sm font-dotgothic">
                        As far back as I can remember, I've been immersed in music — to the point where living without it feels unimaginable.
                        On a day-to-day basis, I've always been lulled by a wide variety of sounds, from more well-known artists to lesser-known ones and I confess that if someone asked me to define my taste in music, I wouldn't know what to answer.
                        However, there are certain sounds that attract me, like the primal sound of an analog synthesizer.
                        <br/><br/>
                        it seems to me that music is a reflection of the soul. My purpose when creating isn’t just to translate my life experiences into melody but also to create a soundscape that reflects my vision of music and my personal tastes.
                        The more I explore it, the more I understand why people often refer to music as a language.
                        And strangely enough, it’s in music that I find the truest sense of myself, as if the sounds are the purest reflection of who I am.
                        <br/><br/>
                        One of the biggest challenges I face right now is reinventing myself. For an artist, it quickly becomes easy to mimic their own style to the point of distorting it. For me, in order to continue producing art rather than craftsmanship, artists must constantly reinvent themselves and not fall into the trap of copying their own style to the point of saturation.
                    </p>
                </div>
            </div>
        </div>
    );
}
