"use client";

import { Send, Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Contact() {
    const { t } = useLanguage();
    const [focusedField, setFocusedField] = useState<string | null>(null);

    // Helper styles for focus mode
    const getInputClass = (field: string) => {
        const isFocused = focusedField === field;
        const isAnyFocused = focusedField !== null;

        return cn(
            "w-full bg-ui-light-gray border border-transparent rounded-lg p-5 text-ui-black focus:outline-none focus:bg-white focus:ring-2 focus:ring-ui-blue/10 focus:border-ui-blue/30 transition-all duration-300",
            isAnyFocused && !isFocused ? "opacity-40 blur-[1px] scale-[0.99]" : "opacity-100 scale-100 shadow-sm"
        );
    };

    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-[1200px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    <div className={cn("transition-all duration-500", focusedField ? "opacity-30 blur-sm" : "opacity-100")}>
                        <span className="text-ui-blue font-medium uppercase tracking-wide text-sm mb-4 block">Get in Touch</span>
                        <h2 className="text-5xl font-semibold text-ui-black mb-8 leading-tight">
                            {t("contact.title_start")} <br />
                            <span className="text-ui-gray">{t("contact.title_highlight")}</span>
                        </h2>
                        <p className="text-lg text-ui-gray mb-12 font-light">
                            {t("contact.subtitle")}
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-5 text-ui-black group">
                                <div className="w-12 h-12 rounded-2xl bg-ui-light-gray flex items-center justify-center text-ui-blue group-hover:scale-110 transition-transform">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <span className="font-medium text-lg">+971 50 123 4567</span>
                            </div>
                            <div className="flex items-center gap-5 text-ui-black group">
                                <div className="w-12 h-12 rounded-2xl bg-ui-light-gray flex items-center justify-center text-ui-blue group-hover:scale-110 transition-transform">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <span className="font-medium text-lg">contact@welwitech.com</span>
                            </div>
                            <div className="flex items-center gap-5 text-ui-black group">
                                <div className="w-12 h-12 rounded-2xl bg-ui-light-gray flex items-center justify-center text-ui-blue group-hover:scale-110 transition-transform">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <span className="font-medium text-lg">Business Bay, Dubai</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-1">
                        <form className="space-y-6" onMouseLeave={() => setFocusedField(null)}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className={cn("text-xs font-semibold uppercase transition-colors", focusedField === "name" ? "text-ui-blue" : "text-ui-gray")}>
                                        {t("contact.name_label")}
                                    </label>
                                    <input
                                        type="text"
                                        onFocus={() => setFocusedField("name")}
                                        className={getInputClass("name")}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className={cn("text-xs font-semibold uppercase transition-colors", focusedField === "email" ? "text-ui-blue" : "text-ui-gray")}>
                                        {t("contact.email_label")}
                                    </label>
                                    <input
                                        type="email"
                                        onFocus={() => setFocusedField("email")}
                                        className={getInputClass("email")}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className={cn("text-xs font-semibold uppercase transition-colors", focusedField === "message" ? "text-ui-blue" : "text-ui-gray")}>
                                    {t("contact.message_label")}
                                </label>
                                <textarea
                                    rows={5}
                                    onFocus={() => setFocusedField("message")}
                                    className={getInputClass("message")}
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="w-full bg-ui-black text-white font-medium p-5 rounded-lg hover:bg-ui-blue transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
                            >
                                <Send className="w-4 h-4" />
                                {t("contact.submit")}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
