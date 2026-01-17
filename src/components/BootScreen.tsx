'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface BootScreenProps {
  onComplete: () => void
}

export function BootScreen({ onComplete }: BootScreenProps) {
  const [phase, setPhase] = useState<'boot' | 'welcome' | 'loading'>('boot')
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Boot screen -> Welcome screen
    const welcomeTimer = setTimeout(() => {
      setPhase('welcome')
    }, 2500)

    // Welcome -> Loading
    const loadingTimer = setTimeout(() => {
      setPhase('loading')
    }, 4500)

    // Fade out
    const fadeTimer = setTimeout(() => {
      setFadeOut(true)
    }, 6000)

    // Complete
    const doneTimer = setTimeout(() => {
      onComplete()
    }, 6500)

    return () => {
      clearTimeout(welcomeTimer)
      clearTimeout(loadingTimer)
      clearTimeout(fadeTimer)
      clearTimeout(doneTimer)
    }
  }, [onComplete])

  return (
    <div 
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
      style={{
        background: phase === 'boot' ? '#000' : 'linear-gradient(180deg, #0a246a 0%, #1354b8 50%, #0a246a 100%)',
      }}
    >
      {/* Boot Phase - Windows XP Style */}
      {phase === 'boot' && (
        <div className="flex flex-col items-center">
          {/* Windows XP Logo */}
          <div className="mb-8 flex items-center gap-3">
            <div className="grid grid-cols-2 gap-0.5">
              <div className="w-6 h-6 bg-[#f25022] rounded-sm" />
              <div className="w-6 h-6 bg-[#7fba00] rounded-sm" />
              <div className="w-6 h-6 bg-[#00a4ef] rounded-sm" />
              <div className="w-6 h-6 bg-[#ffb900] rounded-sm" />
            </div>
            <div className="ml-2">
              <p className="text-white text-2xl font-light tracking-wide" style={{ fontFamily: 'Trebuchet MS, sans-serif' }}>
                Microsoft<sup className="text-[8px]">®</sup>
              </p>
              <p className="text-white text-3xl font-bold -mt-1" style={{ fontFamily: 'Trebuchet MS, sans-serif' }}>
                Windows<span className="text-[#ffb900] text-xl align-super ml-1">XP</span>
              </p>
            </div>
          </div>

          {/* Animated Loading Blocks - Classic XP Style */}
          <div className="flex gap-1 mt-4">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2.5 h-3.5 rounded-sm"
                style={{
                  background: 'linear-gradient(180deg, #7ec0ff 0%, #3a8cff 50%, #2060cc 100%)',
                  animation: `xpBlock 1s ease-in-out ${i * 0.2}s infinite`,
                  boxShadow: '0 0 4px rgba(100,180,255,0.5)',
                }}
              />
            ))}
          </div>

          <style jsx>{`
            @keyframes xpBlock {
              0%, 100% { opacity: 0.2; transform: translateX(-20px); }
              30%, 70% { opacity: 1; transform: translateX(0); }
            }
          `}</style>
        </div>
      )}

      {/* Welcome Phase - Windows XP Login Style */}
      {phase === 'welcome' && (
        <div className="text-center animate-fade-in w-full">
          {/* Welcome Text */}
          <p 
            className="text-5xl text-white font-light mb-12 tracking-wide"
            style={{ 
              fontFamily: 'Franklin Gothic Medium, Trebuchet MS, sans-serif',
              textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
            }}
          >
            Welcome
          </p>

          {/* User Card - XP Login Style */}
          <div className="flex flex-col items-center">
            <div 
              className="bg-gradient-to-b from-[#4a9eff]/30 to-[#2060cc]/20 backdrop-blur-sm border border-white/30 rounded-xl p-6 flex items-center gap-5 min-w-[280px] hover:from-[#4a9eff]/40 hover:to-[#2060cc]/30 transition-all cursor-pointer"
              style={{
                boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)',
              }}
            >
              <div className="w-16 h-16 rounded-md overflow-hidden border-2 border-white/60 shadow-xl relative">
                <Image src="/profile.jpg" alt="User" fill className="object-cover" />
              </div>
              <div className="text-left">
                <p className="text-white text-lg font-semibold" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
                  Abhirami Ramadas
                </p>
                <p className="text-white/70 text-sm">Developer</p>
              </div>
            </div>

            {/* Loading indicator */}
            <div className="mt-8 flex items-center gap-2 text-white/60 text-sm">
              <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              <span>Logging in...</span>
            </div>
          </div>

          <style jsx>{`
            .animate-fade-in {
              animation: fadeIn 0.6s ease-out;
            }
            @keyframes fadeIn {
              0% { opacity: 0; transform: translateY(20px); }
              100% { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </div>
      )}

      {/* Loading Phase - Loading Settings */}
      {phase === 'loading' && (
        <div className="text-center animate-fade-in">
          <p 
            className="text-2xl text-white font-light mb-8"
            style={{ 
              fontFamily: 'Franklin Gothic Medium, Trebuchet MS, sans-serif',
              textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
            }}
          >
            Loading your personal settings...
          </p>

          {/* XP Style Loading Bar */}
          <div className="w-72 mx-auto">
            <div 
              className="h-5 rounded overflow-hidden relative"
              style={{
                background: 'linear-gradient(180deg, #1a3a5f 0%, #0d1f3c 100%)',
                border: '2px solid #5090e0',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)',
              }}
            >
              <div 
                className="h-full"
                style={{
                  background: 'repeating-linear-gradient(90deg, #3a8cff 0px, #5ab8ff 6px, #3a8cff 12px)',
                  animation: 'xpProgress 1.5s linear infinite',
                  backgroundSize: '200% 100%',
                }}
              />
            </div>
          </div>

          <style jsx>{`
            .animate-fade-in {
              animation: fadeIn 0.4s ease-out;
            }
            @keyframes fadeIn {
              0% { opacity: 0; }
              100% { opacity: 1; }
            }
            @keyframes xpProgress {
              0% { background-position: 100% 0; }
              100% { background-position: -100% 0; }
            }
          `}</style>
        </div>
      )}

      {/* To turn off... text at bottom - Classic XP */}
      {phase === 'boot' && (
        <div className="absolute bottom-8 text-white/50 text-xs text-center">
          <p>portfolio.abhirami.dev</p>
        </div>
      )}
    </div>
  )
}
