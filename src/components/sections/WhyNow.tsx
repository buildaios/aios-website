"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";

export function WhyNow() {
  return (
    <AnimatedSection className="py-56 px-6 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#06b6d4]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-mono text-[#06b6d4] uppercase tracking-widest mb-6 block">
            Why now?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            AI is outgrowing the browser tab.
          </h2>
          <p className="text-lg text-[#a1a1aa] leading-relaxed max-w-2xl mx-auto">
            Today's AI assistants operate as isolated applications — disconnected from files,
            processes, and hardware. They can't safely touch your system, and your system
            can't meaningfully govern them. BuildAIOS explores a future where AI becomes a
            secure, governed, and recoverable part of the operating system itself.
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
