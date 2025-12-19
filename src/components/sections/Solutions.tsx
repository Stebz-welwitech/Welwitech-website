"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function FeatureStrip({ solution, index, t }: { solution: any, index: number, t: any }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax Effect: Image moves slightly slower than scroll
    const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <div ref={containerRef} className={cn("flex flex-col md:flex-row items-center gap-20", index % 2 === 1 ? "md:flex-row-reverse" : "")}>
            {/* Text Side */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex-1 space-y-6"
            >
                <span className="text-ui-blue font-medium uppercase tracking-wide text-xs">{solution.category}</span>
                <h3 className="text-4xl md:text-5xl font-medium text-ui-black leading-[1.1] tracking-tight">{solution.title}</h3>
                <ul className="space-y-4 pt-4">
                    {solution.features.map((f: string) => (
                        <li key={f} className="flex items-center gap-3 text-ui-gray text-lg font-light">
                            <div className="w-1.5 h-1.5 rounded-full bg-ui-blue shrink-0"></div>
                            {f}
                        </li>
                    ))}
                </ul>
                <div className="pt-8">
                    <button className="text-ui-blue font-medium text-lg flex items-center gap-2 hover:gap-3 transition-all group">
                        {t("solutions.learn_more")} <ChevronRight className="w-5 h-5 group-hover:text-ui-blue" />
                    </button>
                </div>
            </motion.div>

            {/* Image Side - Parallax Container */}
            <div className="flex-1 w-full bg-ui-light-gray rounded-[3rem] overflow-hidden min-h-[500px] flex items-center justify-center relative">
                <motion.div style={{ y }} className="w-full flex justify-center p-12">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={solution.img}
                        alt={solution.title}
                        className="max-w-[80%] drop-shadow-2xl"
                    />
                </motion.div>
            </div>
        </div>
    )
}

export function Solutions() {
    const { t } = useLanguage();

    const solutions = [
        { id: "res", title: t("solutions.res_title"), category: t("solutions.res_cat"), img: "/images/unifi-ap.png", features: t("solutions.res_features") as any as string[] },
        { id: "access", title: t("solutions.access_title"), category: t("solutions.access_cat"), img: "/images/unifi-reader.png", features: t("solutions.access_features") as any as string[] },
        { id: "tower", title: t("solutions.tower_title"), category: t("solutions.tower_cat"), img: "/images/unifi-gateway.png", features: t("solutions.tower_features") as any as string[] },
    ];

    return (
        <section id="solutions" className="py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-[1300px]">
                <div className="text-center mb-32 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-semibold text-ui-black tracking-tight">{t("solutions.title")}</h2>
                    <p className="text-xl text-ui-gray max-w-2xl mx-auto font-light">{t("solutions.subtitle")}</p>
                </div>

                <div className="space-y-40">
                    {solutions.map((sol, idx) => (
                        <FeatureStrip key={sol.id} solution={sol} index={idx} t={t} />
                    ))}
                </div>
            </div>
        </section>
    );
}
