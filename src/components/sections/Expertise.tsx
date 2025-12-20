"use client";

import { Shield, Network, LayoutDashboard, Scan } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, Variants } from "framer-motion";

export function Expertise() {
    const { t } = useLanguage();

    const items = [
        { key: "access", icon: Scan, items: t("expertise.access_items") },
        { key: "unifi", icon: Network, items: t("expertise.unifi_items") },
        { key: "cyber", icon: Shield, items: t("expertise.cyber_items") },
        { key: "maint", icon: LayoutDashboard, items: t("expertise.maint_items") },
    ];

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariant: Variants = {
        hidden: { opacity: 0, y: 50 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <section id="expertise" className="py-32 bg-blink-bg overflow-hidden">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="flex flex-col md:flex-row justify-between items-start mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-blink-orange font-bold text-xl mb-4 md:mb-0"
                    >
                        (01)
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-blink-black mb-6 leading-tight">{t("expertise.title")}</h2>
                        <p className="text-xl text-gray-500">{t("expertise.subtitle")}</p>
                    </motion.div>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {items.map((item, idx) => (
                        <motion.div
                            key={item.key}
                            variants={itemVariant}
                            className="bg-white p-10 rounded-2xl border border-transparent hover:border-blink-orange transition-colors duration-300 group hover:shadow-2xl hover:-translate-y-2 transform will-change-transform"
                        >
                            <div className="w-12 h-12 bg-blink-bg rounded-lg flex items-center justify-center mb-8 text-blink-black group-hover:bg-blink-orange group-hover:text-white transition-colors duration-300">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-blink-black mb-4">{t(`expertise.${item.key}_title`)}</h3>
                            <div className="space-y-3">
                                {(item.items as any as string[]).map(f => (
                                    <p key={f} className="text-gray-600 font-medium border-b border-gray-100 pb-2 last:border-0">• {f}</p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
