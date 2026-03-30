import { useScrollReveal } from '../../hooks/useScrollReveal'
import { stats } from '../../data/content'
import s from './Stats.module.css'

function StatItem({ value, label, delay }) {
  const ref = useScrollReveal({ delay })
  return (
    <div className={s.stat} ref={ref}>
      <span className={s.value}>{value}</span>
      <span className={s.label}>{label}</span>
    </div>
  )
}

export default function Stats() {
  return (
    <section className={s.section}>
      <div className={s.grid}>
        {stats.map((stat, i) => (
          <StatItem key={stat.label} {...stat} delay={i * 0.1} />
        ))}
      </div>
    </section>
  )
}
