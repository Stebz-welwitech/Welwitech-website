import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useProgress } from '@react-three/drei';
import styles from './Loader.module.css';

const BRAND = 'WELWITECH';

export default function Loader({ onComplete }) {
  const overlayRef = useRef(null);
  const lettersRef = useRef([]);
  const fillRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Animer l'apparition des lettres
      tl.to(lettersRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: 'power3.out',
      });

      // Simuler une progression de chargement asynchrone bulletproof (2.5s)
      const fakeProgress = { val: 0 };
      
      tl.to(fakeProgress, {
        val: 100,
        duration: 2.5,
        ease: 'power2.inOut',
        onUpdate: () => {
          if (fillRef.current) fillRef.current.style.width = `${fakeProgress.val}%`;
          if (counterRef.current) counterRef.current.innerHTML = Math.round(fakeProgress.val);
        },
        onComplete: () => {
          // Une fois à 100%, lancer l'exit animation
          gsap.to(overlayRef.current, {
            scale: 1.05,
            filter: 'blur(20px)',
            opacity: 0,
            pointerEvents: 'none',
            duration: 0.8,
            ease: 'power3.inOut',
            onComplete: onComplete
          });
        }
      }, 0); // Démarre en même temps que les lettres

    }, overlayRef);
    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={overlayRef} className={styles.overlay} style={{ clipPath: 'inset(0)' }}>
      <div className={styles.gradientOverlay} />

      <div className={styles.brand}>
        {BRAND.split('').map((char, i) => (
          <span
            key={i}
            ref={(el) => (lettersRef.current[i] = el)}
            className={styles.letter}
            style={{ transform: 'translateY(30px)' }}
          >
            {char}
          </span>
        ))}
      </div>

      <div className={styles.progressTrack}>
        <div ref={fillRef} className={styles.progressFill} />
      </div>

      <div ref={counterRef} className={styles.counter}>
        0
      </div>
    </div>
  );
}
