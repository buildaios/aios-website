"use client";

import {
  Shield,
  Lock,
  RotateCcw,
  Box,
  Share2,
  Fingerprint,
} from "lucide-react";
import { AnimatedSection, SectionHeading } from "@/components/ui/animated-section";
import { FeatureCard } from "@/components/ui/feature-card";

const features = [
  {
    icon: Shield,
    title: "Governed Agents",
    description:
      "Every agent action is mediated through a central gateway that validates permissions, checks trust levels, and enforces policy before execution reaches the kernel.",
  },
  {
    icon: Lock,
    title: "Trust Levels",
    description:
      "Five-tier trust architecture (TRUST_0 to TRUST_4) maps to custom SELinux domains. Each level defines what an agent can access, modify, or execute.",
  },
  {
    icon: RotateCcw,
    title: "Recovery Engine",
    description:
      "Atomic state checkpointing with compensation transaction cascades. If a step fails, the workflow unwinds deterministically — no partial state, no corruption.",
  },
  {
    icon: Box,
    title: "Environment Packs",
    description:
      "Agent environments ship as signed OCI images with SELinux profiles and cgroups v2 quotas. Stack multiple environments simultaneously for complex workflows.",
  },
  {
    icon: Share2,
    title: "MCP Gateway",
    description:
      "Async UNIX domain socket server that intercepts JSON-RPC tool calls, extracts peer credentials via SO_PEERCRED, and dynamically injects secrets from GNOME Keyring.",
  },
  {
    icon: Fingerprint,
    title: "Security by Design",
    description:
      "Every component is designed for the Linux security stack: SELinux, Polkit, cgroups v2, and user namespaces. Security is not a feature — it's the foundation.",
  },
];

export function WhyAIOS() {
  return (
    <AnimatedSection className="py-32 px-6 bg-[#0d0d0d]">
      <SectionHeading
        label="Why BuildAIOS"
        title="Built different."
        description="BuildAIOS is not a wrapper around an LLM. It is a governed agent runtime and cognitive control plane running above Fedora Linux."
      />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, i) => (
          <FeatureCard key={feature.title} {...feature} delay={i * 0.1} />
        ))}
      </div>
    </AnimatedSection>
  );
}
