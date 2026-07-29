"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="mb-3 font-semibold uppercase tracking-widest text-violet-400">
          Contact
        </p>

        <h2 className="text-5xl font-bold text-white">
          Let's Build Something Amazing
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          I'm currently looking for AI Engineer, Machine Learning and Software
          Developer opportunities. Feel free to connect with me.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          <a
            href="mailto:subashs0027@gmail.com"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-violet-500 hover:-translate-y-2"
          >
            <h3 className="text-xl font-bold text-white">
              📧 Email
            </h3>

            <p className="mt-4 text-gray-400 break-all">
              subashs0027@gmail.com
            </p>
          </a>

          <a
            href="https://github.com/subashs27"
            target="_blank"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-violet-500 hover:-translate-y-2"
          >
            <h3 className="text-xl font-bold text-white">
              💻 GitHub
            </h3>

            <p className="mt-4 text-gray-400">
              github.com/subashs27
            </p>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-violet-500 hover:-translate-y-2"
          >
            <h3 className="text-xl font-bold text-white">
              💼 LinkedIn
            </h3>

            <p className="mt-4 text-gray-400">
              Connect with me
            </p>
          </a>

        </div>

        <div className="mt-16 flex flex-wrap gap-5">

          <a
            href="/resume/Subash_Resume.pdf"
            download
            className="rounded-xl bg-violet-600 px-8 py-4 font-semibold text-white transition hover:bg-violet-500"
          >
            Download Resume
          </a>

          <a
            href="mailto:subashs0027@gmail.com"
            className="rounded-xl border border-white/10 px-8 py-4 font-semibold text-white transition hover:border-violet-500"
          >
            Send Email
          </a>

        </div>

      </motion.div>
    </section>
  );
}