import React, { useState, useEffect, useCallback } from 'react'

interface CSRFPresentationProps {
  onBack: () => void
}

const CSRFPresentation: React.FC<CSRFPresentationProps> = ({ onBack }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "🛡️ Understanding CSRF Attacks",
      content: (
        <div className="space-y-8">
          <h2 className="text-center text-blue-700 text-2xl font-bold">What is a CSRF Attack?</h2>
          <p className="text-center text-xl text-gray-700">
            CSRF stands for <strong>"Cross-Site Request Forgery"</strong>
          </p>
          <div className="bg-white border-4 border-blue-400 rounded-lg p-8 shadow-lg">
            <p className="text-center text-xl text-gray-700 mb-8">
              Think of it like someone tricking you into doing something you didn't want to do!
            </p>
            <div className="space-y-4">
              <div className="bg-blue-500 text-white p-4 rounded-lg text-center text-lg font-bold">
                🎭 A Bad Website Pretends to Be You
              </div>
              <div className="text-center text-3xl text-blue-600">⬇️</div>
              <div className="bg-red-500 text-white p-4 rounded-lg text-center text-lg font-bold">
                😱 Makes Actions on Your Behalf Without Permission
              </div>
            </div>
          </div>
          <p className="text-center text-xl text-gray-700">
            Let's learn how this happens and how to stay safe!
          </p>
        </div>
      )
    },
    {
      title: "How Does a CSRF Attack Happen?",
      content: (
        <div className="space-y-6">
          <div className="bg-white border-4 border-blue-400 rounded-lg p-6 shadow-lg space-y-4">
            <div className="flex items-start gap-4 bg-blue-50 p-4 rounded-lg">
              <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <div>
                <strong className="text-blue-700 text-lg">You log into your bank website</strong><br />
                <span className="text-gray-700">Your computer remembers you're logged in (using a cookie)</span>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-blue-50 p-4 rounded-lg">
              <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <div>
                <strong className="text-blue-700 text-lg">You visit a bad website</strong><br />
                <span className="text-gray-700">Maybe you clicked on a link in an email or ad</span>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-red-50 p-4 rounded-lg">
              <div className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <div>
                <strong className="text-red-700 text-lg">The bad website secretly sends a request</strong><br />
                <span className="text-gray-700">It tells your bank to transfer money - pretending to be YOU!</span>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-red-50 p-4 rounded-lg">
              <div className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">4</div>
              <div>
                <strong className="text-red-700 text-lg">The bank thinks it's really you</strong><br />
                <span className="text-gray-700">Because you're still logged in, the bank does what the bad website asked</span>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4">
            <p className="text-lg text-gray-700">
              <strong className="text-yellow-700">🔑 Key Point:</strong> The attack works because websites trust that requests coming from your computer are really from YOU!
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Why Can This Happen?",
      content: (
        <div className="space-y-6">
          <p className="text-xl text-gray-700">CSRF attacks are possible because of how websites work:</p>
          
          <div className="bg-white border-4 border-blue-400 rounded-lg p-6 shadow-lg space-y-4">
            <div className="bg-blue-400 text-white p-4 rounded-lg text-center text-lg font-bold">
              🍪 Cookies Remember You're Logged In
            </div>
            <div className="text-center text-2xl text-blue-600">+</div>
            <div className="bg-blue-400 text-white p-4 rounded-lg text-center text-lg font-bold">
              🌐 Websites Trust Requests from Your Browser
            </div>
            <div className="text-center text-2xl text-blue-600">=</div>
            <div className="bg-red-500 text-white p-4 rounded-lg text-center text-lg font-bold">
              ⚠️ Bad Websites Can Trick Your Browser
            </div>
          </div>

          <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-700 mb-4">Simple Analogy:</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Imagine you have a special key to your house. While you're holding the key, 
              someone tricks you into opening your door for them. They didn't steal your key - 
              they just made YOU use it without realizing what you were doing!
            </p>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4">
            <p className="text-lg text-gray-700">
              <strong className="text-yellow-700">💡 Remember:</strong> The attacker never sees your password or steals your login. 
              They just trick your browser into doing things while you're already logged in!
            </p>
          </div>
        </div>
      )
    },
    {
      title: "How to Prevent CSRF Attacks",
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 border-3 border-green-400 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-700 mb-4">🛡️ For Website Owners:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span><strong>Use CSRF Tokens:</strong> Add secret codes that change each time</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span><strong>Check Where Requests Come From:</strong> Only accept requests from your own website</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span><strong>Ask for Password Again:</strong> For important actions like transferring money</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border-3 border-blue-400 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-700 mb-4">👤 For Regular Users (You!):</h3>
            <div className="space-y-3">
              <div className="bg-green-500 text-white p-3 rounded-lg text-center font-bold">✅ Log Out When You're Done</div>
              <div className="bg-green-500 text-white p-3 rounded-lg text-center font-bold">✅ Don't Click Suspicious Links</div>
              <div className="bg-green-500 text-white p-3 rounded-lg text-center font-bold">✅ Use Modern Browsers (They Have Protection)</div>
              <div className="bg-green-500 text-white p-3 rounded-lg text-center font-bold">✅ Be Careful with Emails from Strangers</div>
            </div>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4">
            <p className="text-lg text-gray-700">
              <strong className="text-yellow-700">🎯 Best Advice:</strong> Always log out of important websites (like your bank) 
              when you're finished. Don't keep them open while browsing other sites!
            </p>
          </div>

          <p className="text-center text-2xl font-bold text-blue-700">
            Stay Safe Online! 🔒
          </p>
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
          <h1 className="text-3xl font-bold text-blue-800 mb-1">Understanding CSRF</h1>
          <p className="text-lg text-blue-600">Cross-Site Request Forgery Explained</p>
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

export default CSRFPresentation