import { useScrollReveal } from '../../hooks/useScrollReveal'
import s from './ServiceCard.module.css'

export default function ServiceCard({ num, title, desc, href, variant, delay = 0 }) {
  const ref = useScrollReveal({ delay })

  const handleClick = (e) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <a href={href} className={`${s.card} ${s[variant] || ''}`} ref={ref} onClick={handleClick}>
      <span className={s.num}>{num}</span>
      <h3 className={s.title}>{title}</h3>
      <p className={s.desc}>{desc}</p>
      <span className={s.arrow}>&rarr;</span>
    </a>
  )
}
