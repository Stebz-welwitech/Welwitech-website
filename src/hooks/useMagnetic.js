import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function useMagnetic(ref, options = {}) {
  const { strength = 0.3, radius = 0.5 } = options
  const quickX = useRef(null)
  const quickY = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    quickX.current = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3.out' })
    quickY.current = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3.out' })

    const onMouseMove = (e) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2

      const dx = e.clientX - cx
      const dy = e.clientY - cy

      quickX.current(dx * strength)
      quickY.current(dy * strength)
    }

    const onMouseLeave = () => {
      quickX.current(0)
      quickY.current(0)
    }

    // Expand the hover zone by the radius factor
    const expandedPadding = Math.max(el.offsetWidth, el.offsetHeight) * radius

    const onMouseEnter = (e) => {
      el.addEventListener('mousemove', onMouseMove)
    }

    el.addEventListener('mouseenter', onMouseEnter)
    el.addEventListener('mouseleave', () => {
      el.removeEventListener('mousemove', onMouseMove)
      onMouseLeave()
    })

    return () => {
      el.removeEventListener('mouseenter', onMouseEnter)
      el.removeEventListener('mousemove', onMouseMove)
      el.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [strength, radius])

  return ref
}
