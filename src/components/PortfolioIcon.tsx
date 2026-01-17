'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'

interface PortfolioIconProps {
  name: string
  icon: string
  initialPosition: { x: number; y: number }
  onPositionChange?: (name: string, position: { x: number; y: number }) => void
  isSelected?: boolean
  onSelect?: (name: string) => void
  onDoubleClick?: () => void
}

export function PortfolioIcon({
  name,
  icon,
  initialPosition,
  onPositionChange,
  isSelected = false,
  onSelect,
  onDoubleClick
}: PortfolioIconProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState(initialPosition)
  const iconRef = useRef<HTMLDivElement>(null)
  const dragOffset = useRef({ x: 0, y: 0 })
  const clickTimer = useRef<NodeJS.Timeout | null>(null)
  const clickCount = useRef(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return
    
    onSelect?.(name)
    
    const rect = iconRef.current?.getBoundingClientRect()
    if (rect) {
      dragOffset.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
    }
    
    setIsDragging(true)
    
    const handleMouseMove = (moveEvent: MouseEvent) => {
      const newX = moveEvent.clientX - dragOffset.current.x
      const newY = moveEvent.clientY - dragOffset.current.y
      
      const boundedX = Math.max(0, Math.min(newX, window.innerWidth - 100))
      const boundedY = Math.max(80, Math.min(newY, window.innerHeight - 150))
      
      setPosition({ x: boundedX, y: boundedY })
      onPositionChange?.(name, { x: boundedX, y: boundedY })
    }
    
    const handleMouseUp = () => {
      setIsDragging(false)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
    
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    clickCount.current++
    
    if (clickTimer.current) {
      clearTimeout(clickTimer.current)
    }
    
    clickTimer.current = setTimeout(() => {
      clickCount.current = 0
    }, 300)
    
    if (clickCount.current >= 2) {
      clickCount.current = 0
      onDoubleClick?.()
    }
  }

  return (
    <div
      ref={iconRef}
      className={`desktop-icon absolute flex flex-col items-center w-[100px] p-2 cursor-pointer ${
        isSelected ? 'selected' : ''
      } ${isDragging ? 'opacity-75' : ''}`}
      style={{
        left: position.x,
        top: position.y,
        zIndex: isDragging ? 100 : 1
      }}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
    >
      <div className="w-14 h-14 mb-1 drop-shadow-lg transition-all duration-200 hover:scale-115 hover:drop-shadow-xl relative">
        <Image
          src={icon}
          alt={name}
          fill
          className="object-contain"
          draggable={false}
        />
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-lg bg-white/0 hover:bg-white/10 transition-all duration-200" />
      </div>
      <span
        className={`icon-label text-white text-xs text-center px-2 py-1 max-w-[90px] break-words rounded-sm backdrop-blur-sm ${
          isSelected ? 'bg-[#0055E5]/90' : 'bg-black/20'
        }`}
        style={{
          textShadow: '1px 1px 2px rgba(0,0,0,0.9), -1px -1px 2px rgba(0,0,0,0.9), 0 0 8px rgba(0,0,0,0.5)'
        }}
      >
        {name}
      </span>
    </div>
  )
}
