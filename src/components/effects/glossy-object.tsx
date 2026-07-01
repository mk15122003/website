"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Lightformer } from "@react-three/drei";
import * as THREE from "three";
import { glossyScroll } from "@/components/effects/glossy-scroll";

function GlossyKnot() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!ref.current) return;
    const p = glossyScroll.p;
    ref.current.rotation.y += delta * 0.18;
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      0.2 + p * Math.PI * 1.4,
      0.08
    );
    const target = 1 + Math.sin(p * Math.PI) * 0.18;
    const s = THREE.MathUtils.lerp(ref.current.scale.x, target, 0.08);
    ref.current.scale.setScalar(s);
  });

  return (
    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.7}>
      <mesh ref={ref} castShadow>
        <torusKnotGeometry args={[1.1, 0.34, 260, 40]} />
        <meshStandardMaterial
          color="#e8f1ff"
          metalness={1}
          roughness={0.12}
          envMapIntensity={1.6}
        />
      </mesh>
    </Float>
  );
}

function EnergyCore() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y -= delta * 0.6;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.42, 0]} />
      <meshStandardMaterial
        color="#00b8ff"
        emissive="#00b8ff"
        emissiveIntensity={2.4}
        toneMapped={false}
      />
    </mesh>
  );
}

function CameraRig() {
  useFrame((state) => {
    const p = glossyScroll.p;
    state.camera.position.z = THREE.MathUtils.lerp(
      state.camera.position.z,
      6.2 - p * 1.4,
      0.06
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      p * 0.8 - 0.1,
      0.06
    );
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export function GlossyObject() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.2], fov: 45 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.35} />
      <pointLight position={[6, 6, 6]} intensity={2.2} color="#2e5bff" />
      <pointLight position={[-6, -3, -4]} intensity={1.6} color="#00b8ff" />

      <GlossyKnot />
      <EnergyCore />
      <CameraRig />

      {/* Studio reflections for the glossy surface (no external HDR fetch) */}
      <Environment resolution={256}>
        <Lightformer
          intensity={3}
          position={[0, 3, 4]}
          scale={[6, 6, 1]}
          color="#2e5bff"
        />
        <Lightformer
          intensity={2.4}
          position={[4, -2, 3]}
          scale={[4, 4, 1]}
          color="#00b8ff"
        />
        <Lightformer
          intensity={1.6}
          position={[-5, 1, -2]}
          scale={[5, 5, 1]}
          color="#ffffff"
        />
        <Lightformer
          intensity={2}
          position={[0, -4, 2]}
          scale={[8, 2, 1]}
          color="#0a2540"
        />
      </Environment>
    </Canvas>
  );
}
