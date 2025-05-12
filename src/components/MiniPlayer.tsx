"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react"

const defaultTracks = [
    {
    id: 1,
    title: "Good old times",
    artist: "Agahnim",
    src: "/music/times.mp3",
  },
  {
    id: 2,
    title: "Identification",
    artist: "Infinity Frequencies",
    src: "/music/infinity.mp3",
  },
  {
    id: 3,
    title: "Flip the Switch",
    artist: "Stevia Sphere",
    src: "/music/switch.mp3",
  },
  {
    id: 4,
    title: "Machines Vs Water",
    artist: "Stevia Sphere",
    src: "/music/machines.mp3",
  },
  {
    id: 5,
    title: "Elevator 1",
    artist: "Stevia Sphere",
    src: "/music/elevator.mp3",
  },
  {
    id: 6,
    title: "Somewhere Dark",
    artist: "Monodrone",
    src: "/music/dark.mp3",
  },

]

export default function MiniPlayer({ tracks = defaultTracks }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

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

  return (
    <div className="w-60 text-xs font-dotgothic z-10 static">
  <div className="border border-gray-500 bg-[#c0c0c0] shadow">
    <div className="flex items-center justify-between border-b border-gray-500 px-2 py-1">
      <div className="max-w-[65%] truncate">
        <div className="font-bold">{currentTrack.title}</div>
        <div className="text-gray-700">{currentTrack.artist}</div>
      </div>
      <div className="text-[10px] text-right">
        {formatTime(currentTime)} / {formatTime(duration)}
      </div>
    </div>

    <div className="px-2">
      <input
        type="range"
        min={0}
        max={duration || 0}
        value={currentTime}
        onChange={handleTimeChange}
        className="h-[4px] w-full appearance-none bg-white outline-none border border-gray-500"
      />
    </div>

    <div className="flex items-center justify-between px-2 py-1">
      <div className="flex items-center space-x-1">
        <button onClick={handlePrevious} className="p-1">
          <SkipBack size={12} />
        </button>
        <button onClick={handlePlayPause} className="p-1">
          {isPlaying ? <Pause size={12} /> : <Play size={12} />}
        </button>
        <button onClick={handleNext} className="p-1">
          <SkipForward size={12} />
        </button>
      </div>
      <div className="flex items-center space-x-1">
        <Volume2 size={12} />
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={handleVolumeChange}
          className="h-[4px] w-16 appearance-none bg-white border border-gray-500"
        />
      </div>
    </div>
  </div>
  <audio ref={audioRef} src={currentTrack.src} />
</div>

  )
}
