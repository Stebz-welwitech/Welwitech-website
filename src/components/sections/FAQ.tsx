"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function FAQ() {
    const { t, language } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const questions = [
        { q: "faq.q1", a: "faq.a1" },
        { q: "faq.q2", a: "faq.a2" },
        { q: "faq.q3", a: "faq.a3" },
        { q: "faq.q4", a: "faq.a4" },
    ];

    const isRTL = language === 'ar';

    return (
        <section id="faq" className="py-24 bg-white dark:bg-zinc-950 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <span className="text-welwitech-orange font-bold text-sm uppercase tracking-widest mb-4 block">
                        FAQ
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-4">
                        {t('faq.title')}
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto">
                        {t('faq.description')}
                    </p>
                </div>

                <div className="space-y-4" dir={isRTL ? 'rtl' : 'ltr'}>
                    {questions.map((item, idx) => (
                        <div
                            key={idx}
                            className="border-b border-zinc-100 dark:border-zinc-800 last:border-0"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full py-6 flex items-center justify-between text-left group hover:bg-zinc-50/50 dark:hover:bg-zinc-900/50 transition-colors rounded-lg px-4 -mx-4"
                            >
                                <span className={`text-lg font-medium transition-colors ${openIndex === idx ? "text-welwitech-orange" : "text-black dark:text-white group-hover:text-black dark:group-hover:text-white"}`}>
                                    {t(item.q)}
                                </span>
                                <span className={`${isRTL ? 'mr-4' : 'ml-4'} flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 ${openIndex === idx ? "border-welwitech-orange bg-welwitech-orange text-white rotate-180" : "border-zinc-200 dark:border-zinc-700 text-zinc-400 group-hover:border-black dark:group-hover:border-white group-hover:text-black dark:group-hover:text-white"}`}>
                                    {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-8 text-zinc-500 dark:text-zinc-400 leading-relaxed px-4 -mx-4">
                                            {t(item.a)}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
