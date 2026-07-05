"use client";

import { motion } from "framer-motion";
import { Check, Wrench, Calendar } from "lucide-react";
import { AnimatedSection, SectionHeading } from "@/components/ui/animated-section";

const milestones = [
  { label: "Architecture", status: "done", detail: "Freeze v2.0 — June 2026" },
  { label: "Documentation", status: "done", detail: "15-section HackMD spec" },
  { label: "Runtime Engine", status: "done", detail: "Chaos-tested, 100+ recovery cycles" },
  { label: "MCP Gateway", status: "building", detail: "UNIX socket proxy — scaffolded" },
  { label: "systemd Integration", status: "planned", detail: "Transient scopes + Podman" },
  { label: "Keyring + Polkit", status: "planned", detail: "libsecret + desktop prompts" },
  { label: "OCI Environment Packs", status: "planned", detail: "Signed container images" },
  { label: "GNOME Desktop UX", status: "planned", detail: "Shell extension + dashboard" },
];

const icons: Record<string, React.ReactNode> = {
  done: <Check className="w-4 h-4" />,
  building: <Wrench className="w-4 h-4" />,
  planned: <Calendar className="w-4 h-4" />,
};

const colors: Record<string, string> = {
  done: "border-emerald-500/30 bg-emerald-500/5 text-emerald-400",
  building: "border-amber-500/30 bg-amber-500/5 text-amber-400",
  planned: "border-[#2a2a2a] bg-transparent text-[#52525b]",
};

export function DevStatus() {
  return (
    <AnimatedSection className="py-32 px-6 bg-[#0d0d0d]">
      <SectionHeading
        label="Development Status"
        title="Foundation laid. Building up."
        description="The runtime engine is complete and chaos-tested. The MCP Gateway is being built. Everything else builds on top."
      />
      <div className="max-w-2xl mx-auto">
        <div className="space-y-2">
          {milestones.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg border ${colors[m.status]}`}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#0d0d0d] border border-[#1f1f1f]">
                {icons[m.status]}
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-sm font-medium">{m.label}</span>
                <span className="text-[11px] text-[#52525b] block">{m.detail}</span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider opacity-60">
                {m.status === "done" ? "✓" : m.status === "building" ? "🚧" : "📅"}
              </span>
            </motion.div>
          ))}
        </div>
        <p className="text-xs text-[#52525b] mt-6 text-center font-mono">
          Per Architecture Freeze v2.0 — June 21, 2026
        </p>
      </div>
    </AnimatedSection>
  );
}
