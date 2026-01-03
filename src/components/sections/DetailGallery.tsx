"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function DetailGallery() {
    return (
        <section className="py-16 md:py-24 lg:py-32 bg-zinc-50 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 md:mb-16 lg:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">Precision Engineering</h2>
                        <p className="text-sm sm:text-base text-zinc-500">Every detail considered. Every component optimized.</p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -100, rotate: -5 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        transition={{ duration: 0.8, ease: "backOut" }}
                        viewport={{ once: true }}
                        className="relative w-full aspect-square md:aspect-[4/3] bg-white rounded-2xl md:rounded-3xl shadow-sm border border-zinc-100 overflow-hidden p-4 sm:p-6 md:p-8 group"
                    >
                        <Image
                            src="/images/udr7-1.png"
                            alt="UDR Detail Front"
                            fill
                            className="object-contain transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 100, rotate: 5 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        transition={{ duration: 0.8, ease: "backOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative w-full aspect-square md:aspect-[4/3] bg-white rounded-2xl md:rounded-3xl shadow-sm border border-zinc-100 overflow-hidden p-4 sm:p-6 md:p-8 group"
                    >
                        <Image
                            src="/images/udr7-3.png"
                            alt="UDR Detail Back"
                            fill
                            className="object-contain transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
