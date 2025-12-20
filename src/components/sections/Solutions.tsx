"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { SolutionModal } from "@/components/ui/SolutionModal";

interface Solution {
    id: string;
    title: string;
    category: string;
    img: string;
    features: string[];
}

export function Solutions() {
    const { t } = useLanguage();
    const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);

    const solutions = [
        {
            id: "res",
            title: t("solutions.res_title"),
            category: t("solutions.res_cat"),
            img: "/images/ubiquiti-E7-Borne-WIFI.png",
            features: t("solutions.res_features") as any as string[]
        },
        {
            id: "access",
            title: t("solutions.access_title"),
            category: t("solutions.access_cat"),
            img: "/images/Unifi-access.png",
            features: t("solutions.access_features") as any as string[]
        },
        {
            id: "tower",
            title: t("solutions.tower_title"),
            category: t("solutions.tower_cat"),
            img: "/images/baie-unifi.png",
            features: t("solutions.tower_features") as any as string[]
        },
    ];

    const handleOpen = (solution: Solution) => {
        setSelectedSolution(solution);
    };

    const handleClose = () => {
        setSelectedSolution(null);
    };

    return (
        <section id="solutions" className="py-32 bg-blink-black text-white overflow-hidden relative">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="flex flex-col md:flex-row justify-between items-start mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-blink-orange font-bold text-xl mb-4 md:mb-0"
                    >
                        (02)
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{t("solutions.title")}</h2>
                        <p className="text-xl text-gray-400">{t("solutions.subtitle")}</p>
                    </motion.div>
                </div>

                <div className="space-y-4">
                    {solutions.map((sol, idx) => (
                        <motion.div
                            key={sol.id}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="group border-t border-white/10 hover:border-blink-orange transition-colors py-16 flex flex-col md:flex-row items-center justify-between gap-12"
                        >
                            <div className="flex-1">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-blink-orange text-sm font-bold uppercase tracking-wider mb-2"
                                >
                                    {sol.category}
                                </motion.div>

                                <h3 className="text-4xl md:text-6xl font-bold text-white group-hover:text-blink-orange transition-colors duration-300">
                                    {sol.title}
                                </h3>

                                <motion.button
                                    whileHover={{ x: 10 }}
                                    onClick={() => handleOpen(sol)}
                                    className="flex items-center gap-2 text-white mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:text-blink-orange"
                                >
                                    {t("solutions.learn_more")} <ChevronRight className="w-4 h-4" />
                                </motion.button>
                            </div>

                            {/* Image Presentation */}
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: -2 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-white/5 rounded-2xl flex items-center justify-center overflow-hidden cursor-pointer"
                                onClick={() => handleOpen(sol)}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <motion.img
                                    src={sol.img}
                                    alt={sol.title}
                                    className="max-w-[80%] max-h-[80%] object-contain opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                    <div className="border-t border-white/10"></div>
                </div>
            </div>

            {/* Modal Integration */}
            <SolutionModal
                isOpen={!!selectedSolution}
                onClose={handleClose}
                solution={selectedSolution}
            />
        </section>
    );
}
