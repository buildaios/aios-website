"use client";

import { motion } from "framer-motion";
import { AnimatedSection, SectionHeading } from "@/components/ui/animated-section";

const problems = [
  { label: "No Security Boundaries", desc: "No OS-level containment for agent actions." },
  { label: "No Trust Enforcement", desc: "No graduated permission model. Agents are either all-powerful or useless." },
  { label: "No Recoverability", desc: "No crash-safe workflow persistence. A crash means starting over." },
];

const goals = [
  { label: "Secure Interfaces", desc: "Every tool call goes through a governed, auditable gateway." },
  { label: "Strong Boundaries", desc: "SELinux domains, rootless Podman containers, Polkit authorization." },
  { label: "User Approval", desc: "Transparent consent mechanisms at every trust boundary." },
  { label: "Crash-Safe Execution", desc: "Atomic checkpointing. If a step fails, the workflow unwinds cleanly." },
];

export function Mission() {
  return (
    <AnimatedSection className="py-56 px-6">
      <SectionHeading
        label="Mission"
        title="Agents should be part of the OS."
        description="Modern AI assistants are powerful but fundamentally disconnected from the operating system. BuildAIOS explores how Fedora Linux can become a platform for governed autonomy."
      />

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* The Problem */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card border-[#ef4444]/10"
          >
            <h3 className="text-sm font-mono text-[#ef4444] mb-4 uppercase tracking-wider">
              The Problem
            </h3>
            <div className="space-y-4">
              {problems.map((p) => (
                <div key={p.label}>
                  <p className="text-sm font-semibold text-[#fafafa]">{p.label}</p>
                  <p className="text-xs text-[#a1a1aa] mt-0.5">{p.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#52525b] mt-4 pt-4 border-t border-[#1f1f1f]">
              As a result, AI agents remain isolated applications rather than trusted computing entities.
            </p>
          </motion.div>

          {/* The Opportunity */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card border-[#06b6d4]/10"
          >
            <h3 className="text-sm font-mono text-[#06b6d4] mb-4 uppercase tracking-wider">
              The Opportunity
            </h3>
            <div className="space-y-4">
              {goals.map((g) => (
                <div key={g.label}>
                  <p className="text-sm font-semibold text-[#fafafa]">{g.label}</p>
                  <p className="text-xs text-[#a1a1aa] mt-0.5">{g.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#52525b] mt-4 pt-4 border-t border-[#1f1f1f]">
              This is not a replacement for Fedora — it is an extension that coordinates agents,
              workflows, tools, trust, recovery, and human approvals.
            </p>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
