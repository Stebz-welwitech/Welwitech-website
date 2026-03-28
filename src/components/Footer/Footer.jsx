import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { footer, contact } from '../../data/content'
import s from './Footer.module.css'

export default function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    const el = footerRef.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.fromTo(el.querySelectorAll(`.${s.ctaBlock}, .${s.col}, .${s.bottom}`),
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true }
        }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <footer className={s.footer} ref={footerRef}>
      <div className={s.inner}>
        <div className={s.ctaBlock}>
          <h3 className={s.ctaTitle}>Prêt à démarrer votre projet ?</h3>
          <p className={s.ctaDesc}>Premier échange sans engagement.</p>
          <a href="#contact" className={s.ctaBtn}
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Nous contacter
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
          </a>
        </div>
        <div className={s.top}>
          <div className={s.col}>
            <span className={s.brand}>{footer.brand}</span>
            <p className={s.tagline}>Digital Product Studio</p>
          </div>
          <div className={s.col}>
            <h4 className={s.colTitle}>Navigation</h4>
            <a href="#services" className={s.footLink}>Services</a>
            <a href="#portfolio" className={s.footLink}>Projets</a>
            <a href="#approach" className={s.footLink}>Approche</a>
            <a href="#contact" className={s.footLink}>Contact</a>
          </div>
          <div className={s.col}>
            <h4 className={s.colTitle}>Expertises</h4>
            <a href="#design" className={s.footLink}>Design UX/UI</a>
            <a href="#mobile" className={s.footLink}>Mobile</a>
            <a href="#web" className={s.footLink}>Web & SaaS</a>
            <a href="#ai" className={s.footLink}>Intelligence Artificielle</a>
          </div>
          <div className={s.col}>
            <h4 className={s.colTitle}>Contact</h4>
            <a href={`mailto:${contact.email}`} className={s.footLink}>{contact.email}</a>
            <a href={`https://${contact.website}`} className={s.footLink} target="_blank" rel="noopener noreferrer">{contact.website}</a>
            <span className={s.footLink}>{contact.location}</span>
          </div>
        </div>
        <div className={s.bottom}>
          <span className={s.copy}>{footer.copyright}</span>
          <span className={s.made}>Crafted with precision</span>
        </div>
      </div>
    </footer>
  )
}
