import React, { useState, useEffect, useCallback } from 'react'
import { Shield, AlertTriangle } from 'lucide-react'

interface APIPresentationProps {
  onBack: () => void
}

const APIPresentation: React.FC<APIPresentationProps> = ({ onBack }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "API Exploitation",
      content: (
        <div className="flex flex-col items-center justify-center h-full">
          <AlertTriangle className="w-32 h-32 mb-8 text-red-600 animate-pulse" />
          <h1 className="text-6xl font-bold mb-4 text-center text-red-800">API Exploitation</h1>
          <p className="text-3xl text-red-600 text-center">Understanding Attack Vectors & Prevention</p>
        </div>
      )
    },
    {
      title: "What is an API?",
      content: (
        <div className="space-y-6">
          <p className="text-xl text-gray-700 text-center">
            <span className="font-bold text-blue-600">API</span> stands for <span className="font-bold">Application Programming Interface</span>
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-3 border-blue-300 rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center">Think of an API as a Waiter in a Restaurant 🍽️</h3>
            <p className="text-lg text-gray-700 text-center mb-6">
              When you order food, you don't go to the kitchen. The <strong>waiter</strong> takes your order and brings back your food!
            </p>

            {/* Visual Flow Diagram */}
            <div className="flex flex-col items-center space-y-4 my-6">
              {/* Step 1: You */}
              <div className="bg-green-500 text-white px-8 py-4 rounded-lg shadow-lg text-center w-72">
                <div className="text-4xl mb-2">👤</div>
                <p className="text-xl font-bold">You (Customer)</p>
                <p className="text-sm mt-2">"I want pasta, please!"</p>
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center">
                <div className="w-1 h-12 bg-blue-400"></div>
                <div className="w-0 h-0 border-l-8 border-r-8 border-t-12 border-l-transparent border-r-transparent border-t-blue-400"></div>
              </div>

              {/* Step 2: Waiter/API */}
              <div className="bg-yellow-500 text-white px-8 py-6 rounded-lg shadow-lg text-center w-80 border-4 border-yellow-600">
                <div className="text-4xl mb-2">🍽️</div>
                <p className="text-xl font-bold">Waiter = API</p>
                <p className="text-sm mt-2">Takes your order to the kitchen</p>
                <p className="text-xs mt-1 bg-yellow-600 px-2 py-1 rounded">Carries messages safely</p>
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center">
                <div className="w-1 h-12 bg-blue-400"></div>
                <div className="w-0 h-0 border-l-8 border-r-8 border-t-12 border-l-transparent border-r-transparent border-t-blue-400"></div>
              </div>

              {/* Step 3: Kitchen/Server */}
              <div className="bg-red-500 text-white px-8 py-4 rounded-lg shadow-lg text-center w-72">
                <div className="text-4xl mb-2">👨‍🍳</div>
                <p className="text-xl font-bold">Kitchen (Server)</p>
                <p className="text-sm mt-2">Cooks your pasta!</p>
              </div>

              {/* Arrow Return */}
              <div className="flex flex-col items-center">
                <div className="w-1 h-12 bg-green-400"></div>
                <div className="w-0 h-0 border-l-8 border-r-8 border-t-12 border-l-transparent border-r-transparent border-t-green-400"></div>
              </div>

              {/* Step 4: Return to You */}
              <div className="bg-green-500 text-white px-8 py-4 rounded-lg shadow-lg text-center w-72">
                <div className="text-4xl mb-2">🍝</div>
                <p className="text-xl font-bold">You Get Your Food!</p>
                <p className="text-sm mt-2">Waiter brings it back</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-3 border-blue-400 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">How This Works for Websites 💻</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="bg-green-100 p-4 rounded-lg border-2 border-green-400">
                  <div className="text-3xl mb-2">👤</div>
                  <p className="font-bold text-gray-800">You</p>
                  <p className="text-xs text-gray-600">"Show my bank balance"</p>
                </div>
              </div>
              <div>
                <div className="bg-yellow-100 p-4 rounded-lg border-2 border-yellow-400">
                  <div className="text-3xl mb-2">🔄</div>
                  <p className="font-bold text-gray-800">API</p>
                  <p className="text-xs text-gray-600">Carries request</p>
                </div>
              </div>
              <div>
                <div className="bg-blue-100 p-4 rounded-lg border-2 border-blue-400">
                  <div className="text-3xl mb-2">🏦</div>
                  <p className="font-bold text-gray-800">Bank</p>
                  <p className="text-xs text-gray-600">Sends: "$1,000"</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-3 border-red-400 rounded-lg p-4">
            <p className="text-lg font-bold text-red-700 mb-2 text-center">⚠️ Why This Matters for Security</p>
            <p className="text-gray-700 text-center">
              If hackers can trick the API (the waiter), they can steal your information or make unauthorized requests—like transferring your money without permission!
            </p>
          </div>
        </div>
      )
    },
    {
      title: "How Attackers Exploit APIs",
      content: (
        <div className="space-y-6">
          <p className="text-xl text-gray-700 mb-4 text-center">
            Converting POST to GET Request Attack
          </p>

          <div className="flex flex-col items-center space-y-6">
            {/* Client */}
            <div className="bg-blue-500 text-white px-8 py-4 rounded-lg shadow-lg text-center w-64">
              <p className="text-xl font-semibold">Client Browser</p>
              <p className="text-sm mt-2">Logged-in User</p>
            </div>

            {/* Arrow Down */}
            <div className="flex flex-col items-center">
              <div className="w-1 h-12 bg-gray-400"></div>
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-400"></div>
              <p className="text-sm text-gray-600 mt-2 bg-yellow-100 px-3 py-1 rounded">POST Request Intercepted</p>
            </div>

            {/* Attacker Intercept */}
            <div className="bg-red-500 text-white px-8 py-6 rounded-lg shadow-lg text-center w-80 border-4 border-red-700">
              <AlertTriangle className="w-8 h-8 mx-auto mb-2" />
              <p className="text-xl font-semibold">⚠️ Attacker Intercepts</p>
              <p className="text-sm mt-2">Converts POST → GET</p>
              <code className="text-xs bg-red-700 px-2 py-1 rounded mt-2 block">
                /api/transfer?amount=1000
              </code>
            </div>

            {/* Arrow Down */}
            <div className="flex flex-col items-center">
              <div className="w-1 h-12 bg-red-400"></div>
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-red-400"></div>
              <p className="text-sm text-red-600 mt-2 bg-red-100 px-3 py-1 rounded">Malicious GET Request</p>
            </div>

            {/* Server */}
            <div className="bg-green-600 text-white px-8 py-4 rounded-lg shadow-lg text-center w-64">
              <p className="text-xl font-semibold">Server</p>
              <p className="text-sm mt-2">Processes Request</p>
            </div>
          </div>

          <div className="bg-red-50 border-3 border-red-400 rounded-lg p-4 mt-6">
            <p className="text-lg font-bold text-red-700">This attack tricks your browser into making unauthorized requests! 🚨</p>
          </div>
        </div>
      )
    },
    {
      title: "Prevention Methods",
      content: (
        <div className="space-y-6">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-12 h-12 text-green-600 mr-3" />
            <h3 className="text-2xl font-bold text-green-700">How to Stay Safe</h3>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🚪</span>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">1. Always Log Out After Using Banking Apps</h4>
                  <p className="text-gray-600 text-sm">Prevent session hijacking by properly ending your session.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📡</span>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">2. Do Not Access Your Bank From Public Wi-Fi Networks</h4>
                  <p className="text-gray-600 text-sm">Public networks are vulnerable to man-in-the-middle attacks.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
              <div className="flex items-start gap-3">
                <span className="text-2xl">👀</span>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">3. Regularly Check Recent Transactions</h4>
                  <p className="text-gray-600 text-sm">Early detection of unauthorized activities is crucial.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-orange-500">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔗</span>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">4. Never Open Suspicious Links While Logged Into Sensitive Sites</h4>
                  <p className="text-gray-600 text-sm mb-2">If you click a malicious link like:</p>
                  <code className="block bg-gray-100 px-3 py-2 rounded text-xs text-red-600 break-all">
                    https://vulnerablebank.com/api/transfer?amount=1000&toUser=attacker
                  </code>
                  <p className="text-gray-600 text-sm mt-2">Your browser will execute it automatically if you're already logged in.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-indigo-500">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔐</span>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">5. Use Two-Factor Authentication (2FA)</h4>
                  <p className="text-gray-600 text-sm">Enable OTP/SMS codes for additional security layer.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4 text-center mt-6">
            <p className="text-lg font-bold text-gray-700">Remember: Stay alert and protect your accounts! 🛡️</p>
          </div>
        </div>
      )
    },
    {
      title: "Thank You",
      content: (
        <div className="flex flex-col items-center justify-center h-full">
          <Shield className="w-32 h-32 mb-8 text-green-500" />
          <h1 className="text-6xl font-bold mb-6 text-center text-blue-800">Thank You</h1>
          <p className="text-3xl text-blue-600 text-center">Stay Safe, Stay Secure</p>
          <p className="text-2xl text-blue-500 mt-6">Questions?</p>
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
      className="h-screen bg-gradient-to-br from-red-100 via-orange-50 to-white p-4 cursor-pointer flex flex-col"
      onClick={handleClick}
    >
      <div className="max-w-5xl mx-auto flex-1 flex flex-col">
        {/* Header */}
        <div className="text-center mb-4 relative">
          <button
            onClick={(e) => { e.stopPropagation(); onBack() }}
            className="absolute top-0 left-0 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition text-sm"
          >
            ← Back
          </button>
          <h1 className="text-3xl font-bold text-red-800 mb-1">Understanding API Exploitation</h1>
          <p className="text-lg text-red-600">A Simple Guide to API Security</p>
        </div>

        {/* Slide Container */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 flex-1 flex flex-col overflow-hidden">
          <h2 className="text-2xl font-bold text-red-700 mb-4 pb-2 border-b-4 border-red-300">
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
                index === currentSlide ? 'bg-red-600 w-6' : 'bg-red-300'
              }`}
            />
          ))}
        </div>

        {/* Slide Counter & Instructions */}
        <div className="text-center">
          <div className="text-red-600 font-semibold text-sm">
            Slide {currentSlide + 1} of {slides.length}
          </div>
          <div className="text-red-500 text-xs mt-1">
            Click left/right side or use arrow keys
          </div>
        </div>
      </div>
    </div>
  )
}

export default APIPresentation