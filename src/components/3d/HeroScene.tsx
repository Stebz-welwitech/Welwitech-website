"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function ParticleField() {
    const ref = useRef<THREE.Points>(null);

    // Generate 2000 random particles
    const count = 2000;
    const [positions, colors] = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        // Blinkpath Colors
        const colorA = new THREE.Color("#ED4C22"); // Orange
        const colorB = new THREE.Color("#121212"); // Black
        const colorC = new THREE.Color("#CCCCCC"); // Light Grey (for visibility)

        for (let i = 0; i < count; i++) {
            // Position: Spread widely across the screen
            positions[i * 3] = (Math.random() - 0.5) * 25;     // x
            positions[i * 3 + 1] = (Math.random() - 0.5) * 15; // y
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // z

            // Color: Mix of Orange (20%), Black (40%), Grey (40%)
            const r = Math.random();
            let color;
            if (r < 0.2) color = colorA;
            else if (r < 0.6) color = colorB;
            else color = colorC;

            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }

        return [positions, colors];
    }, []);

    useFrame((state) => {
        if (ref.current) {
            // Gentle floating rotation
            ref.current.rotation.x = state.clock.getElapsedTime() * 0.05;
            ref.current.rotation.y = state.clock.getElapsedTime() * 0.03;

            // Subtle wave effect on Y position (optional, keeping it simple for now)
        }
    });

    return (
        <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                vertexColors
                size={0.08}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.8}
            />
        </Points>
    );
}

export function HeroScene() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                <ParticleField />
            </Canvas>
        </div>
    );
}
