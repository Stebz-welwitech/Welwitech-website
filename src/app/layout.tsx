import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { ThemeScript } from "@/components/ThemeScript";
import { AuditBanner } from "@/components/layout/AuditBanner";

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
    viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <ThemeScript />
            </head>
            <body className={`${inter.variable} ${jetbrains.variable} font-sans overflow-x-hidden antialiased`}>
                <ThemeProvider>
                    <LanguageProvider>
                        <LoadingScreen />
                        <div className="noise-overlay"></div>
                        <CustomCursor />
                        <SmoothScroll>
                            <AuditBanner />
                            <Navbar />
                            {children}
                            <Footer />
                        </SmoothScroll>
                    </LanguageProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
