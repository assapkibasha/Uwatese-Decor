import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Gallery from './components/Gallery.jsx'
import Packages from './components/Packages.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
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
      <Navbar logoSrc="/umwatese_logo.jpg" />

      <main>
        <Hero img={img} images={images} />
        <Services />
        <Gallery img={img} images={images} />
        <Packages />
        <About img={img} images={images} />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
