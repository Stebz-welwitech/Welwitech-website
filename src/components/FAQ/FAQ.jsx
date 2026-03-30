import { useState } from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import { faq } from '../../data/content'
import s from './FAQ.module.css'

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={s.item}>
      <button
        className={s.question}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {question}
        <span className={`${s.icon} ${open ? s.iconOpen : ''}`}>+</span>
      </button>
      <div className={`${s.answer} ${open ? s.answerOpen : ''}`}>
        <p className={s.answerText}>{answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section className={s.section} id="faq">
      <div className={s.inner}>
        <SectionHeader tag={faq.tag} title={faq.title} center />
        <div className={s.list}>
          {faq.items.map((item) => (
            <FAQItem key={item.question} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
