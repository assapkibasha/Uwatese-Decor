export default function Location({ openUrl = 'https://maps.app.goo.gl/Se2pgNMnYJ9p7vR7A' }) {
  const embedUrl = 'https://www.google.com/maps?q=Kigali%20Gasabo%20Kabuga&output=embed'

  return (
    <section id="location" className="border-y border-black/5 bg-accent/30 dark:border-white/10">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.24em] text-orange-400">FIND US</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">Our Location</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">Kigali, Gasabo, Kabuga</p>
            <a
              href={openUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex max-w-full items-center gap-2 rounded-full border border-black/5 bg-card px-3 py-1 text-xs text-muted-foreground hover:bg-accent hover:text-foreground dark:border-white/10"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" aria-hidden="true" />
              <span className="truncate">{openUrl}</span>
            </a>
          </div>
          <a
            href={openUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-black hover:bg-orange-400 md:inline-flex"
          >
            Open in Google Maps
          </a>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-black/5 bg-card shadow-md dark:border-white/10">
          <iframe
            title="Uwatese Decor location"
            src={embedUrl}
            className="h-[22rem] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="mt-4 md:hidden">
          <a
            href={openUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-4 py-3 text-sm font-semibold text-black hover:bg-orange-400"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  )
}
