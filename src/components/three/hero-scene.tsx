"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox, Sparkles } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import { STONE as BG, ROCOTO as BRASS, PAPER as CREAM } from "@/lib/theme";

const BAR_COUNT = 32;
const BAR_WIDTH = 0.11;
const GAP = 0.06;
const TOTAL_WIDTH = BAR_COUNT * (BAR_WIDTH + GAP);

const BRASS_COLOR = new THREE.Color(BRASS);
const CREAM_COLOR = new THREE.Color(CREAM);
const BAR_COLORS = Array.from({ length: BAR_COUNT }, (_, i) =>
  BRASS_COLOR.clone().lerp(CREAM_COLOR, i / (BAR_COUNT - 1))
);

function Bars() {
  const groupRef = useRef<THREE.Group>(null);
  const barsRef = useRef<(THREE.Mesh | null)[]>([]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Autonomous ambient sway — always in motion, no pointer input.
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.15) * 0.18;
      groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.05;
    }

    for (let i = 0; i < barsRef.current.length; i++) {
      const bar = barsRef.current[i];
      if (!bar) continue;
      const wave =
        Math.sin(t * 1.6 + i * 0.35) * 0.5 + Math.sin(t * 0.7 + i * 0.12) * 0.3;
      const height = 0.35 + Math.abs(wave) * 1.6;
      bar.scale.y = height;
      bar.position.y = height / 2 - 0.9;
    }
  });

  return (
    <group ref={groupRef}>
      {BAR_COLORS.map((color, i) => {
        const x = i * (BAR_WIDTH + GAP) - TOTAL_WIDTH / 2;
        return (
          <RoundedBox
            key={i}
            args={[BAR_WIDTH, 1, BAR_WIDTH]}
            radius={BAR_WIDTH * 0.35}
            smoothness={2}
            position={[x, 0, 0]}
            ref={(el) => {
              barsRef.current[i] = el as unknown as THREE.Mesh;
            }}
          >
            <meshStandardMaterial
              color={color}
              roughness={0.35}
              metalness={0.4}
              emissive={color}
              emissiveIntensity={1.1}
              toneMapped={false}
            />
          </RoundedBox>
        );
      })}
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.4, 6], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={[BG]} />
      <fog attach="fog" args={[BG, 4, 11]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 4, 5]} intensity={1} color={CREAM} />
      <Bars />
      <Sparkles
        count={40}
        scale={[6, 2.5, 2]}
        size={1.5}
        speed={0.25}
        opacity={0.35}
        color={BRASS}
      />
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.15}
          luminanceSmoothing={0.3}
          intensity={1.2}
          mipmapBlur
        />
      </EffectComposer>
    </Canvas>
  );
}
