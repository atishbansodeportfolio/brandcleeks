"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Lumina Fintech",
    category: "Branding & Web",
    image: "/fintech.png",
  },
  {
    title: "Aura E-Commerce",
    category: "UI/UX Design",
    image: "/ecommerce.png",
  },
  {
    title: "Verve Ecosystem",
    category: "Full Stack Dev",
    image: "/verve.png",
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            >
              Selected Work
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 max-w-xl text-lg"
            >
              A glimpse into the digital experiences we've crafted.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a href="#" className="inline-flex items-center gap-2 text-[#A3FF12] hover:text-white transition-colors uppercase tracking-wider text-sm font-semibold">
              View All Projects <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[250px] md:h-[400px] rounded-[24px] overflow-hidden mb-6 bg-[#111] border border-white/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute inset-0 flex items-center justify-center translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-16 h-16 rounded-full bg-[#A3FF12] text-black flex items-center justify-center">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 group-hover:text-[#A3FF12] transition-colors">{project.title}</h3>
                <p className="text-zinc-500">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
