import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Star, ArrowRight, Instagram, Linkedin, Twitter, MessageSquare } from 'lucide-react';
import { cn } from '../utils/cn';

const COMPARISON = [
  { feature: "Available 24/7", manual: false, vixingo: true },
  { feature: "Response Time", manual: "5-30 mins", vixingo: "< 5 secs" },
  { feature: "Lead Qualification", manual: "Manual / Biased", vixingo: "AI Scoring / Consistent" },
  { feature: "Languages", manual: "1-2 per staff", vixingo: "50+ Fluently" },
  { feature: "Scalability", manual: "Requires hiring", vixingo: "Instant / Infinite" },
  { feature: "Booking Flow", manual: "Back & Forth", vixingo: "Automated / In-Chat" },
  { feature: "Monthly Cost", manual: "$$$$ High", vixingo: "$ Fixed / Low" }
];

const TESTIMONIALS = [
  {
    name: "Sneha Nair",
    role: "E-commerce Founder",
    quote: "Vixingo has completely transformed our customer service. We handle 500+ daily inquiries with just 1 person now.",
    avatar: "SN",
    delay: 0.1
  },
  {
    name: "Carlos Gomez",
    role: "Real Estate Broker",
    quote: "The AI agent qualifies leads better than my previous team. It only books meetings with people ready to buy.",
    avatar: "CG",
    delay: 0.2
  },
  {
    name: "Ahmed Khan",
    role: "SaaS Marketing Director",
    quote: "Integrating Vixingo was a game changer for our global support. 50+ languages and 24/7 availability.",
    avatar: "AK",
    delay: 0.3
  }
];

export function RemainingSections() {
  return (
    <>
      {/* Comparison Table */}
      <section id="compare" className="py-32 bg-black overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-whatsapp-green/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1.5 rounded-full glass mb-6 border-whatsapp-green/20"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-whatsapp-green">The Comparison</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-black mb-8 leading-[1] tracking-tighter text-gradient"
            >
              Manual Team vs. <br />
              <span className="text-whatsapp-green italic">Vixingo AI</span>
            </motion.h2>
          </div>

          <div className="max-w-5xl mx-auto glass rounded-[40px] border border-white/5 overflow-hidden">
            <div className="grid grid-cols-3 p-8 md:p-12 border-b border-white/5 bg-white/[0.02]">
              <div className="text-xs md:text-sm font-black uppercase tracking-widest text-white/30">Feature</div>
              <div className="text-xs md:text-sm font-black uppercase tracking-widest text-white/30">Manual Support</div>
              <div className="text-xs md:text-sm font-black uppercase tracking-widest text-whatsapp-green">Vixingo Agent</div>
            </div>
            
            <div className="divide-y divide-white/5">
              {COMPARISON.map((row, i) => (
                <div key={i} className="grid grid-cols-3 p-8 md:p-12 items-center hover:bg-white/[0.02] transition-colors group">
                  <div className="text-sm md:text-lg font-bold text-white group-hover:translate-x-1 transition-transform">{row.feature}</div>
                  <div className="text-sm md:text-lg text-white/60 flex items-center gap-2">
                    {typeof row.manual === 'boolean' ? (
                      row.manual ? <Check className="text-whatsapp-green" size={20} /> : <X className="text-red-400" size={20} />
                    ) : row.manual}
                  </div>
                  <div className="text-sm md:text-lg text-whatsapp-green font-black flex items-center gap-2">
                    {typeof row.vixingo === 'boolean' ? (
                      row.vixingo ? <Check className="text-whatsapp-green" size={20} /> : <X className="text-red-400" size={20} />
                    ) : row.vixingo}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 bg-black relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1.5 rounded-full glass mb-6 border-whatsapp-green/20"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-whatsapp-green">The Proof</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-black mb-8 leading-[1] tracking-tighter text-gradient"
            >
              Trusted by <br />
              <span className="text-whatsapp-green italic">Scaling Businesses</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: t.delay, duration: 0.5 }}
                className="glass p-10 rounded-[40px] border border-white/5 relative group hover:border-whatsapp-green/20 transition-all duration-500"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="#25D366" stroke="none" />)}
                </div>
                <p className="text-lg text-white/60 mb-8 font-body leading-relaxed italic group-hover:text-white transition-colors duration-500">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-whatsapp-green/10 flex items-center justify-center text-whatsapp-green font-black shadow-xl group-hover:scale-110 transition-transform duration-500">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{t.name}</h4>
                    <p className="text-xs text-white/30 uppercase tracking-widest font-bold">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto glass p-12 md:p-24 rounded-[60px] border border-whatsapp-green/10 text-center relative overflow-hidden group">
            {/* Background animated gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-whatsapp-green/5 via-transparent to-whatsapp-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[conic-gradient(from_0deg,#25D36600,#25D36620,#25D36600)] animate-[spin_10s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
            
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter text-gradient"
              >
                Start Automating <br />
                <span className="text-whatsapp-green italic">Today</span>
              </motion.h2>
              
              <p className="text-xl text-white/40 mb-12 max-w-2xl mx-auto font-body leading-relaxed">
                Connect your WhatsApp in 5 minutes. No credit card required. 
                Experience the future of business messaging with Vixingo.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="px-10 py-5 rounded-full bg-whatsapp-green text-black font-black text-lg flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:shadow-[0_0_50px_rgba(37,211,102,0.5)] group">
                  Connect WhatsApp Now
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-10 py-5 rounded-full glass text-white font-black text-lg flex items-center justify-center gap-3 hover:bg-white/5 transition-all">
                  Book Strategy Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-black border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 rounded-xl bg-whatsapp-green flex items-center justify-center text-black font-black text-xl">V</div>
                <span className="text-2xl font-black tracking-tighter text-white">Vixingo</span>
              </div>
              <p className="text-white/40 max-w-sm mb-8 font-body leading-relaxed">
                The world's most advanced WhatsApp AI Agent platform. 
                Built for businesses that care about customer experience and growth.
              </p>
              <div className="flex gap-4">
                {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-white/40 hover:text-whatsapp-green hover:border-whatsapp-green/20 transition-all">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-black mb-8 uppercase tracking-widest text-xs">Product</h4>
              <ul className="space-y-4">
                {['Features', 'Integrations', 'Pricing', 'API Docs'].map((item) => (
                  <li key={item}><a href="#" className="text-white/40 hover:text-white transition-colors font-body">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black mb-8 uppercase tracking-widest text-xs">Company</h4>
              <ul className="space-y-4">
                {['About', 'Blog', 'Careers', 'Privacy Policy'].map((item) => (
                  <li key={item}><a href="#" className="text-white/40 hover:text-white transition-colors font-body">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-6">
            <p className="text-xs text-white/20 font-body">© 2026 Vixingo. All rights reserved.</p>
            <p className="text-[10px] text-white/10 font-body uppercase tracking-[0.2em]">WhatsApp is a trademark of Meta Platforms, Inc.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
