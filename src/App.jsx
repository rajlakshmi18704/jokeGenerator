import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import JokesGenerator from './components/JokesGenerator'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
   <h1>Joke Generator</h1>
  <JokesGenerator/>
      </div>
    </>
  )
}

export default App
