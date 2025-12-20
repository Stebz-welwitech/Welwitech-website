"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export function Partners() {
    const { t } = useLanguage();

    return (
        <section className="py-10 bg-blink-black border-y border-white/5 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[100px] bg-blink-orange/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 relative z-10">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                    {t("partners.label")}
                </span>

                <div className="h-8 w-px bg-white/10 hidden md:block" />

                <motion.div
                    initial={{ opacity: 0.5, filter: "brightness(0) invert(1)" }}
                    whileHover={{ opacity: 1, filter: "brightness(1) invert(0)" }}
                    transition={{ duration: 0.4 }}
                    className="cursor-pointer"
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/images/ubiquiti-unifi.png"
                        alt="UniFi Ecosystem"
                        className="h-8 md:h-12 object-contain"
                    />
                </motion.div>
            </div>
        </section>
    );
}
