import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const renderPage = () => {
    switch (activeSection) {
      case 'home':
        return <Home setActiveSection={setActiveSection} />
      case 'about':
        return <About />
      case 'products':
        return <Products />
      case 'services':
        return <Services />
      case 'contact':
        return <Contact />
      default:
        return <Home setActiveSection={setActiveSection} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      {renderPage()}
      <Footer />
    </div>
  )
}

export default App
