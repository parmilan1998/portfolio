import { useEffect } from 'react'
import './App.css'
import Aos from 'aos'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/UI/Hero'

function App() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  )
}

export default App
