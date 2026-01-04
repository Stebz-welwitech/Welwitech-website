/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Activity, Shield, Zap, Globe, Server, Smartphone, Monitor } from "lucide-react";
import { AnimatedGroup } from "@/components/ui/animated-group";

const features = [
    {
        title: "Ultra-Low Latency",
        description: "Enterprise-grade wired and wireless networks optimized for real-time performance.",
        icon: Zap,
        color: "text-w-orange"
    },
    {
        title: "Military-Grade Security",
        description: "Advanced firewalls, VLAN segmentation, and 24/7 threat monitoring.",
        icon: Shield,
        color: "text-w-magenta"
    },
    {
        title: "Self-Healing Network",
        description: "AI-driven automated optimization ensures zero downtime.",
        icon: Activity,
        color: "text-w-blue"
    },
    {
        title: "Global Connectivity",
        description: "Seamless integration with ISP and cloud services worldwide.",
        icon: Globe,
        color: "text-w-violet"
    },
    {
        title: "Unified Management",
        description: "Control your entire infrastructure from a single pane of glass.",
        icon: Server,
        color: "text-w-orange"
    },
    {
        title: "Smart Integration",
        description: "Perfect synergy with IoT, AV, and automation systems.",
        icon: Smartphone,
        color: "text-w-blue"
    }
];

export function WhyWelwitech() {
    return (
        <section className="py-24 md:py-32 bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                    backgroundSize: '32px 32px'
                }}
            />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 mb-6 tracking-tight"
                    >
                        Why Leading Properties Choose Welwitech
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed"
                    >
                        We don't just install cables; we engineer invisible, bulletproof digital infrastructures
                        that power the world's most demanding luxury environments.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatedGroup>
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:shadow-xl hover:shadow-w-blue/5 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                                    <feature.icon className={`w-24 h-24 ${feature.color}`} />
                                </div>

                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center mb-6 border border-zinc-100 dark:border-zinc-700 group-hover:border-w-blue/20 transition-colors">
                                        <feature.icon className={`w-6 h-6 ${feature.color}`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{feature.title}</h3>
                                    <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </AnimatedGroup>
                </div>
            </div>
        </section>
    );
}
