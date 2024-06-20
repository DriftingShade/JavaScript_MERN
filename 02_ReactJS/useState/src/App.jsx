import { useState } from 'react'
import './App.css'
import Calculation from './components/Calculation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Calculation state="California" salesTax={.0725} />
      <Calculation state="New York" salesTax={.04} />
      <Calculation state="Texas" salesTax={.0625} />
    </>
  )
}

export default App
