"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { cn } from "../../lib/utils";
import "./cinematic-landing-hero.css";

export const CinematicHero = ({
  className,
  badgeText = "Welwitech — Studio Digital",
  title = "Concevoir l'avenir digital.",
  subtitle = "Des applications sur mesure et des identités singulières pour les marques qui définissent la norme de demain.",
  primaryAction = "Démarrer un projet",
  secondaryAction = "Voir nos projets",
  ...props
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-stagger",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.15,
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("hero-section font-sans antialiased", className)}
      id="hero"
      {...props}
    >
      <div className="hero-aura" />
      <div className="hero-aura-bottom" />

      <div className="hero-content">
        <div className="hero-badge hero-stagger">
          <span className="badge-dot" />
          {badgeText}
        </div>

        <h1 className="hero-title hero-stagger">{title}</h1>

        <p className="hero-subtitle hero-stagger">{subtitle}</p>

        <div className="hero-actions hero-stagger">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="hero-btn-primary"
          >
            {primaryAction}
          </a>
          <a
            href="#portfolio"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#portfolio")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="hero-btn-secondary"
          >
            {secondaryAction}
          </a>
        </div>
      </div>

      <div className="hero-scroll-indicator hero-stagger">
        <span className="scroll-line" />
        Scroll
      </div>
    </div>
  );
};
