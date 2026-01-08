export default function Services() {
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
  )
}
