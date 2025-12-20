"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ArrowUp } from "lucide-react";

export function Footer() {
    const { t } = useLanguage();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-blink-black text-white pt-24 pb-0 overflow-hidden relative">
            <div className="container mx-auto px-6 max-w-[1400px] mb-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div>
                        <h4 className="text-blink-orange font-bold uppercase tracking-wider mb-6 text-sm">{t("footer.sitemap")}</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#expertise" className="hover:text-white transition-colors">Expertise</a></li>
                            <li><a href="#solutions" className="hover:text-white transition-colors">Solutions</a></li>
                            <li><a href="#process" className="hover:text-white transition-colors">Process</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-blink-orange font-bold uppercase tracking-wider mb-6 text-sm">{t("footer.contact")}</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li>contact@welwitech.com</li>
                            <li>+971 50 123 4567</li>
                            <li>Business Bay, Dubai</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-blink-orange font-bold uppercase tracking-wider mb-6 text-sm">{t("footer.social")}</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                        </ul>
                    </div>
                    <div className="flex justify-end items-start">
                        <button
                            onClick={scrollToTop}
                            className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-blink-orange hover:border-blink-orange transition-all duration-300 group"
                        >
                            <ArrowUp className="w-6 h-6 text-white group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Massive Statement Typography */}
            <div className="w-full border-t border-white/10 pt-10 pb-4">
                <h1 className="text-[18vw] leading-[0.8] font-bold text-center tracking-tighter text-white select-none pointer-events-none opacity-90">
                    WELWITECH
                </h1>
                <div className="text-center text-gray-500 text-sm mt-8 pb-8 font-medium">
                    © 2025 Welwitech Smart Solutions. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
