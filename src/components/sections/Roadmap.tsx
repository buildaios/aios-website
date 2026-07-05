"use client";

import { motion } from "framer-motion";
import { Check, Circle, Clock } from "lucide-react";
import { AnimatedSection, SectionHeading } from "@/components/ui/animated-section";

const phases = [
  {
    phase: "MCP Gateway",
    status: "active",
    date: "Weeks 1–2",
    description: "UNIX socket proxy. SO_PEERCRED verification. Schema validation engine. Core proxy scaffolded.",
  },
  {
    phase: "systemd + Podman",
    status: "upcoming",
    date: "Weeks 2–3",
    description: "systemd transient user slices. Rootless Podman containers. Dynamic SELinux profiles via udica.",
  },
  {
    phase: "Keyring + Polkit",
    status: "upcoming",
    date: "Weeks 3–4",
    description: "GNOME Keyring credential injection via libsecret. Polkit desktop-native authorization for TRUST_3+ actions.",
  },
  {
    phase: "OCI Packaging",
    status: "upcoming",
    date: "Weeks 4–6",
    description: "Environment Packs as signed OCI images. Fedora bootc image compile recipes. Atomic host OS options.",
  },
  {
    phase: "V2 — Scale",
    status: "upcoming",
    date: "2027",
    description: "NATS messaging. Multi-node support. SPIFFE identity. Advanced scheduling. Cross-device coordination.",
  },
  {
    phase: "V3 — Federation",
    status: "upcoming",
    date: "TBD",
    description: "Agent federation. Enterprise governance. Distributed orchestration. Public environment registry.",
  },
];

const statusIcons: Record<string, React.ReactNode> = {
  active: <Clock className="w-4 h-4 text-[#06b6d4]" />,
  upcoming: <Circle className="w-4 h-4 text-[#52525b]" />,
  complete: <Check className="w-4 h-4 text-[#06b6d4]" />,
};

export function Roadmap() {
  return (
    <AnimatedSection className="py-32 px-6" id="roadmap">
      <SectionHeading
        label="Roadmap"
        title="V1 Foundation first."
        description="Current focus: complete the six Phase 1 milestones. V2 and V3 are defined but not yet in scope."
      />
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-[#1f1f1f]" />

          <div className="space-y-8">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative pl-14"
              >
                <div className="absolute left-[11px] top-1.5">
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      phase.status === "active"
                        ? "border-[#06b6d4] bg-[#06b6d4]/10"
                        : "border-[#2a2a2a] bg-[#080808]"
                    }`}
                  >
                    {statusIcons[phase.status]}
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline gap-3 mb-1">
                    <h3
                      className={`text-lg font-semibold ${
                        phase.status === "active"
                          ? "text-[#06b6d4]"
                          : "text-[#fafafa]"
                      }`}
                    >
                      {phase.phase}
                    </h3>
                    <span className="text-xs font-mono text-[#52525b]">
                      {phase.date}
                    </span>
                    {phase.status === "active" && (
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#06b6d4]/10 text-[#06b6d4]">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[#a1a1aa]">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
