import { useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar/Navbar'
import { CinematicHero } from './components/ui/cinematic-landing-hero'
import Clients from './components/Clients/Clients'
import Stats from './components/Stats/Stats'
import ServicesOverview from './components/ServicesOverview/ServicesOverview'
import PoleSection from './components/PoleSection/PoleSection'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonials from './components/Testimonials/Testimonials'
import ProcessSection from './components/ProcessSection/ProcessSection'
import FAQ from './components/FAQ/FAQ'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import CustomCursor from './components/CustomCursor/CustomCursor'
import BackToTop from './components/BackToTop/BackToTop'
import { poles } from './data/content'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const ids = ['services', 'design', 'mobile', 'web', 'ai', 'portfolio', 'testimonials', 'approach', 'faq', 'contact']
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
    <div className="overflow-x-hidden max-w-[100vw] relative">
      <CustomCursor />
      <Navbar activeSection={activeSection} />
      <main id="main-content">
        <CinematicHero />
        <Clients />
        <Stats />
        <ServicesOverview />
        <PoleSection data={poles.design} elevated />
        <PoleSection data={poles.mobile} />
        <PoleSection data={poles.web} elevated />
        <PoleSection data={poles.ai} />
        <Portfolio />
        <Testimonials />
        <ProcessSection />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
