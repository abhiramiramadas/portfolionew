'use client'

export function Marquee() {
  const text = "welcome to abhirami's portfolio ✦ software developer & creative technologist ✦ building cool stuff with code ✦ "
  
  // Repeat the text enough times to create seamless scrolling
  const repeatedText = text.repeat(10)
  
  return (
    <div className="w-full bg-[#1a3399] overflow-hidden py-2 z-[9999] relative">
      <div className="marquee-container whitespace-nowrap">
        <span className="text-white text-sm tracking-wide" style={{ fontFamily: 'Tahoma, sans-serif' }}>
          {repeatedText}
        </span>
        <span className="text-white text-sm tracking-wide" style={{ fontFamily: 'Tahoma, sans-serif' }}>
          {repeatedText}
        </span>
      </div>
    </div>
  )
}
