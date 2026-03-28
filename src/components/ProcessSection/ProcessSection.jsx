import SectionHeader from '../SectionHeader/SectionHeader'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { approach } from '../../data/content'
import s from './ProcessSection.module.css'

function ProcessCard({ num, title, desc, delay, isLast }) {
  const ref = useScrollReveal({ delay })
  return (
    <div className={s.step} ref={ref}>
      <div className={s.indicator}>
        <div className={s.dot}>{num}</div>
        {!isLast && <div className={s.line} />}
      </div>
      <div className={s.card}>
        <h3 className={s.cardTitle}>{title}</h3>
        <p className={s.cardDesc}>{desc}</p>
      </div>
    </div>
  )
}

export default function ProcessSection() {
  return (
    <section className={s.section} id="approach">
      <div className={s.inner}>
        <SectionHeader tag={approach.tag} title={approach.title} description={approach.desc} center />
        <div className={s.grid}>
          {approach.steps.map((step, i) => (
            <ProcessCard key={step.num} {...step} delay={i * 0.1} isLast={i === approach.steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
