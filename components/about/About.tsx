"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl px-6 py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="mb-3 text-violet-400 font-semibold uppercase tracking-widest">
          About Me
        </p>

        <h2 className="text-5xl font-bold text-white">
          Passionate about building
          <span className="text-violet-500"> AI Solutions.</span>
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
          I'm <span className="text-white font-semibold">Subash</span>, an AI
          Engineer passionate about developing intelligent applications using
          Hybrid RAG, LangChain, Machine Learning, Computer Vision and
          Generative AI.
        </p>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          I enjoy solving real-world problems through AI, building scalable
          applications, and continuously exploring new technologies in the
          field of Artificial Intelligence.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <Card title="🎓 Education" value="B.E. EEE" />

          <Card title="💼 Experience" value="AI Projects" />

          <Card title="🚀 Goal" value="AI Engineer" />
        </div>
      </motion.div>
    </section>
  );
}

function Card({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-violet-500/50">
      <h3 className="text-lg text-gray-400">{title}</h3>

      <p className="mt-3 text-2xl font-bold text-white">
        {value}
      </p>
    </div>
  );
}