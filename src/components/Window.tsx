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
      className="fixed shadow-2xl flex flex-col"
      style={{
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        zIndex,
        borderRadius: isMaximized ? 0 : '8px 8px 0 0',
        overflow: 'hidden',
      }}
      onClick={onFocus}
    >
      {/* Title Bar */}
      <div
        className="xp-titlebar h-[30px] flex items-center justify-between px-2 cursor-move select-none shrink-0"
        onMouseDown={handleMouseDown}
        onDoubleClick={handleMaximize}
      >
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 relative">
            <Image src={icon} alt={title} fill className="object-contain" />
          </div>
          <span className="text-white text-sm font-bold drop-shadow-md truncate">
            {title}
          </span>
        </div>
        
        {/* Window Controls */}
        <div className="flex items-center gap-[2px]">
          {/* Minimize */}
          <button
            onClick={(e) => { e.stopPropagation(); onMinimize(); }}
            className="w-[21px] h-[21px] flex items-center justify-center rounded-sm text-white hover:brightness-125"
            style={{
              background: 'linear-gradient(180deg, #3c7fb1 0%, #2c5f8a 100%)',
              border: '1px solid #fff',
              boxShadow: 'inset 1px 1px 0 rgba(255,255,255,0.3)',
            }}
          >
            <svg width="9" height="9" viewBox="0 0 9 9" fill="white">
              <rect x="1" y="6" width="7" height="2" />
            </svg>
          </button>
          
          {/* Maximize */}
          <button
            onClick={(e) => { e.stopPropagation(); handleMaximize(); }}
            className="w-[21px] h-[21px] flex items-center justify-center rounded-sm text-white hover:brightness-125"
            style={{
              background: 'linear-gradient(180deg, #3c7fb1 0%, #2c5f8a 100%)',
              border: '1px solid #fff',
              boxShadow: 'inset 1px 1px 0 rgba(255,255,255,0.3)',
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
            className="w-[21px] h-[21px] flex items-center justify-center rounded-sm text-white hover:brightness-125"
            style={{
              background: 'linear-gradient(180deg, #c75050 0%, #a33 100%)',
              border: '1px solid #fff',
              boxShadow: 'inset 1px 1px 0 rgba(255,255,255,0.3)',
            }}
          >
            <svg width="9" height="9" viewBox="0 0 9 9" fill="white">
              <path d="M1 1L8 8M8 1L1 8" stroke="white" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div 
        className="flex-1 bg-[#ECE9D8] overflow-auto"
        style={{
          border: '2px solid #0055E5',
          borderTop: 'none',
        }}
      >
        {children}
      </div>
    </div>
  )
}
