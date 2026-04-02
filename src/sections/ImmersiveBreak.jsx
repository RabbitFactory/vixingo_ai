import React, { Suspense, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingParticles({ count = 2000 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 20;
      p[i * 3 + 1] = (Math.random() - 0.5) * 20;
      p[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return p;
  }, [count]);

  const pointsRef = useRef();

  useFrame((state) => {
    pointsRef.current.rotation.y += 0.002;
    pointsRef.current.rotation.x += 0.001;
  });

  return (
    <Points ref={pointsRef} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#25D366"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function GlowingOrb() {
  const meshRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time / 4);
    meshRef.current.rotation.y = Math.sin(time / 2);
  });

  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.5}>
        <MeshDistortMaterial
          color="#25D366"
          speed={3}
          distort={0.4}
          radius={1}
          emissive="#25D366"
          emissiveIntensity={0.5}
        />
      </Sphere>
    </Float>
  );
}

export function ImmersiveBreak() {
  return (
    <section className="h-[100vh] relative bg-black flex items-center justify-center overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={2} color="#25D366" />
          <Suspense fallback={null}>
            <FloatingParticles />
            <GlowingOrb />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-6xl md:text-9xl font-black mb-8 leading-none tracking-tighter text-gradient">
            The Future of <br />
            <span className="text-whatsapp-green italic">Conversation</span>
          </h2>
          <p className="text-xl text-white/40 max-w-2xl mx-auto font-body leading-relaxed">
            Not just another chatbot. A fully autonomous AI agent that lives on WhatsApp, 
            understands your business, and grows your revenue while you sleep.
          </p>
        </motion.div>
      </div>

      {/* Background gradients */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-black to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
}
