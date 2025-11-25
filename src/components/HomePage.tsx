import React from 'react'

type AttackType = 'home' | 'idor' | 'csrf' | 'xss' | 'sql' | 'command' | 'api'

interface HomePageProps {
  onAttackSelect: (attack: AttackType) => void
}

const HomePage: React.FC<HomePageProps> = ({ onAttackSelect }) => {
  const attacks = [
    { id: 'sql', name: 'SQL Injection', icon: '💉', description: 'Database attacks through malicious queries' },
    { id: 'xss', name: 'Cross-Site Scripting (XSS)', icon: '🔗', description: 'Injecting malicious scripts into websites' },
    { id: 'csrf', name: 'Cross-Site Request Forgery', icon: '🎭', description: 'Tricking users into unwanted actions' },
    { id: 'command', name: 'Command Injection', icon: '⚡', description: 'Executing system commands remotely' },
    { id: 'idor', name: 'Insecure Direct Object Reference', icon: '🔓', description: 'Accessing unauthorized data' },
    { id: 'api', name: 'API Exploitation', icon: '🔌', description: 'Attacking application interfaces' }
  ]

  return (
    <div className="h-screen bg-white p-4 flex flex-col">
      <div className="max-w-6xl mx-auto flex-1 flex flex-col">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-blue-800 mb-2">
            🛡️ Interactive Web Security Playground
          </h1>
          <p className="text-lg text-blue-600 mb-4">
            Explore and understand cyber security threats through interactive learning
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Attack Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
          {attacks.map((attack) => (
            <div
              key={attack.id}
              onClick={() => onAttackSelect(attack.id as AttackType)}
              className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-blue-100 hover:border-blue-400 hover:shadow-xl group flex flex-col justify-center"
            >
              <div className="text-center">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {attack.icon}
                </div>
                <h3 className="text-lg font-bold text-blue-800 mb-2 group-hover:text-blue-900 transition-colors">
                  {attack.name}
                </h3>
                <p className="text-blue-600 text-sm leading-relaxed">
                  {attack.description}
                </p>
                <div className="mt-3 inline-flex items-center text-blue-700 text-sm font-semibold group-hover:text-blue-800">
                  Learn More
                  <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-4">
          <p className="text-blue-600 text-sm">
            Click on any attack type to start learning! 🎓
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomePage