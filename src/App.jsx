import Navbar from './components/Navbar'

import "./App.css"
import Home from './components/Home'
import Skills from "./components/Skills"
import Projects from './components/Projects'

const App = () => {
  return (
    <div className='w-full h-full bg-zinc-900'>
      <Navbar/>
      <Home/>
      <Skills/>
      <Projects/>
    </div>
  )
}

export default App