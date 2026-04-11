"use client";

import { motion } from "framer-motion";
import { Palette, Share2, Layers, Megaphone } from "lucide-react";

const services = [
  {
    title: "Branding",
    description: "Developing unique brand identities that resonate with your target audience and stand the test of time.",
    icon: Palette,
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive, engaging, and beautiful user interfaces that provide exceptional digital experiences.",
    icon: Layers,
  },
  {
    title: "Web Development",
    description: "Building fast, scalable, and responsive web applications using cutting-edge technologies.",
    icon: Share2,
  },
  {
    title: "Digital Marketing",
    description: "Data-driven marketing strategies to increase visibility, engagement, and conversion rates.",
    icon: Megaphone,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Capabilities
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-zinc-400 max-w-2xl mx-auto text-lg"
          >
            Comprehensive digital solutions designed to elevate your brand.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 md:p-10 rounded-[24px] hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#A3FF12]/20 group-hover:border-[#A3FF12]/30 transition-colors">
                <service.icon className="w-6 h-6 text-white group-hover:text-[#A3FF12] transition-colors" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
