import { useEffect, useRef, lazy, Suspense } from 'react'
import gsap from 'gsap'
import { hero } from '../../data/content'
import s from './Hero.module.css'

const Scene = lazy(() => import('../Scene/Scene'))

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.15 })
      tl.fromTo('[data-h="tag"]',
          { opacity: 0, y: 12, filter: 'blur(4px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.7 })
        .fromTo('[data-h="title"]',
          { opacity: 0, y: 40, scale: 0.92, filter: 'blur(8px)' },
          { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', duration: 1, ease: 'power4.out' }, '-=0.4')
        .fromTo('[data-h="sub"]',
          { opacity: 0, y: 20, filter: 'blur(4px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.7 }, '-=0.5')
        .fromTo('[data-h="loc"]',
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
        .fromTo('[data-h="cta"]',
          { opacity: 0, y: 16, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.5)' }, '-=0.2')
    }, ref)
    return () => ctx.revert()
  }, [])

  const handleClick = (e) => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className={s.hero} id="hero" ref={ref}>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
      <div className={s.content}>
        <p className={s.tag} data-h="tag">
          <span className={s.dot} />
          {hero.tag}
        </p>
        <h1 className={s.title} data-h="title">{hero.title}</h1>
        <p className={s.sub} data-h="sub">{hero.subtitle}</p>
        <p className={s.loc} data-h="loc">{hero.location}</p>
        <a href="#contact" className={s.cta} data-h="cta" onClick={handleClick}>
          <span>{hero.cta}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </span>
        </a>
      </div>
    </section>
  )
}
