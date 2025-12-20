import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { LanguageProvider } from "@/context/LanguageContext";
import { CustomCursor } from "@/components/ui/CustomCursor";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter"
});

const jetbrains = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono"
});

export const metadata: Metadata = {
    title: "Welwitech | Secure Smart Infrastructure",
    description: "Premier network infrastructure and cybersecurity solutions for luxury properties in Dubai.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${jetbrains.variable} font-sans`}>
                <LanguageProvider>
                    <div className="noise-overlay"></div>
                    <CustomCursor />
                    <SmoothScroll>
                        <Navbar />
                        {children}
                        <Footer />
                    </SmoothScroll>
                </LanguageProvider>
            </body>
        </html>
    );
}
