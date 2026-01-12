export default function Packages() {
  return (
    <section id="packages" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <p className="text-sm text-muted-foreground">THIS IS WHAT WE OFFER</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Packages</h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">Premium wedding services and rentals—designed for Kigali celebrations.</p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            n: '1',
            title: 'Full Wedding Package',
            desc: 'Covers everything in the wedding—planning support, rentals, styling, and full coordination.',
            icon: 'calendar',
            imgExt: 'avif',
          },
          {
            n: '2',
            title: 'Clothes For Everyone',
            desc: 'We provide outfits for the couple, bridesmaids, groomsmen, and family—clean and elegant.',
            icon: 'users',
            imgExt: 'jpg',
          },
          {
            n: '3',
            title: 'Traditional Ornaments Rental',
            desc: 'Rent traditional ornaments and accessories for ceremonies and cultural moments.',
            icon: 'sparkle',
            imgExt: 'jpg',
          },
          {
            n: '4',
            title: 'Clothes Rental',
            desc: 'Rent dresses, suits, and accessories for weddings, parties, photoshoots, and more.',
            icon: 'hanger',
            imgExt: 'avif',
          },
          {
            n: '5',
            title: 'Full Wedding Decoration',
            desc: 'Complete wedding decoration: backdrop, stage, aisle, reception setup, lighting, and details.',
            icon: 'flower',
            imgExt: 'jpg',
          },
          {
            n: '6',
            title: 'Cakes',
            desc: 'Beautiful cakes for weddings, birthdays, and special celebrations—made to match your theme.',
            icon: 'sparkle',
            imgExt: 'avif',
          },
        ].map((c) => (
          <article
            key={c.n}
            className="relative overflow-hidden rounded-3xl border border-black/5 bg-card shadow-md transition-shadow hover:shadow-xl dark:border-white/10"
          >
            <div className="relative h-40 overflow-hidden">
              <img
                src={`/images/${c.n}.${c.imgExt}`}
                alt={c.title}
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/25 to-black/55" aria-hidden="true" />

              <div className="absolute left-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-orange-500 text-sm font-extrabold text-black">
                {c.n}
              </div>
              <div className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-background/90 text-foreground ring-1 ring-black/5 dark:ring-white/10">
                {c.icon === 'calendar' && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M7 3v3M17 3v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M4 7h16v14H4V7Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M4 11h16" stroke="currentColor" strokeWidth="2" />
                  </svg>
                )}
                {c.icon === 'users' && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}
                {c.icon === 'sparkle' && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M12 2l1.2 4.2L17 8l-3.8 1.8L12 14l-1.2-4.2L7 8l3.8-1.8L12 2Z" fill="currentColor" />
                    <path d="M5 12l.7 2.4L8 15l-2.3 1.1L5 18l-.7-1.9L2 15l2.3-.6L5 12Z" fill="currentColor" opacity="0.9" />
                    <path d="M19 13l.7 2.4L22 16l-2.3 1.1L19 19l-.7-1.9L16 16l2.3-.6L19 13Z" fill="currentColor" opacity="0.9" />
                  </svg>
                )}
                {c.icon === 'hanger' && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M12 6a2 2 0 1 1 4 0c0 1.2-.8 2-2.2 2.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 9.5l-9 6.5h18l-9-6.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M3 16v4h18v-4" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                )}
                {c.icon === 'flower' && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M12 12c1.7 0 3-1.3 3-3 0-1.6-1.3-3-3-3s-3 1.4-3 3c0 1.7 1.3 3 3 3Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 12c-2.8 0-5 2.2-5 5v2h10v-2c0-2.8-2.2-5-5-5Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M4 10c1.1 1.2 2.8 2 4.7 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M20 10c-1.1 1.2-2.8 2-4.7 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-black hover:bg-orange-400"
              >
                Get Started
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
