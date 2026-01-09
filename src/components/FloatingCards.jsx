function Stars({ value }) {
  const v = typeof value === 'number' ? value : 0
  const full = Math.max(0, Math.min(5, Math.floor(v)))

  return (
    <span className="uw-float-stars" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < full ? 'uw-float-star uw-float-star-on' : 'uw-float-star'}>
          ★
        </span>
      ))}
    </span>
  )
}

function FloatingCard({ src, alt, className, variant, title, rating }) {
  if (variant === 'b') {
    return (
      <div className={`uw-float-card uw-float-card-b ${className || ''}`.trim()}>
        <div className="uw-float-card-b-media">
          <img src={src} alt={alt} className="uw-float-card-img" loading="lazy" />
          <span className="uw-float-card-gradient" aria-hidden="true" />
        </div>
        <div className="uw-float-card-b-body">
          <div className="uw-float-card-b-title">{title}</div>
          <div className="uw-float-card-b-rating">
            <Stars value={rating} />
            <span className="uw-float-card-b-rating-val">{rating}</span>
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'story') {
    return (
      <div className={`uw-float-card uw-float-card-story ${className || ''}`.trim()}>
        <div className="uw-float-story-top" aria-hidden="true" />
        <div className="uw-float-story-media">
          <img src={src} alt={alt} className="uw-float-card-img" loading="lazy" />
          <span className="uw-float-card-gradient" aria-hidden="true" />
        </div>
        <div className="uw-float-story-bottom" aria-hidden="true">
          <span className="uw-float-story-pill" />
          <span className="uw-float-story-icons">
            <span>♡</span>
            <span>✉</span>
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className={`uw-float-card ${className || ''}`.trim()}>
      <img src={src} alt={alt} className="uw-float-card-img" loading="lazy" />
      <span className="uw-float-card-gradient" aria-hidden="true" />
    </div>
  )
}

export default function FloatingCards({ items, className }) {
  return (
    <div className={`uw-float-wrap ${className || ''}`.trim()} aria-hidden="true">
      {items.map((it) => (
        <FloatingCard
          key={it.key}
          src={it.src}
          alt={it.alt || ''}
          className={it.className}
          variant={it.variant}
          title={it.title}
          rating={it.rating}
        />
      ))}
    </div>
  )
}
