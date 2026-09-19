import Navbar from './components/Navbar'

import "./App.css"
import Home from './components/Home'
import Skills from "./components/Skills"
import Projects from './components/Projects'
import Education from './components/Education'

const App = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-900 scroll-smooth '>
      <Navbar/>
      <Home/>
      <Skills/>
      <Projects/>
      <Education/>
    </div>
  )
}

export default App