"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface SolutionModalProps {
    isOpen: boolean;
    onClose: () => void;
    solution: {
        title: string;
        category: string;
        img: string;
        features: string[];
    } | null;
}

export function SolutionModal({ isOpen, onClose, solution }: SolutionModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && solution && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[100] bg-zinc-950/60 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="w-full max-w-5xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row pointer-events-auto max-h-[90vh]"
                        >
                            {/* Image Section */}
                            <div className="w-full md:w-1/2 bg-zinc-50 dark:bg-zinc-950 relative flex items-center justify-center p-12 overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(237,76,34,0.1)_0%,transparent_70%)] opacity-50" />
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={solution.img}
                                    alt={solution.title}
                                    className="relative z-10 max-w-full max-h-[300px] md:max-h-[400px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col relative bg-white dark:bg-zinc-900 overflow-y-auto">
                                <button
                                    onClick={onClose}
                                    className="absolute top-6 right-6 p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-zinc-500 dark:text-zinc-400 z-10"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                <div className="text-welwitech-orange text-sm font-bold uppercase tracking-wider mb-4">
                                    {solution.category}
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-8 leading-tight">
                                    {solution.title}
                                </h2>

                                <div className="flex-1">
                                    <h3 className="text-lg font-medium text-zinc-500 dark:text-zinc-400 mb-6">Key Capabilities</h3>
                                    <ul className="space-y-4">
                                        {solution.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-4">
                                                <div className="mt-1 min-w-[20px] h-5 rounded-full bg-welwitech-orange/20 flex items-center justify-center">
                                                    <Check className="w-3 h-3 text-welwitech-orange" />
                                                </div>
                                                <span className="text-zinc-700 dark:text-zinc-300 font-medium">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                                    <button
                                        onClick={onClose}
                                        className="w-full py-4 bg-welwitech-orange text-white rounded-xl font-bold uppercase tracking-wide hover:bg-orange-600 transition-colors"
                                    >
                                        Close Details
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}
