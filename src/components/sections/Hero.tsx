"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    // Mask Reveal Animation Variants
    const revealVariant = {
        hidden: { y: "100%" },
        visible: {
            y: "0%",
            transition: {
                duration: 1
            }
        }
    };

    const containerVariant = {
        visible: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-screen flex items-center overflow-hidden bg-white pt-24 pb-12"
        >
            {/* Ambient Background Mesh */}
            <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-w-orange/20 via-w-magenta/10 to-transparent rounded-full blur-[100px] -z-10 pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-w-blue/10 via-w-violet/10 to-transparent rounded-full blur-[80px] -z-10 pointer-events-none" />

            <div className="container mx-auto px-6 h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center h-full">

                    {/* Left Column: Typography */}
                    <div className="flex flex-col items-start z-10">

                        {/* Interactive Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="mb-8"
                        >
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 bg-white/50 backdrop-blur-sm shadow-sm group cursor-default">
                                <span className="w-2 h-2 rounded-full bg-[image:var(--image-gradient-primary)] animate-pulse" />
                                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-600">
                                    Next Gen Wi-Fi 7
                                </span>
                            </span>
                        </motion.div>

                        {/* Masked Headline */}
                        <motion.div
                            variants={containerVariant}
                            initial="hidden"
                            animate="visible"
                            className="mb-8"
                        >
                            <div className="overflow-hidden">
                                <motion.h1
                                    variants={revealVariant}
                                    className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-black leading-[0.9]"
                                >
                                    Redefining
                                </motion.h1>
                            </div>
                            <div className="overflow-hidden">
                                <motion.h1
                                    variants={revealVariant}
                                    className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-[image:var(--image-gradient-primary)] leading-[1.1] pb-2"
                                >
                                    Connectivity.
                                </motion.h1>
                            </div>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="text-zinc-500 text-lg md:text-xl max-w-lg mb-10 leading-relaxed"
                        >
                            The U7 Pro Max delivers unmatched performance, enterprise security, and wall-to-wall coverage for the modern era.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link href="#contact" className="px-8 py-4 rounded-full bg-black text-white font-semibold hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 group">
                                Pre-order Now
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link href="#solutions" className="px-8 py-4 rounded-full bg-zinc-100 text-black font-semibold hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95">
                                View Specs
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Column: Hero Image */}
                    <motion.div
                        style={{ y, opacity }}
                        className="relative w-full aspect-square lg:h-[800px] flex items-center justify-center lg:justify-end"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            transition={{ duration: 1.2, delay: 0.4 }}
                            className="relative w-full h-full"
                        >
                            <Image
                                src="/images/u7-pro-max-1.png"
                                alt="U7 Pro Max Hero"
                                fill
                                className="object-contain drop-shadow-2xl lg:scale-125 lg:translate-x-10"
                                priority
                            />

                            {/* Floating Context Cards with Glass Morphism */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.5, duration: 0.8 }}
                                className="absolute bottom-20 left-0 lg:-left-12 p-4 rounded-2xl glass-card max-w-[200px] border border-white/40"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-w-orange">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-bold text-black">Ultra Fast</span>
                                </div>
                                <p className="text-xs text-zinc-500">Up to 5.7 Gbps throughput for lag-free streaming.</p>
                            </motion.div>

                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
