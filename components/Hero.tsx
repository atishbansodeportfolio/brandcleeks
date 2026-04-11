"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-40 md:pt-48 pb-10 overflow-hidden">
      {/* Subtle Green/Blue Radial Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#A3FF12]/10 via-[#00f0ff]/5 to-transparent blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full border border-white/10 text-sm font-medium text-[#A3FF12] mb-6 glass">
              Remote First Digital Agency
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-tight"
          >
            We Build Brands <br className="hidden md:block" />
            <span className="text-glow text-white">That Stand Out</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto"
          >
            We combine strategic thinking with creative excellence to deliver digital marketing growth that drives tangible results for your business.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 md:mb-32"
          >
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-[#A3FF12] text-black font-semibold rounded-full hover:bg-[#b4ff3b] transition-all flex items-center justify-center gap-2 group">
              Start Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#work" className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-all text-white font-medium flex items-center justify-center">
              View Work
            </a>
          </motion.div>

          {/* Prominent Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-t-[32px] md:rounded-t-[48px] overflow-hidden border-t border-x border-white/10 glass shadow-[0_-20px_60px_-15px_rgba(163,255,18,0.1)]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none"></div>
            <Image
              src="/hero_dashboard.png"
              alt="Brandcleeks digital marketing dashboard preview"
              fill
              className="object-cover object-top opacity-90"
              priority
            />
          </motion.div>
        </div>
      </div>
      
      {/* Floating abstract shapes */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ 
          opacity: { duration: 1, delay: 0.2 },
          scale: { duration: 1, delay: 0.2 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-1/4 left-5 md:left-10 lg:left-20 w-32 h-32 rounded-full border border-white/5 bg-gradient-to-tr from-[#A3FF12]/5 to-transparent backdrop-blur-3xl hidden md:block z-0 pointer-events-none"
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1, y: [0, 30, 0], rotate: [0, -10, 0] }}
        transition={{ 
          opacity: { duration: 1, delay: 0.3 },
          scale: { duration: 1, delay: 0.3 },
          y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-1/3 right-5 md:-right-10 lg:right-10 w-48 h-48 md:w-64 md:h-64 hidden md:block pointer-events-none z-0"
      >
        <Image 
          src="/hero.png" 
          alt="Abstract decorative 3D sphere" 
          fill 
          className="object-contain" 
          priority
        />
      </motion.div>
    </section>
  );
}
