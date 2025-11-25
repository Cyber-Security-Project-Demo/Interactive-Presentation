import React, { useState, useEffect, useCallback } from 'react'

interface IDORPresentationProps {
  onBack: () => void
}

const IDORPresentation: React.FC<IDORPresentationProps> = ({ onBack }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "What is a Web Address?",
      content: (
        <div className="space-y-6">
          <p className="text-xl text-gray-700">
            When you visit a website, you use an <span className="font-bold text-blue-600">address</span> - just like your home has an address!
          </p>
          
          <div className="bg-white border-4 border-blue-400 rounded-lg p-6 shadow-lg">
            <div className="bg-gray-100 rounded p-3 mb-4">
              <p className="text-sm text-gray-600 mb-2">Address Bar (at top of browser)</p>
              <div className="bg-white border-2 border-gray-300 rounded p-3 font-mono text-blue-600">
                www.mywebsite.com/profile?id=123
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-blue-500 text-white px-3 py-1 rounded font-bold text-sm">id=123</div>
                <p className="text-gray-700">This number tells the website WHICH person's profile to show</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
            <p className="text-lg text-gray-700">
              Think of it like apartment numbers: <span className="font-bold">Apartment #123</span> is YOUR room, <span className="font-bold">Apartment #124</span> is someone else's room!
            </p>
          </div>
        </div>
      )
    },
    {
      title: "What is IDOR Attack?",
      content: (
        <div className="space-y-6">
          <p className="text-xl text-gray-700">
            <span className="font-bold text-red-600">IDOR</span> means <span className="font-bold">"Insecure Direct Object Reference"</span>
          </p>
          <p className="text-lg text-gray-600">In simple words: Someone can see OTHER people's private stuff by changing numbers in the address!</p>
          
          <div className="bg-white border-4 border-blue-400 rounded-lg p-6 shadow-lg space-y-4">
            <div>
              <p className="font-bold text-green-600 mb-2">✓ Your Profile (Safe)</p>
              <div className="bg-gray-100 rounded p-3 font-mono text-sm text-blue-600">
                www.mywebsite.com/profile?id=123
              </div>
              <p className="text-sm text-gray-600 mt-2">You see YOUR photos and messages</p>
            </div>

            <div className="text-center text-2xl text-red-500">↓ Change the number! ↓</div>

            <div>
              <p className="font-bold text-red-600 mb-2">✗ Someone Else's Profile (Danger!)</p>
              <div className="bg-gray-100 rounded p-3 font-mono text-sm text-red-600">
                www.mywebsite.com/profile?id=124
              </div>
              <p className="text-sm text-gray-600 mt-2">Now you see THEIR private photos and messages!</p>
            </div>
          </div>

          <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4">
            <p className="text-lg font-bold text-red-700">This is BAD! Private things should stay private! 🔒</p>
          </div>
        </div>
      )
    },
    {
      title: "Why Does This Happen?",
      content: (
        <div className="space-y-6">
          <p className="text-xl text-gray-700">
            The website <span className="font-bold text-red-600">forgot to check</span> if you're allowed to see that information!
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-50 border-3 border-red-400 rounded-lg p-6">
              <div className="text-4xl mb-3">❌</div>
              <p className="font-bold text-red-700 text-lg mb-2">Bad Website</p>
              <p className="text-gray-700">Shows ANY profile when you change the number - no checking!</p>
            </div>

            <div className="bg-green-50 border-3 border-green-400 rounded-lg p-6">
              <div className="text-4xl mb-3">✅</div>
              <p className="font-bold text-green-700 text-lg mb-2">Good Website</p>
              <p className="text-gray-700">Checks: "Is this YOUR profile? If not, you can't see it!"</p>
            </div>
          </div>

          <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-6">
            <p className="text-lg font-bold text-blue-700 mb-3">Real Life Example:</p>
            <div className="space-y-2 text-gray-700">
              <p>🏠 Imagine a building where you can open ANY door just by knowing the apartment number!</p>
              <p>🔑 A GOOD building checks: "Do you have the KEY to this apartment?"</p>
              <p>💻 A GOOD website checks: "Do you have PERMISSION to see this?"</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "How to Stay Safe?",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 border-3 border-blue-400 rounded-lg p-6">
            <p className="text-xl font-bold text-blue-700 mb-4">For Kids & Users:</p>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔒</span>
                <p className="text-lg">Don't share your private links with others</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚠️</span>
                <p className="text-lg">If you can see someone else's private stuff by changing numbers, tell an adult!</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">👀</span>
                <p className="text-lg">Use websites that are trusted and safe</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-3 border-green-400 rounded-lg p-6">
            <p className="text-xl font-bold text-green-700 mb-4">For Website Makers:</p>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <p className="text-lg">Always CHECK if the user is allowed to see that data</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔑</span>
                <p className="text-lg">Use special codes (tokens) instead of simple numbers</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🧪</span>
                <p className="text-lg">Test your website to make sure it's secure!</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4 text-center">
            <p className="text-lg font-bold text-gray-700">Remember: Privacy is important! Everyone deserves to keep their information safe! 🛡️</p>
          </div>
        </div>
      )
    }
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const width = rect.width
    
    if (x < width / 2) {
      prevSlide()
    } else {
      nextSlide()
    }
  }

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide()
      if (e.key === 'ArrowRight') nextSlide()
      if (e.key === 'Escape') onBack()
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [nextSlide, prevSlide, onBack])

  return (
    <div 
      className="h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-white p-4 cursor-pointer flex flex-col"
      onClick={handleClick}
    >
      <div className="max-w-5xl mx-auto flex-1 flex flex-col">
        {/* Header */}
        <div className="text-center mb-4 relative">
          <button
            onClick={(e) => { e.stopPropagation(); onBack() }}
            className="absolute top-0 left-0 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm"
          >
            ← Back
          </button>
          <h1 className="text-3xl font-bold text-blue-800 mb-1">Understanding IDOR</h1>
          <p className="text-lg text-blue-600">A Simple Guide to Web Security</p>
        </div>

        {/* Slide Container */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 flex-1 flex flex-col overflow-hidden">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 pb-2 border-b-4 border-blue-300">
            {slides[currentSlide].title}
          </h2>
          <div className="text-base flex-1 overflow-y-auto">
            {slides[currentSlide].content}
          </div>
        </div>

        {/* Navigation Indicators */}
        <div className="flex justify-center gap-2 my-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={(e) => { e.stopPropagation(); setCurrentSlide(index) }}
              className={`w-2 h-2 rounded-full transition ${
                index === currentSlide ? 'bg-blue-600 w-6' : 'bg-blue-300'
              }`}
            />
          ))}
        </div>

        {/* Slide Counter & Instructions */}
        <div className="text-center">
          <div className="text-blue-600 font-semibold text-sm">
            Slide {currentSlide + 1} of {slides.length}
          </div>
          <div className="text-blue-500 text-xs mt-1">
            Click left/right side or use arrow keys
          </div>
        </div>
      </div>
    </div>
  )
}

export default IDORPresentation