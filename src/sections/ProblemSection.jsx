import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Clock, Users, Zap, TrendingDown, LayoutPanelLeft } from 'lucide-react';
import { cn } from '../utils/cn';

const PROBLEMS = [
  {
    icon: <Clock className="text-red-400" />,
    title: "Slow Responses",
    description: "Customers wait for hours to get a reply, leading to missed opportunities and lost revenue.",
    delay: 0.1
  },
  {
    icon: <AlertTriangle className="text-amber-400" />,
    title: "Human Errors",
    description: "Manual handling leads to mistakes in info, pricing, and booking, damaging your brand trust.",
    delay: 0.2
  },
  {
    icon: <Users className="text-blue-400" />,
    title: "Unqualified Leads",
    description: "Sales teams waste time on people who aren't ready to buy or don't fit your ideal profile.",
    delay: 0.3
  },
  {
    icon: <TrendingDown className="text-purple-400" />,
    title: "High Staff Costs",
    description: "Hiring 24/7 support staff is expensive and hard to scale as your business grows.",
    delay: 0.4
  },
  {
    icon: <Zap className="text-whatsapp-green" />,
    title: "Zero Automation",
    description: "Everything is manual. No follow-ups, no lead scoring, no automated appointment booking.",
    delay: 0.5
  },
  {
    icon: <LayoutPanelLeft className="text-orange-400" />,
    title: "No Analytics",
    description: "You have no idea what your customers are asking or where they're dropping off.",
    delay: 0.6
  }
];

export function ProblemSection() {
  return (
    <section id="problem" className="relative py-32 bg-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-red-500/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Marquee */}
      <div className="absolute top-0 left-0 right-0 border-y border-white/5 py-4 md:py-8 bg-black/50 backdrop-blur-sm z-10 overflow-hidden">
        <div className="flex animate-[marquee_15s_linear_infinite] md:animate-[marquee_30s_linear_infinite] whitespace-nowrap">
          {[
            "Automation • AI Replies • Lead Capture • Smart Routing • 24/7 Support",
            "Real-time Qualification • Multilingual • No-code Setup • Official API",
            "WhatsApp Business • Sales Automation • Customer Support AI",
          ].map((text, i) => (
            <span key={i} className="text-2xl md:text-6xl font-black uppercase tracking-tighter mx-6 md:mx-12 text-white/10">
              {text}
            </span>
          ))}
          {[
            "Automation • AI Replies • Lead Capture • Smart Routing • 24/7 Support",
            "Real-time Qualification • Multilingual • No-code Setup • Official API",
            "WhatsApp Business • Sales Automation • Customer Support AI",
          ].map((text, i) => (
            <span key={i + 'copy'} className="text-2xl md:text-6xl font-black uppercase tracking-tighter mx-6 md:mx-12 text-white/10">
              {text}
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1.5 rounded-full glass mb-6 border-red-500/20"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-red-400">The Problem</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black mb-8 leading-[1] tracking-tighter text-gradient"
          >
            Why Your WhatsApp Is <br />
            <span className="text-red-400 italic">Losing You Money</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-white/60 font-body max-w-2xl mx-auto"
          >
            Managing business WhatsApp manually is a nightmare. It's slow, error-prone, and impossible to scale without Vixingo.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEMS.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="glass p-8 rounded-3xl border border-white/5 group hover:border-red-400/20 transition-all duration-500 will-change-opacity"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                {problem.icon || <Clock />}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors tracking-tight">{problem.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed font-body group-hover:text-white/70 transition-colors">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
