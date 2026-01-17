'use client'

import { useState } from 'react'

export function StickyNote() {
  const [isMinimized, setIsMinimized] = useState(false)

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-[70px] right-2 sm:right-4 z-20 bg-[#FFE4EC] px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-bold border border-[#F9B9C9] shadow-md hover:bg-[#FFD6E0] transition-colors"
        style={{
          transform: 'rotate(-1deg)',
          boxShadow: '2px 2px 5px rgba(0,0,0,0.2)',
        }}
      >
        📝 Note
      </button>
    )
  }

  return (
    <div
      className="fixed bottom-[70px] right-2 sm:right-4 z-20 w-[200px] sm:w-[320px] select-text"
      style={{
        transform: 'rotate(2deg)',
      }}
    >
      {/* Sticky Note */}
      <div
        className="relative bg-[#FFE4EC] shadow-lg"
        style={{
          boxShadow: '3px 3px 10px rgba(0,0,0,0.25)',
        }}
      >
        {/* Top tape/fold effect */}
        <div
          className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#FFE4EC]/80"
          style={{
            background: 'linear-gradient(180deg, rgba(255,228,236,0.6) 0%, rgba(255,228,236,0.9) 100%)',
            boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
          }}
        />

        {/* Title bar */}
        <div className="flex items-center justify-between px-2 py-1 border-b border-[#F9B9C9]/50">
          <span className="text-[10px] text-[#C45B7A] font-semibold">a message for you &lt;3</span>
          <div className="flex gap-1">
            <button
              onClick={() => setIsMinimized(true)}
              className="w-4 h-4 text-[10px] text-[#C45B7A] hover:bg-[#FFD6E0] rounded flex items-center justify-center"
              title="Minimize"
            >
              −
            </button>
          </div>
        </div>

        {/* Content */}
        <div
          className="p-2 sm:p-4 text-xs sm:text-base text-[#7A3E55] lowercase"
          style={{
            fontFamily: "'PP Mondwest', cursive",
            lineHeight: '1.6',
          }}
        >
          <p className="mb-1 sm:mb-2">
            hi i&apos;m <strong>abhi</strong> :)
          </p>

          <p className="mb-1 sm:mb-2">
            i build clean websites + mini projects
          </p>

          <p className="mb-1 sm:mb-2">
            and i&apos;m currently leveling up in IT + frontend
          </p>

          <p className="mb-2 sm:mb-3 text-[10px] sm:text-sm">
            if you like pretty UI, smooth UX, and projects that actually work... you&apos;re in the right place
          </p>

          <p className="mb-1 sm:mb-2">
            scroll around & steal some inspiration
          </p>

          <p className="text-[#994D66] text-[10px] sm:text-xs">
            (also yes i love minimal design)
          </p>
        </div>

        {/* Bottom curl/shadow effect */}
        <div
          className="absolute -bottom-1 right-2 w-8 h-8"
          style={{
            background: 'linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.05) 50%)',
            transform: 'rotate(0deg)',
          }}
        />
      </div>
    </div>
  )
}