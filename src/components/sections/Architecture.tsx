"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ArrowUpRight } from "lucide-react";
import { AnimatedSection, SectionHeading } from "@/components/ui/animated-section";

interface LayerInfo {
  num: string;
  label: string;
  component: string;
  color: string;
  status: string;
  description: string;
}

const layers: LayerInfo[] = [
  {
    num: "L7", label: "User Experience", color: "#06b6d4", status: "planned",
    component: "GNOME Extension · Dashboard · Notifications",
    description: "Desktop-native agent interaction through GNOME Shell. Real-time dashboards, notification streams, and accessibility-first design.",
  },
  {
    num: "L6", label: "Planning & Governance", color: "#0891b2", status: "planned",
    component: "Goal Decomposition · Approvals · Delegation",
    description: "High-level agent coordination. Breaks complex goals into governed sub-tasks with human-in-the-loop approval checkpoints.",
  },
  {
    num: "L5", label: "Workflow Engine", color: "#0e7490", status: "planned",
    component: "LangGraph Integration · Recovery · Checkpointing",
    description: "Multi-step orchestration with atomic state transitions. Every step is checkpointed — if anything fails, the workflow unwinds deterministically.",
  },
  {
    num: "L4", label: "Runtime Orchestration", color: "#155e75", status: "planned",
    component: "Agent Lifecycle · Resource Mgmt · Inference",
    description: "Manages agent processes via systemd transient scopes. Handles suspend/resume, resource quotas via cgroups v2, and routes inference to a shared Ollama/vLLM daemon.",
  },
  {
    num: "L3", label: "MCP Gateway", color: "#06b6d4", status: "scaffolded",
    component: "Auth · Authorization · Trust · Audit",
    description: "The enforcement point. Every tool call passes through this UNIX socket proxy. SO_PEERCRED verifies caller identity. Schema validation blocks malformed payloads. Credentials injected from GNOME Keyring at call time.",
  },
  {
    num: "L2", label: "Agent Runtime", color: "#0891b2", status: "verified",
    component: "Podman · Environment Packs · systemd Scopes",
    description: "Chaos-tested execution layer. Rootless Podman containers with SELinux confinement. Environment Packs ship as signed OCI images. Crash recovery validated across 100+ cycles.",
  },
  {
    num: "L1", label: "Fedora Linux", color: "#3b82f6", status: "operational",
    component: "SELinux · systemd · Btrfs · cgroups v2 · GNOME",
    description: "The foundation. AIOS borrows proven infrastructure — never rebuilds what the Linux ecosystem already provides. Process management, isolation, security, storage, and logging are all Fedora-native.",
  },
];

