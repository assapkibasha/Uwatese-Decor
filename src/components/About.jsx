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
  ]

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

          <div className="relative overflow-hidden rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 via-white/5 to-black/20">
            <div className="relative h-80">
              <FloatingCards items={floatItems} className="uw-float-about" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
