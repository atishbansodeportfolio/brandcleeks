"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discussion",
    desc: "We start by understanding your goals, audience, and challenges.",
  },
  {
    num: "02",
    title: "Ideas & Concepts",
    desc: "Brainstorming and developing a strategic roadmap for success.",
  },
  {
    num: "03",
    title: "Design",
    desc: "Crafting visually stunning and functional concepts.",
  },
  {
    num: "04",
    title: "Development",
    desc: "Bringing designs to life with robust, scalable technology.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-[#0A0A0A] relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Our Process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 max-w-2xl mx-auto text-lg"
          >
            A streamlined approach from ideation to delivery.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start relative max-w-6xl mx-auto">
          {/* Horizontal Line for Desktop */}
          <div className="hidden md:block absolute top-[28px] left-0 right-0 h-[1px] bg-white/10 z-0"></div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left mb-12 md:mb-0 w-full md:w-1/4 px-4"
            >
              <div className="w-14 h-14 rounded-full bg-[#050505] border border-white/20 flex items-center justify-center font-mono font-bold text-[#A3FF12] mb-6 shadow-[0_0_15px_rgba(163,255,18,0.1)]">
                {step.num}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-[200px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
