import { useScrollReveal } from '../../hooks/useScrollReveal'
import SectionHeader from '../SectionHeader/SectionHeader'
import { contact } from '../../data/content'
import s from './Contact.module.css'

export default function Contact() {
  const ctaRef = useScrollReveal({ delay: 0.2 })
  const metaRef = useScrollReveal({ delay: 0.3 })

  return (
    <section className={s.section} id="contact">
      <div className={s.inner}>
        <SectionHeader tag={contact.tag} title={contact.title} description={contact.desc} center />
        <a href={`mailto:${contact.email}`} className={s.cta} ref={ctaRef}>
          {contact.cta} &rarr;
        </a>
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
