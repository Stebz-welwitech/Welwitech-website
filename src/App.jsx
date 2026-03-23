import { useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar/Navbar'
import { CinematicHero } from './components/ui/cinematic-landing-hero'
import ServicesOverview from './components/ServicesOverview/ServicesOverview'
import PoleSection from './components/PoleSection/PoleSection'
import ProcessSection from './components/ProcessSection/ProcessSection'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { poles } from './data/content'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const ids = ['services', 'design', 'mobile', 'web', 'ai', 'approach', 'contact']
    const triggers = ids.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      return ScrollTrigger.create({
        trigger: el,
        start: 'top center',
        end: 'bottom center',
        onToggle: self => { if (self.isActive) setActiveSection(id) },
      })
    })
    return () => triggers.forEach(t => t?.kill())
  }, [])

  return (
    <>
      <Navbar activeSection={activeSection} />
      <main>
        <CinematicHero />
        <ServicesOverview />
        <hr className="divider" />
        <PoleSection data={poles.design} />
        <hr className="divider" />
        <PoleSection data={poles.mobile} />
        <hr className="divider" />
        <PoleSection data={poles.web} />
        <hr className="divider" />
        <PoleSection data={poles.ai} />
        <hr className="divider" />
        <ProcessSection />
        <hr className="divider" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
