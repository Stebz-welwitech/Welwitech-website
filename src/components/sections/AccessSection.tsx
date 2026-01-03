"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AccessSection() {
    return (
        <section className="relative w-full py-16 md:py-24 lg:py-32 bg-black text-white overflow-hidden">
            {/* Background Glow */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-welwitech-orange/20 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12 lg:gap-16">
                    <div className="flex-1 text-center md:text-left">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="inline-block px-3 py-1 bg-white/10 text-white rounded-full text-xs font-bold uppercase tracking-wider mb-4 md:mb-6 backdrop-blur-md border border-white/10"
                        >
                            Enterprise Security
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight"
                        >
                            Secure your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">World.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-zinc-400 text-base sm:text-lg mb-6 md:mb-8 max-w-lg mx-auto md:mx-0"
                        >
                            State-of-the-art access control systems designed for seamless integration and maximum security.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <Link href="/contact" className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors group text-sm sm:text-base">
                                Get Secured
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -15, x: 100 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0, x: 0 }}
                        transition={{ duration: 1, ease: "circOut" }}
                        viewport={{ once: true }}
                        className="flex-1 relative w-full h-[350px] sm:h-[400px] md:h-[500px]"
                    >
                        <Image
                            src="/images/ua-g3-pro-3.png"
                            alt="Access G3 Pro"
                            fill
                            className="object-contain drop-shadow-2xl"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
