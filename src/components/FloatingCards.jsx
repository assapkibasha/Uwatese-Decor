import { useEffect, useMemo, useRef, useState } from 'react'

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

function FloatingCard({
  src,
  alt,
  className,
  variant,
  title,
  rating,
  draggable,
  style,
  onPointerDown,
  innerRef,
}) {
  if (variant === 'b') {
    return (
      <div
        ref={innerRef}
        className={`uw-float-card uw-float-card-b ${draggable ? 'uw-float-draggable' : ''} ${className || ''}`.trim()}
        style={style}
        onPointerDown={onPointerDown}
      >
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
      <div
        ref={innerRef}
        className={`uw-float-card uw-float-card-story ${draggable ? 'uw-float-draggable' : ''} ${className || ''}`.trim()}
        style={style}
        onPointerDown={onPointerDown}
      >
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
    <div
      ref={innerRef}
      className={`uw-float-card ${draggable ? 'uw-float-draggable' : ''} ${className || ''}`.trim()}
      style={style}
      onPointerDown={onPointerDown}
    >
      <img src={src} alt={alt} className="uw-float-card-img" loading="lazy" />
      <span className="uw-float-card-gradient" aria-hidden="true" />
    </div>
  )
}

export default function FloatingCards({ items, className, draggable = false }) {
  const containerRef = useRef(null)
  const cardRefs = useRef(new Map())
  const [positions, setPositions] = useState({})
  const [drag, setDrag] = useState(null)
  const basePositionsRef = useRef(null)

  const itemsByKey = useMemo(() => {
    const map = new Map()
    items.forEach((it) => map.set(it.key, it))
    return map
  }, [items])

  useEffect(() => {
    if (!draggable) return
    const container = containerRef.current
    if (!container) return

    const next = {}
    items.forEach((it) => {
      const el = cardRefs.current.get(it.key)
      if (!el) return
      next[it.key] = {
        left: el.offsetLeft,
        top: el.offsetTop,
      }
    })
    setPositions(next)
    if (!basePositionsRef.current) {
      basePositionsRef.current = next
    }
  }, [draggable, itemsByKey])

  useEffect(() => {
    if (!draggable) return
    if (!basePositionsRef.current) return
    if (drag) return

    const keys = items.map((it) => it.key)
    if (keys.length < 2) return

    const interval = window.setInterval(() => {
      setPositions((prev) => {
        const current = Object.keys(prev).length ? prev : basePositionsRef.current
        const next = {}
        keys.forEach((key, idx) => {
          const fromKey = keys[(idx + keys.length - 1) % keys.length]
          next[key] = current[fromKey] || current[key] || basePositionsRef.current[key]
        })
        return next
      })
    }, 2600)

    return () => window.clearInterval(interval)
  }, [draggable, drag, itemsByKey])

  useEffect(() => {
    if (!draggable) return
    if (!drag) return

    const container = containerRef.current
    if (!container) return

    const onMove = (e) => {
      const el = cardRefs.current.get(drag.key)
      if (!el) return

      const rect = container.getBoundingClientRect()
      const maxLeft = Math.max(0, rect.width - el.offsetWidth)
      const maxTop = Math.max(0, rect.height - el.offsetHeight)

      const nextLeft = Math.min(maxLeft, Math.max(0, drag.startLeft + (e.clientX - drag.startX)))
      const nextTop = Math.min(maxTop, Math.max(0, drag.startTop + (e.clientY - drag.startY)))

      setPositions((prev) => ({
        ...prev,
        [drag.key]: { left: nextLeft, top: nextTop },
      }))
    }

    const onUp = () => setDrag(null)

    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    window.addEventListener('pointercancel', onUp)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('pointercancel', onUp)
    }
  }, [draggable, drag])

  const getStyle = (key) => {
    if (!draggable) return undefined
    const p = positions[key]
    if (!p) return undefined
    return {
      left: `${p.left}px`,
      top: `${p.top}px`,
    }
  }

  const onPointerDown = (key) => (e) => {
    if (!draggable) return
    const el = cardRefs.current.get(key)
    const container = containerRef.current
    if (!el || !container) return

    el.setPointerCapture?.(e.pointerId)
    const current = positions[key] || { left: el.offsetLeft, top: el.offsetTop }
    setDrag({
      key,
      startX: e.clientX,
      startY: e.clientY,
      startLeft: current.left,
      startTop: current.top,
    })
  }

  return (
    <div
      ref={containerRef}
      className={`uw-float-wrap ${draggable ? 'uw-float-wrap-draggable' : ''} ${drag ? 'uw-float-dragging' : ''} ${className || ''}`.trim()}
      aria-hidden="true"
    >
      {items.map((it) => (
        <FloatingCard
          key={it.key}
          src={it.src}
          alt={it.alt || ''}
          className={it.className}
          variant={it.variant}
          title={it.title}
          rating={it.rating}
          draggable={draggable}
          style={getStyle(it.key)}
          onPointerDown={onPointerDown(it.key)}
          innerRef={(el) => {
            if (!el) {
              cardRefs.current.delete(it.key)
              return
            }
            cardRefs.current.set(it.key, el)
          }}
        />
      ))}
    </div>
  )
}
