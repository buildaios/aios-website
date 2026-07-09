"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Cpu } from "lucide-react";
import { useMemo } from "react";

// Deterministic "random" values that match server and client
function pseudoRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function ParticleField() {
  const particles = useMemo(() => {
    return Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: (pseudoRandom(i * 7 + 1) * 100).toFixed(2),
      y: (pseudoRandom(i * 13 + 3) * 100).toFixed(2),
      size: (pseudoRandom(i * 17 + 5) * 2 + 1).toFixed(2),
      duration: (pseudoRandom(i * 19 + 7) * 8 + 6).toFixed(1),
      delay: (pseudoRandom(i * 23 + 11) * 4).toFixed(1),
      opacity: (pseudoRandom(i * 29 + 13) * 0.3 + 0.05).toFixed(4),
      color: i % 3 === 0 ? "#06b6d4" as const : i % 3 === 1 ? "#3b82f6" as const : "#6366f1" as const,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((p) => {
        const opacityNum = parseFloat(p.opacity);
        return (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: p.color,
              opacity: p.opacity,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [opacityNum, Math.min(opacityNum * 2, 0.8), opacityNum],
            }}
            transition={{
              duration: parseFloat(p.duration),
              delay: parseFloat(p.delay),
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}

function NetworkLines() {
  const lines = useMemo(() => {
    return [
      { x1: "20%", y1: "30%", x2: "50%", y2: "40%" },
      { x1: "80%", y1: "20%", x2: "55%", y2: "45%" },
      { x1: "15%", y1: "70%", x2: "45%", y2: "55%" },
      { x1: "85%", y1: "65%", x2: "55%", y2: "50%" },
      { x1: "40%", y1: "15%", x2: "48%", y2: "42%" },
      { x1: "60%", y1: "80%", x2: "52%", y2: "48%" },
    ];
  }, []);

  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.06]">
      {lines.map((line, i) => (
        <motion.line
          key={i}
          x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
          stroke={i % 2 === 0 ? "#06b6d4" : "#3b82f6"}
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 0], opacity: [0, 0.4, 0] }}
          transition={{
            duration: 4 + i,
            delay: i * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-[0.07]" />

      {/* Particle field */}
      <ParticleField />

      {/* Flowing network lines */}
      <NetworkLines />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080808]" />

      {/* Glow orbs */}
      <motion.div
        className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full blur-[150px]"
        style={{ background: "rgba(6, 182, 212, 0.06)" }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] rounded-full blur-[150px]"
        style={{ background: "rgba(59, 130, 246, 0.04)" }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Architecture diagram animation */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.025]">
        <svg
          viewBox="0 0 800 600"
          className="w-full max-w-3xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="400" cy="300" r="40"
            stroke="#06b6d4" strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          {[0, 60, 120, 180, 240, 300].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const cx = Math.round(400 + Math.cos(rad) * 160);
            const cy = Math.round(300 + Math.sin(rad) * 160);
            return (
              <g key={angle}>
                <motion.line
                  x1="400" y1="300" x2={cx} y2={cy}
                  stroke="#1f1f1f" strokeWidth="0.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.3 * i }}
                />
                <motion.circle
                  cx={cx} cy={cy} r="8"
                  stroke={i % 2 === 0 ? "#3b82f6" : "#06b6d4"}
                  strokeWidth="1" fill="transparent"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + 0.2 * i }}
                />
              </g>
            );
          })}
          <motion.circle
            cx="400" cy="300" r="220"
            stroke="#1f1f1f" strokeWidth="0.5" strokeDasharray="4 8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 1 }}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono text-[#a1a1aa] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] animate-pulse" />
            Pre-Alpha · Open Source · Built on Fedora Linux
          </div>
        </motion.div>

        <motion.h1
          className="text-7xl md:text-9xl font-bold tracking-tighter glow-text mb-6 flex flex-col items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <img src="/logo.png" alt="BuildAIOS Logo" className="w-[180px] h-[180px] md:w-[260px] md:h-[260px] mb-6 object-contain" />
          BuildAIOS
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-[#a1a1aa] max-w-2xl mx-auto mb-10 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The AI-First Operating System Platform.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a
            href="https://github.com/buildaios"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-[#06b6d4] text-black font-medium hover:bg-[#22d3ee] transition-all duration-300"
          >
            <Cpu className="w-4 h-4" />
            GitHub
            <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#roadmap"
            className="px-8 py-3 rounded-lg glass text-[#a1a1aa] font-medium hover:text-[#fafafa] hover:border-[#2a2a2a] transition-all duration-300"
          >
            View Roadmap
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 rounded-full border border-[#2a2a2a] flex items-start justify-center p-1">
          <motion.div className="w-1 h-2 rounded-full bg-[#52525b]" />
        </div>
      </motion.div>
    </section>
  );
}
