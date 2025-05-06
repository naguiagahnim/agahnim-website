"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, SkipBack, SkipForward, Volume2, X, Minimize, Square } from "lucide-react"

const defaultTracks = [
  {
    id: 1,
    title: "DAWN",
    artist: "Agahnim",
    src: "/music/DAWN.mp3",
  },
  {
    id: 2,
    title: "Move on",
    artist: "Agahnim",
    src: "/music/move_on.mp3",
  },
  {
    id: 3,
    title: "Carcer",
    artist: "Agahnim",
    src: "/music/carcer.mp3",
  },
  {
    id: 4,
    title: "Under listening",
    artist: "Agahnim",
    src: "/music/listening.mp3",
  },
  {
    id: 5,
    title: "Fading away",
    artist: "Agahnim",
    src: "/music/fading.mp3",
  },
  {
    id: 6,
    title: "I'm getting tired of farewells",
    artist: "Agahnim",
    src: "/music/farewells.mp3",
  },
  {
    id: 7,
    title: "Hindsight",
    artist: "Agahnim",
    src: "/music/hindsight.mp3",
  },
  {
    id: 8,
    title: "With or without",
    artist: "Agahnim",
    src: "/music/without.mp3",
  },
  {
    id: 9,
    title: "Perfect Light",
    artist: "Agahnim",
    src: "/music/perfect_light.mp3",
  },
  {
    id: 10,
    title: "Good old times",
    artist: "Agahnim",
    src: "/music/times.mp3",
  },

]

export default function AudioPlayer({ tracks = defaultTracks }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isMinimized, setIsMinimized] = useState(false)
  const [showPlayer, setShowPlayer] = useState(true)

  const audioRef = useRef<HTMLAudioElement>(null)

  const currentTrack = tracks[currentTrackIndex]

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const setAudioData = () => {
      setDuration(audio.duration)
      setCurrentTime(audio.currentTime)
    }

    const setAudioTime = () => setCurrentTime(audio.currentTime)

    audio.addEventListener("loadeddata", setAudioData)
    audio.addEventListener("timeupdate", setAudioTime)
    audio.addEventListener("ended", handleNext)

    audio.volume = volume

    return () => {
      audio.removeEventListener("loadeddata", setAudioData)
      audio.removeEventListener("timeupdate", setAudioTime)
      audio.removeEventListener("ended", handleNext)
    }
  }, [currentTrackIndex])

  const formatTime = (time: number) => {
    if (isNaN(time)) return "00:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  const handlePlayPause = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }

    setIsPlaying(!isPlaying)
  }

  const handlePrevious = () => {
    setCurrentTrackIndex((prev) => (prev === 0 ? tracks.length - 1 : prev - 1))
    setIsPlaying(true)
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play()
      }
    }, 0)
  }

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev === tracks.length - 1 ? 0 : prev + 1))
    setIsPlaying(true)
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play()
      }
    }, 0)
  }

  const handleTrackSelect = (index: number) => {
    setCurrentTrackIndex(index)
    setIsPlaying(true)
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play()
      }
    }, 0)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number.parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number.parseFloat(e.target.value)
    setCurrentTime(newTime)
    if (audioRef.current) {
      audioRef.current.currentTime = newTime
    }
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  const closePlayer = () => {
    setShowPlayer(false)
  }

  if (!showPlayer) return null

  return (
    <div className="w-80 select-none font-dotgothic z-10 static">
      <div className="border-2 border-t-white border-l-white border-b-gray-500 border-r-gray-500 bg-[#c0c0c0] shadow-md">
        <div className="flex items-center justify-between bg-darker-pink-ouga px-1.5 py-1 text-sm text-white">
          <div className="font-bold">Music Player</div>
          <div className="flex gap-0.5">
            <button
              onClick={toggleMinimize}
              className="flex h-3.5 w-4 items-center justify-center border border-t-white border-l-white border-b-gray-500 border-r-gray-500 bg-[#c0c0c0] p-0"
            >
              <Minimize size={10} className="text-black" />
            </button>
            <button className="flex h-3.5 w-4 items-center justify-center border border-t-white border-l-white border-b-gray-500 border-r-gray-500 bg-[#c0c0c0] p-0">
              <Square size={10} className="text-black" />
            </button>
            <button
              onClick={closePlayer}
              className="flex h-3.5 w-4 items-center justify-center border border-t-white border-l-white border-b-gray-500 border-r-gray-500 bg-[#c0c0c0] p-0 hover:bg-red-600 hover:text-white"
            >
              <X size={10} className="text-black" />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            <div className="flex items-center justify-between border-b border-gray-500 p-2">
              <div className="max-w-[70%]">
                <div className="truncate text-sm font-bold">{currentTrack.title}</div>
                <div className="text-xs text-gray-700">{currentTrack.artist}</div>
              </div>
              <div className="text-sm">
                <span>{formatTime(currentTime)}</span>
                <span> / </span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            <div className="px-2 pt-2">
              <input
                type="range"
                min={0}
                max={duration || 0}
                value={currentTime}
                onChange={handleTimeChange}
                className="h-5 w-full appearance-none border-2 border-t-gray-500 border-l-gray-500 border-b-white border-r-white bg-white outline-none"
                style={{
                  backgroundSize: `${(currentTime / duration) * 100}% 100%`,
                }}
              />
            </div>

            <div className="flex items-center justify-between gap-2 p-2">
              <button
                onClick={handlePrevious}
                className="flex items-center justify-center border-2 border-t-white border-l-white border-b-gray-500 border-r-gray-500 bg-[#c0c0c0] p-1 active:border-t-gray-500 active:border-l-gray-500 active:border-b-white active:border-r-white active:p-[5px_3px_3px_5px]"
              >
                <SkipBack size={16} />
              </button>
              <button
                onClick={handlePlayPause}
                className="flex h-[30px] w-[40px] items-center justify-center border-2 border-t-white border-l-white border-b-gray-500 border-r-gray-500 bg-[#c0c0c0] active:border-t-gray-500 active:border-l-gray-500 active:border-b-white active:border-r-white active:p-[5px_3px_3px_5px]"
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </button>
              <button
                onClick={handleNext}
                className="flex items-center justify-center border-2 border-t-white border-l-white border-b-gray-500 border-r-gray-500 bg-[#c0c0c0] p-1 active:border-t-gray-500 active:border-l-gray-500 active:border-b-white active:border-r-white active:p-[5px_3px_3px_5px]"
              >
                <SkipForward size={16} />
              </button>
              <div className="flex items-center gap-1">
                <Volume2 size={16} />
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={volume}
                  onChange={handleVolumeChange}
                  className="h-4 w-20 appearance-none border-2 border-t-gray-500 border-l-gray-500 border-b-white border-r-white bg-white outline-none"
                />
              </div>
            </div>

            <div className="m-2 border-2 border-t-gray-500 border-l-gray-500 border-b-white border-r-white bg-white">
              <div className="sticky top-0 bg-darker-pink-ouga px-1 py-0.5 text-xs font-bold text-white">Track List</div>
              <div className="max-h-[150px] overflow-y-auto p-1">
                {tracks.map((track, index) => (
                  <div
                    key={track.id}
                    className={`cursor-pointer truncate p-1 text-xs hover:bg-gray-100 ${
                      index === currentTrackIndex ? "bg-darker-pink-ouga text-white" : ""
                    }`}
                    onClick={() => handleTrackSelect(index)}
                  >
                    {track.title} - {track.artist}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      <audio ref={audioRef} src={currentTrack.src} />
    </div>
  )
}
