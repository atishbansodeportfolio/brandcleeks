"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="glass rounded-full px-6 py-3 flex items-center justify-between">
          <a href="#" className="font-bold text-xl tracking-tight flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#A3FF12] inline-block animate-pulse"></span>
            Brandcleeks
          </a>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#services" className="hover:text-[#A3FF12] transition-colors">Services</a>
            <a href="#process" className="hover:text-[#A3FF12] transition-colors">Process</a>
            <a href="#work" className="hover:text-[#A3FF12] transition-colors">Work</a>
            <a href="#about" className="hover:text-[#A3FF12] transition-colors">About</a>
          </div>

          <a href="#contact" className="hidden md:inline-flex bg-[#A3FF12] text-black font-semibold px-6 py-2 rounded-full hover:bg-[#b4ff3b] transition-colors">
            Let's Talk
          </a>

          <button className="md:hidden text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
