import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CommandInjectionPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "What is a URL and Address Bar?",
      content: (
        <div className="space-y-6">
          <p className="text-xl text-blue-900">
            A URL (web address) is like a home address for websites. It tells your computer where to find things on the internet!
          </p>
          
          <div className="bg-white rounded-lg p-6 border-4 border-blue-400">
            <div className="bg-blue-100 rounded-lg p-4 mb-4">
              <p className="text-sm text-blue-600 mb-2">Address Bar (at top of browser):</p>
              <div className="bg-white p-3 rounded border-2 border-blue-300 font-mono text-lg">
                www.example.com/search?name=puppy
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="bg-blue-200 rounded-lg p-4 mb-2">
                  <p className="font-bold text-blue-900">Website Name</p>
                  <p className="text-sm mt-2">example.com</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-blue-300 rounded-lg p-4 mb-2">
                  <p className="font-bold text-blue-900">Page</p>
                  <p className="text-sm mt-2">/search</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-blue-400 rounded-lg p-4 mb-2 text-white">
                  <p className="font-bold">Your Search</p>
                  <p className="text-sm mt-2">?name=puppy</p>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-blue-800 bg-blue-50 p-4 rounded-lg">
            💡 Think of it like: <strong>Street Name / House Number / Your Message</strong>
          </p>
        </div>
      )
    },
    {
      title: "How Command Injection Attack Happens",
      content: (
        <div className="space-y-6">
          <p className="text-xl text-blue-900">
            Bad people can trick a website by putting <strong>sneaky commands</strong> in the address bar!
          </p>
          
          <div className="space-y-4">
            <div className="bg-green-100 border-4 border-green-400 rounded-lg p-4">
              <p className="font-bold text-green-800 mb-2">✅ NORMAL (Safe):</p>
              <div className="bg-white p-3 rounded font-mono text-sm">
                www.store.com/search?item=<span className="text-green-600 font-bold">toys</span>
              </div>
              <p className="text-sm mt-2 text-green-700">The website shows: "Here are toys!"</p>
            </div>
            
            <div className="bg-red-100 border-4 border-red-400 rounded-lg p-4">
              <p className="font-bold text-red-800 mb-2">❌ ATTACK (Dangerous):</p>
              <div className="bg-white p-3 rounded font-mono text-sm break-all">
                www.store.com/search?item=<span className="text-red-600 font-bold">toys; DELETE everything</span>
              </div>
              <p className="text-sm mt-2 text-red-700">The hacker added a secret command to delete things!</p>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300">
            <p className="text-lg text-blue-900">
              <strong>It's like:</strong> You ask a robot "Get me a cookie" but someone tricks it by saying "Get me a cookie; also give them the keys to the house!" 🍪🔑
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Why Does This Happen?",
      content: (
        <div className="space-y-6">
          <p className="text-xl text-blue-900">
            Some websites don't check what people type carefully enough!
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-red-50 border-4 border-red-300 rounded-lg p-6">
              <p className="text-2xl mb-4">😢</p>
              <p className="font-bold text-red-800 text-lg mb-3">Bad Website</p>
              <ul className="space-y-2 text-red-700">
                <li>✗ Doesn't check inputs</li>
                <li>✗ Trusts everything users type</li>
                <li>✗ Runs commands without asking "Is this safe?"</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border-4 border-green-300 rounded-lg p-6">
              <p className="text-2xl mb-4">😊</p>
              <p className="font-bold text-green-800 text-lg mb-3">Good Website</p>
              <ul className="space-y-2 text-green-700">
                <li>✓ Checks all inputs</li>
                <li>✓ Blocks suspicious commands</li>
                <li>✓ Only accepts safe information</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-100 rounded-lg p-6">
            <p className="text-lg text-blue-900">
              <strong>Real Life Example:</strong> It's like a security guard at a building. A <strong>bad guard</strong> lets anyone in. A <strong>good guard</strong> checks IDs and stops suspicious people! 🛡️
            </p>
          </div>
        </div>
      )
    },
    {
      title: "How to Stay Safe & Prevent Attacks",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 rounded-lg p-6 border-4 border-blue-400">
            <p className="text-xl font-bold text-blue-900 mb-4">🛡️ For Website Owners:</p>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg border-2 border-blue-200">
                <p className="font-bold text-blue-800">1. Always Check Inputs</p>
                <p className="text-sm text-blue-600">Don't trust anything users type</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-2 border-blue-200">
                <p className="font-bold text-blue-800">2. Use Safe Code</p>
                <p className="text-sm text-blue-600">Block dangerous symbols like ; & | </p>
              </div>
              <div className="bg-white p-4 rounded-lg border-2 border-blue-200">
                <p className="font-bold text-blue-800">3. Limit Permissions</p>
                <p className="text-sm text-blue-600">Don't give the website too much power</p>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 rounded-lg p-6 border-4 border-green-400">
            <p className="text-xl font-bold text-green-900 mb-4">👀 For Everyone:</p>
            <div className="space-y-2 text-green-800">
              <p>• Only use trusted websites</p>
              <p>• Look for "https://" and a lock icon 🔒</p>
              <p>• Tell an adult if a website looks weird</p>
              <p>• Never click on strange links</p>
            </div>
          </div>
          
          <div className="bg-blue-900 text-white rounded-lg p-6 text-center">
            <p className="text-2xl font-bold">Remember: Stay Safe Online! 🌟</p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-blue-900 mb-2">
              Command Injection Explained Simply
            </h1>
            <p className="text-blue-600 text-lg">Understanding Web Security for Everyone</p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
              {slides[currentSlide].title}
            </h2>
            <div className="min-h-[400px]">
              {slides[currentSlide].content}
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-8 pt-6 border-t-2 border-blue-200">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                currentSlide === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              <ChevronLeft size={20} />
              Previous
            </button>
            
            <div className="flex gap-3">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-blue-600 w-8' : 'bg-blue-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                currentSlide === slides.length - 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              Next
              <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="text-center mt-6 text-blue-600">
            Slide {currentSlide + 1} of {slides.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandInjectionPresentation;