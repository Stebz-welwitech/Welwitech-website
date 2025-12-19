"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Shield } from "lucide-react";
import Link from "next/link";

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-white pt-24 pb-12 border-t border-ui-light-gray">
            <div className="container mx-auto px-6 max-w-[1200px]">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    {/* Brand Column */}
                    <div className="col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <Shield className="w-6 h-6 text-ui-blue" />
                            <span className="font-semibold text-lg tracking-tight text-ui-black">Welwitech</span>
                        </Link>
                        <p className="text-sm text-ui-gray leading-relaxed max-w-xs">
                            {t("footer.desc")}
                        </p>
                    </div>

                    {/* Links - Sitemap Style */}
                    <div className="col-span-1">
                        <h4 className="font-semibold text-ui-black mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-ui-gray">
                            <li><Link href="#expertise" className="hover:text-ui-blue transition-colors">Expertise</Link></li>
                            <li><Link href="#solutions" className="hover:text-ui-blue transition-colors">Solutions</Link></li>
                            <li><Link href="#process" className="hover:text-ui-blue transition-colors">Process</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-semibold text-ui-black mb-6">Context</h4>
                        <ul className="space-y-4 text-sm text-ui-gray">
                            <li><a href="#" className="hover:text-ui-blue transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-ui-blue transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-semibold text-ui-black mb-6">Dubai Office</h4>
                        <ul className="space-y-4 text-sm text-ui-gray">
                            <li>Business Bay</li>
                            <li>Dubai, UAE</li>
                            <li>+971 50 123 4567</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-ui-light-gray pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-ui-gray">
                    <p>© {new Date().getFullYear()} Welwitech Systems. {t("footer.rights")}</p>
                    <p>{t("footer.built_with")}</p>
                </div>
            </div>
        </footer>
    );
}
