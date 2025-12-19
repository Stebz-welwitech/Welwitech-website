"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Shield } from "lucide-react";

export function Navbar() {
    const { language, setLanguage, t } = useLanguage();

    const navLinks = [
        { name: t("nav.expertise"), href: "#expertise" },
        { name: t("nav.solutions"), href: "#solutions" },
        { name: t("nav.process"), href: "#process" },
        { name: t("nav.contact"), href: "#contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 nav-glass">
            <div className="flex h-[60px] items-center justify-between max-w-[1400px] mx-auto px-6">
                {/* Brand */}
                <Link href="/" className="flex items-center gap-2 group">
                    <Shield className="w-6 h-6 text-ui-black group-hover:text-ui-blue transition-colors" />
                    <span className="font-semibold text-lg tracking-tight text-ui-black">Welwi<span className="text-ui-gray">tech</span></span>
                </Link>

                {/* Center Links */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-ui-gray hover:text-ui-blue transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-6">
                    <button
                        onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
                        className="text-sm font-medium text-ui-black uppercase hover:text-ui-blue transition-colors"
                    >
                        {language}
                    </button>

                    <Link
                        href="#contact"
                        className="bg-ui-black text-white px-4 py-2 rounded text-sm font-medium hover:bg-ui-gray transition-colors"
                    >
                        {t("nav.cta")}
                    </Link>
                </div>
            </div>
        </header>
    );
}
