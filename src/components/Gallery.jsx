import { useMemo, useState } from 'react'

export default function Gallery({ img, images }) {
  const items = useMemo(() => (images || []).slice(0, 12), [images])
  const [active, setActive] = useState(null)

  return (
    <section id="gallery" className="border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Gallery</h2>
            <p className="mt-2 max-w-2xl text-white/70">Click a photo to preview it on the right.</p>
          </div>
          <a
            href="#contact"
            className="hidden rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 md:inline-flex"
          >
            Book this style
          </a>
        </div>

        {!active ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((name) => (
              <button
                key={name}
                type="button"
                onClick={() => setActive(name)}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 text-left"
              >
                <img
                  src={img(name)}
                  alt="Uwatese Decor gallery"
                  className="h-64 w-full object-cover object-top opacity-100 transition duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" aria-hidden="true" />
              </button>
            ))}
          </div>
        ) : (
          <div className="mt-8 grid gap-4 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {items.map((name) => {
                  const isActive = name === active
                  return (
                    <button
                      key={name}
                      type="button"
                      onClick={() => setActive(name)}
                      className={`group relative overflow-hidden rounded-3xl border bg-black/30 text-left transition hover:bg-black/40 ${
                        isActive ? 'border-orange-500/60 ring-2 ring-orange-500/30' : 'border-white/10'
                      }`}
                    >
                      <img
                        src={img(name)}
                        alt="Uwatese Decor gallery"
                        className="h-56 w-full object-cover object-top opacity-100 transition duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" aria-hidden="true" />
                    </button>
                  )
                })}
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="sticky top-24 rounded-3xl border border-white/10 bg-black/30 p-3">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={img(active)}
                    alt="Selected preview"
                    className="h-[22rem] w-full object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-black/0" aria-hidden="true" />

                  <button
                    type="button"
                    onClick={() => setActive(null)}
                    className="absolute left-3 top-3 inline-flex items-center justify-center rounded-full bg-black/55 px-3 py-2 text-xs font-semibold text-white ring-1 ring-white/10 hover:bg-black/70"
                  >
                    Close
                  </button>

                  <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full bg-black/55 px-3 py-1 text-xs text-white/90 ring-1 ring-white/10">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                      <span>Uwatese Decor</span>
                    </div>
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center rounded-full bg-orange-500 px-4 py-2 text-xs font-semibold text-black hover:bg-orange-400"
                    >
                      Book now
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>
    </section>
  )
}
