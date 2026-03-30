import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { contact } from '../../data/content'
import s from './Contact.module.css'
import { useInteractionSound } from '../../hooks/useInteractionSound'

export default function Contact() {
  const formRef = useScrollReveal({ delay: 0.2 })
  const metaRef = useScrollReveal({ delay: 0.3 })
  const headingRef = useRef(null)

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const { playHover, playClick } = useInteractionSound()

  useEffect(() => {
    const el = headingRef.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.fromTo(el,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power4.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true }
        }
      )
    })
    return () => ctx.revert()
  }, [])

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    playClick()
    const subject = encodeURIComponent(`Nouveau projet — ${form.name}`)
    const body = encodeURIComponent(`Nom: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
    setStatus('sent')
    setTimeout(() => setStatus(null), 4000)
  }

  return (
    <section className={s.section} id="contact">
      <div className={s.inner}>
        <span className={s.tag}>{contact.tag}</span>
        <h2 className={s.heading} ref={headingRef}>{contact.title}</h2>
        <p className={s.subheading}>{contact.desc}</p>

        <form className={s.form} onSubmit={handleSubmit} ref={formRef}>
          <div className={s.row}>
            <div className={s.field}>
              <label htmlFor="contact-name" className={s.label}>Nom</label>
              <input
                id="contact-name" name="name" type="text" required
                placeholder="Votre nom" className={s.input}
                value={form.name} onChange={handleChange}
                onFocus={playHover}
              />
            </div>
            <div className={s.field}>
              <label htmlFor="contact-email" className={s.label}>Email</label>
              <input
                id="contact-email" name="email" type="email" required
                placeholder="vous@exemple.com" className={s.input}
                value={form.email} onChange={handleChange}
                onFocus={playHover}
              />
            </div>
          </div>
          <div className={s.field}>
            <label htmlFor="contact-message" className={s.label}>Message</label>
            <textarea
              id="contact-message" name="message" required rows={5}
              placeholder="Décrivez votre projet..."
              className={s.textarea}
              value={form.message} onChange={handleChange}
              onFocus={playHover}
            />
          </div>
          <button type="submit" className={s.cta} onMouseEnter={playHover}>
            {contact.cta} &rarr;
          </button>
          {status === 'sent' && (
            <p className={s.success}>Votre client email s'est ouvert avec le message pré-rempli.</p>
          )}
        </form>

        <div className={s.meta} ref={metaRef}>
          <a href={`mailto:${contact.email}`} className={s.link}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            {contact.email}
          </a>
          <a href={`https://${contact.website}`} className={s.link} target="_blank" rel="noopener noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/></svg>
            {contact.website}
          </a>
          <span className={s.link}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            {contact.location}
          </span>
        </div>
      </div>
    </section>
  )
}
