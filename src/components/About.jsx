export default function About({ img, images }) {
  return (
    <section id="about" className="border-t border-white/10 bg-white/[0.03]">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">About</h2>
            <p className="mt-4 text-white/70">
              Uwatese Decor is based in Kigali. We combine modern design, clean execution, and beautiful details to
              deliver weddings and parties that feel premium.
            </p>
            <p className="mt-4 text-white/70">
              You already uploaded your images — next we can create a full gallery page and add WhatsApp booking.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <img
              src={img(images[10])}
              alt="Uwatese Decor"
              className="h-80 w-full object-cover object-center opacity-100"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
