"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import en from "@/locales/en.json";
import fr from "@/locales/fr.json";
import ar from "@/locales/ar.json";

type Language = "en" | "fr" | "ar";
type Content = typeof en;

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("en");
    const [content, setContent] = useState<Content>(en);

    useEffect(() => {
        switch (language) {
            case "en":
                setContent(en);
                break;
            case "fr":
                setContent(fr);
                break;
            case "ar":
                setContent(ar);
                break;
            default:
                setContent(en);
        }
    }, [language]);

    const t = (path: string) => {
        return path.split('.').reduce((obj: any, key) => obj?.[key], content) || path;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
