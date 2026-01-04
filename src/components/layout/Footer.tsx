"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ArrowUp } from "lucide-react";
import Image from "next/image";

export function Footer() {
    const { t } = useLanguage();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-white dark:bg-zinc-950 text-black dark:text-zinc-400 pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-12 border-t border-zinc-100 dark:border-zinc-800 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 max-w-[1400px] mb-12 md:mb-16 lg:mb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
                    <div className="col-span-1 sm:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <Image
                                src="/images/logo.png"
                                alt="Welwitech"
                                width={40}
                                height={40}
                                className="h-8 md:h-10 w-auto"
                            />
                            <span className="font-semibold text-lg tracking-tight text-black dark:text-white">Welwitech</span>
                        </div>
                        <p className="text-zinc-500 text-sm md:text-base max-w-sm">
                            {t('footer.desc')}
                        </p>
                    </div>
                    <div>
                        <h4 className="font-medium mb-4 md:mb-6 text-xs md:text-sm uppercase tracking-wider text-zinc-400">{t('footer.company_title')}</h4>
                        <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-zinc-600">
                            <li><a href="#solutions" className="hover:text-welwitech-orange transition-colors">{t('nav.solutions')}</a></li>
                            <li><a href="#expertise" className="hover:text-welwitech-orange transition-colors">{t('nav.expertise')}</a></li>
                            <li><a href="#contact" className="hover:text-welwitech-orange transition-colors">{t('nav.contact')}</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-medium mb-4 md:mb-6 text-xs md:text-sm uppercase tracking-wider text-zinc-400">{t('footer.contact_title')}</h4>
                        <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-zinc-600">
                            <li><a href="#" className="hover:text-welwitech-orange transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-welwitech-orange transition-colors">Instagram</a></li>
                            <li><a href="mailto:contact@welwitech.com" className="hover:text-welwitech-orange transition-colors break-all">contact@welwitech.com</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mt-12 md:mt-16 lg:mt-20 border-t border-zinc-100 dark:border-zinc-800 pt-6 md:pt-8">
                    <div className="flex flex-col gap-4">
                        <p className="text-zinc-400 dark:text-zinc-500 text-xs md:text-sm text-center sm:text-left">© 2026 Welwitech. {t('footer.rights')} Dubai, UAE.</p>
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                            <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-[10px] sm:text-xs font-medium text-zinc-600 dark:text-zinc-300">
                                SIRA Certified
                            </span>
                            <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-[10px] sm:text-xs font-medium text-zinc-600 dark:text-zinc-300">
                                TDRA Compliant
                            </span>
                            <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-[10px] sm:text-xs font-medium text-zinc-600 dark:text-zinc-300">
                                Dubai Police Approved
                            </span>
                        </div>
                    </div>

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
