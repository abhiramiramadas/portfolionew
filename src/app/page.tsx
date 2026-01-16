'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { PortfolioIcon } from '@/components/PortfolioIcon'
import { Window } from '@/components/Window'
import { StickyNote } from '@/components/StickyNote'
import {
  HomeContent,
  AboutContent,
  EducationContent,
  ExperienceContent,
  ProjectsContent,
  SkillsContent,
  ResumeContent,
  ContactContent,
} from '@/components/WindowContents'

const portfolioItems = [
  { name: 'Home', icon: '/img-1.png' },
  { name: 'About', icon: '/img-2.png' },
  { name: 'Education', icon: '/img-3.png' },
  { name: 'Experience', icon: '/img-4.png' },
  { name: 'Projects', icon: '/img-5.png' },
  { name: 'Skills', icon: '/img-6.png' },
  { name: 'Resume', icon: '/img-7.png' },
  { name: 'Contact', icon: '/img-8.png' },
]

type WindowState = {
  isOpen: boolean
  isMinimized: boolean
  zIndex: number
}

function generateInitialPositions() {
  const positions: Record<string, { x: number; y: number }> = {}
  const startX = 20
  const startY = 20
  const iconHeight = 90

  portfolioItems.forEach((item, index) => {
    positions[item.name] = {
      x: startX,
      y: startY + index * iconHeight,
    }
  })
  return positions
}

function getWindowContent(name: string) {
  switch (name) {
    case 'Home': return <HomeContent />
    case 'About': return <AboutContent />
    case 'Education': return <EducationContent />
    case 'Experience': return <ExperienceContent />
    case 'Projects': return <ProjectsContent />
    case 'Skills': return <SkillsContent />
    case 'Resume': return <ResumeContent />
    case 'Contact': return <ContactContent />
    default: return null
  }
}

