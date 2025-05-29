"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

export default function Dev() {
  const [videoLoaded, setVideoLoaded] = useState(false)

  const projects = [
    {
      title: "Agahnim.com",
      description: "The website you are currently on right now !",
      image: "/images/pfp.webp",
      tags: ["Tailwind CSS", "React", "Typescript", "HTML", "CSS"],
      link: "https://github.com/naguiagahnim/agahnim-website",
    },
    {
      title: "The Ashen Tempestariis.com",
      description: "A website made for my Warframe clan",
      image: "/images/ashen.webp",
      tags: ["Tailwind CSS", "React", "Typescript", "HTML", "CSS"],
      link: "https://github.com/naguiagahnim/The-Ashen-Tempestariis-Website",
    },
    {
      title: "Céphalon Poseidis",
      description:
        "A Discord bot that sends information about the Warframe world state",
      image: "/images/ashen.webp",
      tags: ["Rust"],
      link: "https://github.com/naguiagahnim/CephalonPoseidis",
    },
  ]

  return (
    <div className="bg-light-pink-ouga bg-cover bg-center h-screen w-screen">
      {!videoLoaded && <img className="fixed top-0 left-0 w-screen h-screen object-cover z-0" src="/images/dev.webp" />}
      <video
        className="fixed top-0 left-0 w-screen h-screen object-cover z-0"
        autoPlay
        playsInline
        muted
        loop
        src="/videos/dev.webm"
        preload="auto"
        onLoadedData={() => setVideoLoaded(true)}
      ></video>
        <div className="bg-[url(/images/tiledbgpink.webp)] mt-4 relative z-10 flex flex-col items-center px-12 space-y-4 max-w-4xl mx-auto p-6">

            <div className="text-center">
            <img src="/gifs/projects.gif" alt="Projects" className="mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {projects.map((project, index) => (
                <div key={index} className="bg-white bg-opacity-80 p-4 rounded shadow-md">
                <div className="flex flex-col h-full">
                    <h3 className="text-lg font-dotgothic text-darkerer-pink-ouga mb-2">{project.title}</h3>
                    <div className="mb-3 flex-grow">
                    <img
                        src={project.image || "/images/pfp.webp"}
                        alt={project.title}
                        className="w-full h-40 object-cover rounded mb-2 border-3 border-t-[#a2d2ff] border-l-[#a2d2ff] border-r-[#cdb4db] border-b-[#cdb4db]"
                    />
                    <p className="text-sm font-dotgothic">{project.description}</p>
                    </div>
                    <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-2">
                        {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs bg-light-pink-ouga px-2 py-1 rounded font-dotgothic">
                            {tag}
                        </span>
                        ))}
                    </div>
                    <Link
                        to={project.link}
                        target="_blank"
                        className="text-blue-ouga underline text-sm font-dotgothic hover:text-darkerer-pink-ouga"
                    >
                        Repository
                    </Link>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}
