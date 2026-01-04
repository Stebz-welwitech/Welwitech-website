"use client";

import { useLanguage } from "@/context/LanguageContext";

export function Process() {
    const { t } = useLanguage();

    const steps = [
        { key: "audit", title: t("process.audit_title"), desc: t("process.audit_desc") },
        { key: "sira", title: t("process.sira_title"), desc: t("process.sira_desc") },
        { key: "install", title: t("process.install_title"), desc: t("process.install_desc") },
        { key: "config", title: t("process.config_title"), desc: t("process.config_desc") },
        { key: "maint", title: t("process.maint_title"), desc: t("process.maint_desc") }
    ];

    return (
        <section id="process" className="py-32 bg-white dark:bg-zinc-950">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="flex flex-col md:flex-row justify-between items-start mb-24">
                    <div className="text-welwitech-orange font-bold text-xl mb-4 md:mb-0">(03)</div>
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 leading-tight">{t("process.title")}</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={step.key} className="border-l-2 border-zinc-200 dark:border-zinc-800 pl-8 py-4 hover:border-welwitech-orange transition-colors duration-300 group">
                            <div className="text-zinc-400 dark:text-zinc-600 font-bold text-4xl mb-4 group-hover:text-welwitech-orange transition-colors">0{index + 1}</div>
                            <h3 className="text-2xl font-bold text-black dark:text-white mb-3">{step.title}</h3>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
