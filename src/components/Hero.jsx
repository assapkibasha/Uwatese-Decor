import FloatingCards from './FloatingCards.jsx'

export default function Hero({ img, images }) {
  const floatItems = [
    {
      key: 'hero-a',
      src: img(images[4]),
      alt: 'Uwatese Decor highlight',
      variant: 'b',
      title: 'Wedding Setup',
      rating: 4.8,
      className: 'uw-float-a right-6 top-20 hidden lg:block',
    },
    {
      key: 'hero-b',
      src: img(images[7]),
      alt: 'Uwatese Decor highlight',
      variant: 'b',
      title: 'Party Decor',
      rating: 4.9,
      className: 'uw-float-b right-40 top-48 hidden lg:block',
    },
    {
      key: 'hero-c',
      src: img(images[1]),
      alt: 'Uwatese Decor highlight',
      variant: 'b',
      title: 'Clothes Rental',
      rating: 4.7,
      className: 'uw-float-c right-10 top-[22rem] hidden lg:block',
    },
  ]

  return (
    <section id="home" className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-top"
        style={{ backgroundImage: `url('${img(images[3])}')` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/65 to-[#07070a]" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-14 pt-14 sm:px-6 sm:pt-20">
        <FloatingCards items={floatItems} className="uw-float-hero" />
        <p className="text-xs font-semibold tracking-[0.24em] text-white/70">WEDDINGS • PARTIES • CLOTHES RENTAL</p>
        <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl md:text-7xl">
          UWATESE
          <span className="block text-white/90">DECOR</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          Wedding &amp; event decoration in Kigali, plus stylish outfits and accessories for rent. We plan, decorate,
          and style your celebration—so it looks premium and feels unforgettable.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-black hover:bg-orange-400"
          >
            Request a quote
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            View gallery
          </a>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[images[0], images[1], images[2]].map((name) => (
            <div key={name} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2">
              <img
                src={img(name)}
                alt="Uwatese Decor event"
                className="h-56 w-full rounded-2xl object-cover object-center opacity-100 transition duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
