import { useRef, useCallback } from 'react'
import gsap from 'gsap'
import SectionHeader from '../SectionHeader/SectionHeader'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import s from './PoleSection.module.css'

function SubBlock({ title, desc, caps, delay }) {
  const scrollRef = useScrollReveal({ delay })
  const cardRef = useRef(null)

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    card.style.setProperty('--mx', `${x * 100}%`)
    card.style.setProperty('--my', `${y * 100}%`)
    gsap.to(card, {
      rotationY: (x - 0.5) * 5,
      rotationX: -(y - 0.5) * 4,
      duration: 0.5,
      ease: 'power2.out',
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    gsap.to(cardRef.current, {
      rotationY: 0, rotationX: 0,
      duration: 0.7, ease: 'power3.out',
    })
  }, [])

  const setRefs = useCallback((node) => {
    cardRef.current = node
    if (typeof scrollRef === 'function') scrollRef(node)
    else if (scrollRef) scrollRef.current = node
  }, [scrollRef])

  return (
    <div
      className={s.block}
      ref={setRefs}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
    >
      <div className={s.blockShine} />
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

export default function PoleSection({ data, elevated }) {
  return (
    <section className={`${s.section} ${elevated ? s.elevated : ''}`} id={data.id}>
      <div className={s.inner}>
        <SectionHeader tag={data.tag} title={data.title} description={data.desc} />
        <div className={s.blocks}>
          {data.subsections.map((sub, i) => (
            <SubBlock key={sub.title} {...sub} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
