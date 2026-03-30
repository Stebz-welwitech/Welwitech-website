import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshTransmissionMaterial, Float, Environment, ContactShadows, useCursor, PerformanceMonitor } from '@react-three/drei'
import * as THREE from 'three'

function GlassBlob({ degraded }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)
  
  useCursor(hovered)

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, hovered ? t * 0.5 : t * 0.1, 0.05)
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, hovered ? Math.sin(t) * 0.5 : Math.sin(t * 0.5) * 0.2, 0.05)
    
    const targetScale = hovered ? 1.2 : 1
    meshRef.current.scale.x = THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.1)
    meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, targetScale, 0.1)
    meshRef.current.scale.z = THREE.MathUtils.lerp(meshRef.current.scale.z, targetScale, 0.1)
  })

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        position={[0, 0, 0]}
      >
        <icosahedronGeometry args={[2, degraded ? 12 : 20]} />
        <MeshTransmissionMaterial
          backside
          samples={degraded ? 2 : 4}
          resolution={degraded ? 256 : 512}
          thickness={0.5}
          chromaticAberration={degraded ? 0.2 : 0.4}
          anisotropy={0.2}
          distortion={0.5}
          distortionScale={0.5}
          temporalDistortion={0.1}
          iridescence={1}
          iridescenceIOR={1}
          iridescenceThicknessRange={[0, 1400]}
          clearcoat={1}
          attenuationDistance={0.5}
          attenuationColor="#ffffff"
          color="#ffffff"
        />
      </mesh>
    </Float>
  )
}

function FloatingCore() {
  const ref = useRef()
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.01
      ref.current.rotation.z += 0.005
    }
  })
  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[0.8, 0.2, 100, 16]} />
      <meshPhysicalMaterial color="#bf5af2" emissive="#bf5af2" emissiveIntensity={2} toneMapped={false} />
    </mesh>
  )
}

export default function Scene() {
  const [visible, setVisible] = useState(true)
  const [dpr, setDpr] = useState(1.5)
  const [degraded, setDegraded] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY < window.innerHeight * 1.5)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  // Baseline detection for heavy mobile devices
  const isMobile = window.innerWidth < 768

  return (
    <div className="absolute inset-0 z-1 pointer-events-none" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ pointerEvents: 'auto' }}
        gl={{ alpha: true, antialias: false, powerPreference: 'high-performance' }}
        dpr={isMobile ? 1 : dpr}
      >
        <PerformanceMonitor 
          onDecline={() => {
            setDegraded(true)
            setDpr(1)
          }}
          onIncline={() => {
            setDegraded(false)
            setDpr(2)
          }}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <GlassBlob degraded={isMobile || degraded} />
        <FloatingCore />
        <Environment preset="city" />
        <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={10} blur={2} far={4} frames={degraded ? 1 : Infinity} />
      </Canvas>
    </div>
  )
}
