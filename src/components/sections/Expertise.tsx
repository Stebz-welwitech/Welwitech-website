"use client";

import { Shield, Network, LayoutDashboard, Scan, Lock, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Expertise() {
    const { t } = useLanguage();

    return (
        <section id="expertise" className="py-24 md:py-32 bg-white dark:bg-zinc-950 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-welwitech-orange/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="mb-16 md:mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-welwitech-orange font-bold text-sm uppercase tracking-widest mb-4 block"
                    >
                        {t('expertise.title')}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white max-w-3xl leading-[1.1]"
                    >
                        {t('expertise.subtitle')}
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 grid-rows-[auto_auto_auto] md:grid-rows-[300px_300px]">
                    {/* Access Control - Large Card */}
                    <div className="md:col-span-2 row-span-1 md:row-span-1 group relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-8 hover:border-welwitech-orange/50 transition-colors duration-500">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                            <Scan className="w-48 h-48 text-black dark:text-white rotate-12" />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-6 text-black dark:text-white">
                                    <Scan className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-black dark:text-white mb-3">{t('expertise.access_title')}</h3>
                                <p className="text-zinc-500 dark:text-zinc-400 max-w-md">{t('expertise.access_desc')}</p>
                            </div>
                            <div className="flex gap-3 mt-8">
                                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">Biometric</span>
                                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">NFC</span>
                            </div>
                        </div>
                    </div>

                    {/* UniFi Network */}
                    <div className="md:col-span-1 row-span-1 group relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-8 hover:border-blue-500/50 transition-colors duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                                <Network className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-black dark:text-white mb-2">{t('expertise.unifi_title')}</h3>
                            <p className="text-zinc-500 dark:text-zinc-400 text-sm">{t('expertise.unifi_desc')}</p>
                        </div>
                    </div>

                    {/* Cyber Security */}
                    <div className="md:col-span-1 row-span-1 group relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-900 dark:bg-black p-8 text-white">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-welwitech-orange/20 via-transparent to-transparent opacity-50" />
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-welwitech-orange">
                                <Shield className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{t('expertise.cyber_title')}</h3>
                            <p className="text-zinc-400 text-sm">{t('expertise.cyber_desc')}</p>
                            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-welwitech-orange/80">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                System Active
                            </div>
                        </div>
                    </div>

                    {/* Smart Config - Large Card */}
                    <div className="md:col-span-2 row-span-1 group relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-8 hover:border-purple-500/50 transition-colors duration-500">
                        <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl" />
                        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8 h-full">
                            <div className="max-w-md">
                                <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-6 text-black dark:text-white">
                                    <LayoutDashboard className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-black dark:text-white mb-3">{t('expertise.maint_title')}</h3>
                                <p className="text-zinc-500 dark:text-zinc-400">{t('expertise.maint_desc')}</p>
                            </div>
                            <div className="flex-shrink-0">
                                <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-black/50 border border-zinc-100 dark:border-zinc-800 backdrop-blur-sm">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                                            <Zap className="w-4 h-4 text-green-500" />
                                        </div>
                                        <div className="text-sm">
                                            <div className="font-semibold text-black dark:text-white">Energy Optimized</div>
                                            <div className="text-zinc-500 text-xs">-12% Usage</div>
                                        </div>
                                    </div>
                                    <div className="h-1 w-32 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                                        <div className="h-full w-[88%] bg-green-500 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
