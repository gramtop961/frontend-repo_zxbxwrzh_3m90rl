import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Neon Notes",
    tag: "Mobile App",
    blurb: "Cross-platform notes with offline sync and buttery animations.",
    colors: "from-fuchsia-500/30 via-cyan-400/20 to-indigo-500/30",
    link: "#",
  },
  {
    title: "Pulse Analytics",
    tag: "Web App",
    blurb: "Realtime dashboards for product telemetry and insights.",
    colors: "from-emerald-400/25 via-sky-400/20 to-violet-500/25",
    link: "#",
  },
  {
    title: "Aura UI",
    tag: "Design System",
    blurb: "Accessible components with delightful micro-interactions.",
    colors: "from-rose-400/25 via-amber-300/20 to-fuchsia-500/25",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-gradient-to-b from-slate-950 to-slate-900 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_50%_0%,rgba(56,189,248,0.15),transparent),radial-gradient(50%_50%_at_20%_80%,rgba(236,72,153,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold sm:text-4xl"
        >
          Featured Work
        </motion.h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-300">
          A selection of projects that blend performance, polish, and personality.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <div className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${p.colors} opacity-0 transition group-hover:opacity-100`} />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-xs text-slate-200">
                    {p.tag}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-cyan-300 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{p.blurb}</p>
                <div className="mt-4 h-36 w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-tr from-white/10 to-white/0">
                  <div className="h-full w-full bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.08)_50%,rgba(255,255,255,0.08)_75%,transparent_75%,transparent)] bg-[length:16px_16px]" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
