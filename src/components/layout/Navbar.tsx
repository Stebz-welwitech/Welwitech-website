"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { X, Menu, Moon, Sun, Globe } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [langMenuOpen, setLangMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Fermer le menu mobile lors du défilement
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    const menuItems = [
        { key: "solutions", label: t('nav.solutions'), href: "#solutions" },
        { key: "expertise", label: t('nav.expertise'), href: "#expertise" },
        { key: "contact", label: t('nav.contact'), href: "#contact" }
    ];

    const handleMenuClick = () => {
        setMobileMenuOpen(false);
    };

    const handleLanguageChange = (lang: 'en' | 'fr' | 'ar') => {
        setLanguage(lang);
        setLangMenuOpen(false);
        setMobileMenuOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-2 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 pointer-events-none`}
            >
                <div
                    className={`pointer-events-auto flex items-center justify-between px-4 md:px-5 py-2.5 rounded-full transition-all duration-500 ease-out ${scrolled
                        ? "glass shadow-sm border border-black/5 dark:border-white/10 w-full max-w-4xl bg-white/95 dark:bg-black/95 backdrop-blur-xl"
                        : "bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-sm border border-black/5 dark:border-white/10 w-full max-w-7xl"
                        }`}
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative w-7 h-7 md:w-8 md:h-8 overflow-hidden rounded-lg">
                            <img
                                src="/images/logo.png"
                                alt="Welwitech Logo"
                                className="object-contain w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <span className={`font-semibold text-base md:text-lg tracking-tight transition-colors ${scrolled ? 'text-black dark:text-white' : 'text-black dark:text-white'}`}>
                            Welwitech
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6 lg:gap-8">
                        {menuItems.map((item) => (
                            <Link
                                key={item.key}
                                href={item.href}
                                className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors relative group"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[image:var(--image-gradient-primary)] transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* CTA & Buttons */}
                    <div className="flex items-center gap-2 md:gap-3">
                        {/* Language Selector - Click based */}
                        <div className="relative">
                            <button
                                onClick={() => setLangMenuOpen(!langMenuOpen)}
                                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-sm font-medium text-zinc-700 dark:text-zinc-300"
                            >
                                <Globe className="w-4 h-4" />
                                <span className="uppercase hidden sm:inline">{language}</span>
                            </button>

                            <AnimatePresence>
                                {langMenuOpen && (
                                    <>
                                        <div className="fixed inset-0 z-10" onClick={() => setLangMenuOpen(false)} />
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute right-0 top-full mt-2 w-36 py-1 bg-white dark:bg-zinc-900 rounded-xl shadow-lg border border-zinc-100 dark:border-zinc-800 z-20"
                                        >
                                            <button
                                                onClick={() => handleLanguageChange('en')}
                                                className={`w-full text-left px-4 py-2 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors ${language === 'en' ? 'text-welwitech-orange font-medium' : 'text-zinc-600 dark:text-zinc-400'}`}
                                            >
                                                🇬🇧 English
                                            </button>
                                            <button
                                                onClick={() => handleLanguageChange('ar')}
                                                className={`w-full text-left px-4 py-2 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors ${language === 'ar' ? 'text-welwitech-orange font-medium' : 'text-zinc-600 dark:text-zinc-400'}`}
                                            >
                                                🇦🇪 العربية
                                            </button>
                                            <button
                                                onClick={() => handleLanguageChange('fr')}
                                                className={`w-full text-left px-4 py-2 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors ${language === 'fr' ? 'text-welwitech-orange font-medium' : 'text-zinc-600 dark:text-zinc-400'}`}
                                            >
                                                🇫🇷 Français
                                            </button>
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <Sun className="w-5 h-5 text-zinc-800 dark:text-zinc-200" />
                            ) : (
                                <Moon className="w-5 h-5 text-zinc-800 dark:text-zinc-200" />
                            )}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-5 h-5" />
                            ) : (
                                <Menu className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white dark:bg-zinc-900 z-50 md:hidden shadow-2xl overflow-y-auto"
                        >
                            <div className="flex flex-col min-h-full">
                                {/* Header */}
                                <div className="flex items-center justify-between p-6 border-b border-zinc-100 dark:border-zinc-800">
                                    <div className="flex items-center gap-2">
                                        <div className="relative w-8 h-8 overflow-hidden rounded-lg">
                                            <img
                                                src="/images/logo.png"
                                                alt="Welwitech Logo"
                                                className="object-contain w-full h-full"
                                            />
                                        </div>
                                        <span className="font-semibold text-lg tracking-tight text-black dark:text-white">
                                            Welwitech
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="p-2 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
                                        aria-label="Close menu"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Menu Items */}
                                <nav className="flex-1 px-6 py-6">
                                    <ul className="space-y-2">
                                        {menuItems.map((item, index) => (
                                            <motion.li
                                                key={item.key}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <Link
                                                    href={item.href}
                                                    onClick={handleMenuClick}
                                                    className="block px-4 py-3 text-lg font-medium text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                                                >
                                                    {item.label}
                                                </Link>
                                            </motion.li>
                                        ))}
                                    </ul>

                                    <div className="my-6 border-t border-zinc-100 dark:border-zinc-800" />

                                    {/* Mobile Language Selector */}
                                    <div className="grid grid-cols-3 gap-2">
                                        <button
                                            onClick={() => handleLanguageChange('en')}
                                            className={`p-2 rounded-lg text-sm font-medium flex flex-col items-center gap-1 transition-colors ${language === 'en' ? 'bg-welwitech-orange/10 text-welwitech-orange' : 'text-zinc-500 bg-zinc-50 dark:bg-zinc-800'}`}
                                        >
                                            <span className="text-xl">🇬🇧</span>
                                            English
                                        </button>
                                        <button
                                            onClick={() => handleLanguageChange('ar')}
                                            className={`p-2 rounded-lg text-sm font-medium flex flex-col items-center gap-1 transition-colors ${language === 'ar' ? 'bg-welwitech-orange/10 text-welwitech-orange' : 'text-zinc-500 bg-zinc-50 dark:bg-zinc-800'}`}
                                        >
                                            <span className="text-xl">🇦🇪</span>
                                            العربية
                                        </button>
                                        <button
                                            onClick={() => handleLanguageChange('fr')}
                                            className={`p-2 rounded-lg text-sm font-medium flex flex-col items-center gap-1 transition-colors ${language === 'fr' ? 'bg-welwitech-orange/10 text-welwitech-orange' : 'text-zinc-500 bg-zinc-50 bg-zinc-50 dark:bg-zinc-800'}`}
                                        >
                                            <span className="text-xl">🇫🇷</span>
                                            Français
                                        </button>
                                    </div>
                                </nav>

                                {/* Footer CTA */}
                                <div className="p-6 border-t border-zinc-100 dark:border-zinc-800">
                                    <Link
                                        href="#contact"
                                        onClick={handleMenuClick}
                                        className="w-full px-6 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-zinc-800 transition-colors flex items-center justify-center"
                                    >
                                        {t('nav.cta')}
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};
