"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">

        {/* Left Side */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="rounded-full border border-violet-500/40 bg-violet-500/10 px-5 py-2 text-sm text-violet-300">
              🚀 Available for AI Engineer Roles
            </span>

            <h1 className="mt-8 text-6xl font-black leading-tight text-white lg:text-7xl">
                Hi, I'm
                <br />
                <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
                    SUBASH
                </span>
                <br />
                AI Engineer
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
              AI Engineer passionate about building intelligent applications
              using Hybrid RAG, LangChain, Machine Learning, Computer Vision
              and Generative AI.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
                <a
                    href="#projects"
                    className="rounded-xl bg-violet-600 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-violet-500"
                >
                    🚀 View Projects
                </a>

                <a
                    href="/resume/Subash_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"

                    className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition duration-300 hover:scale-105 hover:border-violet-500 hover:bg-white/10"
                >
                    View Resume
                </a>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
              <Stat number="3+" label="AI Projects" />
              <Stat number="15+" label="Technologies" />
              <Stat number="2026" label="Graduate" />
              <Stat number="100%" label="Passion" />
            </div>
          </motion.div>
        </div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
         {/* Animated Glow */}
        <div className="absolute h-[420px] w-[420px] rounded-full bg-violet-600/20 blur-3xl animate-pulse" />

        {/* Outer Ring */}
        <div className="absolute h-[360px] w-[360px] rounded-full border border-violet-500/20 animate-spin [animation-duration:25s]" />

        {/* Middle Ring */}
        <div className="absolute h-[310px] w-[310px] rounded-full border border-cyan-400/20 animate-spin [animation-direction:reverse] [animation-duration:18s]" />

        {/* Profile Image */}
        <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-violet-500/30 bg-[#111] shadow-[0_0_80px_rgba(139,92,246,0.35)]">
        <Image
            src="/images/profile.jpg"
            alt="Subash"
            fill
            sizes="(max-width: 1024px) 100vw, 400px"
            className="object-cover"
        />
        </div>

        {/* Floating Badges */}
        <Badge text="🐍 Python" className="-left-10 top-12" />
        <Badge text="🦜 LangChain" className="right-0 top-0" />
        <Badge text="⚡ Hybrid RAG" className="-right-12 bottom-20" />
        <Badge text="🤖 Machine Learning" className="-left-16 bottom-12" />
        <Badge text="🧠 Generative AI" className="left-1/2 -translate-x-1/2 -top-12" />
        </motion.div>
      </div>
    </section>
  );
}

function Stat({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">
      <h3 className="text-4xl font-bold text-white">{number}</h3>
      <p className="mt-2 text-gray-400">{label}</p>
    </div>
  );
}

function Badge({
  text,
  className,
}: {
  text: string;
  className: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 3 }}
      className={`absolute rounded-full border border-violet-500/20 bg-white/10 px-5 py-2 backdrop-blur-xl ${className}`}
    >
      {text}
    </motion.div>
  );
}