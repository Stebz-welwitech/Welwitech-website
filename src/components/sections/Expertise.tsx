"use client";

import { Shield, Network, LayoutDashboard } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Expertise() {
    const { t } = useLanguage();

    const items = [
        { key: "cyber", icon: Shield, items: t("expertise.cyber_items") },
        { key: "unifi", icon: Network, items: t("expertise.unifi_items") },
        { key: "maint", icon: LayoutDashboard, items: t("expertise.maint_items") },
    ];

    return (
        <section id="expertise" className="py-24 bg-ui-light-gray">
            <div className="container mx-auto px-6 max-w-[1200px]">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-semibold text-ui-black mb-4">{t("expertise.title")}</h2>
                    <p className="text-ui-gray max-w-2xl mx-auto">{t("expertise.subtitle")}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map((item) => (
                        <div key={item.key} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-ui-light-gray rounded-xl flex items-center justify-center mb-6 text-ui-blue">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-ui-black mb-3">{t(`expertise.${item.key}_title`)}</h3>
                            <p className="text-sm text-ui-gray mb-6 leading-relaxed">
                                {t(`expertise.${item.key}_desc`)}
                            </p>
                            <div className="border-t border-gray-100 pt-6">
                                <ul className="space-y-2">
                                    {(item.items as any as string[]).map(f => (
                                        <li key={f} className="text-sm text-ui-black font-medium">• {f}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
