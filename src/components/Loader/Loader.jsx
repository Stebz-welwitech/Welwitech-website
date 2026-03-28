import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import styles from './Loader.module.css';

const BRAND = 'WELWITECH';

export default function Loader({ onComplete }) {
  const overlayRef = useRef(null);
  const lettersRef = useRef([]);
  const fillRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });

      // 1. Stagger letters in
      tl.to(lettersRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power3.out',
      });

      // 2. Progress bar fill + counter (overlapping with tail of letters)
      tl.to(
        fillRef.current,
        {
          width: '100%',
          duration: 1.2,
          ease: 'power2.inOut',
        },
        '-=0.1'
      );

      tl.to(
        counterRef.current,
        {
          innerHTML: 100,
          snap: { innerHTML: 1 },
          duration: 1.2,
          ease: 'power2.inOut',
        },
        '<'
      );

      // 3. Exit animation: scale, blur, clip-path slide up
      tl.to(overlayRef.current, {
        scale: 1.05,
        filter: 'blur(10px)',
        clipPath: 'inset(0 0 100% 0)',
        duration: 0.6,
        ease: 'power3.inOut',
        delay: 0.2,
      });
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
