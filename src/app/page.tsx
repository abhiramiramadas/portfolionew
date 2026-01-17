'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { PortfolioIcon } from '@/components/PortfolioIcon'
import { Window } from '@/components/Window'
import { StickyNote } from '@/components/StickyNote'
import { BootScreen } from '@/components/BootScreen'
import { Clippy } from '@/components/Clippy'
import { Marquee } from '@/components/Marquee'
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
  const [startMenuOpen, setStartMenuOpen] = useState(false)
  const [isBooting, setIsBooting] = useState(true)
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null)
  
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
    if ((e.target as HTMLElement).closest('.start-menu')) return
    if ((e.target as HTMLElement).closest('.start-button')) return
    if ((e.target as HTMLElement).closest('.context-menu')) return
    setSelectedId(null)
    setStartMenuOpen(false)
    setContextMenu(null)
  }

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    if ((e.target as HTMLElement).closest('.desktop-icon')) return
    if ((e.target as HTMLElement).closest('.xp-window')) return
    setContextMenu({ x: e.clientX, y: e.clientY })
    setStartMenuOpen(false)
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

  // Boot screen
  if (isBooting) {
    return <BootScreen onComplete={() => setIsBooting(false)} />
  }

  return (
    <div
      className="relative w-screen h-screen overflow-hidden flex flex-col"
      onClick={handleDesktopClick}
      onContextMenu={handleContextMenu}
    >
      {/* Marquee Banner */}
      <Marquee />

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
      <StickyNote />

      {/* Right-Click Context Menu */}
      {contextMenu && (
        <div 
          className="context-menu fixed bg-white border border-gray-300 shadow-lg rounded-sm py-1 z-[10000] min-w-[180px]"
          style={{ left: contextMenu.x, top: contextMenu.y }}
        >
          <button 
            onClick={() => { window.location.reload(); setContextMenu(null); }}
            className="w-full px-4 py-1.5 text-left text-sm hover:bg-blue-500 hover:text-white flex items-center gap-3"
          >
            <span className="w-4 text-center">🔄</span> Refresh
          </button>
          <div className="border-t border-gray-200 my-1" />
          <button 
            onClick={() => { openWindow('About'); setContextMenu(null); }}
            className="w-full px-4 py-1.5 text-left text-sm hover:bg-blue-500 hover:text-white flex items-center gap-3"
          >
            <span className="w-4 text-center">👤</span> About Me
          </button>
          <button 
            onClick={() => { openWindow('Projects'); setContextMenu(null); }}
            className="w-full px-4 py-1.5 text-left text-sm hover:bg-blue-500 hover:text-white flex items-center gap-3"
          >
            <span className="w-4 text-center">📁</span> View Projects
          </button>
          <button 
            onClick={() => { openWindow('Contact'); setContextMenu(null); }}
            className="w-full px-4 py-1.5 text-left text-sm hover:bg-blue-500 hover:text-white flex items-center gap-3"
          >
            <span className="w-4 text-center">📧</span> Contact
          </button>
          <div className="border-t border-gray-200 my-1" />
          <a 
            href="https://github.com/abhiramiramadas"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setContextMenu(null)}
            className="w-full px-4 py-1.5 text-left text-sm hover:bg-blue-500 hover:text-white flex items-center gap-3"
          >
            <span className="w-4 text-center">🐙</span> GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/abhiramiramadas/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setContextMenu(null)}
            className="w-full px-4 py-1.5 text-left text-sm hover:bg-blue-500 hover:text-white flex items-center gap-3"
          >
            <span className="w-4 text-center">💼</span> LinkedIn
          </a>
        </div>
      )}

      {/* CRT Overlay Effect */}
      <div className="crt-overlay" />

      {/* Clippy Helper */}
      <Clippy />

      {/* Windows XP Taskbar */}
      <div
        className="fixed bottom-0 left-0 right-0 h-[36px] z-[9999] flex items-center"
        style={{
          background: 'linear-gradient(180deg, #3a7bd5 0%, #5090e0 5%, #3a7bd5 10%, #2a6bc5 50%, #2563b0 80%, #1e56a0 95%, #1a4d90 100%)',
          borderTop: '1px solid #7ab5f5',
          boxShadow: '0 -2px 10px rgba(0,0,0,0.2)',
        }}
      >
        {/* Start Button */}
        <button 
          className="start-button h-full pl-3 pr-5 flex items-center gap-2 text-white font-bold text-sm transition-all hover:brightness-110"
          style={{
            background: startMenuOpen 
              ? 'linear-gradient(180deg, #358035 0%, #2d6b2d 10%, #256025 50%, #1d4d1d 80%, #154015 100%)'
              : 'linear-gradient(180deg, #5cb85c 0%, #4cae4c 10%, #3d9a3d 50%, #358035 80%, #2d6b2d 100%)',
            borderRadius: '0 12px 12px 0',
            boxShadow: startMenuOpen 
              ? 'inset 2px 2px 4px rgba(0,0,0,0.3)'
              : '2px 0 4px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)',
          }}
          onClick={() => setStartMenuOpen(!startMenuOpen)}
        >
          <span className="text-xl">🪟</span>
          <span className="italic" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>start</span>
        </button>

        {/* Start Menu */}
        {startMenuOpen && (
          <div 
            className="start-menu absolute bottom-[36px] left-0 w-[320px] rounded-t-lg overflow-hidden animate-slide-up"
            style={{
              background: 'linear-gradient(180deg, #4a9eff 0%, #3a8eef 100%)',
              boxShadow: '0 -4px 20px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.2)',
            }}
          >
            {/* User Banner */}
            <button 
              className="w-full p-3 flex items-center gap-3 hover:brightness-110 transition-all cursor-pointer"
              style={{
                background: 'linear-gradient(90deg, #2157a8 0%, #3a7bd5 50%, #2157a8 100%)',
                borderBottom: '2px solid #f7a400',
              }}
              onClick={() => {
                openWindow('About')
                setStartMenuOpen(false)
              }}
            >
              <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-white/50 shadow-lg">
                <Image src="/profile.jpg" alt="User" width={48} height={48} className="object-cover" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-white font-bold text-sm" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                  Abhirami Ramadas
                </span>
                <span className="text-white/70 text-xs">Click to view profile</span>
              </div>
            </button>

            {/* Menu Items */}
            <div className="flex">
              {/* Left Column - Programs */}
              <div className="flex-1 bg-white py-2">
                {portfolioItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      openWindow(item.name)
                      setStartMenuOpen(false)
                    }}
                    className="w-full px-3 py-2 flex items-center gap-3 hover:bg-[#316ac5] hover:text-white transition-colors text-left text-sm text-gray-800"
                  >
                    <div className="w-8 h-8 relative shrink-0">
                      <Image src={item.icon} alt={item.name} fill className="object-contain" />
                    </div>
                    <span className="font-medium">{item.name}</span>
                  </button>
                ))}
              </div>

              {/* Right Column - Quick Links */}
              <div 
                className="w-[120px] py-2"
                style={{
                  background: 'linear-gradient(180deg, #d3e5fa 0%, #b9d4f5 100%)',
                }}
              >
                <a
                  href="https://github.com/abhiramiramadas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-3 py-2 flex items-center gap-2 hover:bg-[#316ac5] hover:text-white transition-colors text-left text-xs text-gray-700"
                >
                  <span>🐙</span>
                  <span className="font-medium">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/abhiramiramadas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-3 py-2 flex items-center gap-2 hover:bg-[#316ac5] hover:text-white transition-colors text-left text-xs text-gray-700"
                >
                  <span>💼</span>
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a
                  href="mailto:abhiramiramadas2004@gmail.com"
                  className="w-full px-3 py-2 flex items-center gap-2 hover:bg-[#316ac5] hover:text-white transition-colors text-left text-xs text-gray-700"
                >
                  <span>📧</span>
                  <span className="font-medium">Email</span>
                </a>
              </div>
            </div>

            {/* Footer */}
            <div 
              className="p-2 flex justify-end"
              style={{
                background: 'linear-gradient(90deg, #2157a8 0%, #3a7bd5 50%, #2157a8 100%)',
                borderTop: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              <button 
                onClick={() => setStartMenuOpen(false)}
                className="px-3 py-1 text-white text-xs hover:bg-white/20 rounded transition-colors flex items-center gap-1"
              >
                <span>🔴</span>
                <span>Close</span>
              </button>
            </div>
          </div>
        )}

        {/* Search Bar */}
        <div className="h-[26px] ml-2 flex items-center" style={{ minWidth: '180px' }}>
          <div 
            className="h-full flex items-center rounded-l px-2 gap-1.5"
            style={{
              background: 'linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)',
              border: '1px solid #7ab5f5',
              borderRight: 'none',
            }}
          >
            <span className="text-sm">🔍</span>
          </div>
          <input
            type="text"
            placeholder="Search portfolio..."
            className="h-full px-2 text-xs text-gray-700 placeholder:text-gray-400 outline-none rounded-r"
            style={{
              background: 'linear-gradient(180deg, #ffffff 0%, #f8f8f8 100%)',
              border: '1px solid #7ab5f5',
              borderLeft: 'none',
              width: '140px',
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const searchTerm = (e.target as HTMLInputElement).value.toLowerCase()
                const matchedItem = portfolioItems.find(item => 
                  item.name.toLowerCase().includes(searchTerm)
                )
                if (matchedItem) {
                  openWindow(matchedItem.name)
                  ;(e.target as HTMLInputElement).value = ''
                }
              }
            }}
          />
        </div>

        {/* Taskbar Buttons for Open Windows */}
        <div className="flex-1 h-full flex items-center px-2 gap-1.5 overflow-x-auto">
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
              className="h-[26px] px-3 flex items-center gap-2 text-white text-xs rounded max-w-[160px] truncate transition-all duration-150 hover:brightness-110"
              style={{
                background: windows[item.name].isMinimized 
                  ? 'linear-gradient(180deg, #4a8ed0 0%, #3a7ec0 50%, #2a6eb0 100%)'
                  : 'linear-gradient(180deg, #5a9ee0 0%, #4a8ed0 50%, #3a7ec0 100%)',
                border: '1px solid rgba(255,255,255,0.3)',
                boxShadow: windows[item.name].isMinimized 
                  ? 'inset 0 1px 3px rgba(0,0,0,0.2)'
                  : 'inset 0 1px 0 rgba(255,255,255,0.3), 0 1px 3px rgba(0,0,0,0.2)',
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
          className="h-full px-4 flex items-center gap-3"
          style={{
            background: 'linear-gradient(180deg, #1a6ed6 0%, #1560c0 50%, #1050a0 100%)',
            borderLeft: '1px solid #7ab5f5',
            boxShadow: 'inset 1px 0 0 rgba(255,255,255,0.1)',
          }}
        >
          <span className="text-white text-xs font-medium" style={{ textShadow: '1px 1px 1px rgba(0,0,0,0.3)' }}>
            {time}
          </span>
        </div>
      </div>
    </div>
  )
}
