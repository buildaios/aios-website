"use client";

import { ArrowUpRight } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const links = {
  project: [
    { label: "GitHub", href: "https://github.com/buildaios" },
    { label: "Architecture", href: "https://hackmd.io/@P-KZQBsRQFq7YYv5GNs7dw/SyuRTgdWze" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Documentation", href: "https://github.com/buildaios/Docs" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/buildaios/about/?viewAsMember=true" },
  ],
  legal: [
    { label: "GPL v3 License", href: "https://www.gnu.org/licenses/gpl-3.0.html" },
    { label: "Join the Team", href: "#join" },
    { label: "Contact Founder", href: "mailto:founder@buildaios.dev" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[#1f1f1f] bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <img src="/logo.png" alt="BuildAIOS Logo" className="w-6 h-6 object-contain" />
              <h3 className="text-lg font-bold">BuildAIOS</h3>
            </div>
            <p className="text-sm text-[#a1a1aa] leading-relaxed">
              An independent open-source project building an AI-first operating
              system platform on Fedora Linux. Available at <a href="https://buildaios.dev" className="text-cyan-400 hover:underline">buildaios.dev</a>.
            </p>
          </div>

          {/* Project Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#52525b] mb-3">
              Project
            </h4>
            <div className="space-y-2">
              {links.project.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 text-sm text-[#a1a1aa] hover:text-[#fafafa] transition-colors"
                >
                  {l.label}
                  {l.href.startsWith("http") && <ArrowUpRight className="w-3 h-3" />}
                </a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#52525b] mb-3">
              Legal
            </h4>
            <div className="space-y-2">
              {links.legal.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 text-sm text-[#a1a1aa] hover:text-[#fafafa] transition-colors"
                >
                  {l.label}
                  {l.href.startsWith("http") && <ArrowUpRight className="w-3 h-3" />}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-[#1f1f1f] pt-6">
          <p className="text-xs text-[#52525b] leading-relaxed">
            BuildAIOS is an independent project built on Fedora Linux and is not
            affiliated with or endorsed by the Fedora Project or Red Hat, Inc.
            Fedora and the Fedora logo are trademarks of Red Hat, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
