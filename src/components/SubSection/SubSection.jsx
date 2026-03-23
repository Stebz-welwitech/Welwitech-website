import { useScrollReveal } from '../../hooks/useScrollReveal'
import CapabilityCard from '../CapabilityCard/CapabilityCard'
import s from './SubSection.module.css'

export default function SubSection({ title, desc, caps }) {
  const titleRef = useScrollReveal()
  const descRef = useScrollReveal({ delay: 0.08 })

  return (
    <div className={s.sub}>
      <h3 className={s.title} ref={titleRef}>{title}</h3>
      {desc && <p className={s.desc} ref={descRef}>{desc}</p>}
      <div className={s.grid}>
        {caps.map((cap, i) => (
          <CapabilityCard key={cap.title} title={cap.title} desc={cap.desc} delay={i * 0.06} />
        ))}
      </div>
    </div>
  )
}
