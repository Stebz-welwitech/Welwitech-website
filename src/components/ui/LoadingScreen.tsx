"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShaderAnimation } from "@/components/ui/shader-animation"

export function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Wait for 1.2 seconds then fade out
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1200)

        return () => clearTimeout(timer)
    }, [])

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center"
                >
                    <ShaderAnimation />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="absolute z-10 pointer-events-none"
                    >
                        <div className="flex flex-col items-center gap-6">
                            <div className="relative w-20 h-20">
                                <img
                                    src="/images/logo.png"
                                    alt="Welwitech Logo"
                                    className="object-contain w-full h-full"
                                />
                            </div>
                            <span className="text-white text-2xl md:text-3xl font-bold tracking-tight">
                                Welwitech
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
