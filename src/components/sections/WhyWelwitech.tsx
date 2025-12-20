"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";
import { useEffect, useRef } from "react";

function CountUp({ value, suffix = "" }: { value: number, suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 });
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest).toString() + suffix;
            }
        });
    }, [springValue, suffix]);

    return <span ref={ref} className="tabular-nums" />;
}

export function WhyWelwitech() {
    const { t } = useLanguage();

    const stats = [
        { value: 99.9, suffix: "%", label: t("why.stats_1_title"), desc: t("why.stats_1_desc") },
        { value: 25, suffix: "+", label: t("why.stats_2_title"), desc: t("why.stats_2_desc") },
        { value: 350, suffix: "+", label: t("why.stats_3_title"), desc: t("why.stats_3_desc") },
        { value: 24, suffix: "/7", label: t("why.stats_4_title"), desc: t("why.stats_4_desc") }
    ];

    return (
        <section className="py-24 bg-ui-light-gray border-t border-white">
            <div className="container mx-auto px-6 max-w-[1200px]">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {stats.map((stat, i) => (
                        <div key={i} className="group cursor-default">
                            <div className="text-5xl font-light text-ui-black mb-4 tracking-tighter">
                                <CountUp value={Math.floor(stat.value)} suffix={stat.suffix} />
                            </div>
                            <div className="text-ui-blue font-medium text-sm uppercase tracking-wide mb-3">
                                {stat.label}
                            </div>
                            <div className="text-ui-gray text-sm leading-relaxed max-w-[200px] mx-auto opacity-80 group-hover:opacity-100 transition-opacity">
                                {stat.desc}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
