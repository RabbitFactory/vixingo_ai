import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, Brain, Send, Zap, TrendingUp, ChevronRight } from 'lucide-react';
import { cn } from '../utils/cn';

const STEPS = [
  {
    id: 1,
    title: "Connect Your WhatsApp",
    description: "Link your Meta Business Manager in minutes. 100% official WhatsApp Cloud API — zero technical knowledge needed.",
    icon: <Link size={24} className="text-blue-400" />,
    visual: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full" />
        <div className="w-24 h-24 rounded-3xl bg-blue-400 flex items-center justify-center text-white shadow-2xl animate-pulse">
          <Link size={48} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 border border-blue-400/20 rounded-full animate-ping" />
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Train the AI",
    description: "Upload your product catalog, website URL, or business knowledge. Our AI learns your business deeply in seconds.",
    icon: <Brain size={24} className="text-purple-400" />,
    visual: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-purple-500/10 blur-[100px] rounded-full" />
        <div className="w-24 h-24 rounded-full bg-purple-400 flex items-center justify-center text-white shadow-2xl">
          <Brain size={48} className="animate-pulse" />
        </div>
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ scale: [1, 1.5, 1], opacity: [0, 0.5, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: i }}
            className="absolute w-48 h-48 border border-purple-400/20 rounded-full"
          />
        ))}
      </div>
    )
  },
  {
    id: 3,
    title: "Deploy Agent",
    description: "Your AI agent is now live on WhatsApp. It starts greeting customers, qualifying leads, and answering FAQs immediately.",
    icon: <Send size={24} className="text-whatsapp-green" />,
    visual: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-whatsapp-green/10 blur-[100px] rounded-full" />
        <div className="w-24 h-24 rounded-3xl bg-whatsapp-green flex items-center justify-center text-black shadow-2xl">
          <Send size={48} />
        </div>
        <motion.div
          animate={{ x: [0, 100, -100, 0], y: [0, -50, 50, 0], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute w-12 h-12 bg-white/10 rounded-xl blur-sm"
        />
      </div>
    )
  },
  {
    id: 4,
    title: "Automate Everything",
    description: "From booking appointments to processing orders, everything happens automatically in the chat.",
    icon: <Zap size={24} className="text-amber-400" />,
    visual: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-amber-500/10 blur-[100px] rounded-full" />
        <div className="w-24 h-24 rounded-3xl bg-amber-400 flex items-center justify-center text-black shadow-2xl">
          <Zap size={48} className="animate-bounce" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 border-2 border-dashed border-amber-400/20 rounded-full animate-[spin_10s_linear_infinite]" />
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "Scale Your Business",
    description: "Monitor performance through your dashboard. Reach thousands of customers without adding a single staff member.",
    icon: <TrendingUp size={24} className="text-red-400" />,
    visual: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-red-500/10 blur-[100px] rounded-full" />
        <div className="w-24 h-24 rounded-3xl bg-red-400 flex items-center justify-center text-white shadow-2xl">
          <TrendingUp size={48} />
        </div>
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-12 bg-white/5 rounded-full flex items-center justify-around px-4">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
        </div>
      </div>
    )
  }
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep(prev => (prev + 1) % STEPS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="how-it-works" className="py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1.5 rounded-full glass mb-6 border-whatsapp-green/20"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-whatsapp-green">The Process</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black mb-8 leading-[1] tracking-tighter text-gradient"
          >
            Up and Running <br />
            <span className="text-whatsapp-green italic">in Minutes</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Steps List */}
          <div className="space-y-4">
            {STEPS.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={cn(
                  "w-full text-left p-8 rounded-3xl transition-all duration-500 flex items-start gap-6 group relative overflow-hidden",
                  activeStep === index 
                    ? "bg-white/5 border border-white/10" 
                    : "hover:bg-white/[0.02] border border-transparent"
                )}
              >
                {activeStep === index && (
                  <motion.div
                    layoutId="activeStepBg"
                    className="absolute inset-0 bg-whatsapp-green/5 pointer-events-none"
                  />
                )}
                
                <div className={cn(
                  "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500",
                  activeStep === index ? "bg-whatsapp-green text-black scale-110" : "bg-white/5 text-white/40 group-hover:bg-white/10"
                )}>
                  {step.icon}
                </div>
                
                <div className="flex-1 min-h-[80px]">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={cn(
                      "text-xl font-bold transition-colors duration-500",
                      activeStep === index ? "text-white" : "text-white/40 group-hover:text-white/60"
                    )}>
                      {step.title}
                    </h3>
                    <span className={cn(
                      "text-xs font-black transition-colors duration-500",
                      activeStep === index ? "text-whatsapp-green" : "text-white/10"
                    )}>
                      0{step.id}
                    </span>
                  </div>
                  
                  <div className="relative">
                    <AnimatePresence mode="wait">
                      {activeStep === index && (
                        <motion.p
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.3 }}
                          className="text-sm text-white/70 leading-relaxed font-body absolute top-0 left-0 w-full"
                        >
                          {step.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {activeStep === index && (
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-whatsapp-green"
                    layoutId="activeIndicator"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Visual Side */}
          <div className="sticky top-32 h-[500px] lg:h-[600px] rounded-[40px] glass border border-white/10 overflow-hidden group">
            <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.1, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full h-full"
              >
                {STEPS[activeStep].visual}
              </motion.div>
            </AnimatePresence>

            {/* Bottom Progress */}
            <div className="absolute bottom-10 left-10 right-10 h-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                key={activeStep}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                className="h-full bg-whatsapp-green shadow-[0_0_10px_rgba(37,211,102,0.5)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
