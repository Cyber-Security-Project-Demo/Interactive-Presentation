import React, { useState, useEffect } from 'react'
import { Shield, AlertTriangle, Lock } from 'lucide-react'

interface XSSPresentationProps { onBack?: () => void }

const XSSPresentation: React.FC<XSSPresentationProps> = ({ onBack }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: 'Understanding XSS Attacks',
      subtitle: 'Cross-Site Scripting Security Threats',
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <Shield className="w-24 h-24 text-blue-500" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-700">Web Security Basics</h3>
            <p className="text-lg text-gray-600 max-w-2xl">
              Learn how cross-site scripting attacks work and how to protect your websites from these common security threats
            </p>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6 max-w-3xl">
            <h4 className="font-semibold text-lg mb-4 text-blue-900">How XSS Attacks Work</h4>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="space-y-2">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl mb-2">👤</div>
                  <p className="text-sm font-medium">Attacker</p>
                </div>
                <p className="text-xs text-gray-600">Injects malicious code</p>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="text-2xl">→</div>
              </div>
              
              <div className="space-y-2">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl mb-2">🌐</div>
                  <p className="text-sm font-medium">Website</p>
                </div>
                <p className="text-xs text-gray-600">Stores & serves code</p>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="text-2xl">→</div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <div className="inline-block space-y-2">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl mb-2">😱</div>
                  <p className="text-sm font-medium">Victim</p>
                </div>
                <p className="text-xs text-gray-600">Browser executes malicious code</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Impact of XSS Attacks',
      subtitle: 'Understanding the Consequences',
      content: (
        <div className="flex flex-col h-full space-y-6 px-8">
          <div className="grid grid-cols-2 gap-6 flex-1">
            <div className="bg-red-50 rounded-lg p-6 border-2 border-red-200">
              <div className="flex items-center space-x-3 mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600" />
                <h3 className="text-xl font-bold text-red-900">Impact on Users</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 font-bold mt-1">•</span>
                  <span>Stolen credentials and account takeover</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 font-bold mt-1">•</span>
                  <span>Financial information exposure</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 font-bold mt-1">•</span>
                  <span>Personal data leakage and identity theft</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-lg p-6 border-2 border-orange-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-3xl">🏢</div>
                <h3 className="text-xl font-bold text-orange-900">Impact on Organizations</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span>Damaged reputation and loss of customer trust</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span>Customer churn and reduced acquisition</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span>Data breaches affecting multiple users</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-3xl">💰</div>
                <h3 className="text-xl font-bold text-purple-900">Financial Impact</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-purple-500 font-bold mt-1">•</span>
                  <span>Lost revenue from service interruptions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-500 font-bold mt-1">•</span>
                  <span>Legal costs and regulatory fines</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-500 font-bold mt-1">•</span>
                  <span>Remediation expenses and security upgrades</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-3xl">⚙️</div>
                <h3 className="text-xl font-bold text-blue-900">Technical Impact</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-500 font-bold mt-1">•</span>
                  <span>Malware distribution through trusted sites</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-500 font-bold mt-1">•</span>
                  <span>Access to internal networks and systems</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-500 font-bold mt-1">•</span>
                  <span>Website vulnerability to further attacks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'XSS Prevention Methods',
      subtitle: 'Security Best Practices for Developers',
      content: (
        <div className="flex flex-col h-full space-y-6 px-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-5 border-2 border-green-300">
              <div className="flex items-center space-x-2 mb-3">
                <Lock className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-bold text-green-900">Input Validation & Sanitization</h3>
              </div>
              <p className="text-sm text-gray-700 mb-2">Validate expected data types and formats</p>
              <div className="bg-gray-900 rounded p-3 text-xs">
                <code className="text-green-400">
                  const sanitizedInput = <br/>
                  &nbsp;&nbsp;DOMPurify.sanitize(userInput);
                </code>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-5 border-2 border-blue-300">
              <div className="flex items-center space-x-2 mb-3">
                <Lock className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-bold text-blue-900">Output Encoding</h3>
              </div>
              <p className="text-sm text-gray-700 mb-2">Encode all dynamic content before insertion</p>
              <div className="bg-gray-900 rounded p-3 text-xs space-y-1">
                <code className="text-green-400">
                  element.textContent = userInput;
                </code>
                <code className="text-green-400"> // Safe ✓</code>
                <br/>
                <code className="text-red-400">
                  element.innerHTML = userInput;
                </code>
                <code className="text-red-400"> // Unsafe ✗</code>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-5 border-2 border-purple-300">
              <div className="flex items-center space-x-2 mb-3">
                <Lock className="w-6 h-6 text-purple-600" />
                <h3 className="text-lg font-bold text-purple-900">Content Security Policy (CSP)</h3>
              </div>
              <p className="text-sm text-gray-700 mb-2">Restrict which resources can execute</p>
              <div className="bg-gray-900 rounded p-3 text-xs">
                <code className="text-purple-400">
                  Content-Security-Policy:<br/>
                  &nbsp;&nbsp;default-src 'self';
                </code>
              </div>
            </div>

            <div className="bg-orange-50 rounded-lg p-5 border-2 border-orange-300">
              <div className="flex items-center space-x-2 mb-3">
                <Shield className="w-6 h-6 text-orange-600" />
                <h3 className="text-lg font-bold text-orange-900">Additional Security Practices</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>Enable X-XSS-Protection header</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>Use secure frameworks (React, Angular, Vue.js)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>Implement HttpOnly and Secure cookie flags</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>Regular security testing (OWASP ZAP)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-4 border-2 border-green-300">
            <p className="text-center text-gray-800 font-semibold">
              🛡️ Remember: Security is a continuous process, not a one-time implementation
            </p>
          </div>
        </div>
      )
    }
  ]

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1)
    }
  }

  // Handle click navigation on slide content
  const handleSlideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const slideElement = e.currentTarget
    const clickX = e.clientX - slideElement.getBoundingClientRect().left
    const slideWidth = slideElement.offsetWidth
    
    // Left half goes back, right half goes forward
    if (clickX < slideWidth / 2) {
      prevSlide()
    } else {
      nextSlide()
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        nextSlide()
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        prevSlide()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide])

  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col">
      <div className="flex-1 flex flex-col p-8 relative">
        {onBack && (
          <button
            onClick={onBack}
            className="absolute -top-2 left-8 mt-2 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm z-10"
          >
            ← Back
          </button>
        )}
        <div className="bg-white rounded-lg shadow-2xl flex-1 flex flex-col overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
            <h1 className="text-3xl font-bold">{slides[currentSlide].title}</h1>
            <p className="text-blue-100 mt-1">{slides[currentSlide].subtitle}</p>
          </div>

          <div className="flex-1 p-8 overflow-auto cursor-pointer" onClick={handleSlideClick}>
            {slides[currentSlide].content}
          </div>

          <div className="border-t bg-gray-50 p-4 flex items-center justify-center">
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition ${index === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center pb-4 text-gray-600 text-sm">
        Slide {currentSlide + 1} of {slides.length}
      </div>
    </div>
  )
}

export default XSSPresentation