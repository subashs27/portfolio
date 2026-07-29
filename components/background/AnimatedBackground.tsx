"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-[#09090B]">
      {/* Gradient Glow */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[180px]" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[160px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating Orb 1 */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-20 top-24 h-52 w-52 rounded-full bg-violet-500/20 blur-3xl"
      />

      {/* Floating Orb 2 */}
      <motion.div
        animate={{
          x: [0, -70, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-16 right-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"
      />

      {/* Floating Orb 3 */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-[180px]"
      />

    {/* Animated Particles */}
    {Array.from({ length: 30 }, (_, index) => {
    const left = (index * 17) % 100;
    const top = (index * 29) % 100;

    return (
        <motion.span
        key={index}
        className="absolute h-1.5 w-1.5 rounded-full bg-white/30"
        style={{
            left: `${left}%`,
            top: `${top}%`,
        }}
        animate={{
            y: [0, -40, 0],
            opacity: [0.2, 1, 0.2],
        }}
        transition={{
            duration: 3 + (index % 4),
            delay: index * 0.15,
            repeat: Infinity,
            ease: "easeInOut",
        }}
        />
    );
    })}
    </div>
  );
}