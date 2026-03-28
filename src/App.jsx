import { useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar/Navbar'
import { CinematicHero } from './components/ui/cinematic-landing-hero'
import ServicesOverview from './components/ServicesOverview/ServicesOverview'
import PoleSection from './components/PoleSection/PoleSection'
import Portfolio from './components/Portfolio/Portfolio'
import ProcessSection from './components/ProcessSection/ProcessSection'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import CustomCursor from './components/CustomCursor/CustomCursor'
import Loader from './components/Loader/Loader'
import BackToTop from './components/BackToTop/BackToTop'
import { poles } from './data/content'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [activeSection, setActiveSection] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (loading) return
    const ids = ['services', 'design', 'mobile', 'web', 'ai', 'portfolio', 'approach', 'contact']
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
  }, [loading])

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />
  }

  return (
    <>
      <CustomCursor />
      <Navbar activeSection={activeSection} />
      <main id="main-content">
        <CinematicHero />
        <ServicesOverview />
        <PoleSection data={poles.design} elevated />
        <PoleSection data={poles.mobile} />
        <PoleSection data={poles.web} elevated />
        <PoleSection data={poles.ai} />
        <Portfolio />
        <ProcessSection />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
