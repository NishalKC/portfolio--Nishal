import React from 'react'
import Navbar from './components/Navbar'

import "./App.css"
import Home from './components/Home'

const App = () => {
  return (
    <div className='w-full h-full bg-zinc-900'>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App