import { useMemo } from 'react'

export default function Gallery({ img, images }) {
  const items = useMemo(() => (images || []).slice(0, 14), [images])
  const rowA = items.slice(0, Math.ceil(items.length / 2))
  const rowB = items.slice(Math.ceil(items.length / 2))

  const Row = ({ row, duration, reverse = false }) => (
    <div className={`uw-marquee ${reverse ? 'uw-marquee--reverse' : ''}`.trim()} style={{ ['--uw-marquee-duration']: `${duration}s` }}>
      <div className="uw-marquee-track" aria-hidden="true">
        {[...row, ...row].map((name, i) => (
          <div key={`${name}-${i}`} className="uw-marquee-item">
            <img src={img(name)} alt="Uwatese Decor gallery" className="uw-marquee-img" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section id="gallery" className="border-y border-black/5 bg-accent/30 dark:border-white/10">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Gallery</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">Hover a row to pause.</p>
          </div>
          <a
            href="#contact"
            className="hidden rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/20 md:inline-flex"
          >
            Book now
          </a>
        </div>

        <div className="mt-8 grid gap-4">
          <Row row={rowA.length ? rowA : items} duration={44} />
          <Row row={rowB.length ? rowB : items} duration={52} reverse />
        </div>
      </div>
    </section>
  )
}
