"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Shield, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Navbar() {
    const { language, setLanguage, t } = useLanguage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: t("nav.expertise"), href: "#expertise" },
        { name: t("nav.solutions"), href: "#solutions" },
        { name: t("nav.process"), href: "#process" },
        { name: t("nav.contact"), href: "#contact" },
    ];

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <>
            <div className="fixed top-8 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
                <motion.header
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="nav-pill rounded-full px-6 md:px-10 py-4 md:py-5 flex items-center justify-between pointer-events-auto shadow-2xl w-full max-w-[500px] md:max-w-max"
                >
                    {/* Brand */}
                    <Link href="/" className="flex items-center gap-2 pr-6 md:border-r md:border-gray-200 group">
                        <motion.div whileHover={{ rotate: 10 }} transition={{ duration: 0.3 }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/logo.png" alt="Welwitech Logo" className="w-8 h-8 object-contain" />
                        </motion.div>
                        <span className="font-bold text-lg tracking-tight text-blink-black">Welwitech</span>
                    </Link>

                    {/* Desktop Links */}
                    <nav className="hidden md:flex items-center gap-8 pl-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative text-base font-medium text-gray-600 hover:text-blink-black transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-6 pl-6 border-l border-gray-200">
                        <button
                            onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
                            className="text-sm font-bold text-blink-black uppercase hover:text-blink-orange transition-colors"
                        >
                            {language}
                        </button>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href="#contact"
                                className="bg-blink-black text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide hover:bg-blink-orange transition-colors shadow-lg"
                            >
                                {t("nav.cta")}
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 text-blink-black"
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </motion.header>
            </div>

            {/* Mobile Overlay Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-blink-bg/95 backdrop-blur-xl flex flex-col items-center justify-center pt-24"
                    >
                        <nav className="flex flex-col items-center gap-8 mb-12">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-3xl font-bold text-blink-black hover:text-blink-orange transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        <div className="flex flex-col items-center gap-6">
                            <button
                                onClick={() => {
                                    setLanguage(language === "fr" ? "en" : "fr");
                                    setIsMobileMenuOpen(false);
                                }}
                                className="text-xl font-bold text-gray-500 uppercase"
                            >
                                {language === "fr" ? "English" : "Français"}
                            </button>

                            <Link
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="bg-blink-orange text-white px-8 py-4 rounded-full text-lg font-bold uppercase tracking-wide shadow-xl"
                            >
                                {t("nav.cta")}
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
