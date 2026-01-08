export default function Packages() {
  return (
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
  )
}
