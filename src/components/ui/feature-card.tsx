"use client";

import { motion } from "framer-motion";

interface CardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({ icon: Icon, title, description, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="card group"
    >
      <div className="w-12 h-12 rounded-lg bg-[#06b6d4]/10 flex items-center justify-center mb-4 group-hover:bg-[#06b6d4]/15 transition-colors">
        <Icon className="w-6 h-6 text-[#06b6d4]" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-[#a1a1aa] leading-relaxed">{description}</p>
    </motion.div>
  );
}
