import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { ProblemSection } from './sections/ProblemSection';
import { HowItWorks } from './sections/HowItWorks';
import { FeaturesSection } from './sections/FeaturesSection';
import { ImmersiveBreak } from './sections/ImmersiveBreak';
import { RemainingSections } from './sections/RemainingSections';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="bg-black min-h-screen selection:bg-whatsapp-green selection:text-black">
      {/* Custom Cursor (Optional but requested) */}
      <CustomCursor />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-whatsapp-green z-[110] origin-left"
        style={{ scaleX }}
      />

      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <FeaturesSection />
      <ImmersiveBreak />
      <RemainingSections />
    </main>
  );
}

function CustomCursor() {
  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-whatsapp-green pointer-events-none z-[9999] hidden md:block mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-whatsapp-green rounded-full" />
    </motion.div>
  );
}

export default App;
