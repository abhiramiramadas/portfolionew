'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface BootScreenProps {
  onComplete: () => void
}

export function BootScreen({ onComplete }: BootScreenProps) {
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Fade out after 3 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true)
    }, 3000)

    // Complete after fade
    const doneTimer = setTimeout(() => {
      onComplete()
    }, 3500)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(doneTimer)
    }
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center transition-opacity duration-700 ${fadeOut ? 'opacity-0' : 'opacity-100'} overflow-hidden`}
      style={{
        background: '#000000',
      }}
    >
      {/* Boot Phase - Authentic Windows XP Professional */}
      <div className="flex flex-col items-center z-10 w-full h-full justify-center">
        {/* Windows XP Professional Logo - Centered */}
        <div className="flex flex-col items-center mb-32">
          {/* Windows Logo */}
          <div className="relative w-20 h-20 mb-8">
            <div className="absolute inset-0 grid grid-cols-2 gap-1.5">
              <div className="bg-[#f25022] rounded-sm"></div>
              <div className="bg-[#7fba00] rounded-sm"></div>
              <div className="bg-[#00a4ef] rounded-sm"></div>
              <div className="bg-[#ffb900] rounded-sm"></div>
            </div>
          </div>

          {/* Windows XP Professional Text */}
          <div className="text-center">
            <h1
              className="text-4xl font-normal tracking-wide mb-1"
              style={{
                fontFamily: 'Franklin Gothic Medium, Trebuchet MS, Arial, sans-serif',
                color: '#ffffff',
                fontWeight: 500,
              }}
            >
              Microsoft<span style={{ fontSize: '0.75em', fontWeight: 'normal' }}>®</span> Windows<span style={{ fontSize: '0.75em', fontWeight: 'normal' }}>®</span>
            </h1>
            <p
              className="text-lg tracking-wider"
              style={{
                fontFamily: 'Franklin Gothic Medium, Trebuchet MS, Arial, sans-serif',
                color: '#ffffff',
                fontWeight: 400,
              }}
            >
              XP Professional
            </p>
          </div>
        </div>

        {/* Loading Bar - Bottom of screen */}
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2">
          <div className="w-64 h-2 bg-[#1a1a1a] rounded-sm overflow-hidden relative border border-[#333333]">
            {/* Scrolling green blocks */}
            <div className="flex h-full">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="flex-shrink-0"
                  style={{
                    width: '12px',
                    height: '100%',
                    background: i % 3 === 0 ? '#5ebd3e' : 'transparent',
                    animation: 'xpLoadingScroll 1.5s linear infinite',
                    animationDelay: `${i * 0.075}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Authentic XP Animations */}
      <style jsx>{`
        @keyframes xpLoadingScroll {
          0% { opacity: 0.3; }
          50% { opacity: 1; }
          100% { opacity: 0.3; }
        }
      `}</style>
    </div>
  )
}
