import { useState } from 'react'
import { nav } from '../../data/content'
import s from './Navbar.module.css'

export default function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false)

  const go = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.body.style.overflow = ''
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const toggle = () => {
    setOpen(o => !o)
    document.body.style.overflow = open ? '' : 'hidden'
  }

  return (
    <>
      <nav className={s.nav}>
        <a href="#hero" className={s.logo} onClick={e => go(e, '#hero')}>WELWITECH</a>
        <div className={s.right}>
          <div className={s.links}>
            {nav.links.map(l => (
              <a key={l.href} href={l.href}
                className={`${s.link} ${activeSection === l.href.slice(1) ? s.active : ''}`}
                onClick={e => go(e, l.href)}>{l.label}</a>
            ))}
          </div>
          <a href="#contact" className={s.cta} onClick={e => go(e, '#contact')}>Contact</a>
        </div>
        <button className={s.burger} onClick={toggle} aria-label="Menu" aria-expanded={open}>
          <span className={open ? s.x1 : ''} /><span className={open ? s.x2 : ''} /><span className={open ? s.x3 : ''} />
        </button>
      </nav>
      {open && (
        <div className={s.mobile}>
          {nav.links.map(l => <a key={l.href} href={l.href} onClick={e => go(e, l.href)}>{l.label}</a>)}
          <a href="#contact" onClick={e => go(e, '#contact')}>Contact</a>
        </div>
      )}
    </>
  )
}
