"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Enterprise AI Knowledge Assistant",
    image: "/images/projects/knowledge-assistant.png",
    description:
      "Built a Hybrid RAG application using LangChain, FAISS, ChromaDB and Gemini API for intelligent enterprise document retrieval and enterprise Q&A.",
    tech: [
      "Python",
      "LangChain",
      "Hybrid RAG",
      "FAISS",
      "ChromaDB",
      "Gemini API",
      "Streamlit",
    ],
    github: "https://github.com/subashs27",
  },
  {
    title: "AI Interview Management System",
    image: "/images/projects/interview-system.png",
    description:
      "Developed an AI-powered interview platform with resume analysis, adaptive interviews, automated evaluation, report generation and candidate assessment.",
    tech: [
      "Python",
      "Streamlit",
      "SQLite",
      "Generative AI",
      "Gemini API",
    ],
    github: "https://github.com/subashs27",
  },
  {
    title: "Smart Fruit Detector",
    image: "/images/projects/fruit-detector.png",
    description:
      "Designed an intelligent fruit freshness detection system using ESP32-CAM, sensors and Machine Learning for real-time monitoring.",
    tech: [
      "ESP32",
      "Computer Vision",
      "Machine Learning",
      "IoT",
    ],
    github: "https://github.com/subashs27",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
          PROJECTS
        </p>

        <h2 className="text-5xl font-bold text-white">
          Featured AI Projects
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          AI applications focused on Hybrid RAG, Generative AI, Machine Learning
          and Computer Vision.
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-[0_0_50px_rgba(139,92,246,0.35)]"
            >
              {/* Project Image */}
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-black/20 to-transparent opacity-80" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-violet-300">
                  {project.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium tracking-wide text-violet-200 transition-all duration-300 hover:bg-violet-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/30"
                  >
                    GitHub
                  </a>

                  <button className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white transition-all duration-300 hover:border-violet-500 hover:bg-white/10">
                    Case Study
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}