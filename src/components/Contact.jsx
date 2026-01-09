function CardIcon({ children }) {
  return (
    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-orange-500 ring-1 ring-orange-400/30">
      <span className="text-black">{children}</span>
    </span>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M7.5 4.5L9.5 8.5L7.8 10.2C9.2 12.8 11.2 14.8 13.8 16.2L15.5 14.5L19.5 16.5V19.5C19.5 20.1 19 20.6 18.4 20.6C10.8 20.2 4.8 14.2 4.4 6.6C4.4 6 4.9 5.5 5.5 5.5H7.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M4 6H20V18H4V6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M4 7L12 13L20 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12 6v6l4 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Contact({
  img,
  images,
  phone = '+250 ...',
  email = 'your@email.com',
  location = 'Kigali, Rwanda',
  hours = 'Mon-Sun: 7AM - 10PM',
}) {
  const bg = img && images?.length ? img(images[3]) : undefined

  return (
    <section id="contact" className="border-t border-white/10">
      <div className="relative">
        <div
          className="h-64 w-full bg-cover bg-center"
          style={bg ? { backgroundImage: `url('${bg}')` } : undefined}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
            <p className="text-xs font-semibold tracking-[0.24em] text-orange-400">DISCOVER OUR CONTACT</p>
            <h2 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">Contact Us</h2>
            <div className="mt-4 h-1 w-24 rounded-full bg-orange-500" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white p-6 text-black shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
            <CardIcon>
              <PhoneIcon />
            </CardIcon>
            <div className="mt-4 text-xs font-bold tracking-widest text-orange-600">PHONE</div>
            <div className="mt-2 text-sm font-semibold text-black/90">{phone}</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white p-6 text-black shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
            <CardIcon>
              <MailIcon />
            </CardIcon>
            <div className="mt-4 text-xs font-bold tracking-widest text-orange-600">EMAIL</div>
            <div className="mt-2 text-sm font-semibold text-black/90">{email}</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white p-6 text-black shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
            <CardIcon>
              <PinIcon />
            </CardIcon>
            <div className="mt-4 text-xs font-bold tracking-widest text-orange-600">LOCATION</div>
            <div className="mt-2 text-sm font-semibold text-black/90">{location}</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white p-6 text-black shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
            <CardIcon>
              <ClockIcon />
            </CardIcon>
            <div className="mt-4 text-xs font-bold tracking-widest text-orange-600">WORKING HOURS</div>
            <div className="mt-2 text-sm font-semibold text-black/90">{hours}</div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/80">
            <p className="text-base font-semibold text-white">Book now</p>
            <p className="mt-2 text-white/70">
              Share your event date, venue, theme colors, and what you need (decor, clothes rental, or both).
            </p>
            <p className="mt-4 text-white/70">
              When you send me your WhatsApp number and email, I will update these cards to the real contacts.
            </p>
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
      </div>
    </section>
  )
}
