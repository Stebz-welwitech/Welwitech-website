"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-2 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 pointer-events-none`}
        >
            <div
                className={`pointer-events-auto flex items-center justify-between px-5 py-2.5 rounded-full transition-all duration-500 ease-out ${scrolled
                    ? "glass shadow-sm border border-black/5 w-full max-w-4xl"
                    : "bg-transparent w-full max-w-7xl"
                    }`}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-8 h-8 overflow-hidden rounded-lg">
                        {/* Using new clean logo if available, or just text/svg */}
                        <img
                            src="/images/logo.png"
                            alt="Welwitech Logo"
                            className="object-contain w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <span className={`font-semibold text-lg tracking-tight transition-colors ${scrolled ? 'text-black' : 'text-black'}`}>
                        Welwitech
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {["Solutions", "Expertise", "Enterprise", "Contact"].map((item) => (
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

                {/* CTA Button */}
                <div className="flex items-center gap-4">
                    <button className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/10">
                        Get Started
                    </button>

                    {/* Mobile Menu Button - simplified for now */}
                    <button className="md:hidden p-2 text-zinc-800">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </motion.nav>
    );
};
