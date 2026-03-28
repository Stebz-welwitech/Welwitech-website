import { useEffect, useRef, useState, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeader from '../SectionHeader/SectionHeader'
import s from './Portfolio.module.css'

const projects = [
  { id: 1, title: 'App Fintech', category: 'Mobile', gradient: 'linear-gradient(135deg, #ff9f0a 0%, #ff375f 100%)', desc: 'Application bancaire mobile avec authentification biométrique et paiements instantanés.' },
  { id: 2, title: 'Plateforme SaaS', category: 'Web', gradient: 'linear-gradient(135deg, #30d158 0%, #2997ff 100%)', desc: 'Dashboard analytics temps réel pour la gestion de flotte logistique.' },
  { id: 3, title: 'Agent IA Support', category: 'IA', gradient: 'linear-gradient(135deg, #bf5af2 0%, #2997ff 100%)', desc: 'Agent conversationnel autonome intégré au CRM pour le support client 24/7.' },
  { id: 4, title: 'E-commerce Luxury', category: 'Design', gradient: 'linear-gradient(135deg, #ff375f 0%, #ff9f0a 100%)', desc: 'Expérience e-commerce immersive pour une marque de haute joaillerie.' },
  { id: 5, title: 'CRM Immobilier', category: 'Web', gradient: 'linear-gradient(135deg, #2997ff 0%, #30d158 100%)', desc: 'CRM sur mesure pour la gestion de portefeuilles immobiliers premium.' },
]

function ProjectCard({ project, index, onHover, onLeave }) {
  const cardRef = useRef(null)

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    gsap.to(card, {
      rotationY: x * 12,
      rotationX: -y * 8,
      duration: 0.4,
      ease: 'power2.out',
    })
    card.style.setProperty('--shine-x', `${(x + 0.5) * 100}%`)
    card.style.setProperty('--shine-y', `${(y + 0.5) * 100}%`)
  }, [])

  const handleMouseLeave = useCallback(() => {
    gsap.to(cardRef.current, {
      rotationY: 0, rotationX: 0,
      duration: 0.6, ease: 'power3.out',
    })
    onLeave()
  }, [onLeave])

  return (
    <div
      ref={cardRef}
      className={s.card}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className={s.cardShine} />
      <div className={s.cardInner}>
        <div className={s.cardVisual}>
          <div className={s.cardGradient} style={{ background: project.gradient }} />
        </div>
        <div className={s.cardContent}>
          <span className={s.cardCategory}>{project.category}</span>
          <h3 className={s.cardTitle}>{project.title}</h3>
          <p className={s.cardDesc}>{project.desc}</p>
        </div>
        <span className={s.cardArrow}>&rarr;</span>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const [hoveredId, setHoveredId] = useState(null)
  const previewRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    const ctx = gsap.context(() => {
      const totalScroll = track.scrollWidth - window.innerWidth

      gsap.to(track, {
        x: -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${totalScroll}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      gsap.fromTo(track.querySelectorAll(`.${s.card}`),
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.8,
          stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 80%', once: true }
        }
      )
    })

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const handleMove = (e) => {
      if (previewRef.current) {
        gsap.to(previewRef.current, {
          x: e.clientX + 20,
          y: e.clientY - 20,
          duration: 0.4,
          ease: 'power3.out',
        })
      }
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  const hoveredProject = projects.find(p => p.id === hoveredId)

  return (
    <section ref={sectionRef} className={s.section} id="portfolio">
      <div className={s.header}>
        <SectionHeader tag="Nos réalisations" title="PROJETS SÉLECTIONNÉS" description="Des produits digitaux livrés avec excellence." />
      </div>
      <div className={s.scrollHint}>
        <span className={s.scrollText}>Scroll</span>
        <svg className={s.scrollIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
      </div>
      <div className={s.track} ref={trackRef}>
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            onHover={setHoveredId}
            onLeave={() => setHoveredId(null)}
          />
        ))}
      </div>

      {hoveredProject && (
        <div
          ref={previewRef}
          className={s.preview}
        >
          <span className={s.previewCategory}>{hoveredProject.category}</span>
          <span className={s.previewTitle}>{hoveredProject.title}</span>
        </div>
      )}
    </section>
  )
}
