"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductStripProps {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    align?: "left" | "right";
    index: number;
}

export function ProductStrip({ title, subtitle, description, image, align = "left", index }: ProductStripProps) {
    return (
        <section className="py-16 md:py-24 lg:py-32 border-b border-zinc-100 last:border-0 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 ${align === "right" ? "md:flex-row-reverse" : ""}`}>

                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: align === "left" ? -5 : 5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 relative w-full aspect-square md:aspect-[4/3] bg-zinc-50 rounded-2xl md:rounded-3xl overflow-hidden flex items-center justify-center group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-zinc-100/50" />
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-contain p-6 sm:p-8 md:p-12 transition-transform duration-700 group-hover:scale-105"
                        />
                    </motion.div>

                    {/* Content Side */}
                    <div className="flex-1 space-y-4 md:space-y-6 lg:space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: align === "left" ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 md:mb-4 
                                ${index % 3 === 0 ? "bg-orange-50 text-w-orange" :
                                    index % 3 === 1 ? "bg-pink-50 text-w-magenta" :
                                        "bg-violet-50 text-w-violet"}`}
                            >
                                {subtitle}
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-black mb-4 md:mb-6 leading-tight">
                                {title}
                            </h2>
                            <p className="text-base sm:text-lg md:text-lg text-zinc-500 leading-relaxed mb-6 md:mb-8">
                                {description}
                            </p>

                            <Link href="/contact" className={`inline-flex items-center text-sm font-semibold text-black transition-colors group
                                ${index % 3 === 0 ? "hover:text-w-orange" :
                                    index % 3 === 1 ? "hover:text-w-magenta" :
                                        "hover:text-w-violet"}`}
                            >
                                Learn More
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function ProductShowcase() {
    return (
        <div className="bg-white dark:bg-zinc-950">
            <ProductStrip
                index={0}
                title="Massive Tri-Band Performance."
                subtitle="Wi-Fi 7"
                description="Experience the ultimate in wireless speed and capacity with the new U7 Pro Max. Designed for high-density environments, providing seamless connectivity for hundreds of devices."
                image="/images/u7-pro-max-2.png"
                align="left"
            />
            <ProductStrip
                index={1}
                title="All-in-One Gateway."
                subtitle="Dream Router"
                description="The Dream Router (UDR) is a next-generation Wi-Fi 6 router that delivers unbeatable performance. It creates a powerful, secure network for your home or office."
                image="/images/udr-5g-max-eu-1.png"
                align="right"
            />
            <ProductStrip
                index={2}
                title="Enterprise Security."
                subtitle="Access Control"
                description="Secure your premises with the G3 Pro Reader. Advanced NFC technology and pin-code access ensure that only authorized personnel can enter."
                image="/images/ua-g3-pro-10.png"
                align="left"
            />
        </div>
    );
}
