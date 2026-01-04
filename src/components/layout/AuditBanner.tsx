"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

import { BookingModal } from "@/components/features/BookingModal";

export function AuditBanner() {
    const [show, setShow] = useState(false);
    const [showBooking, setShowBooking] = useState(false);
    const { t } = useLanguage();

    // Delay showing to allow page to load a bit
    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence>
                {show && (
                    <div className="fixed bottom-4 sm:bottom-6 left-2 right-2 sm:left-0 sm:right-0 z-[60] flex justify-center pointer-events-none">
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="pointer-events-auto w-full max-w-xl"
                        >
                            <div className="relative flex items-center justify-between gap-2 sm:gap-4 w-full shadow-2xl border border-welwitech-orange/20 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md rounded-full px-3 sm:px-5 py-2 sm:py-2.5">
                                {/* Icon + Title */}
                                <div className="flex items-center gap-2 min-w-0 flex-1">
                                    <Sparkles className="h-4 w-4 text-welwitech-orange animate-pulse flex-shrink-0" />
                                    <span className="text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200 truncate">
                                        {t('banner.title')}
                                    </span>
                                </div>

                                {/* CTA Button */}
                                <div className="flex-shrink-0">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => setShowBooking(true)}
                                        className="h-7 sm:h-8 px-3 sm:px-4 text-[10px] sm:text-xs font-semibold rounded-full bg-welwitech-orange/10 text-welwitech-orange hover:bg-welwitech-orange hover:text-white transition-all whitespace-nowrap"
                                    >
                                        {t('banner.cta')} <ArrowRight className="ml-1 h-3 w-3 hidden sm:inline" />
                                    </Button>
                                </div>

                                {/* Close Button */}
                                <button
                                    onClick={() => setShow(false)}
                                    className="p-1.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex-shrink-0"
                                    aria-label="Close"
                                >
                                    <X className="h-3.5 w-3.5 text-zinc-500" />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <BookingModal isOpen={showBooking} onClose={() => setShowBooking(false)} />
        </>
    );
}
