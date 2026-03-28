import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import styles from './CustomCursor.module.css'

const INTERACTIVE_SELECTOR = 'a, button, [data-magnetic]'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    // Hide on mobile
    if (window.matchMedia('(max-width: 767px)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    // Hide default cursor globally
    const style = document.createElement('style')
    style.id = 'custom-cursor-hide'
    style.textContent = '*, *::before, *::after { cursor: none !important; }'
    document.head.appendChild(style)

    // GSAP quickTo for smooth following
    const xDot = gsap.quickTo(dot, 'x', { duration: 0.15, ease: 'power2.out' })
    const yDot = gsap.quickTo(dot, 'y', { duration: 0.15, ease: 'power2.out' })
    const xRing = gsap.quickTo(ring, 'x', { duration: 0.35, ease: 'power3.out' })
    const yRing = gsap.quickTo(ring, 'y', { duration: 0.35, ease: 'power3.out' })

    const onMouseMove = (e) => {
      xDot(e.clientX)
      yDot(e.clientY)
      xRing(e.clientX)
      yRing(e.clientY)
    }

    const onMouseOver = (e) => {
      if (e.target.closest(INTERACTIVE_SELECTOR)) {
        ring.classList.add(styles.expanded)
      }
    }

    const onMouseOut = (e) => {
      if (e.target.closest(INTERACTIVE_SELECTOR)) {
        ring.classList.remove(styles.expanded)
      }
    }

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onMouseOver)
    document.addEventListener('mouseout', onMouseOut)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseout', onMouseOut)
      document.getElementById('custom-cursor-hide')?.remove()
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className={styles.dot} />
      <div ref={ringRef} className={styles.ring} />
    </>
  )
}
