import React from 'react'

interface SQLPresentationProps {
  onBack: () => void
}

const SQLPresentation: React.FC<SQLPresentationProps> = ({ onBack }) => {
  return (
    <div className="h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-white p-4 flex flex-col">
      <div className="max-w-5xl mx-auto flex-1 flex flex-col justify-center items-center">
        <button
          onClick={onBack}
          className="absolute top-8 left-8 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm"
        >
          ← Back
        </button>
        
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">SQL Injection Presentation</h1>
          <p className="text-xl text-blue-600 mb-8">Coming Soon...</p>
          <div className="text-6xl mb-4">💉</div>
          <p className="text-lg text-gray-600">
            This presentation will be implemented by another team member.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SQLPresentation