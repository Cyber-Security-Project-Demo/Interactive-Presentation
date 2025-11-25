import { useState } from 'react'
import HomePage from './components/HomePage'
import IDORPresentation from './components/attacks/idor'
import CSRFPresentation from './components/attacks/csrf'
import XSSPresentation from './components/attacks/xss'
import SQLPresentation from './components/attacks/sql'
import CommandPresentation from './components/attacks/command'
import APIPresentation from './components/attacks/api'

type AttackType = 'home' | 'idor' | 'csrf' | 'xss' | 'sql' | 'command' | 'api'

function App() {
  const [currentAttack, setCurrentAttack] = useState<AttackType>('home')

  const renderCurrentPresentation = () => {
    switch (currentAttack) {
      case 'idor':
        return <IDORPresentation onBack={() => setCurrentAttack('home')} />
      case 'csrf':
        return <CSRFPresentation onBack={() => setCurrentAttack('home')} />
      case 'xss':
        return <XSSPresentation onBack={() => setCurrentAttack('home')} />
      case 'sql':
        return <SQLPresentation onBack={() => setCurrentAttack('home')} />
      case 'command':
        return <CommandPresentation onBack={() => setCurrentAttack('home')} />
      case 'api':
        return <APIPresentation onBack={() => setCurrentAttack('home')} />
      case 'home':
      default:
        return <HomePage onAttackSelect={setCurrentAttack} />
    }
  }

  return renderCurrentPresentation()
}

export default App
