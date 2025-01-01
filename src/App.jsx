import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Project from './Components/Project'
import Services from './Components/Services'
import './scss/index.css'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App