export default function Home() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [iconPositions, setIconPositions] = useState<Record<string, { x: number; y: number }>>(generateInitialPositions())
  const [time, setTime] = useState<string>('')
  const [topZIndex, setTopZIndex] = useState(100)
  
  // Window states
  const [windows, setWindows] = useState<Record<string, WindowState>>(() => {
    const initial: Record<string, WindowState> = {}
    portfolioItems.forEach((item, index) => {
      initial[item.name] = { isOpen: false, isMinimized: false, zIndex: 100 + index }
    })
    return initial
  })

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const handlePositionChange = (name: string, position: { x: number; y: number }) => {
    setIconPositions((prev) => ({ ...prev, [name]: position }))
  }

  const handleDesktopClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.desktop-icon')) return
    if ((e.target as HTMLElement).closest('.xp-window')) return
    setSelectedId(null)
  }

  const openWindow = (name: string) => {
    const newZIndex = topZIndex + 1
    setTopZIndex(newZIndex)
    setWindows(prev => ({
      ...prev,
      [name]: { isOpen: true, isMinimized: false, zIndex: newZIndex }
    }))
  }

  const closeWindow = (name: string) => {
    setWindows(prev => ({
      ...prev,
      [name]: { ...prev[name], isOpen: false, isMinimized: false }
    }))
  }

  const minimizeWindow = (name: string) => {
    setWindows(prev => ({
      ...prev,
      [name]: { ...prev[name], isMinimized: true }
    }))
  }

  const restoreWindow = (name: string) => {
    const newZIndex = topZIndex + 1
    setTopZIndex(newZIndex)
    setWindows(prev => ({
      ...prev,
      [name]: { ...prev[name], isMinimized: false, zIndex: newZIndex }
    }))
  }

  const focusWindow = (name: string) => {
    const newZIndex = topZIndex + 1
    setTopZIndex(newZIndex)
    setWindows(prev => ({
      ...prev,
      [name]: { ...prev[name], zIndex: newZIndex }
    }))
  }

  const openWindows = portfolioItems.filter(item => windows[item.name]?.isOpen)

  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      onClick={handleDesktopClick}
    >
      {/* Bliss Wallpaper Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/bliss.jpg)',
          backgroundColor: '#3A6EA5',
        }}
      />

      {/* Desktop Icons */}
      {portfolioItems.map((item) => (
        <PortfolioIcon
          key={item.name}
          name={item.name}
          icon={item.icon}
          initialPosition={iconPositions[item.name] || { x: 20, y: 20 }}
          onPositionChange={handlePositionChange}
          isSelected={selectedId === item.name}
          onSelect={setSelectedId}
          onDoubleClick={() => openWindow(item.name)}
        />
      ))}

      {/* Windows */}
      {portfolioItems.map((item, index) => (
        <Window
          key={item.name}
          title={item.name}
          icon={item.icon}
          isOpen={windows[item.name]?.isOpen || false}
          isMinimized={windows[item.name]?.isMinimized || false}
          zIndex={windows[item.name]?.zIndex || 100}
          initialPosition={{ x: 150 + index * 30, y: 50 + index * 30 }}
          onClose={() => closeWindow(item.name)}
          onMinimize={() => minimizeWindow(item.name)}
          onFocus={() => focusWindow(item.name)}
        >
          {getWindowContent(item.name)}
        </Window>
      ))}

      {/* Sticky Note Guide */}
      <StickyNote initialPosition={{ x: 600, y: 80 }} />

      {/* CRT Overlay Effect */}
      <div className="crt-overlay" />

      {/* Windows XP Taskbar */}
      <div
        className="fixed bottom-0 left-0 right-0 h-[30px] z-[9999] flex items-center"
        style={{
          background: 'linear-gradient(180deg, #3168d5 0%, #4e8ad8 3%, #2f63c7 6%, #1f58c0 10%, #1554be 14%, #1454bd 20%, #1255be 56%, #1458c0 66%, #1862c9 76%, #1966ce 86%, #1a69d1 92%, #1b6bd3 94%, #1c6ed6 100%)',
          borderTop: '1px solid #0c3c8f',
        }}
      >
        {/* Start Button */}
        <button 
          className="h-full pl-1 pr-4 flex items-center gap-1 text-white font-bold text-sm hover:brightness-110 transition-all"
          style={{
            background: 'linear-gradient(180deg, #3c9a3c 0%, #3c9a3c 3%, #2d8b2d 6%, #2d8b2d 50%, #237a23 54%, #237a23 100%)',
            borderRadius: '0 8px 8px 0',
            boxShadow: '1px 0 1px rgba(0,0,0,0.3)',
          }}
        >
          <span className="text-xl">🪟</span>
          <span className="italic drop-shadow-md">start</span>
        </button>

        {/* Taskbar Buttons for Open Windows */}
        <div className="flex-1 h-full flex items-center px-2 gap-1 overflow-x-auto">
          {openWindows.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                if (windows[item.name].isMinimized) {
                  restoreWindow(item.name)
                } else {
                  focusWindow(item.name)
                }
              }}
              className="h-[22px] px-2 flex items-center gap-1 text-white text-xs rounded-sm max-w-[150px] truncate"
              style={{
                background: windows[item.name].isMinimized 
                  ? 'linear-gradient(180deg, #3c7fb1 0%, #2c5f8a 100%)'
                  : 'linear-gradient(180deg, #1c6ed6 0%, #1458c0 100%)',
                border: '1px solid rgba(255,255,255,0.3)',
                boxShadow: windows[item.name].isMinimized 
                  ? 'none'
                  : 'inset 1px 1px 0 rgba(255,255,255,0.2)',
              }}
            >
              <div className="w-4 h-4 relative shrink-0">
                <Image src={item.icon} alt={item.name} fill className="object-contain" />
              </div>
              <span className="truncate">{item.name}</span>
            </button>
          ))}
        </div>

        {/* System Tray */}
        <div 
          className="h-full px-3 flex items-center gap-2"
          style={{
            background: 'linear-gradient(180deg, #0f8aeb 0%, #0c87e8 50%, #0a84e5 100%)',
            borderLeft: '1px solid #0c3c8f',
          }}
        >
          <span className="text-white text-xs drop-shadow-sm">
            {time}
          </span>
        </div>
      </div>
    </div>
  )
}
