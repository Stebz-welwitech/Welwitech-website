"use client";

import { Shield, Network, LayoutDashboard, Scan } from "lucide-react";
import { motion } from "framer-motion";

export function Expertise() {
    // Hardcoded items for simplicity and purity
    const items = [
        {
            key: "access",
            icon: Scan,
            title: "Access Control",
            features: ["NFC & Mobile Entry", "Visitor Management", "Biometric Security", "Remote Lock/Unlock"]
        },
        {
            key: "unifi",
            icon: Network,
            title: "UniFi Network",
            features: ["Wi-Fi 7 Deployment", "Seamless Roaming", "Traffic Analysis", "Guest Portal"]
        },
        {
            key: "cyber",
            icon: Shield,
            title: "Cyber Security",
            features: ["Firewall Configuration", "Threat Detection", "VPN Management", "24/7 Monitoring"]
        },
        {
            key: "maint",
            icon: LayoutDashboard,
            title: "Smart Config",
            features: ["Centralized Dashboard", "Auto-Updates", "Energy Monitoring", "Custom Alerts"]
        },
    ];

    return (
        <section id="expertise" className="py-32 bg-white border-t border-zinc-100">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="mb-20">
                    <span className="text-welwitech-orange font-bold text-sm uppercase tracking-widest mb-4 block">Our Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-black max-w-2xl leading-tight">
                        Comprehensive infrastructure solutions for the modern era.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-zinc-100">
                    {items.map((item, idx) => (
                        <motion.div
                            key={item.key}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-10 border-r border-b border-zinc-100 bg-white hover:bg-zinc-50 transition-colors duration-300 relative"
                        >
                            <div className="w-12 h-12 bg-zinc-50 rounded-lg flex items-center justify-center mb-8 text-black group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                <item.icon className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-6">{item.title}</h3>
                            <ul className="space-y-3">
                                {item.features.map(f => (
                                    <li key={f} className="text-zinc-500 text-sm font-medium flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-zinc-300 group-hover:bg-welwitech-orange transition-colors" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
