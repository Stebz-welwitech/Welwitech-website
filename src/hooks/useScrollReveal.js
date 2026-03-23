import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal(opts = {}) {
  const ref = useRef(null)
  const optsRef = useRef(opts)
  optsRef.current = opts

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const { delay = 0, y = 30, duration = 0.8, scale = 0.97 } = optsRef.current

    const ctx = gsap.context(() => {
      gsap.fromTo(el,
        { opacity: 0, y, scale },
        { opacity: 1, y: 0, scale: 1, duration, delay, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true } }
      )
    })
    return () => ctx.revert()
  }, [])

  return ref
}
