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
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15">
              <span className="h-4 w-4 rounded-full bg-orange-500" />
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

      <main>
        <section id="home" className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-top"
            style={{ backgroundImage: `url('${img(images[3])}')` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/65 to-[#07070a]" aria-hidden="true" />

          <div className="relative mx-auto w-full max-w-7xl px-4 pb-14 pt-14 sm:px-6 sm:pt-20">
            <p className="text-xs font-semibold tracking-[0.24em] text-white/70">WEDDINGS • PARTIES • CLOTHES RENTAL</p>
            <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl md:text-7xl">
              UWATESE
              <span className="block text-white/90">DECOR</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              Wedding &amp; event decoration in Kigali, plus stylish outfits and accessories for rent. We plan,
              decorate, and style your celebration—so it looks premium and feels unforgettable.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-black hover:bg-orange-400"
              >
                Request a quote
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                View gallery
              </a>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {[images[0], images[1], images[2]].map((name) => (
                <div
                  key={name}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
                >
                  <img
                    src={img(name)}
                    alt="Uwatese Decor event"
                    className="h-56 w-full object-cover object-top opacity-90 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold tracking-tight">Services</h2>
            <p className="max-w-2xl text-white/70">
              Premium decoration + rentals, designed to match your theme, venue, and budget.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Wedding decoration',
                desc: 'Stage & backdrop, flowers, aisle styling, reception setup, lighting, and full venue transformation.',
              },
              {
                title: 'Parties & events',
                desc: 'Birthdays, bridal showers, proposals, corporate events, and custom themes.',
              },
              {
                title: 'Clothes rental',
                desc: 'Elegant dresses, suits, traditional wear, and accessories for your special day.',
              },
            ].map((s) => (
              <article
                key={s.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
              >
                <div className="flex items-center gap-3">
                  <span className="h-10 w-10 rounded-2xl bg-orange-500/20 ring-1 ring-orange-500/30" />
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/70">{s.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Gallery</h2>
                <p className="mt-2 max-w-2xl text-white/70">
                  Your photos are loaded directly from <code className="rounded bg-white/10 px-1 py-0.5">public/images</code>.
                </p>
              </div>
              <a
                href="#contact"
                className="hidden rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 md:inline-flex"
              >
                Book this style
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {images.slice(0, 9).map((name) => (
                <figure
                  key={name}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/30"
                >
                  <img
                    src={img(name)}
                    alt="Uwatese Decor gallery"
                    className="h-64 w-full object-cover object-top opacity-90 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
                    loading="lazy"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 text-xs text-white/80">
                    <div className="inline-flex items-center gap-2 rounded-full bg-black/50 px-3 py-1 ring-1 ring-white/10">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                      <span>Uwatese Decor</span>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="packages" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold tracking-tight">Packages</h2>
            <p className="max-w-2xl text-white/70">We can adjust names and pricing later. This is the structure.</p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/95 p-8 text-black">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-2xl font-semibold">Core</h3>
                <span className="rounded-full bg-black/5 px-3 py-1 text-xs font-semibold">Popular</span>
              </div>
              <p className="mt-3 text-sm text-black/70">Elegant decor for intimate events and weddings.</p>
              <ul className="mt-6 grid gap-3 text-sm">
                {[
                  'Backdrop + simple stage setup',
                  'Table styling basics',
                  'Theme colors guidance',
                  'On-site setup & take-down',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-1 h-5 w-5 rounded-full bg-emerald-500/15 ring-1 ring-emerald-500/40" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-black hover:bg-orange-400"
              >
                Request invite
              </a>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-2xl font-semibold">Elite</h3>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">Full experience</span>
              </div>
              <p className="mt-3 text-sm text-white/70">Luxury styling and a complete venue transformation.</p>
              <ul className="mt-6 grid gap-3 text-sm text-white/80">
                {[
                  'Custom concept + theme design',
                  'Lighting & premium decor elements',
                  'Full table settings & florals',
                  'Optional clothes + accessories rental bundle',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-1 h-5 w-5 rounded-full bg-emerald-500/15 ring-1 ring-emerald-500/40" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Request invite
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-white/10 bg-white/[0.03]">
          <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">About</h2>
                <p className="mt-4 text-white/70">
                  Uwatese Decor is based in Kigali. We combine modern design, clean execution, and beautiful details
                  to deliver weddings and parties that feel premium.
                </p>
                <p className="mt-4 text-white/70">
                  You already uploaded your images — next we can create a full gallery page and add WhatsApp booking.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <img
                  src={img(images[10])}
                  alt="Uwatese Decor"
                  className="h-80 w-full object-cover object-top opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Contact / Book now</h2>
              <p className="mt-3 text-white/70">
                Share your event date, venue, theme colors, and what you need (decor, clothes rental, or both).
              </p>
              <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/80">
                <p className="font-semibold">Kigali, Rwanda</p>
                <p className="mt-1 text-white/60">Next: we’ll add your WhatsApp number + email here.</p>
              </div>
            </div>

            <form
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-4">
                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-white/80">Your name</span>
                  <input
                    className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500/60"
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Full name"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-white/80">Phone / WhatsApp</span>
                  <input
                    className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500/60"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    placeholder="+250 ..."
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-white/80">Event date</span>
                  <input
                    className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500/60"
                    type="date"
                    name="date"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-white/80">Message</span>
                  <textarea
                    className="min-h-28 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500/60"
                    name="message"
                    placeholder="Wedding decor, party setup, clothes rental..."
                  />
                </label>

                <button
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-black hover:bg-orange-400"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <p className="text-sm text-white/70">
            <span className="font-semibold text-white">Uwatese Decor</span> — Wedding &amp; party decor + clothes rental in Kigali,
            Rwanda.
          </p>
          <p className="mt-2 text-xs text-white/45">© {new Date().getFullYear()} Uwatese Decor. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
