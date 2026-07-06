"use client";

import { motion } from "framer-motion";
import { Terminal, Users, Code, ArrowRight } from "lucide-react";

export function JoinTeam() {
  return (
    <section id="join" className="relative py-24 bg-[#0a0a0a] border-t border-[#1f1f1f] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-mono text-cyan-400 mb-6">
              <Users className="w-3 h-3" />
              Build the Runtime of the Future
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Join the BuildAIOS Project
          </motion.h2>

          <motion.p
            className="text-lg text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We are building a highly protected, secure agent runtime and cognitive control plane operating on Fedora Linux. If you are passionate about security, Podman isolation, systemd job orchestration, or JSON-RPC schema design, we want your input.
          </motion.p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Card 1 */}
          <motion.div
            className="p-6 rounded-xl border border-[#1f1f1f] bg-[#0d0d0d] hover:border-cyan-500/20 transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="p-3 rounded-lg bg-cyan-950/45 text-cyan-400 w-fit mb-4">
              <Code className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Core Engine & Gateway Developers</h3>
            <p className="text-sm text-[#a1a1aa] leading-relaxed mb-4">
              Contribute directly to our transactional workflow modules (`v2_engine`, `v3_engine`) or the async socket JSON-RPC routing filters.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="p-6 rounded-xl border border-[#1f1f1f] bg-[#0d0d0d] hover:border-cyan-500/20 transition-all duration-300"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="p-3 rounded-lg bg-blue-950/45 text-blue-400 w-fit mb-4">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Environment & Security Engineers</h3>
            <p className="text-sm text-[#a1a1aa] leading-relaxed mb-4">
              Define target policies using udica SELinux, sandbox resource limits, and build OCI base configurations for specialized execution environments.
            </p>
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="https://github.com/buildaios"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition-all duration-300"
          >
            Start Contributing
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=founder@buildaios.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg border border-[#1f1f1f] hover:border-[#2a2a2a] text-[#a1a1aa] font-semibold hover:text-[#fafafa] transition-all duration-300"
          >
            Contact Founder
          </a>
        </motion.div>
      </div>
    </section>
  );
}
