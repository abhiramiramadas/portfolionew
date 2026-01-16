'use client'

import { useState } from 'react'

interface StickyNoteProps {
  initialPosition?: { x: number; y: number }
}

export function StickyNote({ initialPosition = { x: 600, y: 80 } }: StickyNoteProps) {
  const [position, setPosition] = useState(initialPosition)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(true)

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.close-btn')) return
    setIsDragging(true)
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    setPosition({
      x: e.clientX - dragOffset.x,
      y: e.clientY - dragOffset.y,
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  if (!isVisible) return null

  return (
    <div
      className="absolute z-40 select-none"
      style={{
        left: position.x,
        top: position.y,
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Sticky Note */}
      <div
        className="w-72 rounded-sm relative"
        style={{
          background: 'linear-gradient(145deg, #ffe4ec 0%, #ffb8d0 40%, #ffa3c4 100%)',
          transform: 'rotate(-3deg)',
          boxShadow: '4px 4px 15px rgba(0,0,0,0.25), 0 0 40px rgba(255,182,193,0.3)',
        }}
      >
        {/* Decorative washi tape */}
        <div
          className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-7 rounded-sm"
          style={{
            background: 'linear-gradient(90deg, #ffd1dc 0%, #ffb6c1 50%, #ffd1dc 100%)',
            opacity: 0.85,
            transform: 'rotate(3deg)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        />
        
        {/* Cute pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none rounded-sm"
          style={{
            backgroundImage: 'radial-gradient(circle, #ff69b4 1px, transparent 1px)',
            backgroundSize: '12px 12px',
          }}
        />
        
        {/* Close button */}
        <button
          className="close-btn absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-pink-400 hover:text-red-400 hover:scale-110 transition-all duration-200 rounded-full hover:bg-pink-200/50"
          onClick={() => setIsVisible(false)}
        >
          <span className="text-lg">✕</span>
        </button>

        {/* Content */}
        <div className="p-5 pt-7 relative">
          {/* Header with sparkle */}
          <h3 className="font-bold text-pink-700 mb-3 text-base flex items-center gap-2" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            <span className="text-lg">✨</span> 
            <span className="bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">How to use</span>
            <span className="text-lg">💖</span>
          </h3>
          
          <ul className="text-sm text-pink-700 space-y-2" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            <li className="flex items-start gap-2">
              <span className="text-pink-400">♡</span>
              <span><strong className="text-pink-600">Double-click</strong> icons to open</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-400">♡</span>
              <span><strong className="text-pink-600">Drag</strong> icons around</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-400">♡</span>
              <span><strong className="text-pink-600">Move</strong> windows by title bar</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-400">♡</span>
              <span>Use the <strong className="text-pink-600">window buttons</strong></span>
            </li>
          </ul>
          
          {/* Decorative divider */}
          <div className="my-3 flex items-center justify-center gap-1">
            <span className="text-pink-300">·</span>
            <span className="text-pink-400">✿</span>
            <span className="text-pink-300">·</span>
            <span className="text-pink-400">✿</span>
            <span className="text-pink-300">·</span>
          </div>
          
          <p className="text-sm text-center text-pink-500 font-medium" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            ♡ Welcome to my portfolio! ♡
          </p>
          
          {/* Corner decorations */}
          <span className="absolute bottom-2 right-3 text-pink-300 text-xs">ꕤ</span>
          <span className="absolute bottom-2 left-3 text-pink-300 text-xs">ꕤ</span>
        </div>
      </div>
    </div>
  )
}
