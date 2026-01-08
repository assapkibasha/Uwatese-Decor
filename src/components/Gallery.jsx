export default function Gallery({ img, images }) {
  return (
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
            <figure key={name} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/30">
              <img
                src={img(name)}
                alt="Uwatese Decor gallery"
                className="h-64 w-full object-cover object-center opacity-100 transition duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 text-xs text-white/90">
                <div className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 ring-1 ring-white/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                  <span>Uwatese Decor</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
