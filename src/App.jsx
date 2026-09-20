import Navbar from './components/Navbar'

import "./App.css"
import Home from './components/Home'
import Skills from "./components/Skills"
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-900 scroll-smooth '>
      <Navbar/>
      <Home/>
      <Skills/>
      <Projects/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App