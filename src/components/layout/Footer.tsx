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
        <footer className="bg-white text-black pt-24 pb-12 border-t border-zinc-100 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-[1400px] mb-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="font-bold text-xl tracking-tight mb-4">Welwitech</h4>
                        <p className="text-zinc-500 max-w-sm">
                            Pioneering the future of smart infrastructure and secure connectivity for enterprise and luxury residential properties.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-medium mb-6 text-sm uppercase tracking-wider text-zinc-400">Company</h4>
                        <ul className="space-y-4 text-zinc-600">
                            <li><a href="#solutions" className="hover:text-welwitech-orange transition-colors">Solutions</a></li>
                            <li><a href="#expertise" className="hover:text-welwitech-orange transition-colors">Expertise</a></li>
                            <li><a href="#contact" className="hover:text-welwitech-orange transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-medium mb-6 text-sm uppercase tracking-wider text-zinc-400">Connect</h4>
                        <ul className="space-y-4 text-zinc-600">
                            <li><a href="#" className="hover:text-welwitech-orange transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-welwitech-orange transition-colors">Instagram</a></li>
                            <li><a href="mailto:contact@welwitech.com" className="hover:text-welwitech-orange transition-colors">contact@welwitech.com</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-between items-end mt-20 border-t border-zinc-100 pt-8">
                    <p className="text-zinc-400 text-sm">© 2025 Welwitech. All rights reserved.</p>

                    <button
                        onClick={scrollToTop}
                        className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                    >
                        <ArrowUp className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Massive Watermark */}
            <div className="absolute bottom-[-5vw] left-0 right-0 pointer-events-none opacity-[0.03] select-none">
                <h1 className="text-[20vw] leading-none font-bold text-center tracking-tighter text-black">
                    WELWITECH
                </h1>
            </div>
        </footer>
    );
}
