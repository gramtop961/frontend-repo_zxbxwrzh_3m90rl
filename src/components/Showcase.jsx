import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'Realtime Chat App',
    desc: 'WebSocket powered chat with themes and reactions.',
    href: 'https://github.com/',
  },
  {
    title: '3D Product Viewer',
    desc: 'Explore models with lighting and AR preview.',
    href: 'https://github.com/',
  },
  {
    title: 'Task Manager',
    desc: 'Collaborative tasks with Kanban and timelines.',
    href: 'https://github.com/',
  },
];

export default function Showcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useSpring(useTransform(scrollYProgress, [0, 1], ['-10%', '10%']), { stiffness: 120, damping: 20 });

  return (
    <section id="showcase" ref={ref} className="relative py-24 sm:py-28 bg-gradient-to-b from-transparent via-white/40 to-transparent dark:via-zinc-800/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-orange-600 to-amber-500 dark:from-white dark:via-orange-300 dark:to-amber-200">
              Featured Projects
            </span>
          </h2>
          <motion.div style={{ x }} className="hidden sm:block text-sm text-zinc-600 dark:text-zinc-300">
            Scroll to explore
          </motion.div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20, rotateX: -6 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.05 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative rounded-xl border border-white/50 dark:border-white/10 bg-white/80 dark:bg-zinc-900/60 backdrop-blur p-5 shadow-sm hover:shadow-lg hover:shadow-orange-500/10 transition-transform"
            >
              <div className="h-36 rounded-lg bg-gradient-to-br from-orange-200/60 via-amber-200/50 to-yellow-200/40 dark:from-orange-500/10 dark:via-amber-400/10 dark:to-yellow-400/10" />
              <div className="mt-4">
                <h3 className="font-semibold text-zinc-900 dark:text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{p.desc}</p>
              </div>
              <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-transparent group-hover:ring-orange-400/40" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
