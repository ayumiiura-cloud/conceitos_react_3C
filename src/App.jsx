import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [carro, setcarro] = useState('BMW')

  function trocardecarro() {
    setcarro("Mustang")
  }

  return (
    <>
      <h1>{carro}</h1>
      <button onClick={trocardecarro}>trocar de carro</button>
    </>
  )
}

export default App
