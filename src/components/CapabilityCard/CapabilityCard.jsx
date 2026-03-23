import { useScrollReveal } from '../../hooks/useScrollReveal'
import s from './CapabilityCard.module.css'

export default function CapabilityCard({ title, desc, delay = 0 }) {
  const ref = useScrollReveal({ delay })

  return (
    <div className={s.card} ref={ref}>
      <h4 className={s.title}>{title}</h4>
      <p className={s.desc}>{desc}</p>
    </div>
  )
}
