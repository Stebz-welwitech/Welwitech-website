"use client";

import { Wifi, Lock, Video } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const unifiSolutions = [
    {
        id: 1,
        title: "UniFi Network",
        date: "Wi-Fi 7",
        content: "Enterprise-grade wireless networking with seamless roaming, VLAN support, and centralized management for complete network visibility.",
        category: "Network",
        icon: Wifi,
        relatedIds: [2, 3],
        status: "completed" as const,
        energy: 95,
    },
    {
        id: 2,
        title: "UniFi Access",
        date: "Smart Locks",
        content: "Advanced access control with smart locks, temporary codes, scheduled permissions, and complete audit logs for enhanced security.",
        category: "Access",
        icon: Lock,
        relatedIds: [1, 3],
        status: "completed" as const,
        energy: 90,
    },
    {
        id: 3,
        title: "UniFi Protect",
        date: "Surveillance",
        content: "Professional video surveillance with AI-powered detection, local storage, and seamless integration with your UniFi ecosystem.",
        category: "Protect",
        icon: Video,
        relatedIds: [1, 2],
        status: "completed" as const,
        energy: 88,
    },
];

export function UniFiSolutions() {
    return (
        <section id="solutions" className="relative bg-black py-0">
            <RadialOrbitalTimeline timelineData={unifiSolutions} />
        </section>
    );
}
