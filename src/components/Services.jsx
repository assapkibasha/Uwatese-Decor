export default function Services() {
  const WeddingIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M8.2 9.2a4.1 4.1 0 1 1 5.8 5.8l-2.9 2.9a4.1 4.1 0 1 1-5.8-5.8l.8-.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8 9.2a4.1 4.1 0 1 0-5.8 5.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.8 6.2h4.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )

  const PartyIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 20l8-16 8 16-8-4-8 4z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 8.2l2.2 1.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M10.3 10.8l1.7.9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M15.2 10.2l1.8-.9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )

  const TuxedoIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M9 3l-2 4-3 2 3 12h10l3-12-3-2-2-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 3l3 5 3-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 8v13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M10.8 10.4l1.2 1.4 1.2-1.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )

  const DressIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 3c1.8 0 3 1.2 3 3l-1.6 2.4 4.6 11.6H6l4.6-11.6L9 6c0-1.8 1.2-3 3-3z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M10.2 8.8c.6.8 1.1 1.2 1.8 1.2s1.2-.4 1.8-1.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )

  return (
    <section id="services" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">Services</h2>
        <p className="max-w-2xl text-white/70">Premium decoration + rentals, designed to match your theme, venue, and budget.</p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          {
            title: 'Wedding decoration',
            desc: 'Stage & backdrop, flowers, aisle styling, reception setup, lighting, and full venue transformation.',
            icon: <WeddingIcon className="h-5 w-5 text-orange-200" />,
          },
          {
            title: 'Parties & events',
            desc: 'Birthdays, bridal showers, proposals, corporate events, and custom themes.',
            icon: <PartyIcon className="h-5 w-5 text-orange-200" />,
          },
          {
            title: 'Clothes rental',
            desc: 'Elegant dresses, suits, traditional wear, and accessories for your special day.',
            icon: (
              <div className="grid grid-cols-2 place-items-center gap-1 text-orange-200">
                <TuxedoIcon className="h-4 w-4" />
                <DressIcon className="h-4 w-4" />
              </div>
            ),
          },
        ].map((s) => (
          <article
            key={s.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-2xl bg-orange-500/20 ring-1 ring-orange-500/30">
                {s.icon}
              </span>
              <h3 className="text-lg font-semibold">{s.title}</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
