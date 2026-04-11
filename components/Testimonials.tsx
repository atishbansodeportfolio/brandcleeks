"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Brandcleeks completely transformed our digital presence. Their attention to detail and growth-focused approach is unparalleled.",
    author: "Sarah Jenkins",
    role: "CEO, TechFlow",
  },
  {
    quote: "We saw a 150% increase in conversions within three months. The team is incredibly talented and a pleasure to work with.",
    author: "David Chen",
    role: "Founder, Nova Edge",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 relative z-10 w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Client Stories
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass p-10 rounded-[24px] relative"
            >
              <div className="text-6xl text-[#A3FF12]/20 font-serif absolute top-6 left-6 leading-none">"</div>
              <p className="text-lg md:text-xl text-zinc-300 relative z-10 mb-8 pt-4 leading-relaxed">
                {t.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-lg">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">{t.author}</div>
                  <div className="text-zinc-500 text-sm">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
