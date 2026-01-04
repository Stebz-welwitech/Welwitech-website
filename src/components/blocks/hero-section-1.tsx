"use client";

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

const ROTATING_KEYS = [
    "hero.rotating.connectivity",
    "hero.rotating.engagement",
    "hero.rotating.security",
    "hero.rotating.performance"
];

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

import { BookingModal } from '@/components/features/BookingModal';

export function HeroSection() {
    const { t } = useLanguage();
    const [wordIndex, setWordIndex] = useState(0);
    const [showBooking, setShowBooking] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % ROTATING_KEYS.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <main className="relative overflow-hidden bg-white dark:bg-zinc-950">
            {/* Ambient Background Mesh - Welwitech Style */}
            <div className="absolute top-[-10%] right-0 md:top-[-20%] md:right-[-10%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-gradient-to-br from-w-orange/20 via-w-magenta/10 to-transparent rounded-full blur-[100px] -z-10 pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gradient-to-tr from-w-blue/10 via-w-violet/10 to-transparent rounded-full blur-[80px] -z-10 pointer-events-none" />

            <section className="relative pt-24 md:pt-36 pb-16 md:pb-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center sm:mx-auto">
                        <AnimatedGroup variants={transitionVariants}>
                            {/* Badge */}
                            <div className="mb-6 md:mb-8">
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm shadow-sm">
                                    <span className="w-2 h-2 rounded-full bg-[image:var(--image-gradient-primary)] animate-pulse" />
                                    <span className="text-xs font-semibold uppercase tracking-wider text-zinc-600">
                                        {t('hero.badge')}
                                    </span>
                                </span>
                            </div>

                            {/* Headline */}
                            <h1 className="mt-8 max-w-4xl mx-auto text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black dark:text-white leading-[1.1] mb-6">
                                <span className="block">{t('hero.title_start')}</span>
                                <span className="relative block h-[1.2em] overflow-hidden">
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={ROTATING_KEYS[wordIndex]}
                                            initial={{ y: 30, opacity: 0, filter: "blur(4px)" }}
                                            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                            exit={{ y: -30, opacity: 0, filter: "blur(4px)" }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                            className="absolute inset-0 text-transparent bg-clip-text bg-[image:var(--image-gradient-primary)]"
                                        >
                                            {t(ROTATING_KEYS[wordIndex])}
                                        </motion.span>
                                    </AnimatePresence>
                                </span>
                            </h1>

                            {/* Description */}
                            <p className="mx-auto mt-8 max-w-2xl text-zinc-500 text-lg md:text-xl leading-relaxed">
                                {t('hero.subtitle')}
                            </p>
                        </AnimatedGroup>

                        {/* CTA Buttons */}
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}
                            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
                            <Link href="#contact" className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-black text-white font-semibold hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 group text-sm sm:text-base">
                                {t('hero.cta_primary')}
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <button
                                onClick={() => setShowBooking(true)}
                                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-zinc-100 text-black font-semibold hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 text-sm sm:text-base cursor-pointer"
                            >
                                {t('hero.cta_secondary')}
                            </button>
                        </AnimatedGroup>
                    </div>
                </div>

                {/* Product Screenshot */}
                <AnimatedGroup
                    variants={{
                        container: {
                            visible: {
                                transition: {
                                    staggerChildren: 0.05,
                                    delayChildren: 0.75,
                                },
                            },
                        },
                        ...transitionVariants,
                    }}>
                    <div className="relative mt-16 md:mt-20 overflow-hidden px-4 sm:px-6">
                        <div
                            aria-hidden
                            className="bg-gradient-to-b to-white dark:to-zinc-950 absolute inset-0 z-10 from-transparent from-35%"
                        />
                        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4 shadow-2xl bg-white dark:bg-zinc-900">
                            <video
                                className="aspect-video relative rounded-xl w-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                                src="https://ui.com/microsite/static/hero-x6oaIG0Y.mp4"
                            />
                        </div>
                    </div>
                </AnimatedGroup>
            </section>

            {/* Official Partner Section */}
            <section className="bg-white dark:bg-zinc-950 pb-16 pt-16 md:pb-24">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col items-center justify-center gap-6">
                        <span className="text-zinc-500 dark:text-zinc-400 text-sm font-semibold uppercase tracking-widest">
                            {t('partners.label')}
                        </span>
                        <div className="relative h-12 md:h-16 w-auto grayscale transition-all duration-500 hover:grayscale-0">
                            <img
                                src="/images/ubiquiti-unifi.png"
                                alt="Ubiquiti UniFi Official Partner"
                                className="h-full w-auto object-contain dark:brightness-0 dark:invert"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <BookingModal isOpen={showBooking} onClose={() => setShowBooking(false)} />
        </main>
    )
}
