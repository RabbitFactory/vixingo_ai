import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '../utils/cn';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 py-6 px-6 lg:px-12 flex items-center justify-between",
        isScrolled ? "bg-black/50 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent"
      )}
    >
      {/* Logo */}
      <a href="#" className="flex items-center gap-2 group">
        <div className="w-10 h-10 rounded-xl bg-whatsapp-green flex items-center justify-center text-black font-black text-xl group-hover:rotate-12 transition-transform">
          V
        </div>
        <span className="text-2xl font-black tracking-tighter text-white">Vixingo</span>
      </a>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-12">
        {['How It Works', 'Features', 'Compare', 'Testimonials'].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-sm font-bold text-white/40 hover:text-whatsapp-green transition-colors uppercase tracking-widest"
          >
            {link}
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="flex items-center gap-6">
        <a href="#" className="hidden sm:block text-sm font-bold text-white/60 hover:text-white transition-colors uppercase tracking-widest">
          Login
        </a>
        <button className="px-6 py-2.5 rounded-full bg-white text-black font-bold text-sm hover:bg-whatsapp-green hover:text-black transition-all hover:scale-105 active:scale-95">
          Start Free
        </button>
      </div>
    </motion.nav>
  );
}
