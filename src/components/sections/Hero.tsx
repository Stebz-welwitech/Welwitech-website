"use client";

import { motion } from "framer-motion";
import { HeroScene } from "@/components/3d/HeroScene";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative w-full h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-white pt-20">

            {/* 3D Visual - Takes center stage */}
            <div className="absolute inset-0 z-0">
                <HeroScene />
                {/* Fade to white at bottom */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
            </div>

            <div className="relative z-10 text-center max-w-4xl px-6 mt-[-10vh]">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-semibold tracking-tight text-ui-black mb-6"
                >
                    {t("hero.title_start")} {t("hero.title_highlight")}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-ui-gray font-light mb-8 max-w-2xl mx-auto"
                >
                    {t("hero.subtitle")}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex items-center justify-center gap-6"
                >
                    <Link
                        href="#solutions"
                        className="bg-ui-blue text-white px-8 py-3 rounded text-lg font-medium hover:bg-[#005AD1] transition-colors"
                    >
                        {t("hero.cta_primary")}
                    </Link>

                    <Link
                        href="#contact"
                        className="text-ui-blue text-lg font-medium flex items-center gap-1 hover:underline"
                    >
                        {t("hero.cta_secondary")}
                        <ChevronRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
