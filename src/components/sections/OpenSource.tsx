"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  FileText,
  MessageSquare,
  ArrowUpRight,
  GitFork,
} from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
import { AnimatedSection, SectionHeading } from "@/components/ui/animated-section";

const links = [
  {
    icon: GithubIcon,
    label: "GitHub",
    description: "Source code, issues, and pull requests",
    href: "https://github.com/qtt7715-ux/fedora-ai-operating-system",
  },
  {
    icon: BookOpen,
    label: "Documentation",
    description: "Implementation docs and architecture guides",
    href: "https://github.com/qtt7715-ux/fedora-ai-operating-system/tree/main/docs",
  },
  {
    icon: FileText,
    label: "Architecture",
    description: "Architecture Freeze v2.0 — full technical specification",
    href: "https://hackmd.io/@P-KZQBsRQFq7YYv5GNs7dw/SyuRTgdWze",
  },
  {
    icon: MessageSquare,
    label: "Discussions",
    description: "Design decisions and community input",
    href: "https://github.com/qtt7715-ux/fedora-ai-operating-system/discussions",
  },
];

export function OpenSource() {
  return (
    <AnimatedSection className="py-32 px-6">
      <SectionHeading
        label="Open Source"
        title="Built in the open."
        description="BuildAIOS is developed publicly. We welcome contributors, reviewers, and collaborators who believe in governed agent systems."
      />
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card group cursor-pointer hover:border-[#06b6d4]/30"
            >
              <div className="flex items-start gap-4">
                <link.icon className="w-5 h-5 text-[#06b6d4] mt-0.5" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-sm">{link.label}</h3>
                    <ArrowUpRight className="w-3 h-3 text-[#52525b] group-hover:text-[#06b6d4] transition-colors" />
                  </div>
                  <p className="text-xs text-[#a1a1aa] mt-1">{link.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-8 card text-center"
        >
          <div className="flex items-center justify-center gap-3 text-sm text-[#a1a1aa]">
            <GitFork className="w-4 h-4" />
            <span>
              BuildAIOS is licensed under{" "}
              <a
                href="https://www.gnu.org/licenses/gpl-3.0.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#06b6d4] hover:underline"
              >
                GPL v3
              </a>
              . Fork it. Build on it. Improve it.
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
