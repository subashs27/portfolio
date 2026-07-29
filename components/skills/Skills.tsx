"use client";

import { motion } from "framer-motion";

const skills = [
  "Python",
  "SQL",
  "Machine Learning",
  "Generative AI",
  "AI Agents",
  "Prompt Engineering",
  "LangChain",
  "RAG",
  "Hybrid RAG",
  "FAISS",
  "BM25",
  "Cross-Encoder",
  "ChromaDB",
  "Gemini API",
  "Streamlit",
  "Flask",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "Git",
  "GitHub",
  "Jupyter Notebook",
  "SQLite",
  "VS Code",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-3 font-semibold uppercase tracking-widest text-violet-400">
          Skills
        </p>

        <h2 className="text-5xl font-bold text-white">
          Technologies I Work With
        </h2>

        <p className="mt-6 max-w-3xl text-lg text-gray-400">
          I build AI-powered applications using Large Language Models,
          Retrieval-Augmented Generation (RAG), modern Python frameworks,
          vector databases, and full-stack AI development tools.
        </p>

        <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05,
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/10 hover:shadow-lg hover:shadow-violet-500/20"
            >
              <h3 className="font-semibold text-white">
                {skill}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}