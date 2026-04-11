"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#A3FF12]/5 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-12 md:p-20 rounded-[32px] border border-[#A3FF12]/20 relative overflow-hidden"
        >
          {/* subtle glow inside CTA */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-[#A3FF12]/10 to-transparent blur-3xl pointer-events-none"></div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 relative z-10">
            Ready to grow your<br />business?
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto relative z-10">
            Let's collaborate to build something extraordinary. Get in touch to discuss your next big idea.
          </p>

          <a href="mailto:hello@brandcleeks.com" className="inline-flex items-center gap-3 px-8 py-4 bg-[#A3FF12] text-black font-bold rounded-full hover:bg-[#b4ff3b] hover:scale-105 transition-all text-lg group relative z-10 cursor-pointer">
            Start Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
