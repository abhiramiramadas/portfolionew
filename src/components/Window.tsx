'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

interface WindowProps {
  title: string
  icon: string
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
  onMinimize: () => void
  isMinimized: boolean
  initialPosition?: { x: number; y: number }
  zIndex: number
  onFocus: () => void
}

export function Window({
  title,
  icon,
  children,
  isOpen,
  onClose,
  onMinimize,
  isMinimized,
  initialPosition = { x: 100, y: 50 },
  zIndex,
  onFocus,
}: WindowProps) {
  const [position, setPosition] = useState(initialPosition)
  const [size, setSize] = useState({ width: 600, height: 450 })
  const [, setIsDragging] = useState(false)
  const [isMaximized, setIsMaximized] = useState(false)
  const [prevState, setPrevState] = useState({ position: initialPosition, size: { width: 600, height: 450 } })
  const windowRef = useRef<HTMLDivElement>(null)
  const dragOffset = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (isOpen && !isMinimized) {
      onFocus()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, isMinimized])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMaximized) return
    onFocus()
    const rect = windowRef.current?.getBoundingClientRect()
    if (rect) {
      dragOffset.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }
    setIsDragging(true)

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const newX = moveEvent.clientX - dragOffset.current.x
      const newY = moveEvent.clientY - dragOffset.current.y
      setPosition({
        x: Math.max(0, Math.min(newX, window.innerWidth - 100)),
        y: Math.max(0, Math.min(newY, window.innerHeight - 100)),
      })
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  const handleMaximize = () => {
    if (isMaximized) {
      setPosition(prevState.position)
      setSize(prevState.size)
      setIsMaximized(false)
    } else {
      setPrevState({ position, size })
      setPosition({ x: 0, y: 0 })
      setSize({ width: window.innerWidth, height: window.innerHeight - 30 })
      setIsMaximized(true)
    }
  }

  if (!isOpen || isMinimized) return null

  return (
    <div
      ref={windowRef}
      className="fixed flex flex-col window-open"
      style={{
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        zIndex,
        borderRadius: isMaximized ? 0 : '10px 10px 4px 4px',
        overflow: 'hidden',
        boxShadow: '0 10px 40px rgba(0,0,0,0.3), 0 0 1px rgba(0,0,0,0.5)',
      }}
      onClick={onFocus}
    >
      {/* Title Bar */}
      <div
        className="xp-titlebar h-[32px] flex items-center justify-between px-3 cursor-move select-none shrink-0"
        onMouseDown={handleMouseDown}
        onDoubleClick={handleMaximize}
        style={{
          background: 'linear-gradient(180deg, #0a6eea 0%, #3498ff 8%, #2080ff 15%, #0870ed 25%, #0860dd 40%, #0755d0 60%, #0850cc 80%, #0955d5 90%, #0a5ada 100%)',
          borderBottom: '1px solid #0044aa',
        }}
      >
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 relative drop-shadow-md">
            <Image src={icon} alt={title} fill className="object-contain" />
          </div>
          <span className="text-white text-sm font-bold truncate" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
            {title}
          </span>
        </div>
        
        {/* Window Controls */}
        <div className="flex items-center gap-1">
          {/* Minimize */}
          <button
            onClick={(e) => { e.stopPropagation(); onMinimize(); }}
            className="w-[22px] h-[22px] flex items-center justify-center rounded text-white transition-all duration-150 hover:scale-110"
            style={{
              background: 'linear-gradient(180deg, #4a9eff 0%, #2a7edf 50%, #1a6ecf 100%)',
              border: '1px solid rgba(255,255,255,0.4)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4), 0 1px 3px rgba(0,0,0,0.2)',
            }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="white">
              <rect x="1" y="7" width="8" height="2" rx="0.5" />
            </svg>
          </button>
          
          {/* Maximize */}
          <button
            onClick={(e) => { e.stopPropagation(); handleMaximize(); }}
            className="w-[22px] h-[22px] flex items-center justify-center rounded text-white transition-all duration-150 hover:scale-110"
            style={{
              background: 'linear-gradient(180deg, #4a9eff 0%, #2a7edf 50%, #1a6ecf 100%)',
              border: '1px solid rgba(255,255,255,0.4)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4), 0 1px 3px rgba(0,0,0,0.2)',
            }}
          >
            {isMaximized ? (
              <svg width="9" height="9" viewBox="0 0 9 9" fill="white">
                <rect x="2" y="0" width="6" height="6" fill="none" stroke="white" strokeWidth="1.5" />
                <rect x="0" y="3" width="6" height="6" fill="none" stroke="white" strokeWidth="1.5" />
              </svg>
            ) : (
              <svg width="9" height="9" viewBox="0 0 9 9" fill="none" stroke="white" strokeWidth="1.5">
                <rect x="1" y="1" width="7" height="7" />
              </svg>
            )}
          </button>
          
          {/* Close */}
          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="w-[22px] h-[22px] flex items-center justify-center rounded text-white transition-all duration-150 hover:scale-110 hover:bg-red-500"
            style={{
              background: 'linear-gradient(180deg, #e85050 0%, #c83030 50%, #b82020 100%)',
              border: '1px solid rgba(255,255,255,0.3)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 1px 3px rgba(0,0,0,0.2)',
            }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="white">
              <path d="M2 2L8 8M8 2L2 8" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div 
        className="flex-1 overflow-auto"
        style={{
          background: 'linear-gradient(180deg, #f8f8f6 0%, #ece9d8 100%)',
          border: '2px solid #0055E5',
          borderTop: 'none',
          borderRadius: '0 0 4px 4px',
        }}
      >
        {children}
      </div>
    </div>
  )
}
