import React from 'react'
import Navbar from './components/Navbar'

import "./App.css"
import Home from './components/Home'
import Skills from "./components/Skills"

const App = () => {
  return (
    <div className='w-full h-full bg-zinc-900'>
      <Navbar/>
      <Home/>
      <Skills/>
    </div>
  )
}

export default App