import React, { useState, useEffect, useCallback } from 'react'

interface SQLPresentationProps {
  onBack: () => void
}

const SQLPresentation: React.FC<SQLPresentationProps> = ({ onBack }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "What is a Database?",
      content: (
        <div className="space-y-6">
          <p className="text-xl text-gray-700">
            A <span className="font-bold text-blue-600">database</span> is like a digital filing cabinet where websites store information!
          </p>
          
          <div className="bg-white border-4 border-blue-400 rounded-lg p-6 shadow-lg">
            <div className="text-center mb-4">
              <div className="text-6xl mb-2">🗄️</div>
              <p className="text-lg font-bold text-blue-700">Database</p>
            </div>
            
            <div className="space-y-3">
              <div className="bg-blue-50 border-2 border-blue-300 rounded p-4">
                <p className="font-bold text-blue-600 mb-2">📁 Users Table</p>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>• Username: john123</p>
                  <p>• Password: secret456</p>
                  <p>• Email: john@email.com</p>
                </div>
              </div>
              
              <div className="bg-green-50 border-2 border-green-300 rounded p-4">
                <p className="font-bold text-green-600 mb-2">💬 Messages Table</p>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>• From: Sarah</p>
                  <p>• To: John</p>
                  <p>• Message: "Hello!"</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
            <p className="text-lg text-gray-700">
              Websites ask the database questions like: <span className="font-bold">"Show me John's password"</span> to check if you can log in!
            </p>
          </div>
        </div>
      )
    },
    {
      title: "What is SQL Injection Attack?",
      content: (
        <div className="space-y-6">
          <p className="text-xl text-gray-700">
            <span className="font-bold text-red-600">SQL Injection</span> is when hackers trick the database by typing <span className="font-bold">special code</span> instead of normal text!
          </p>
          
          <div className="bg-white border-4 border-blue-400 rounded-lg p-6 shadow-lg space-y-4">
            <div>
              <p className="font-bold text-green-600 mb-2">✓ Normal Login (Safe)</p>
              <div className="bg-gray-100 rounded p-3">
                <p className="text-sm text-gray-600 mb-1">Username:</p>
                <div className="bg-white border-2 border-gray-300 rounded p-2 font-mono text-sm">
                  john123
                </div>
                <p className="text-sm text-gray-600 mt-2 mb-1">Password:</p>
                <div className="bg-white border-2 border-gray-300 rounded p-2 font-mono text-sm">
                  ••••••••
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">Website checks: "Is this the right password?"</p>
            </div>

            <div className="text-center text-2xl text-red-500">↓ Hacker uses special code! ↓</div>

            <div>
              <p className="font-bold text-red-600 mb-2">✗ SQL Injection Attack (Danger!)</p>
              <div className="bg-gray-100 rounded p-3">
                <p className="text-sm text-gray-600 mb-1">Username:</p>
                <div className="bg-white border-2 border-red-400 rounded p-2 font-mono text-sm text-red-600">
                  admin
                </div>
                <p className="text-sm text-gray-600 mt-2 mb-1">Password:</p>
                <div className="bg-white border-2 border-red-400 rounded p-2 font-mono text-sm text-red-600">
                  ' OR '1'='1
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">This special code tricks the database: "Let me in without checking!"</p>
            </div>
          </div>

          <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4">
            <p className="text-lg font-bold text-red-700">The hacker logs in WITHOUT knowing the real password! 💀</p>
          </div>
        </div>
      )
    },
    {
      title: "How SQL Injection Works",
      content: (
        <div className="space-y-6">
          <p className="text-xl text-gray-700">
            Let's see how the attack flows through the system:
          </p>

          <div className="bg-white border-4 border-blue-400 rounded-lg p-6 shadow-lg space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
              <div className="flex-1">
                <p className="font-bold text-gray-700">User enters username & password</p>
                <p className="text-sm text-gray-600">Normal: "john123" and "mypassword"</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
              <div className="flex-1">
                <p className="font-bold text-gray-700">Attacker enters special code</p>
                <p className="text-sm text-gray-600 font-mono bg-red-50 p-2 rounded mt-1">' OR '1'='1</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
              <div className="flex-1">
                <p className="font-bold text-gray-700">Malicious SQL sent to database</p>
                <p className="text-sm text-gray-600">The database gets confused! 🔓</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
              <div className="flex-1">
                <p className="font-bold text-gray-700">Database bypasses security check</p>
                <p className="text-sm text-gray-600">❌ Login Failed → ✅ Access Granted!</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
              <div className="flex-1">
                <p className="font-bold text-gray-700">Attacker logs in successfully</p>
                <p className="text-sm text-gray-600">🎉 Welcome, admin! (But they shouldn't be in!)</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4">
            <p className="text-lg text-gray-700">
              <span className="font-bold">Think of it like:</span> Instead of showing your ID at the door, you tell a magic spell that opens ALL doors! 🪄
            </p>
          </div>
        </div>
      )
    },
    {
      title: "What Can Hackers Do?",
      content: (
        <div className="space-y-6">
          <p className="text-xl text-gray-700">
            SQL Injection can cause <span className="font-bold text-red-600">SERIOUS damage</span>:
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-50 border-3 border-red-400 rounded-lg p-5">
              <div className="text-4xl mb-3">🔓</div>
              <p className="font-bold text-red-700 text-lg mb-2">Unauthorized Login</p>
              <p className="text-gray-700 text-sm">Log in as ANYONE without knowing their password!</p>
            </div>

            <div className="bg-orange-50 border-3 border-orange-400 rounded-lg p-5">
              <div className="text-4xl mb-3">👀</div>
              <p className="font-bold text-orange-700 text-lg mb-2">View/Change Data</p>
              <p className="text-gray-700 text-sm">See private information and change accounts!</p>
            </div>

            <div className="bg-purple-50 border-3 border-purple-400 rounded-lg p-5">
              <div className="text-4xl mb-3">🗑️</div>
              <p className="font-bold text-purple-700 text-lg mb-2">Delete Information</p>
              <p className="text-gray-700 text-sm">Erase important data and cause big problems!</p>
            </div>

            <div className="bg-gray-50 border-3 border-gray-400 rounded-lg p-5">
              <div className="text-4xl mb-3">🔑</div>
              <p className="font-bold text-gray-700 text-lg mb-2">Full System Control</p>
              <p className="text-gray-700 text-sm">Take over the ENTIRE website and server!</p>
            </div>
          </div>

          <div className="bg-red-50 border-2 border-red-400 rounded-lg p-5">
            <p className="text-lg font-bold text-red-700 mb-3">⚠️ Real World Impact:</p>
            <div className="space-y-2 text-gray-700">
              <p>💳 Steal credit card information</p>
              <p>📧 Read private messages and emails</p>
              <p>🏦 Transfer money from bank accounts</p>
              <p>🔥 Delete entire company databases</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "How to Prevent SQL Injection?",
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 border-3 border-green-400 rounded-lg p-6">
            <p className="text-xl font-bold text-green-700 mb-4">🛡️ For Website Developers:</p>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <p className="text-lg font-bold">Use Prepared Statements</p>
                  <p className="text-sm">Treat user input as DATA, not as CODE</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🧹</span>
                <div>
                  <p className="text-lg font-bold">Clean User Input</p>
                  <p className="text-sm">Remove or block special characters that can cause harm</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔒</span>
                <div>
                  <p className="text-lg font-bold">Limit Database Permissions</p>
                  <p className="text-sm">Don't give the database too much power</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🧪</span>
                <div>
                  <p className="text-lg font-bold">Test Your Security</p>
                  <p className="text-sm">Try to attack your own website to find weak spots</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-3 border-blue-400 rounded-lg p-6">
            <p className="text-xl font-bold text-blue-700 mb-4">👦 For Kids & Users:</p>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔐</span>
                <p className="text-lg">Use strong, unique passwords for each website</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚠️</span>
                <p className="text-lg">Tell adults if a website acts strange or broken</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌐</span>
                <p className="text-lg">Only use trusted, secure websites (look for the lock 🔒 icon)</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4 text-center">
            <p className="text-lg font-bold text-gray-700">Remember: Good security protects everyone! Stay safe online! 🛡️✨</p>
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
      className="h-screen bg-gradient-to-br from-cyan-100 via-blue-50 to-white p-4 cursor-pointer flex flex-col"
      onClick={handleClick}
    >
      <div className="max-w-5xl mx-auto flex-1 flex flex-col">
        {/* Header */}
        <div className="text-center mb-4 relative">
          <button
            onClick={(e) => { e.stopPropagation(); onBack() }}
            className="absolute top-0 left-0 px-3 py-1 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition text-sm"
          >
            ← Back
          </button>
          <h1 className="text-3xl font-bold text-cyan-800 mb-1">Understanding SQL Injection</h1>
          <p className="text-lg text-cyan-600">How Databases Can Be Tricked</p>
        </div>

        {/* Slide Container */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 flex-1 flex flex-col overflow-hidden">
          <h2 className="text-2xl font-bold text-cyan-700 mb-4 pb-2 border-b-4 border-cyan-300">
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
                index === currentSlide ? 'bg-cyan-600 w-6' : 'bg-cyan-300'
              }`}
            />
          ))}
        </div>

        {/* Slide Counter & Instructions */}
        <div className="text-center">
          <div className="text-cyan-600 font-semibold text-sm">
            Slide {currentSlide + 1} of {slides.length}
          </div>
          <div className="text-cyan-500 text-xs mt-1">
            Click left/right side or use arrow keys • Press ESC to go back
          </div>
        </div>
      </div>
    </div>
  )
}

export default SQLPresentation