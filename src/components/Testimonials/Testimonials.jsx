import SectionHeader from '../SectionHeader/SectionHeader'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { testimonials } from '../../data/content'
import s from './Testimonials.module.css'

function TestimonialCard({ quote, author, role, delay }) {
  const ref = useScrollReveal({ delay })
  return (
    <div className={s.card} ref={ref}>
      <span className={s.quoteIcon}>"</span>
      <p className={s.quote}>{quote}</p>
      <div className={s.author}>
        <span className={s.authorName}>{author}</span>
        <span className={s.authorRole}>{role}</span>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className={s.section} id="testimonials">
      <div className={s.inner}>
        <SectionHeader tag={testimonials.tag} title={testimonials.title} center />
        <div className={s.grid}>
          {testimonials.items.map((item, i) => (
            <TestimonialCard key={item.author} {...item} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
