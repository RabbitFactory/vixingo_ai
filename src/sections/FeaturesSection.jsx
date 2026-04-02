import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MessageSquare, Users, Globe, BarChart3, Calendar, ShieldCheck, Mail, Zap } from 'lucide-react';
import { cn } from '../utils/cn';

const FEATURES = [
  {
    icon: <MessageSquare className="text-whatsapp-green" />,
    title: "AI Auto-Reply",
    description: "Instant responses to common questions, product inquiries, and support requests."
  },
  {
    icon: <Users className="text-blue-400" />,
    title: "Lead Qualification",
    description: "Automatically filter and score leads based on their responses and interest levels."
  },
  {
    icon: <Globe className="text-purple-400" />,
    title: "Multilingual Support",
    description: "Our AI speaks 50+ languages fluently, catering to your global customer base."
  },
  {
    icon: <Calendar className="text-amber-400" />,
    title: "Auto-Booking",
    description: "Seamlessly integrate with Google Calendar or Calendly to book appointments in-chat."
  },
  {
    icon: <BarChart3 className="text-red-400" />,
    title: "Real-time Analytics",
    description: "Deep insights into conversation volumes, response times, and conversion funnels."
  },
  {
    icon: <ShieldCheck className="text-emerald-400" />,
    title: "Official Meta API",
    description: "100% compliant with WhatsApp's policies. Zero risk of account bans."
  },
  {
    icon: <Mail className="text-indigo-400" />,
    title: "Email Follow-ups",
    description: "Trigger automated email sequences based on WhatsApp chat outcomes."
  },
  {
    icon: <Zap className="text-yellow-400" />,
    title: "Smart Escalation",
    description: "Intelligently hand over complex queries to your human team when needed."
  }
];

function FeatureCard({ feature, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative h-96 w-full rounded-3xl bg-white/5 border border-white/5 p-8 group overflow-hidden"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 flex flex-col items-center justify-center rounded-3xl bg-white/5 shadow-2xl backdrop-blur-sm border border-white/10 p-4"
      >
        <div 
          style={{ transform: "translateZ(50px)" }}
          className="w-16 h-16 rounded-2xl bg-black/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl flex-shrink-0"
        >
          {React.cloneElement(feature.icon, { size: 32 })}
        </div>
        <h3 
          style={{ transform: "translateZ(50px)" }}
          className="text-2xl font-black mb-4 text-center tracking-tighter"
        >
          {feature.title}
        </h3>
        <p 
          style={{ transform: "translateZ(50px)" }}
          className="text-sm text-white/50 text-center font-body leading-relaxed max-w-[200px] group-hover:text-white/80 transition-colors"
        >
          {feature.description}
        </p>
      </div>
      
      {/* Background glow */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-whatsapp-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1.5 rounded-full glass mb-6 border-whatsapp-green/20"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-whatsapp-green">The Capabilities</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black mb-8 leading-[1] tracking-tighter text-gradient"
          >
            Intelligence at <br />
            <span className="text-whatsapp-green italic">Every Level</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-[2000px]">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
