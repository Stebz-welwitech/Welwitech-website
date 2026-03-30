import { clients } from '../../data/content'
import s from './Clients.module.css'

export default function Clients() {
  // Duplicate logos for seamless infinite scroll
  const allLogos = [...clients.logos, ...clients.logos]

  return (
    <section className={s.section}>
      <div className={s.inner}>
        <span className={s.tag}>{clients.tag}</span>
      </div>
      <div className={s.marquee}>
        <div className={s.track}>
          {allLogos.map((logo, i) => (
            <span key={`${logo.name}-${i}`} className={s.logo}>
              {logo.name}
            </span>
          ))}
        </div>
        <div className={s.track} aria-hidden="true">
          {allLogos.map((logo, i) => (
            <span key={`dup-${logo.name}-${i}`} className={s.logo}>
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
