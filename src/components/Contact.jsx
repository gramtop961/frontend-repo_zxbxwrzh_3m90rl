import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_55%_at_80%_20%,rgba(14,165,233,0.2),transparent),radial-gradient(40%_45%_at_20%_80%,rgba(244,114,182,0.2),transparent)]" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold sm:text-4xl"
        >
          Let’s build something memorable
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-slate-300"
        >
          Available for freelance work, collaborations, and full-time roles.
        </motion.p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hassanshoaib6603@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-5 py-3 font-semibold text-slate-900 shadow-lg shadow-fuchsia-500/30 transition hover:shadow-cyan-400/40"
          >
            <Mail className="h-5 w-5" /> Email Me
          </a>
          <a
            href="tel:+923106300179"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            <Phone className="h-5 w-5" /> +92 310 6300179
          </a>
          <a
            href="https://github.com/MuhammadHassan6603"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            <Github className="h-5 w-5" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-hassan05"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            <Linkedin className="h-5 w-5" /> LinkedIn
          </a>
        </div>

        <p className="mt-8 text-xs text-slate-400">© {new Date().getFullYear()} Muhammad Hassan — Crafted with care.</p>
      </div>
    </section>
  );
}
