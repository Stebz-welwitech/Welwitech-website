"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Wifi, Lock, Video, Shield, Gauge, Smartphone, Server, Globe } from 'lucide-react'
import { CountUp } from '@/components/ui/count-up'
import { useLanguage } from '@/context/LanguageContext'

export function UniFiProducts() {
    const { t } = useLanguage();

    return (
        <section id="solutions" className="bg-zinc-50 py-16 md:py-32 dark:bg-zinc-950 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm shadow-sm mb-6">
                        <span className="w-2 h-2 rounded-full bg-[image:var(--image-gradient-primary)] animate-pulse" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-600">
                            {t('solutions.label')}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
                        {t('solutions.title')}
                    </h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        {t('solutions.subtitle')}
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* UniFi Network - Large Featured Card */}
                    <Card className="md:col-span-2 lg:col-span-2 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all duration-300 group overflow-hidden">
                        <CardHeader className="pb-4">
                            <div className="flex items-start justify-between">
                                <div className="relative flex aspect-square size-16 rounded-2xl border border-zinc-200 bg-gradient-to-br from-w-blue/10 to-w-violet/5 items-center justify-center">
                                    <Wifi className="size-8 text-w-blue" strokeWidth={1.5} />
                                </div>
                                <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-medium text-zinc-700 dark:text-zinc-300">Wi-Fi 7</span>
                            </div>
                            <CardTitle className="text-2xl mt-4">UniFi Network</CardTitle>
                            <CardDescription className="text-base">
                                {t('solutions.network_desc')}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-row justify-between gap-2 md:grid md:grid-cols-3 md:gap-4 mb-4">
                                <div className="space-y-1 text-center md:text-left">
                                    <div className="flex items-center justify-center md:justify-start text-lg md:text-2xl font-bold text-black dark:text-white">
                                        <CountUp value={5.7} decimalPlaces={1} />
                                    </div>
                                    <p className="text-[10px] md:text-xs text-zinc-500 whitespace-nowrap">Gbps Max</p>
                                </div>
                                <div className="space-y-1 text-center md:text-left">
                                    <div className="flex items-center justify-center md:justify-start text-lg md:text-2xl font-bold text-black dark:text-white">
                                        <CountUp value={500} suffix="+" />
                                    </div>
                                    <p className="text-[10px] md:text-xs text-zinc-500">Clients</p>
                                </div>
                                <div className="space-y-1 text-center md:text-left">
                                    <p className="text-lg md:text-2xl font-bold text-black dark:text-white">PoE++</p>
                                    <p className="text-[10px] md:text-xs text-zinc-500">Power</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md text-xs dark:text-zinc-300">VLAN Management</span>
                                <span className="px-2 py-1 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md text-xs dark:text-zinc-300">QoS</span>
                                <span className="px-2 py-1 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md text-xs dark:text-zinc-300">Mesh Support</span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* UniFi Access */}
                    <Card className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all duration-300 group">
                        <CardHeader>
                            <div className="relative flex aspect-square size-14 rounded-2xl border border-zinc-200 bg-gradient-to-br from-w-magenta/10 to-w-orange/5 items-center justify-center mb-4">
                                <Lock className="size-7 text-w-magenta" strokeWidth={1.5} />
                            </div>
                            <CardTitle className="text-xl">UniFi Access</CardTitle>
                            <CardDescription>
                                {t('solutions.access_desc')}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-w-magenta" />
                                    {t('solutions.access_f1')}
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-w-magenta" />
                                    {t('solutions.access_f2')}
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-w-magenta" />
                                    {t('solutions.access_f3')}
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* UniFi Protect */}
                    <Card className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all duration-300 group">
                        <CardHeader>
                            <div className="relative flex aspect-square size-14 rounded-2xl border border-zinc-200 bg-gradient-to-br from-w-orange/10 to-w-violet/5 items-center justify-center mb-4">
                                <Video className="size-7 text-w-orange" strokeWidth={1.5} />
                            </div>
                            <CardTitle className="text-xl">UniFi Protect</CardTitle>
                            <CardDescription>
                                {t('solutions.protect_desc')}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-w-orange" />
                                    {t('solutions.protect_f1')}
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-w-orange" />
                                    {t('solutions.protect_f2')}
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-w-orange" />
                                    {t('solutions.protect_f3')}
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* UniFi Talk */}
                    <Card className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all duration-300 group">
                        <CardHeader>
                            <div className="relative flex aspect-square size-14 rounded-2xl border border-zinc-200 bg-gradient-to-br from-w-violet/10 to-w-blue/5 items-center justify-center mb-4">
                                <Smartphone className="size-7 text-w-violet" strokeWidth={1.5} />
                            </div>
                            <CardTitle className="text-xl">UniFi Talk</CardTitle>
                            <CardDescription>
                                {t('solutions.talk_desc')}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-w-violet" />
                                    {t('solutions.talk_f1')}
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-w-violet" />
                                    {t('solutions.talk_f2')}
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-w-violet" />
                                    {t('solutions.talk_f3')}
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* UniFi Connect */}
                    <Card className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all duration-300 group">
                        <CardHeader>
                            <div className="relative flex aspect-square size-14 rounded-2xl border border-zinc-200 bg-gradient-to-br from-w-blue/10 to-w-magenta/5 items-center justify-center mb-4">
                                <Globe className="size-7 text-w-blue" strokeWidth={1.5} />
                            </div>
                            <CardTitle className="text-xl">UniFi Connect</CardTitle>
                            <CardDescription>
                                {t('solutions.connect_desc')}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-w-blue" />
                                    {t('solutions.connect_f1')}
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-w-blue" />
                                    {t('solutions.connect_f2')}
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-w-blue" />
                                    {t('solutions.connect_f3')}
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Performance & Security - Wide Card */}
                    <Card className="md:col-span-2 lg:col-span-3 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all duration-300">
                        <CardContent className="grid md:grid-cols-3 gap-6 pt-6">
                            {/* Performance */}
                            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
                                <div className="relative flex aspect-square size-16 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 items-center justify-center">
                                    <Gauge className="size-8 text-w-violet" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-black dark:text-white mb-2">{t('solutions.perf_title')}</h3>
                                    <p className="text-sm text-zinc-600">{t('solutions.perf_desc')}</p>
                                </div>
                            </div>

                            {/* Sécurité */}
                            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
                                <div className="relative flex aspect-square size-16 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 items-center justify-center">
                                    <Shield className="size-8 text-w-magenta" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-black dark:text-white mb-2">{t('solutions.sec_title')}</h3>
                                    <p className="text-sm text-zinc-600">{t('solutions.sec_desc')}</p>
                                </div>
                            </div>

                            {/* Gestion Centralisée */}
                            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
                                <div className="relative flex aspect-square size-16 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 items-center justify-center">
                                    <Server className="size-8 text-w-orange" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-black dark:text-white mb-2">{t('solutions.console_title')}</h3>
                                    <p className="text-sm text-zinc-600">{t('solutions.console_desc')}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
