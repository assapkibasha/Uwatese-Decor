import { useEffect, useState } from 'react'

export default function Navbar({ logoSrc, theme, toggleTheme }) {
  const [active, setActive] = useState('home')
  const isDark = theme === 'dark'

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
    <header
      className={`sticky top-0 z-50 border-b shadow-sm transition-all duration-300 ${isDark
        ? 'border-white/10 !bg-black text-white'
        : 'border-black/5 !bg-white text-black'
        }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-3 py-3   sm:px-6">
        <a href="#home" className="flex items-center gap-3 ">
          <span className="grid h-40 w-40 place-items-center rounded-xl sm:h-16 sm:w-16">
            <img
              src={logoSrc}
              alt="Uwatese Decor logo"
              className=" rounded-lg object-contain p-0.5 sm:h-14 sm:w-14"
              loading="eager"
            />
          </span>
          <div className="leading-tight text-foreground">
            <div className="text-lg font-extrabold tracking-wide text-foreground drop-shadow-md lg:text-xl">UWATESE</div>
            <div className="text-xs text-muted-foreground">Decor • Kigali, Rwanda</div>
          </div>
        </a>

        <nav className="hidden items-center gap-2 text-sm text-foreground/80 md:flex" aria-label="Primary">
          {['home', 'services', 'gallery', 'packages', 'about', 'contact'].map((item) => (
            <a
              key={item}
              className={`relative rounded-full px-3 py-2 transition-colors hover:bg-accent hover:text-accent-foreground ${active === item ? 'bg-orange-500/85 text-white' : ''
                }`}
              href={`#${item}`}
            >
              {active === item && (
                <span className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-2 py-0.5 text-[10px] font-extrabold text-white">
                  U
                </span>
              )}
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {toggleTheme && (
            <button
              onClick={toggleTheme}
              className="grid h-10 w-10 place-items-center rounded-full border border-black/5 bg-accent/50 text-foreground transition-colors hover:bg-accent dark:border-white/10"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          )}

          <a
            href="https://wa.me/250785661980"
            target="_blank"
            rel="noreferrer"
            className={`hidden items-center justify-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold transition-colors md:inline-flex ${active === 'home'
              ? 'border-black/5 bg-accent/50 text-foreground hover:bg-accent dark:border-white/10'
              : 'border-orange-500/40 bg-orange-500 text-white hover:bg-orange-600'
              }`}
          >
            <svg className="text-orange-500" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path
                d="M20.52 3.48A11.8 11.8 0 0 0 12.05 0C5.47 0 .12 5.35.12 11.93c0 2.1.55 4.16 1.6 5.98L0 24l6.25-1.64a11.9 11.9 0 0 0 5.8 1.48h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.19-1.24-6.19-3.47-8.43Z"
                fill="currentColor"
                opacity="0.9"
              />
              <path
                d="M19.3 12.02c-.09-.04-2.08-1.03-2.4-1.14-.32-.12-.55-.18-.78.18-.23.36-.9 1.14-1.1 1.37-.2.23-.4.26-.74.09-.34-.17-1.42-.52-2.7-1.67-1-.9-1.67-2.02-1.86-2.36-.2-.34-.02-.52.15-.69.15-.15.34-.4.52-.6.17-.2.23-.34.35-.57.12-.23.06-.43-.03-.6-.09-.17-.78-1.88-1.07-2.58-.28-.67-.56-.58-.78-.59h-.67c-.23 0-.6.09-.92.43-.32.34-1.21 1.18-1.21 2.88 0 1.7 1.24 3.34 1.41 3.57.17.23 2.44 3.72 5.91 5.22.83.36 1.48.58 1.99.74.84.27 1.61.23 2.22.14.68-.1 2.08-.85 2.37-1.67.29-.82.29-1.53.2-1.67-.08-.14-.31-.23-.65-.4Z"
                fill="#ffffff"
              />
            </svg>
            <span>WhatsApp</span>
            <span className="opacity-70">0785661980</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600"
          >
            Book now
          </a>
        </div>
      </div>
    </header>
  )
}
