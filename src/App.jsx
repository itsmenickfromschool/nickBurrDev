import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-dark">
      < Navbar/>
      <div className='w-full h-screen text-4xl flex items-center justify-center text-blue-500'>
      Hello World!
      </div>
    </div>
  )
}

export default App
