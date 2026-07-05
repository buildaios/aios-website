"use client";

import { motion } from "framer-motion";

interface ProgressItem {
  label: string;
  status: "complete" | "in-progress" | "pending";
}

interface ProgressBarProps {
  items: ProgressItem[];
}

const statusConfig = {
  complete: { width: "100%", color: "bg-[#06b6d4]", label: "Complete" },
  "in-progress": {
    width: "65%",
    color: "bg-gradient-to-r from-[#06b6d4] to-transparent animate-pulse",
    label: "In Progress",
  },
  pending: {
    width: "0%",
    color: "bg-transparent",
    label: "Pending",
  },
};

export function ProgressBars({ items }: ProgressBarProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="card"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium">{item.label}</span>
            <span className="text-xs text-[#52525b] font-mono">
              {statusConfig[item.status].label}
            </span>
          </div>
          <div className="h-1.5 bg-[#1f1f1f] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: statusConfig[item.status].width }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: "easeOut" }}
              className={`h-full rounded-full ${statusConfig[item.status].color}`}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
