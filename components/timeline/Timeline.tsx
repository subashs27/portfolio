"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2022 - 2026",
    title: "B.E. Electrical and Electronics Engineering",
    subtitle: "Rajalakshmi Engineering College, Chennai",
  },
  {
    year: "2026",
    title: "Enterprise AI Knowledge Assistant",
    subtitle: "Hybrid RAG • LangChain • FAISS • Gemini",
  },
  {
    year: "2026",
    title: "AI Interview Management System",
    subtitle: "Resume Analysis • Adaptive Interview • Evaluation",
  },
  {
    year: "2026",
    title: "Smart Fruit Detector",
    subtitle: "ESP32 • Computer Vision • Machine Learning",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="mx-auto max-w-6xl px-6 py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="mb-3 font-semibold uppercase tracking-widest text-violet-400">
          Journey
        </p>

        <h2 className="text-5xl font-bold text-white">
          Education & Projects Timeline
        </h2>

        <div className="relative mt-16 border-l border-violet-500/30 pl-10">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative mb-14"
            >
              <div className="absolute -left-[49px] top-1 h-5 w-5 rounded-full bg-violet-500 ring-8 ring-violet-500/20" />

              <p className="text-sm text-violet-400">
                {item.year}
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-400">
                {item.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}