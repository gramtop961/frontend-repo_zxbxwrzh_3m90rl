import { motion } from "framer-motion";
import { Code2, Smartphone, Globe, Server, Database, Layers } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    note: "React, TypeScript, Tailwind, Framer Motion",
    hue: "from-fuchsia-500/20 to-cyan-400/20",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    note: "React Native, Expo, animations, performance",
    hue: "from-cyan-400/20 to-indigo-500/20",
  },
  {
    icon: Globe,
    title: "Web Experiences",
    note: "Vite, Next.js, SEO, accessibility",
    hue: "from-indigo-500/20 to-violet-500/20",
  },
  {
    icon: Server,
    title: "APIs & Backend",
    note: "Node, FastAPI, auth, real-time",
    hue: "from-violet-500/20 to-fuchsia-500/20",
  },
  {
    icon: Database,
    title: "Databases",
    note: "MongoDB, Postgres, Prisma, Mongoose",
    hue: "from-emerald-400/20 to-cyan-400/20",
  },
  {
    icon: Layers,
    title: "Design Systems",
    note: "Component libraries, theming, tokens",
    hue: "from-rose-400/20 to-amber-400/20",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_20%,rgba(99,102,241,0.25),transparent),radial-gradient(40%_40%_at_10%_80%,rgba(236,72,153,0.2),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold sm:text-4xl"
        >
          Skills & Superpowers
        </motion.h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-300">
          A blend of engineering rigor and playful polish to ship memorable products.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${s.hue} opacity-0 transition group-hover:opacity-100`} />
              <div className="relative flex items-start gap-4">
                <div className="rounded-xl bg-white/10 p-3">
                  <s.icon className="h-6 w-6 text-cyan-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-slate-300">{s.note}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
