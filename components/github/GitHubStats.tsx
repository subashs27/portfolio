"use client";

import { motion } from "framer-motion";

const username = "subashs27";

export default function GitHubStats() {
  return (
    <section
      id="github"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
          GITHUB
        </p>

        <h2 className="text-5xl font-bold text-white">
          Open Source & Coding Activity
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          A snapshot of my coding activity, GitHub contributions and most-used
          technologies.
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* GitHub Stats */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true`}
              alt="GitHub Stats"
              className="w-full rounded-xl"
            />
          </div>

          {/* Top Languages */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true`}
              alt="Top Languages"
              className="w-full rounded-xl"
            />
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <img
            src={`https://streak-stats.demolab.com?user=${username}&theme=tokyonight&hide_border=true`}
            alt="GitHub Streak"
            className="w-full rounded-xl"
          />
        </div>
      </motion.div>
    </section>
  );
}