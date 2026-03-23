import { useScrollReveal } from '../../hooks/useScrollReveal'
import s from './SectionHeader.module.css'

export default function SectionHeader({ tag, title, description, center }) {
  const tagRef = useScrollReveal()
  const titleRef = useScrollReveal({ delay: 0.1 })
  const descRef = useScrollReveal({ delay: 0.2 })

  return (
    <div className={`${s.header} ${center ? s.center : ''}`}>
      <p className={s.tag} ref={tagRef}><span className={s.line} />{tag}</p>
      <h2 className={s.title} ref={titleRef}>{title}</h2>
      {description && <p className={s.desc} ref={descRef}>{description}</p>}
    </div>
  )
}
