"use client";

import { motion } from "framer-motion";
import { AnimatedSection, SectionHeading } from "@/components/ui/animated-section";

const technologies = [
  { name: "Fedora Linux", description: "Host operating system" },
  { name: "SELinux", description: "Mandatory access control" },
  { name: "Podman", description: "Rootless containers" },
  { name: "systemd", description: "Service manager & scheduler" },
  { name: "Ollama", description: "Local LLM inference" },
  { name: "vLLM", description: "High-throughput serving" },
  { name: "GNOME", description: "Desktop environment" },
  { name: "Wayland", description: "Display protocol" },
  { name: "LangGraph", description: "Agent orchestration" },
  { name: "SQLite", description: "Memory & state backend" },
  { name: "Redis", description: "IPC & event bus" },
  { name: "OCI Containers", description: "Environment packaging" },
];

export function Technology() {
  return (
    <AnimatedSection className="py-32 px-6 bg-[#0d0d0d]">
      <SectionHeading
        label="Technology"
        title="Built on proven foundations."
        description="BuildAIOS doesn't reinvent infrastructure. It integrates deeply with the Linux ecosystem."
      />
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="card !px-4 !py-3 text-center"
            >
              <p className="text-sm font-mono font-medium">{tech.name}</p>
              <p className="text-[11px] text-[#52525b] mt-0.5">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
