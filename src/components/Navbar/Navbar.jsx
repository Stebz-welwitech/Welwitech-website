import { useState, useEffect, useRef, useCallback } from 'react'
import { useMagnetic } from '../../hooks/useMagnetic'
import { nav } from '../../data/content'
import s from './Navbar.module.css'

export default function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const mobileRef = useRef(null)
  const burgerRef = useRef(null)
  const ctaRef = useRef(null)
  useMagnetic(ctaRef, { strength: 0.25 })

  const close = useCallback(() => {
    setOpen(false)
    document.body.style.overflow = ''
  }, [])

  const go = (e, href) => {
    e.preventDefault()
    close()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const toggle = () => {
    const next = !open
    setOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        close()
        burgerRef.current?.focus()
        return
      }
      if (e.key === 'Tab' && mobileRef.current) {
        const focusable = mobileRef.current.querySelectorAll('a, button')
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    const firstLink = mobileRef.current?.querySelector('a')
    firstLink?.focus()

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, close])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <>
      <a href="#main-content" className={s.skipLink}>Aller au contenu</a>
      <nav className={`${s.nav} ${scrolled ? s.scrolled : ''}`}>
        <a href="#hero" className={s.logo} onClick={e => go(e, '#hero')}>WELWITECH</a>
        <div className={s.right}>
          <div className={s.links}>
            {nav.links.map(l => (
              <a key={l.href} href={l.href}
                className={`${s.link} ${activeSection === l.href.slice(1) ? s.active : ''}`}
                onClick={e => go(e, l.href)}>{l.label}</a>
            ))}
          </div>
          <a href="#contact" className={s.cta} onClick={e => go(e, '#contact')} ref={ctaRef} data-magnetic>Contact</a>
        </div>
        <button ref={burgerRef} className={s.burger} onClick={toggle} aria-label="Menu" aria-expanded={open}>
          <span className={open ? s.x1 : ''} /><span className={open ? s.x2 : ''} /><span className={open ? s.x3 : ''} />
        </button>
      </nav>
      {open && (
        <div className={s.mobile} ref={mobileRef} role="dialog" aria-label="Menu de navigation">
          {nav.links.map(l => <a key={l.href} href={l.href} onClick={e => go(e, l.href)}>{l.label}</a>)}
          <a href="#contact" onClick={e => go(e, '#contact')}>Contact</a>
        </div>
      )}
    </>
  )
}
