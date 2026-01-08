export default function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Contact / Book now</h2>
          <p className="mt-3 text-white/70">Share your event date, venue, theme colors, and what you need (decor, clothes rental, or both).</p>
          <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/80">
            <p className="font-semibold">Kigali, Rwanda</p>
            <p className="mt-1 text-white/60">Next: we’ll add your WhatsApp number + email here.</p>
          </div>
        </div>

        <form className="rounded-3xl border border-white/10 bg-white/5 p-6" onSubmit={(e) => e.preventDefault()}>
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
  )
}
