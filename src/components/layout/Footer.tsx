"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ArrowUp } from "lucide-react";

export function Footer() {
    // Optional: Use language context if needed, or remove if making it static for now.
    // Keeping it simple as requested.

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-white text-black pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-12 border-t border-zinc-100 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 max-w-[1400px] mb-12 md:mb-16 lg:mb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
                    <div className="col-span-1 sm:col-span-2">
                        <h4 className="font-bold text-lg md:text-xl tracking-tight mb-3 md:mb-4">Welwitech</h4>
                        <p className="text-zinc-500 text-sm md:text-base max-w-sm">
                            Pioneering the future of smart infrastructure and secure connectivity for enterprise and luxury residential properties.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-medium mb-4 md:mb-6 text-xs md:text-sm uppercase tracking-wider text-zinc-400">Company</h4>
                        <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-zinc-600">
                            <li><a href="#solutions" className="hover:text-welwitech-orange transition-colors">Solutions</a></li>
                            <li><a href="#expertise" className="hover:text-welwitech-orange transition-colors">Expertise</a></li>
                            <li><a href="#contact" className="hover:text-welwitech-orange transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-medium mb-4 md:mb-6 text-xs md:text-sm uppercase tracking-wider text-zinc-400">Connect</h4>
                        <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-zinc-600">
                            <li><a href="#" className="hover:text-welwitech-orange transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-welwitech-orange transition-colors">Instagram</a></li>
                            <li><a href="mailto:contact@welwitech.com" className="hover:text-welwitech-orange transition-colors break-all">contact@welwitech.com</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mt-12 md:mt-16 lg:mt-20 border-t border-zinc-100 pt-6 md:pt-8">
                    <p className="text-zinc-400 text-xs md:text-sm text-center sm:text-left">© 2025 Welwitech. All rights reserved.</p>

                    <button
                        onClick={scrollToTop}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-zinc-50 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                    >
                        <ArrowUp className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                </div>
            </div>

            {/* Massive Watermark - Full Width Visible */}
            <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none overflow-hidden flex items-center justify-center px-4" style={{ height: '25vh' }}>
                <h1 className="text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[12vw] xl:text-[11vw] leading-none font-bold text-center tracking-tighter text-black opacity-[0.03] w-full">
                    WELWITECH
                </h1>
            </div>
        </footer>
    );
}
