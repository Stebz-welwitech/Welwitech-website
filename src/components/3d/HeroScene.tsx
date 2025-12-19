"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

function NetworkParticles(props: any) {
    const ref = useRef<THREE.Points>(null!);

    const sphere = useMemo(() => {
        const coords = new Float32Array(4000 * 3);
        for (let i = 0; i < 4000; i++) {
            const u = Math.random();
            const v = Math.random();
            const theta = 2 * Math.PI * u;
            const phi = Math.acos(2 * v - 1);
            const r = 1.3 + Math.random() * 0.2;

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            coords[i * 3] = x;
            coords[i * 3 + 1] = y;
            coords[i * 3 + 2] = z;
        }
        return coords;
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y -= delta / 25;
            ref.current.rotation.x -= delta / 40;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#0066FF" // Electric Blue for visibility on White
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                />
            </Points>
        </group>
    );
}

export function HeroScene() {
    return (
        <div className="absolute inset-0 z-0 h-full w-full opacity-70 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 2.2] }} gl={{ antialias: false, powerPreference: "high-performance" }}>
                <NetworkParticles />
                {/* Simplified Bloom for Light Mode - subtle glow */}
                <EffectComposer>
                    <Bloom luminanceThreshold={0} mipmapBlur intensity={0.5} radius={0.4} />
                </EffectComposer>
            </Canvas>
        </div>
    );
}
