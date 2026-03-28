import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import s from './SectionReveal.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function SectionReveal({ children }) {
  const wrapRef = useRef(null)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return

    gsap.set(el, { clipPath: 'circle(0% at 50% 50%)' })

    const tween = gsap.to(el, {
      clipPath: 'circle(75% at 50% 50%)',
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        end: 'top 20%',
        scrub: 1,
      },
    })

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [])

  return (
    <div ref={wrapRef} className={s.reveal}>
      {children}
    </div>
  )
}
