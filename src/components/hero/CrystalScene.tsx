"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function Crystal() {
  const group = useRef<THREE.Group>(null!);
  const core = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (core.current) {
      core.current.rotation.y += delta * 0.22;
      core.current.rotation.z += delta * 0.05;
    }
    if (group.current) {
      const { x, y } = state.pointer;
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        x * 0.45,
        0.045,
      );
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        -y * 0.3,
        0.045,
      );
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.8} rotationIntensity={0.5} floatIntensity={1.1}>
        {/* faceted core */}
        <mesh ref={core}>
          <icosahedronGeometry args={[1.55, 1]} />
          <meshStandardMaterial
            color="#0d1b33"
            metalness={0.55}
            roughness={0.18}
            emissive="#0c2e57"
            emissiveIntensity={0.85}
            flatShading
          />
        </mesh>
        {/* glowing wireframe cage */}
        <mesh scale={1.04}>
          <icosahedronGeometry args={[1.55, 1]} />
          <meshBasicMaterial
            color="#22d3ee"
            wireframe
            transparent
            opacity={0.22}
          />
        </mesh>
        {/* outer halo ring */}
        <mesh scale={1.9} rotation={[Math.PI / 2.4, 0, 0]}>
          <torusGeometry args={[1.6, 0.012, 16, 96]} />
          <meshBasicMaterial color="#6366f1" transparent opacity={0.5} />
        </mesh>
      </Float>

      <Sparkles
        count={80}
        scale={[10, 8, 6]}
        size={2.4}
        speed={0.4}
        opacity={0.7}
        color="#38bdf8"
      />
    </group>
  );
}

export default function CrystalScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 6.6], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[6, 6, 6]} intensity={90} color="#22d3ee" />
      <pointLight position={[-6, -3, 3]} intensity={70} color="#6366f1" />
      <pointLight position={[0, 4, -5]} intensity={55} color="#3b82f6" />
      <spotLight
        position={[0, 0, 8]}
        angle={0.5}
        penumbra={1}
        intensity={30}
        color="#ffffff"
      />
      <Crystal />
    </Canvas>
  );
}
