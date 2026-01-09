import FloatingCards from './FloatingCards.jsx'

export default function About({ img, images }) {
  const floatItems = [
    {
      key: 'about-story-1',
      src: img(images[2]),
      alt: 'Uwatese Decor highlight',
      variant: 'story',
      className: 'uw-float-a left-5 top-10 -rotate-6 scale-[0.78] z-10',
    },
    {
      key: 'about-story-2',
      src: img(images[6]),
      alt: 'Uwatese Decor highlight',
      variant: 'story',
      className: 'uw-float-c left-16 top-5 scale-[0.84] z-20',
    },
    {
      key: 'about-story-3',
      src: img(images[1]),
      alt: 'Uwatese Decor highlight',
      variant: 'story',
      className: 'uw-float-b left-28 top-12 rotate-6 scale-[0.78] z-30',
    },
    {
      key: 'about-story-4',
      src: img(images[8]),
      alt: 'Uwatese Decor highlight',
      variant: 'story',
      className: 'uw-float-c right-10 top-6 -rotate-3 scale-[0.72] z-20 hidden md:block',
    },
    {
      key: 'about-story-5',
      src: img(images[4]),
      alt: 'Uwatese Decor highlight',
      variant: 'story',
      className: 'uw-float-a right-4 top-28 rotate-6 scale-[0.68] z-10 hidden lg:block',
    },
    {
      key: 'about-story-6',
      src: img(images[9]),
      alt: 'Uwatese Decor highlight',
      variant: 'story',
      className: 'uw-float-b left-44 top-32 -rotate-2 scale-[0.76] z-20 hidden sm:block',
    },
    {
      key: 'about-story-7',
      src: img(images[10]),
      alt: 'Uwatese Decor highlight',
      variant: 'story',
      className: 'uw-float-c right-24 top-40 rotate-3 scale-[0.7] z-10 hidden lg:block',
    },
    {
      key: 'about-story-8',
      src: img(images[11]),
      alt: 'Uwatese Decor highlight',
      variant: 'story',
      className: 'uw-float-a right-2 top-8 -rotate-6 scale-[0.66] z-30 hidden xl:block',
    },
  ]

  return (
    <section id="about" className="border-t border-white/10 bg-white/[0.03]">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">About</h2>
            <p className="mt-4 text-white/70">
              Uwatese Decor is a Rwandan wedding service company based in Kabuga, Gasabo District, Kigali. We provide
              high-quality rental solutions for traditional and modern wedding ceremonies across Rwanda.
            </p>
            <p className="mt-4 text-white/70">
              Our services include ceremony attire, decorative equipment, reception accessories, and other essentials
              for Gusaba, Gukwa, Umurenge weddings, and reception celebrations.
            </p>
            <p className="mt-4 text-white/70">
              We respect Rwandan tradition while delivering a refined, contemporary aesthetic. Our commitment is clean
              and well-maintained items, reliable delivery and setup support when needed, and flexible packages.
            </p>
            <p className="mt-4 text-white/70">
              Our mission is to simplify wedding preparation by offering key ceremony needs in one place—reducing stress,
              saving time, and elevating every celebration.
            </p>
            <p className="mt-4 font-semibold text-white/90">
              Uwatese Decor—Your Partner in Celebrating Love, Tradition, and Elegance.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 via-white/5 to-black/20">
            <div className="relative h-80">
              <FloatingCards items={floatItems} className="uw-float-about" draggable />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
