"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

    const menuItems = ["Solutions", "Expertise", "Enterprise", "Contact"];

    const handleMenuClick = () => {
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
                        ? "glass shadow-sm border border-black/5 w-full max-w-4xl"
                        : "bg-white/80 backdrop-blur-md shadow-sm border border-black/5 w-full max-w-7xl"
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
                        <span className={`font-semibold text-base md:text-lg tracking-tight transition-colors ${scrolled ? 'text-black' : 'text-black'}`}>
                            Welwitech
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6 lg:gap-8">
                        {menuItems.map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-sm font-medium text-zinc-500 hover:text-black transition-colors relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[image:var(--image-gradient-primary)] transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* CTA & Menu Button */}
                    <div className="flex items-center gap-2 md:gap-4">
                        <button className="hidden md:flex items-center gap-2 px-4 lg:px-5 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/10">
                            Get Started
                        </button>

                        {/* Mobile Menu Button */}
                        <button 
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 text-zinc-800 hover:bg-zinc-100 rounded-full transition-colors"
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
                            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-50 md:hidden shadow-2xl"
                        >
                            <div className="flex flex-col h-full">
                                {/* Header */}
                                <div className="flex items-center justify-between p-6 border-b border-zinc-100">
                                    <div className="flex items-center gap-2">
                                        <div className="relative w-8 h-8 overflow-hidden rounded-lg">
                                            <img
                                                src="/images/logo.png"
                                                alt="Welwitech Logo"
                                                className="object-contain w-full h-full"
                                            />
                                        </div>
                                        <span className="font-semibold text-lg tracking-tight text-black">
                                            Welwitech
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="p-2 text-zinc-600 hover:bg-zinc-100 rounded-full transition-colors"
                                        aria-label="Close menu"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Menu Items */}
                                <nav className="flex-1 px-6 py-8">
                                    <ul className="space-y-2">
                                        {menuItems.map((item, index) => (
                                            <motion.li
                                                key={item}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <Link
                                                    href={`#${item.toLowerCase()}`}
                                                    onClick={handleMenuClick}
                                                    className="block px-4 py-3 text-lg font-medium text-zinc-700 hover:text-black hover:bg-zinc-50 rounded-lg transition-colors"
                                                >
                                                    {item}
                                                </Link>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </nav>

                                {/* Footer CTA */}
                                <div className="p-6 border-t border-zinc-100">
                                    <button 
                                        onClick={handleMenuClick}
                                        className="w-full px-6 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-zinc-800 transition-colors"
                                    >
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};
