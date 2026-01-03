"use client";

import { Send, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export function Contact() {
    return (
        <section id="contact" className="py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden border-t border-zinc-100">
            <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-start">
                    <div>
                        <span className="text-welwitech-orange font-bold uppercase tracking-wide text-sm mb-4 block">Get in Touch</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 md:mb-8 leading-tight">
                            Ready to upgrade your infrastructure?
                        </h2>
                        <p className="text-base sm:text-lg text-zinc-500 mb-8 md:mb-12 font-light leading-relaxed">
                            Contact our team of experts to design a tailored solution for your property.
                        </p>

                        <div className="space-y-6 md:space-y-8">
                            <div className="flex items-center gap-4 md:gap-5 group">
                                <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-zinc-50 flex items-center justify-center text-black group-hover:bg-welwitech-orange group-hover:text-white transition-colors flex-shrink-0">
                                    <Phone className="w-4 h-4 md:w-5 md:h-5" />
                                </div>
                                <span className="font-medium text-base md:text-lg text-zinc-800">+971 50 123 4567</span>
                            </div>
                            <div className="flex items-center gap-4 md:gap-5 group">
                                <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-zinc-50 flex items-center justify-center text-black group-hover:bg-welwitech-orange group-hover:text-white transition-colors flex-shrink-0">
                                    <Mail className="w-4 h-4 md:w-5 md:h-5" />
                                </div>
                                <span className="font-medium text-base md:text-lg text-zinc-800 break-all">contact@welwitech.com</span>
                            </div>
                            <div className="flex items-center gap-4 md:gap-5 group">
                                <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-zinc-50 flex items-center justify-center text-black group-hover:bg-welwitech-orange group-hover:text-white transition-colors flex-shrink-0">
                                    <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                                </div>
                                <span className="font-medium text-base md:text-lg text-zinc-800">Business Bay, Dubai</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-zinc-50 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12">
                        <form className="space-y-5 md:space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-zinc-400">Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white border border-transparent rounded-xl p-3.5 md:p-4 text-black text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-welwitech-orange/20 transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-zinc-400">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-white border border-transparent rounded-xl p-3.5 md:p-4 text-black text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-welwitech-orange/20 transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-zinc-400">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-white border border-transparent rounded-xl p-3.5 md:p-4 text-black text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-welwitech-orange/20 transition-all resize-none"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="w-full bg-black text-white font-bold p-3.5 md:p-4 rounded-xl hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
                            >
                                <Send className="w-4 h-4" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
