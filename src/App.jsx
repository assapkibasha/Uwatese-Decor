import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Location from './components/Location.jsx'
import Gallery from './components/Gallery.jsx'
import Packages from './components/Packages.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { useEffect, useState } from 'react'

function App() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 450)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const images = [
    'WhatsApp Image 2026-01-05 at 11.47.55 AM.jpeg',
    'WhatsApp Image 2026-01-05 at 11.47.58 AM.jpeg',
    'WhatsApp Image 2026-01-05 at 11.47.59 AM.jpeg',
    'WhatsApp Image 2026-01-05 at 11.48.01 AM.jpeg',
    'WhatsApp Image 2026-01-05 at 11.48.07 AM.jpeg',
    'WhatsApp Image 2026-01-05 at 11.48.08 AM.jpeg',
    'WhatsApp Image 2026-01-05 at 11.48.09 AM.jpeg',
    'WhatsApp Image 2026-01-05 at 11.48.10 AM.jpeg',
    'WhatsApp Image 2026-01-05 at 11.48.11 AM.jpeg',
    'WhatsApp Image 2026-01-05 at 11.48.12 AM.jpeg',
    'WhatsApp Image 2026-01-05 at 11.48.13 AM.jpeg',
    'WhatsApp Image 2026-01-05 at 11.48.15 AM.jpeg',
    'WhatsApp Image 2026-01-05 at 11.48.17 AM.jpeg',
  ]

  const img = (name) => `/images/${encodeURIComponent(name)}`

  return (
    <div className="min-h-screen bg-[#07070a] text-white">
      <Navbar logoSrc="/uwatese_logo.jpg" />

      <main>
        <Hero img={img} images={images} />
        <Services />
        <Location />
        <Gallery img={img} images={images} />
        <Packages />
        <About img={img} images={images} />
        <Contact img={img} images={images} email="uwatesedecorinfo@gmail.com" location="Kigali, Gasabo, Kabuga" />
      </main>

      <Footer />

      <button
        type="button"
        aria-label="Return to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-black/50 text-white shadow-[0_20px_40px_rgba(0,0,0,0.35)] backdrop-blur transition hover:bg-black/70 ${
          showTop ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M6 11l6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}

export default App