const statusBadge: Record<string, { text: string; className: string }> = {
  operational: { text: "Operational", className: "bg-[#3b82f6]/10 text-[#3b82f6] border-[#3b82f6]/20" },
  verified: { text: "Verified", className: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
  scaffolded: { text: "Building", className: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
  planned: { text: "Planned", className: "bg-[#52525b]/10 text-[#52525b] border-[#52525b]/20" },
};

const systems = [
  { name: "Runtime", purpose: "Agent execution, lifecycle, workflows, recovery" },
  { name: "MCP Gateway", purpose: "Tool access, trust routing, credential injection" },
  { name: "Memory", purpose: "Context persistence across sessions" },
  { name: "Security", purpose: "Governance, SELinux, Polkit, trust enforcement" },
  { name: "Operations", purpose: "CI/CD, packaging, bootc, testing" },
  { name: "GNOME UX", purpose: "Desktop integration, notifications, dashboards" },
];

export function Architecture() {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);

  return (
    <AnimatedSection className="py-32 px-6">
      <SectionHeading
        label="Architecture"
        title="Borrow infrastructure. Build governance."
        description="BuildAIOS is a 7-layer governed agent runtime. It reuses proven Linux technologies and focuses engineering on what doesn't exist yet."
      />

      <div className="max-w-5xl mx-auto">
        {/* Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card border-emerald-500/10"
          >
            <div className="flex items-center gap-2 mb-3">
              <Check className="w-4 h-4 text-emerald-400" />
              <h3 className="text-sm font-mono font-semibold text-emerald-400">BuildAIOS IS</h3>
            </div>
            <p className="text-sm text-[#a1a1aa]">
              A governed agent runtime and cognitive control plane built on top of Fedora Linux.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card border-[#1f1f1f]"
          >
            <div className="flex items-center gap-2 mb-3">
              <X className="w-4 h-4 text-[#52525b]" />
              <h3 className="text-sm font-mono font-semibold text-[#52525b]">BuildAIOS IS NOT</h3>
            </div>
            <p className="text-sm text-[#52525b]">
              Not a Linux distro. Not a systemd replacement. Not a container runtime or cloud platform.
            </p>
          </motion.div>
        </div>

        {/* 7-Layer Interactive Stack */}
        <div className="mb-16">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#52525b] mb-6 text-center">
            Architecture Stack
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-[440px_1fr] gap-6">
            {/* Layer List */}
            <div className="space-y-1.5">
              {layers.map((layer, i) => (
                <motion.div
                  key={layer.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  onMouseEnter={() => setActiveLayer(layer.num)}
                  onMouseLeave={() => setActiveLayer(null)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-all duration-200 border ${
                    activeLayer === layer.num
                      ? "bg-[#0d0d0d] border-[#2a2a2a]"
                      : "border-transparent hover:bg-[#0d0d0d] hover:border-[#1f1f1f]"
                  }`}
                >
                  <span
                    className="text-[10px] font-mono font-bold w-7 h-7 rounded flex items-center justify-center shrink-0"
                    style={{ background: `${layer.color}18`, color: layer.color }}
                  >
                    {layer.num}
                  </span>
                  <span className="text-sm font-medium flex-1">{layer.label}</span>
                  <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${statusBadge[layer.status].className}`}>
                    {statusBadge[layer.status].text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Description Panel */}
            <div className="hidden lg:block">
              <AnimatePresence mode="wait">
                {activeLayer ? (
                  <motion.div
                    key={activeLayer}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="card h-full min-h-[280px] flex flex-col justify-center"
                  >
                    {(() => {
                      const layer = layers.find((l) => l.num === activeLayer)!;
                      return (
                        <>
                          <div className="flex items-center gap-3 mb-4">
                            <span
                              className="text-xs font-mono font-bold w-8 h-8 rounded flex items-center justify-center"
                              style={{ background: `${layer.color}18`, color: layer.color }}
                            >
                              {layer.num}
                            </span>
                            <div>
                              <h4 className="text-base font-semibold">{layer.label}</h4>
                              <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${statusBadge[layer.status].className}`}>
                                {statusBadge[layer.status].text}
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-[#a1a1aa] leading-relaxed mb-4">
                            {layer.description}
                          </p>
                          <p className="text-[11px] font-mono text-[#52525b]">
                            {layer.component}
                          </p>
                        </>
                      );
                    })()}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="card h-full min-h-[280px] flex items-center justify-center border-dashed border-[#1f1f1f]"
                  >
                    <p className="text-sm text-[#52525b] text-center">
                      Hover over a layer<br />to see details
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* L3/L4 Insight */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="card border-[#06b6d4]/10 mb-16"
        >
          <p className="text-sm text-[#a1a1aa]">
            <span className="text-[#06b6d4] font-semibold">L3/L4 Separation:</span>{" "}
            The clean isolation of the MCP Gateway from Runtime Orchestration is a core strategic
            decision. A compromised agent cannot bypass the gateway. Trust decisions remain
            independent of execution logic.
          </p>
        </motion.div>

        {/* Six Systems */}
        <div className="mb-12">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#52525b] mb-6 text-center">
            Six Critical Systems
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {systems.map((sys, i) => (
              <motion.div
                key={sys.name}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="card !p-4"
              >
                <h4 className="text-sm font-semibold mb-1">{sys.name}</h4>
                <p className="text-xs text-[#52525b]">{sys.purpose}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Levels */}
        <div className="mb-16">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#52525b] mb-4 text-center">
            Trust Levels
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {[
              { level: "TRUST_0", desc: "Silent, read-only", ex: "Read file" },
              { level: "TRUST_1", desc: "Notify + undo", ex: "Create file" },
              { level: "TRUST_2", desc: "Confirm/Deny", ex: "Modify config" },
              { level: "TRUST_3", desc: "Polkit modal", ex: "Install pkg" },
              { level: "TRUST_4", desc: "Admin approval", ex: "System change" },
            ].map((t, i) => (
              <motion.div
                key={t.level}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="card !p-3 text-center"
              >
                <span className="text-[10px] font-mono font-bold text-[#06b6d4]">{t.level}</span>
                <p className="text-xs font-medium mt-0.5">{t.desc}</p>
                <p className="text-[10px] text-[#52525b] mt-0.5">{t.ex}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://hackmd.io/@P-KZQBsRQFq7YYv5GNs7dw/SyuRTgdWze"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg glass text-sm font-medium text-[#a1a1aa] hover:text-[#fafafa] hover:border-[#2a2a2a] transition-all duration-300"
          >
            Read Full Architecture Document
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
