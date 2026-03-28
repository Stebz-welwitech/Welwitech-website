import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import s from './BackToTop.module.css'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const btnRef = useRef(null)
  const progressRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      const progress = total > 0 ? scrolled / total : 0

      setVisible(scrolled > 500)

      if (progressRef.current) {
        const circumference = 2 * Math.PI * 18
        progressRef.current.style.strokeDashoffset = circumference * (1 - progress)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!btnRef.current) return
    gsap.to(btnRef.current, {
      autoAlpha: visible ? 1 : 0,
      scale: visible ? 1 : 0.8,
      duration: 0.35,
      ease: 'back.out(1.5)',
    })
  }, [visible])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const circumference = 2 * Math.PI * 18

  return (
    <button
      ref={btnRef}
      className={s.btn}
      onClick={scrollToTop}
      aria-label="Retour en haut"
      style={{ opacity: 0, visibility: 'hidden' }}
    >
      <svg className={s.progress} viewBox="0 0 44 44">
        <circle cx="22" cy="22" r="18" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
        <circle
          ref={progressRef}
          cx="22" cy="22" r="18" fill="none"
          stroke="var(--accent)" strokeWidth="2"
          strokeLinecap="round"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: circumference,
            transform: 'rotate(-90deg)',
            transformOrigin: 'center',
          }}
        />
      </svg>
      <svg className={s.arrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  )
}
