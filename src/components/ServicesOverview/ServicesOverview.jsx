import SectionHeader from '../SectionHeader/SectionHeader'
import ServiceCard from '../ServiceCard/ServiceCard'
import { servicesOverview } from '../../data/content'
import s from './ServicesOverview.module.css'

export default function ServicesOverview() {
  return (
    <section className={s.section} id="services">
      <div className={s.inner}>
        <SectionHeader
          tag={servicesOverview.tag}
          title={servicesOverview.heading}
        />
        <div className={s.grid}>
          {servicesOverview.cards.map((card, i) => (
            <ServiceCard key={card.num} {...card} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
