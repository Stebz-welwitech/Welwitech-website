"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { HeroScene } from "@/components/3d/HeroScene";

// Component to split text into words and stagger them
function StaggeredText({ text, className, delay = 0 }: { text: string, className?: string, delay?: number }) {
    const words = text.split(" ");

    return (
        <span className={className}>
            {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden align-bottom">
                    <motion.span
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: delay + (i * 0.05) }}
                        className="inline-block mr-[0.2em] py-1"
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}

export function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-blink-bg">

            {/* 3D Digital Dust */}
            <HeroScene />

            <div className="relative z-10 text-center max-w-6xl px-6 pt-32 md:pt-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <span className="text-blink-orange font-bold uppercase tracking-widest text-sm mb-8 block">
                        {t("hero.badge")}
                    </span>
                </motion.div>

                <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-blink-black leading-[1.0] md:leading-[0.9] mb-8 md:mb-12">
                    <div className="block">
                        <StaggeredText text={t("hero.title_start")} delay={0.2} />
                    </div>
                    <div className="block">
                        <span className="text-transparent bg-clip-text bg-[linear-gradient(110deg,#121212,45%,#737373,55%,#121212)] animate-shimmer">
                            <StaggeredText text={t("hero.title_highlight")} delay={0.4} />
                        </span>
                    </div>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="text-xl md:text-2xl text-gray-500 font-medium max-w-2xl mx-auto mb-16 leading-relaxed"
                >
                    {t("hero.subtitle")}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="flex items-center justify-center gap-6"
                >
                    <Link
                        href="#solutions"
                        className="group relative bg-blink-orange text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-wide overflow-hidden transition-all hover:scale-105"
                    >
                        <span className="relative z-10">{t("hero.cta_primary")}</span>
                        <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                    </Link>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 animate-bounce"
            >
                <ArrowDown className="w-6 h-6 text-blink-orange" />
            </motion.div>
        </section>
    );
}
