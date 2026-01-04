"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Contact() {
    const { t } = useLanguage();
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus("success");
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-16 md:py-20 lg:py-24 bg-white dark:bg-zinc-950 relative overflow-hidden border-t border-zinc-100 dark:border-zinc-800">
            <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-start">
                    <div>
                        <span className="text-welwitech-orange font-bold uppercase tracking-wide text-sm mb-4 block">{t('contact.title_start')}</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 md:mb-8 leading-tight">
                            {t('contact.title_highlight')}
                        </h2>
                        <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 mb-8 md:mb-12 font-light leading-relaxed">
                            {t('contact.subtitle')}
                        </p>

                        <div className="space-y-6 md:space-y-8">
                            <div className="flex items-center gap-4 md:gap-5 group">
                                <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-zinc-50 flex items-center justify-center text-black group-hover:bg-welwitech-orange group-hover:text-white transition-colors flex-shrink-0">
                                    <Phone className="w-4 h-4 md:w-5 md:h-5" />
                                </div>
                                <span className="font-medium text-base md:text-lg text-zinc-800 dark:text-zinc-200">+971 50 123 4567</span>
                            </div>
                            <div className="flex items-center gap-4 md:gap-5 group">
                                <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-zinc-50 flex items-center justify-center text-black group-hover:bg-welwitech-orange group-hover:text-white transition-colors flex-shrink-0">
                                    <Mail className="w-4 h-4 md:w-5 md:h-5" />
                                </div>
                                <span className="font-medium text-base md:text-lg text-zinc-800 dark:text-zinc-200 break-all">contact@welwitech.com</span>
                            </div>
                            <div className="flex items-center gap-4 md:gap-5 group">
                                <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-zinc-50 flex items-center justify-center text-black group-hover:bg-welwitech-orange group-hover:text-white transition-colors flex-shrink-0">
                                    <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                                </div>
                                <span className="font-medium text-base md:text-lg text-zinc-800 dark:text-zinc-200">Business Bay, Dubai</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12">
                        <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-zinc-400">{t('contact.name_label')}</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full bg-white dark:bg-zinc-800 border border-transparent rounded-xl p-3.5 md:p-4 text-black dark:text-white text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-welwitech-orange/20 transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-zinc-400">{t('contact.email_label')}</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full bg-white dark:bg-zinc-800 border border-transparent rounded-xl p-3.5 md:p-4 text-black dark:text-white text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-welwitech-orange/20 transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-zinc-400">{t('contact.message_label')}</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={4}
                                    className="w-full bg-white dark:bg-zinc-800 border border-transparent rounded-xl p-3.5 md:p-4 text-black dark:text-white text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-welwitech-orange/20 transition-all resize-none"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === "loading" || status === "success"}
                                className={`w-full font-bold p-3.5 md:p-4 rounded-xl transition-all flex items-center justify-center gap-2 text-sm md:text-base
                                    ${status === "success"
                                        ? "bg-green-500 text-white"
                                        : status === "error"
                                            ? "bg-red-500 text-white"
                                            : "bg-black text-white hover:bg-zinc-800"
                                    }
                                    ${status === "loading" ? "opacity-70 cursor-not-allowed" : ""}
                                `}
                            >
                                {status === "loading" ? (
                                    "Sending..."
                                ) : status === "success" ? (
                                    "Message Sent!"
                                ) : status === "error" ? (
                                    "Error. Try Again."
                                ) : (
                                    <>
                                        <Send className="w-4 h-4" />
                                        {t('contact.submit')}
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
