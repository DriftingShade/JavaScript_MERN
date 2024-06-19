import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonCard from './components/PersonCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PersonCard firstName="Shane" lastName="Nosack" age={33} hairColor="Brown"/>
      <PersonCard firstName="Bob" lastName="Ross" age={82} hairColor="Black"/>
      <PersonCard firstName="Ciso" lastName="Lobo" age={40} hairColor="Blue"/>
      <PersonCard firstName="Patrick" lastName="Stewart" age={102} hairColor="Bald"/>
    </>
  )
}

export default App
