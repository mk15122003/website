"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

function PowerNode({
  position,
  pulseOffset,
}: {
  position: [number, number, number];
  pulseOffset: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const scale =
      1 + Math.sin(state.clock.elapsedTime * 2 + pulseOffset) * 0.35;
    ref.current.scale.setScalar(scale);
  });

  return (
    <group position={position}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshBasicMaterial color="#00b8ff" transparent opacity={0.9} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.22, 16, 16]} />
        <meshBasicMaterial
          color="#2e5bff"
          transparent
          opacity={0.15}
          wireframe
        />
      </mesh>
    </group>
  );
}

function PowerGrid() {
  const groupRef = useRef<THREE.Group>(null);

  const nodes = useMemo(() => {
    const pts: [number, number, number][] = [];
    const layers = 4;
    for (let row = 0; row < layers; row++) {
      for (let col = 0; col < 5; col++) {
        pts.push([
          (col - 2) * 1.8,
          (row - 1.5) * 1.4,
          (Math.random() - 0.5) * 2,
        ]);
      }
    }
    return pts;
  }, []);

  const connections = useMemo(() => {
    const lines: [THREE.Vector3, THREE.Vector3][] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = new THREE.Vector3(...nodes[i]);
        const b = new THREE.Vector3(...nodes[j]);
        if (a.distanceTo(b) < 2.5) {
          lines.push([a, b]);
        }
      }
    }
    return lines;
  }, [nodes]);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.2) * 0.4 + state.clock.elapsedTime * 0.08;
    groupRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.15) * 0.12;
  });

  return (
    <group ref={groupRef}>
      {connections.map(([start, end], i) => (
        <Line
          key={i}
          points={[start, end]}
          color="#2e5bff"
          transparent
          opacity={0.35}
          lineWidth={1}
        />
      ))}
      {nodes.map((pos, i) => (
        <PowerNode key={i} position={pos} pulseOffset={i * 0.5} />
      ))}

      {/* Central transformer ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.2, 0.03, 8, 64]} />
        <meshBasicMaterial color="#00b8ff" transparent opacity={0.4} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.8, 0.02, 8, 64]} />
        <meshBasicMaterial color="#2e5bff" transparent opacity={0.25} wireframe />
      </mesh>
    </group>
  );
}

export function Hero3DScene() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] opacity-60">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#00b8ff" />
        <PowerGrid />
      </Canvas>
    </div>
  );
}
