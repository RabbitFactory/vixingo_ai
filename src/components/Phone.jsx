import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export function Phone({ mouse }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Smoothly tilt based on mouse position
    const targetX = mouse.y * 0.2;
    const targetY = mouse.x * 0.2;
    
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetX, 0.1);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetY + Math.PI * 0.05, 0.1);
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={meshRef}>
        {/* Phone Body */}
        <RoundedBox args={[3, 6, 0.2]} radius={0.15} smoothness={4}>
          <meshStandardMaterial color="#111" roughness={0.1} metalness={0.8} />
        </RoundedBox>
        
        {/* Screen */}
        <mesh position={[0, 0, 0.11]}>
          <planeGeometry args={[2.8, 5.8]} />
          <meshStandardMaterial color="#050505" roughness={0.1} />
        </mesh>

        {/* Camera Notch */}
        <mesh position={[0, 2.6, 0.12]}>
          <capsuleGeometry args={[0.05, 0.4, 4, 8]} />
          <meshStandardMaterial color="#000" />
        </mesh>
      </group>
    </Float>
  );
}
