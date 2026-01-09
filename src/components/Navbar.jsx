export default function Navbar({ logoSrc }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl">
            <img
              src={logoSrc}
              alt="Uwatese Decor logo"
              className="h-8 w-8 rounded-lg object-contain  p-0.5"
              loading="eager"
            />
          </span>
          <div className="leading-tight">
            <div className="text-lg font-extrabold tracking-wide">UWATESE</div>
            <div className="text-xs text-white/60">Decor • Kigali, Rwanda</div>
          </div>
        </a>

        <nav className="hidden items-center gap-2 text-sm text-white/80 md:flex" aria-label="Primary">
          <a className="rounded-full px-3 py-2 hover:bg-white/10" href="#services">Services</a>
          <a className="rounded-full px-3 py-2 hover:bg-white/10" href="#gallery">Gallery</a>
          <a className="rounded-full px-3 py-2 hover:bg-white/10" href="#packages">Packages</a>
          <a className="rounded-full px-3 py-2 hover:bg-white/10" href="#about">About</a>
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-black hover:bg-orange-400"
        >
          Book now
        </a>
      </div>
    </header>
  )
}
