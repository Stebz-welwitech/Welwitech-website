import s from './Marquee.module.css'

const words = ['DESIGN', 'MOBILE', 'WEB', 'SAAS', 'E-COMMERCE', 'IA', 'AGENTS', 'UX/UI', 'FLUTTER', 'REACT', 'SWIFT', 'NEXT.JS']

export default function Marquee() {
  const track = words.map((w, i) => (
    <span key={i} className={s.word}>{w}<span className={s.dot} /></span>
  ))

  return (
    <div className={s.marquee}>
      <div className={s.track}>
        {track}{track}
      </div>
    </div>
  )
}
