import { useEffect, useState } from 'react'

export default function Navbar({ logoSrc }) {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const ids = ['home', 'services', 'gallery', 'packages', 'about', 'contact']
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const onScroll = () => {
      const y = window.scrollY + 120
      let next = 'home'
      for (const el of els) {
        if (el.offsetTop <= y) next = el.id
      }
      setActive(next)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-xl">
            <img
              src={logoSrc}
              alt="Uwatese Decor logo"
              className="h-10 w-10 rounded-lg object-contain p-0.5"
              loading="eager"
            />
          </span>
          <div className="leading-tight">
            <div className="text-lg font-extrabold tracking-wide">UWATESE</div>
            <div className="text-xs text-white/60">Decor • Kigali, Rwanda</div>
          </div>
        </a>

        <nav className="hidden items-center gap-2 text-sm text-white/80 md:flex" aria-label="Primary">
          <a
            className={`relative rounded-full px-3 py-2 hover:bg-white/10 ${active === 'home' ? 'bg-orange-500/15 text-orange-200' : ''}`}
            href="#home"
          >
            {active === 'home' && (
              <span className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-2 py-0.5 text-[10px] font-extrabold text-black">
                U
              </span>
            )}
            Home
          </a>
          <a
            className={`relative rounded-full px-3 py-2 hover:bg-white/10 ${active === 'services' ? 'bg-orange-500/15 text-orange-200' : ''}`}
            href="#services"
          >
            {active === 'services' && (
              <span className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-2 py-0.5 text-[10px] font-extrabold text-black">
                U
              </span>
            )}
            Services
          </a>
          <a
            className={`relative rounded-full px-3 py-2 hover:bg-white/10 ${active === 'gallery' ? 'bg-orange-500/15 text-orange-200' : ''}`}
            href="#gallery"
          >
            {active === 'gallery' && (
              <span className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-2 py-0.5 text-[10px] font-extrabold text-black">
                U
              </span>
            )}
            Gallery
          </a>
          <a
            className={`relative rounded-full px-3 py-2 hover:bg-white/10 ${active === 'packages' ? 'bg-orange-500/15 text-orange-200' : ''}`}
            href="#packages"
          >
            {active === 'packages' && (
              <span className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-2 py-0.5 text-[10px] font-extrabold text-black">
                U
              </span>
            )}
            Packages
          </a>
          <a
            className={`relative rounded-full px-3 py-2 hover:bg-white/10 ${active === 'about' ? 'bg-orange-500/15 text-orange-200' : ''}`}
            href="#about"
          >
            {active === 'about' && (
              <span className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-2 py-0.5 text-[10px] font-extrabold text-black">
                U
              </span>
            )}
            About
          </a>
          <a
            className={`relative rounded-full px-3 py-2 hover:bg-white/10 ${active === 'contact' ? 'bg-orange-500/15 text-orange-200' : ''}`}
            href="#contact"
          >
            {active === 'contact' && (
              <span className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-2 py-0.5 text-[10px] font-extrabold text-black">
                U
              </span>
            )}
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/250785661980"
            target="_blank"
            rel="noreferrer"
            className={`hidden items-center justify-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold md:inline-flex ${
              active === 'home'
                ? 'border-white/15 bg-white/5 text-white hover:bg-white/10'
                : 'border-orange-500/40 bg-orange-500 text-black hover:bg-orange-400'
            }`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path
                d="M20.52 3.48A11.8 11.8 0 0 0 12.05 0C5.47 0 .12 5.35.12 11.93c0 2.1.55 4.16 1.6 5.98L0 24l6.25-1.64a11.9 11.9 0 0 0 5.8 1.48h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.19-1.24-6.19-3.47-8.43Z"
                fill="currentColor"
                opacity="0.9"
              />
              <path
                d="M19.3 12.02c-.09-.04-2.08-1.03-2.4-1.14-.32-.12-.55-.18-.78.18-.23.36-.9 1.14-1.1 1.37-.2.23-.4.26-.74.09-.34-.17-1.42-.52-2.7-1.67-1-.9-1.67-2.02-1.86-2.36-.2-.34-.02-.52.15-.69.15-.15.34-.4.52-.6.17-.2.23-.34.35-.57.12-.23.06-.43-.03-.6-.09-.17-.78-1.88-1.07-2.58-.28-.67-.56-.58-.78-.59h-.67c-.23 0-.6.09-.92.43-.32.34-1.21 1.18-1.21 2.88 0 1.7 1.24 3.34 1.41 3.57.17.23 2.44 3.72 5.91 5.22.83.36 1.48.58 1.99.74.84.27 1.61.23 2.22.14.68-.1 2.08-.85 2.37-1.67.29-.82.29-1.53.2-1.67-.08-.14-.31-.23-.65-.4Z"
                fill={active === 'home' ? '#07070a' : '#07070a'}
              />
            </svg>
            <span>WhatsApp</span>
            <span className={active === 'home' ? 'text-white/70' : 'text-black/70'}>0785661980</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-black hover:bg-orange-400"
          >
            Book now
          </a>
        </div>
      </div>
    </header>
  )
}
