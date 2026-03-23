import SectionHeader from '../SectionHeader/SectionHeader'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import s from './PoleSection.module.css'

function SubBlock({ title, desc, caps, color, delay }) {
  const ref = useScrollReveal({ delay })
  return (
    <div className={`${s.block} ${s[color] || ''}`} ref={ref}>
      <h3 className={s.blockTitle}>{title}</h3>
      {desc && <p className={s.blockDesc}>{desc}</p>}
      <div className={s.tags}>
        {caps.map(c => (
          <span key={c.title} className={s.tag} title={c.desc}>{c.title}</span>
        ))}
      </div>
    </div>
  )
}

export default function PoleSection({ data }) {
  return (
    <section className={`${s.section} ${s[data.color] || ''}`} id={data.id}>
      <div className={s.inner}>
        <SectionHeader tag={data.tag} title={data.title} description={data.desc} />
        <div className={s.blocks}>
          {data.subsections.map((sub, i) => (
            <SubBlock key={sub.title} {...sub} color={data.color} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
