"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "50+", label: "Clients" },
  { value: "120+", label: "Projects" },
  { value: "4+", label: "Years" },
  { value: "98%", label: "Satisfaction" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#080808] border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">
          
          <div className="flex-1 w-full relative">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight"
            >
              We are an agency <br className="hidden md:block" />
              driven by <span className="text-[#A3FF12]">results</span>.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-lg mb-8 max-w-lg leading-relaxed"
            >
              Brandcleeks is a premium digital marketing agency built for modern startups and forward-thinking brands. We care deeply about aesthetics, conversion, and sustainable growth.
            </motion.p>
            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              href="#contact"
              className="inline-flex items-center gap-2 border-b border-[#A3FF12] text-[#A3FF12] pb-1 hover:text-white hover:border-white transition-colors"
            >
              Read our full story
            </motion.a>
          </div>

          <div className="flex-1 w-full grid grid-cols-2 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                className="glass p-8 rounded-[24px] text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-zinc-500 font-medium uppercase tracking-wider text-sm">{metric.label}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
