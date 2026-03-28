import { useRef, useEffect, useId } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import s from './BlobDivider.module.css'

gsap.registerPlugin(ScrollTrigger)

const PATHS = {
  wave: {
    start: 'M0,64 C320,120 480,0 720,64 C960,128 1200,20 1440,64 L1440,128 L0,128Z',
    end:   'M0,64 C320,20 480,120 720,64 C960,0 1200,128 1440,64 L1440,128 L0,128Z',
  },
  blob: {
    start: 'M0,96 C240,32 480,128 720,64 C960,0 1200,96 1440,48 L1440,128 L0,128Z',
    end:   'M0,48 C240,96 480,0 720,64 C960,128 1200,32 1440,96 L1440,128 L0,128Z',
  },
  organic: {
    start: 'M0,80 Q360,0 720,80 Q1080,160 1440,80 L1440,128 L0,128Z',
    end:   'M0,80 Q360,160 720,80 Q1080,0 1440,80 L1440,128 L0,128Z',
  },
}

export default function BlobDivider({ variant = 'wave', color = '#888888', flip = false }) {
  const pathRef = useRef(null)
  const svgRef = useRef(null)
  const gradientId = useId()

  useEffect(() => {
    const pathEl = pathRef.current
    const svgEl = svgRef.current
    if (!pathEl || !svgEl) return

    const { start, end } = PATHS[variant] || PATHS.wave

    pathEl.setAttribute('d', start)

    const tween = gsap.to(pathEl, {
      attr: { d: end },
      ease: 'none',
      scrollTrigger: {
        trigger: svgEl,
        start: 'top 90%',
        end: 'bottom 10%',
        scrub: 1.5,
      },
    })

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [variant])

  return (
    <svg
      ref={svgRef}
      className={`${s.divider} ${flip ? s.flip : ''}`}
      viewBox="0 0 1440 128"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0.03" />
          <stop offset="50%" stopColor={color} stopOpacity="0.06" />
          <stop offset="100%" stopColor={color} stopOpacity="0.03" />
        </linearGradient>
      </defs>
      <path
        ref={pathRef}
        d={PATHS[variant]?.start || PATHS.wave.start}
        fill={`url(#${gradientId})`}
      />
    </svg>
  )
}
