import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let counter = 50

  const addValue =( )=>{
    console.log("value added",Math.random());
  }

  return (
    <>
      <h1>chai or react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>
      <br />
      <button>Remove value</button>
    </>
  )
}

export default App
