'use client'

import { useState, useEffect } from 'react'

const tips = [
  "👋 Hi! I'm Clippy! Double-click an icon to open it.",
  "💡 Try right-clicking on the desktop for more options!",
  "🎓 Check out the Education section to see my certifications!",
  "📧 Want to work together? Open the Contact window!",
  "🚀 I've built some cool projects - check them out!",
  "⌨️ Use the search bar in the taskbar to find sections quickly.",
  "📄 Download my resume from the Resume section!",
  "🖱️ You can drag the desktop icons anywhere you like!",
  "🪟 Click Start to see all sections at once!",
]

export function Clippy() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTip, setCurrentTip] = useState(0)
  const [isMinimized, setIsMinimized] = useState(false)

  useEffect(() => {
    // Show Clippy after 5 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true)
    }, 5000)

    return () => clearTimeout(showTimer)
  }, [])

  useEffect(() => {
    if (!isVisible || isMinimized) return

    // Cycle through tips every 8 seconds
    const tipInterval = setInterval(() => {
      setCurrentTip(prev => (prev + 1) % tips.length)
    }, 8000)

    return () => clearInterval(tipInterval)
  }, [isVisible, isMinimized])

  if (!isVisible) return null

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-[50px] right-4 z-[9998] text-4xl hover:scale-110 transition-transform animate-bounce"
        title="Click to show Clippy"
      >
        📎
      </button>
    )
  }

  return (
    <div className="fixed bottom-[50px] right-4 z-[9998] flex items-end gap-2">
      {/* Speech Bubble */}
      <div 
        className="relative bg-[#ffffd8] border-2 border-gray-700 rounded-lg p-3 max-w-[220px] shadow-lg"
        style={{
          boxShadow: '3px 3px 0 rgba(0,0,0,0.2)',
        }}
      >
        {/* Close button */}
        <button
          onClick={() => setIsMinimized(true)}
          className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center hover:bg-red-600 font-bold"
        >
          ×
        </button>
        
        <p className="text-xs text-gray-800 leading-relaxed">
          {tips[currentTip]}
        </p>
        
        {/* Tip indicator */}
        <div className="flex gap-1 mt-2 justify-center">
          {tips.map((_, i) => (
            <div 
              key={i} 
              className={`w-1.5 h-1.5 rounded-full transition-colors ${i === currentTip ? 'bg-blue-500' : 'bg-gray-300'}`}
            />
          ))}
        </div>

        {/* Speech bubble tail */}
        <div 
          className="absolute -right-2 bottom-3 w-0 h-0"
          style={{
            borderTop: '8px solid transparent',
            borderBottom: '8px solid transparent',
            borderLeft: '10px solid #ffffd8',
          }}
        />
        <div 
          className="absolute -right-[11px] bottom-[11px] w-0 h-0"
          style={{
            borderTop: '9px solid transparent',
            borderBottom: '9px solid transparent',
            borderLeft: '11px solid #374151',
          }}
        />
      </div>

      {/* Clippy character */}
      <div className="text-5xl cursor-pointer hover:scale-110 transition-transform" onClick={() => setCurrentTip((currentTip + 1) % tips.length)}>
        📎
      </div>
    </div>
  )
}
