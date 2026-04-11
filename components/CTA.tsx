"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#A3FF12]/5 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-10 md:p-16 rounded-[32px] border border-[#A3FF12]/20 relative overflow-hidden flex flex-col lg:flex-row gap-12 items-center"
        >
          {/* subtle glow inside CTA */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-[#A3FF12]/10 to-transparent blur-3xl pointer-events-none"></div>

          <div className="flex-1 relative z-10 text-center lg:text-left text-white max-w-lg mx-auto lg:mx-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Ready to grow your business?
            </h2>
            <p className="text-zinc-400 text-lg mb-8">
              Let's collaborate to build something extraordinary. Fill out the form and our team will get back to you within 24 hours.
            </p>
            <div className="hidden lg:flex items-center gap-4 text-zinc-300">
              <span className="w-12 h-1 bg-[#A3FF12]/50 inline-block rounded"></span>
              <span className="font-medium text-[#A3FF12]">hello@brandcleeks.com</span>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md mx-auto relative z-10 bg-black/40 p-8 rounded-[24px] border border-white/10 backdrop-blur-md">
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Your Name" 
                  className="w-full bg-transparent border-b border-white/20 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#A3FF12] transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Email Address" 
                  className="w-full bg-transparent border-b border-white/20 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#A3FF12] transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  placeholder="Tell us about your project" 
                  className="w-full bg-transparent border-b border-white/20 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#A3FF12] transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <button type="submit" className="mt-4 w-full px-8 py-4 bg-[#A3FF12] text-black font-bold rounded-full hover:bg-[#b4ff3b] transition-colors flex items-center justify-center gap-2 group">
                Send Message
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
