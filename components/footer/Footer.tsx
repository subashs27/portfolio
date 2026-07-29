"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#09090B]">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          {/* Name */}
          <h2 className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent">
            Subash
          </h2>

          {/* Tagline */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            AI Engineer passionate about building intelligent applications using
            Generative AI, Hybrid RAG, Machine Learning and Computer Vision.
          </p>

          {/* Social Links */}
          <div className="mt-10 flex items-center gap-5">
            <a
              href="https://github.com/subashs27"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-4 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-500/10 hover:text-violet-300"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-4 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-300"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="mailto:yourmail@gmail.com"
              className="rounded-full border border-white/10 bg-white/5 p-4 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-500 hover:bg-fuchsia-500/10 hover:text-fuchsia-300"
            >
              <FaEnvelope size={22} />
            </a>
          </div>

          {/* Divider */}
          <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Bottom */}
          <div className="flex w-full flex-col items-center justify-between gap-5 text-sm text-gray-500 md:flex-row">
            <p>
              © {new Date().getFullYear()} Subash. All rights reserved.
            </p>

            <p className="flex items-center gap-2">
              Built with
              <span className="font-semibold text-violet-400">
                Next.js
              </span>
              •
              <span className="font-semibold text-cyan-400">
                TypeScript
              </span>
              •
              <span className="font-semibold text-fuchsia-400">
                Tailwind CSS
              </span>
            </p>

            <a
              href="#home"
              className="group flex items-center gap-2 text-gray-400 transition hover:text-white"
            >
              Back to Top
              <FaArrowUp
                size={14}
                className="transition group-hover:-translate-y-1"
                />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}