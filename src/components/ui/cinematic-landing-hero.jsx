import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import "./cinematic-landing-hero.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const screens = [
  {
    label: "Dashboard",
    title: "Welwitech",
    accent: "#2997ff",
    items: [
      { color: "blue", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
      { color: "emerald", icon: "M5 13l4 4L19 7" },
      { color: "violet", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    ],
  },
  {
    label: "Design",
    title: "UX/UI",
    accent: "#ff375f",
    items: [
      { color: "rose", icon: "M9.53 16.12a3 3 0 00-5.78 1.13 2.25 2.25 0 01-2.4 2.24 4.5 4.5 0 008.4-2.24c0-.4-.08-.78-.22-1.13" },
      { color: "amber", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" },
      { color: "blue", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
    ],
  },
  {
    label: "Intelligence",
    title: "IA & Agents",
    accent: "#bf5af2",
    items: [
      { color: "violet", icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846" },
      { color: "blue", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
      { color: "emerald", icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" },
    ],
  },
];

const colorMap = {
  blue: { from: "from-blue-500/20", to: "to-blue-600/5", border: "border-blue-400/20", text: "text-blue-400" },
  emerald: { from: "from-emerald-500/20", to: "to-emerald-600/5", border: "border-emerald-400/20", text: "text-emerald-400" },
  violet: { from: "from-violet-500/20", to: "to-violet-600/5", border: "border-violet-400/20", text: "text-violet-400" },
  rose: { from: "from-rose-500/20", to: "to-rose-600/5", border: "border-rose-400/20", text: "text-rose-400" },
  amber: { from: "from-amber-500/20", to: "to-amber-600/5", border: "border-amber-400/20", text: "text-amber-400" },
};

function PhoneScreen({ screen, className }) {
  return (
    <div className={`phone-screen absolute inset-0 top-[44px] bottom-[20px] px-4 flex flex-col overflow-hidden ${className || ''}`}>
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col">
          <span className="text-[8px] text-neutral-500 uppercase tracking-widest font-bold leading-none mb-1">{screen.label}</span>
          <span className="text-base font-bold tracking-tight text-white leading-none">{screen.title}</span>
        </div>
        <div className="w-7 h-7 rounded-full bg-white/5 text-neutral-200 flex items-center justify-center font-bold text-[10px] border border-white/10">W</div>
      </div>
      <div className="relative w-[100px] h-[100px] mx-auto flex items-center justify-center mb-4 shrink-0">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="7" />
          <circle className="screen-ring" cx="50" cy="50" r="40" fill="none" stroke={screen.accent} strokeWidth="7" style={{ strokeDasharray: 251, strokeDashoffset: 50, transform: 'rotate(-90deg)', transformOrigin: 'center', strokeLinecap: 'round' }} />
        </svg>
        <div className="text-center z-10 flex flex-col items-center">
          <span className="text-xl font-extrabold tracking-tighter text-white leading-none">50</span>
          <span className="text-[6px] text-white/30 uppercase tracking-[0.1em] font-bold mt-1">Projets</span>
        </div>
      </div>
      <div className="space-y-2 flex-1 min-h-0">
        {screen.items.map((item, i) => {
          const c = colorMap[item.color];
          return (
            <div key={i} className="widget-depth rounded-xl p-2 flex items-center">
              <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${c.from} ${c.to} flex items-center justify-center mr-2 border ${c.border} shrink-0`}>
                <svg className={`w-3 h-3 ${c.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} /></svg>
              </div>
              <div className="flex-1">
                <div className="h-1.5 bg-neutral-300/80 rounded-full mb-1" style={{ width: `${50 + i * 12}%` }} />
                <div className="h-1 bg-neutral-600 rounded-full" style={{ width: `${35 + i * 10}%` }} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2 w-[90px] h-[3px] bg-white/20 rounded-full" />
    </div>
  );
}

export function CinematicHero({
  tagline1 = "Nous créons des",
  tagline2 = "produits d'exception.",
  className,
  ...props
} = {}) {

  const containerRef = useRef(null);
  const mainCardRef = useRef(null);
  const mockupRef = useRef(null);
  const requestRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.scrollY > window.innerHeight * 2) return;
      cancelAnimationFrame(requestRef.current);
      requestRef.current = requestAnimationFrame(() => {
        if (mockupRef.current) {
          const xVal = (e.clientX / window.innerWidth - 0.5) * 2;
          const yVal = (e.clientY / window.innerHeight - 0.5) * 2;
          gsap.to(mockupRef.current, { rotationY: xVal * 6, rotationX: -yVal * 6, ease: "power3.out", duration: 1.2 });
        }
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => { window.removeEventListener("mousemove", handleMouseMove); cancelAnimationFrame(requestRef.current); };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".text-track", { opacity: 0, y: 30 });
      gsap.set(".text-days", { opacity: 0, y: 20 });
      gsap.set(".hero-cta", { opacity: 0, y: 15 });
      gsap.set(".main-card", { y: window.innerHeight + 200, autoAlpha: 1 });
      gsap.set(".mockup-scroll-wrapper", { autoAlpha: 0 });
      gsap.set(".card-label", { autoAlpha: 0 });

      // Intro — simple fade in
      const introTl = gsap.timeline({ delay: 0.4 });
      introTl
        .to(".text-track", { duration: 1, opacity: 1, y: 0, ease: "power2.out" })
        .to(".text-days", { duration: 1, opacity: 1, y: 0, ease: "power2.out" }, "-=0.6")
        .to(".hero-cta", { duration: 0.8, opacity: 1, y: 0, ease: "power2.out" }, "-=0.4");

      // Scroll
      const scrollTl = gsap.timeline({
        scrollTrigger: { trigger: containerRef.current, start: "top top", end: "+=5000", pin: true, scrub: 1, anticipatePin: 1 },
      });

      const phoneScreens = document.querySelectorAll(".phone-screen");

      scrollTl
        // Phase 1: text fades, card rises
        .to(".hero-text-wrapper", { opacity: 0, pointerEvents: "none", ease: "power2.inOut", duration: 1.5 }, 0)
        .to(".bg-grid-theme", { opacity: 0, duration: 1.5 }, 0)
        .to(".main-card", { y: 0, ease: "power3.inOut", duration: 1.5 }, 0)

        // Phase 2: card expands, phone appears
        .to(".main-card", { width: "100%", height: "100%", borderRadius: "0px", ease: "power3.inOut", duration: 1.2 })
        .fromTo(".mockup-scroll-wrapper", { y: 100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, ease: "power3.out", duration: 1.5 }, "-=0.5")
        .fromTo(".card-label", { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, ease: "power3.out", duration: 1 }, "-=0.8")

      // Phase 3: Screen 1 visible, hold
      if (phoneScreens.length > 0) {
        // Screen 1 is already visible
        scrollTl.to({}, { duration: 1.2 })

        // Transition to screen 2
        if (phoneScreens[1]) {
          scrollTl
            .to(phoneScreens[0], { autoAlpha: 0, duration: 0.6 })
            .to(phoneScreens[1], { autoAlpha: 1, duration: 0.6 }, "-=0.3")
            .to(".card-label-text", { opacity: 0, duration: 0.3 }, "-=0.6")
            .set(".card-label-text", { innerHTML: "Design & UX/UI" })
            .to(".card-label-text", { opacity: 1, duration: 0.3 })
            .to({}, { duration: 1.2 })
        }

        // Transition to screen 3
        if (phoneScreens[2]) {
          scrollTl
            .to(phoneScreens[1], { autoAlpha: 0, duration: 0.6 })
            .to(phoneScreens[2], { autoAlpha: 1, duration: 0.6 }, "-=0.3")
            .to(".card-label-text", { opacity: 0, duration: 0.3 }, "-=0.6")
            .set(".card-label-text", { innerHTML: "IA & Agents autonomes" })
            .to(".card-label-text", { opacity: 1, duration: 0.3 })
            .to({}, { duration: 1.2 })
        }
      }

      // Phase 4: exit
      scrollTl.to(".main-card", { y: -window.innerHeight - 200, ease: "power3.in", duration: 1.5 });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-screen h-screen overflow-hidden flex items-center justify-center bg-background text-foreground font-sans antialiased", className)}
      {...props}
    >
      <div className="bg-grid-theme absolute inset-0 z-0 pointer-events-none opacity-30" aria-hidden="true" />

      {/* Hero Texts */}
      <div className="hero-text-wrapper absolute z-30 flex flex-col items-center justify-center text-center w-screen px-4 will-change-transform pointer-events-auto">
        <h1 className="text-track text-4xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight mb-2" style={{ color: '#f5f5f7' }}>
          {tagline1}
        </h1>
        <h1 className="text-days text-4xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-tighter mb-10" style={{ color: '#f5f5f7' }}>
          {tagline2}
        </h1>
        <div className="hero-cta flex flex-col sm:flex-row gap-6 items-center">
          <a href="mailto:contact@welwitech.com" className="inline-flex items-center gap-2" style={{ color: '#2997ff', fontSize: '17px', fontWeight: 500 }}>
            Nous contacter
            <svg width="16" height="16" fill="none" stroke="#2997ff" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
          </a>
          <a href="#services" className="inline-flex items-center gap-2" style={{ color: '#2997ff', fontSize: '17px', fontWeight: 500 }}
            onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Découvrir nos services
            <svg width="16" height="16" fill="none" stroke="#2997ff" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>

      {/* The Card */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div ref={mainCardRef} className="main-card premium-depth-card relative overflow-hidden gsap-reveal flex items-center justify-center pointer-events-auto w-[92vw] md:w-[85vw] h-[92vh] md:h-[85vh] rounded-[32px] md:rounded-[40px]">
          <div className="card-sheen" aria-hidden="true" />
          <div className="relative w-full h-full flex flex-col items-center justify-center z-10 px-6">

            {/* Phone */}
            <div className="mockup-scroll-wrapper relative flex items-center justify-center">
              <div className="relative flex items-center justify-center transform scale-[0.5] md:scale-[0.6] lg:scale-[0.7]">
                <div ref={mockupRef} className="relative w-[280px] h-[580px] rounded-[3rem] iphone-bezel flex flex-col will-change-transform" style={{ transformStyle: "preserve-3d" }}>
                  <div className="absolute top-[120px] -left-[3px] w-[3px] h-[25px] hardware-btn rounded-l-md z-0" />
                  <div className="absolute top-[160px] -left-[3px] w-[3px] h-[45px] hardware-btn rounded-l-md z-0" />
                  <div className="absolute top-[220px] -left-[3px] w-[3px] h-[45px] hardware-btn rounded-l-md z-0" />
                  <div className="absolute top-[170px] -right-[3px] w-[3px] h-[70px] hardware-btn rounded-r-md z-0 scale-x-[-1]" />
                  <div className="absolute inset-[7px] bg-[#0a0a0a] rounded-[2.5rem] overflow-hidden shadow-[inset_0_0_15px_rgba(0,0,0,1)] text-white z-10">
                    <div className="absolute inset-0 screen-glare z-40 pointer-events-none" />
                    <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-50 flex items-center justify-end px-3 shadow-[inset_0_-1px_2px_rgba(255,255,255,0.1)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse" />
                    </div>
                    {screens.map((screen, i) => (
                      <PhoneScreen key={i} screen={screen} className={i === 0 ? '' : 'opacity-0'} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Label below phone */}
            <div className="card-label mt-4 text-center z-20">
              <p className="card-label-text text-white/50 text-sm md:text-base">Design. Mobile. Web. IA.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
