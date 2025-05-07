"use client"

import type React from "react"

import { useRef, useEffect } from "react"

interface MarqueeProps {
  children: React.ReactNode
  className?: string
  speed?: number
}

export function Marquee({ children, className = "", speed = 1 }: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return

    const container = containerRef.current
    const content = contentRef.current

    const clone = content.cloneNode(true) as HTMLDivElement
    container.appendChild(clone)

    let animationId: number
    let position = 0

    const scroll = () => {
      position -= speed

      if (position <= -content.offsetWidth) {
        position = 0
      }

      container.style.transform = `translateX(${position}px)`
      animationId = requestAnimationFrame(scroll)
    }

    scroll()

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [speed])

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div ref={containerRef} className="inline-flex">
        <div ref={contentRef} className="inline-block">
          {children}
        </div>
      </div>
    </div>
  )
}
