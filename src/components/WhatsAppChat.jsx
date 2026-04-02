import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCheck } from 'lucide-react';

const MESSAGES = [
  { id: 1, type: 'in', text: "Hi, I'm interested in your real estate project. Is it still available?", delay: 1000 },
  { id: 2, type: 'out', text: "Hello! Yes, the project is available. Our AI Agent can help you with details. Would you like to see the brochure?", delay: 2000 },
  { id: 3, type: 'in', text: "Yes, please! Also, what's the starting price?", delay: 1500 },
  { id: 4, type: 'out', text: "The starting price is $250k. I've sent the brochure to your email. Would you like to book a site visit for tomorrow?", delay: 2500 },
  { id: 5, type: 'in', text: "That sounds great! Tomorrow at 4 PM?", delay: 1200 },
  { id: 6, type: 'out', text: "Perfect! Your visit is scheduled for tomorrow at 4 PM. I'll send you a reminder 1 hour before.", delay: 2000 },
];

export function WhatsAppChat() {
  const [messages, setMessages] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < MESSAGES.length) {
      const timer = setTimeout(() => {
        setMessages(prev => [...prev, MESSAGES[index]]);
        setIndex(prev => prev + 1);
      }, MESSAGES[index].delay);
      return () => clearTimeout(timer);
    } else {
      const resetTimer = setTimeout(() => {
        setMessages([]);
        setIndex(0);
      }, 5000);
      return () => clearTimeout(resetTimer);
    }
  }, [index]);

  return (
    <div className="flex flex-col h-full bg-[#0a0a0a] rounded-[24px] overflow-hidden border border-white/5 shadow-2xl">
      {/* Header */}
      <div className="bg-[#128C7E] p-4 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold text-white">V</div>
        <div>
          <h4 className="text-white text-sm font-bold">Vixingo AI</h4>
          <p className="text-white/70 text-[10px]">Online</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-3 overflow-y-auto scrollbar-hide flex flex-col">
        <AnimatePresence>
          {messages.map((m) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`max-w-[85%] p-2.5 rounded-xl text-[11px] relative ${
                m.type === 'in' 
                  ? 'bg-[#1f1f1f] text-white self-start rounded-tl-none' 
                  : 'bg-[#056162] text-white self-end rounded-tr-none'
              }`}
            >
              {m.text}
              <div className="flex justify-end items-center gap-1 mt-1">
                <span className="text-[8px] opacity-50">
                  {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
                {m.type === 'out' && <CheckCheck size={10} className="text-[#34b7f1]" />}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Input */}
      <div className="p-3 bg-[#1f1f1f] flex items-center gap-2">
        <div className="flex-1 h-8 bg-[#2a2a2a] rounded-full px-4 flex items-center text-[10px] text-white/40">
          Type a message
        </div>
        <div className="w-8 h-8 rounded-full bg-[#128C7E] flex items-center justify-center text-white">
          <Send size={14} />
        </div>
      </div>
    </div>
  );
}
