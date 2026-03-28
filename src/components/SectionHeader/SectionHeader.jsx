import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import s from './SectionHeader.module.css'

export default function SectionHeader({ tag, title, description, center }) {
  const headerRef = useRef(null)

  useEffect(() => {
    const el = headerRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo(el,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true }
        }
      )
    })

    return () => ctx.revert()
  }, [title])

  return (
    <div className={`${s.header} ${center ? s.center : ''}`} ref={headerRef}>
      <span className={s.tag}>{tag}</span>
      <h2 className={s.title}>{title}</h2>
      {description && <p className={s.desc}>{description}</p>}
    </div>
  )
}
