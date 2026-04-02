import React, { Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Phone } from '../components/Phone';
import { WhatsAppChat } from '../components/WhatsAppChat';
import { ArrowRight, MessageSquare, Clock, TrendingUp } from 'lucide-react';
import { cn } from '../utils/cn';

export function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center justify-center">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-whatsapp-green/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-whatsapp-green-dim/10 blur-[150px] rounded-full pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-6 border-whatsapp-green/20"
          >
            <span className="w-2 h-2 rounded-full bg-whatsapp-green animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-whatsapp-green">WhatsApp AI Automation</span>
          </motion.div>
          
          <h1 className="text-6xl lg:text-8xl font-black mb-6 leading-[0.9] tracking-tighter text-gradient">
            Let AI Handle <br />
            <span className="text-whatsapp-green italic">Your WhatsApp</span>
          </h1>
          
          <p className="text-lg text-white/70 mb-10 max-w-lg leading-relaxed font-body">
            Vixingo is a premium WhatsApp AI Agent platform that qualifies leads, handles FAQs, and books appointments 24/7. 
            Free your team from repetitive chats.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="px-8 py-4 rounded-full bg-whatsapp-green text-black font-bold flex items-center justify-center gap-2 hover:bg-whatsapp-green-dim transition-all hover:scale-105 active:scale-95 group">
              Get Started Free
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full glass text-white font-bold flex items-center justify-center gap-2 hover:bg-white/5 transition-all">
              Book a Demo
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
            <div className="space-y-1">
              <div className="text-2xl font-black text-white">24/7</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Automated Support</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-black text-white">3x</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Conversion Rate</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-black text-white">0</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Manual Replying</div>
            </div>
          </div>
        </motion.div>

        {/* 3D Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="relative h-[600px] w-full"
        >
          {/* 3D Canvas */}
          <div className="absolute inset-0">
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
              <Suspense fallback={null}>
                <Phone mouse={mouse} />
              </Suspense>
            </Canvas>
          </div>

          {/* Floating WhatsApp Chat */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[520px] pointer-events-none z-20 scale-90 sm:scale-100"
          >
            <WhatsAppChat />
          </motion.div>

          {/* Floating Badges */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] right-[10%] glass p-4 rounded-2xl flex items-center gap-3 border-whatsapp-green/20 z-30"
          >
            <div className="w-10 h-10 rounded-full bg-whatsapp-green/20 flex items-center justify-center text-whatsapp-green">
              <TrendingUp size={20} />
            </div>
            <div>
              <p className="text-[10px] text-white/40 font-bold uppercase">Conversions</p>
              <p className="text-sm font-black text-white">+142%</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-[20%] left-[5%] glass p-4 rounded-2xl flex items-center gap-3 border-whatsapp-green/20 z-30"
          >
            <div className="w-10 h-10 rounded-full bg-whatsapp-green/20 flex items-center justify-center text-whatsapp-green">
              <Clock size={20} />
            </div>
            <div>
              <p className="text-[10px] text-white/40 font-bold uppercase">Response Time</p>
              <p className="text-sm font-black text-white">&lt; 5 sec</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
