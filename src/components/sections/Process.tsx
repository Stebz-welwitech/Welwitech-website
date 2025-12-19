"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Search, ShieldCheck, Hammer, Settings, Activity } from "lucide-react";
import { motion, Variants } from "framer-motion";

export function Process() {
    const { t } = useLanguage();

    const steps = [
        { key: "audit", icon: Search, title: t("process.audit_title"), desc: t("process.audit_desc") },
        { key: "sira", icon: ShieldCheck, title: t("process.sira_title"), desc: t("process.sira_desc") },
        { key: "install", icon: Hammer, title: t("process.install_title"), desc: t("process.install_desc") },
        { key: "config", icon: Settings, title: t("process.config_title"), desc: t("process.config_desc") },
        { key: "maint", icon: Activity, title: t("process.maint_title"), desc: t("process.maint_desc") }
    ];

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <section id="process" className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-[800px]">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-semibold text-ui-black mb-4">{t("process.title")}</h2>
                    <p className="text-ui-gray max-w-lg mx-auto">{t("process.subtitle")}</p>
                </div>

                <div className="relative">
                    {/* Animated Vertical Line */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute left-[27px] top-6 bottom-6 w-[2px] bg-ui-light-gray origin-top"
                    />

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-12"
                    >
                        {steps.map((step, index) => (
                            <motion.div variants={item} key={step.key} className="relative flex gap-8 items-start group">
                                <div className="relative z-10 w-14 h-14 rounded-full bg-white border border-ui-light-gray flex items-center justify-center text-ui-blue shadow-sm group-hover:border-ui-blue transition-colors duration-300">
                                    <step.icon className="w-6 h-6" />
                                </div>
                                <div className="pt-3">
                                    <span className="text-xs font-bold text-ui-blue uppercase tracking-wider mb-1 block">Step 0{index + 1}</span>
                                    <h3 className="text-xl font-semibold text-ui-black mb-2">{step.title}</h3>
                                    <p className="text-ui-gray leading-relaxed text-sm">
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
