import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/rwKT-aWtlkdY-8UV/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft radial light to match the orange vibe; ensure it doesn't block Spline */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_15%_10%,rgba(255,255,255,0.6),transparent_60%)]" />

      {/* Content overlay */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 grid md:grid-cols-12 items-center gap-10">
        <motion.div
          className="md:col-span-7"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="block bg-clip-text text-transparent bg-gradient-to-b from-zinc-900 to-zinc-700 dark:from-white dark:to-zinc-300">
              Muhammad Hassan
            </span>
            <span className="mt-2 block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-400">
              App & Web Developer
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-zinc-700 dark:text-zinc-300">
            I craft playful, performant experiences. From interactive 3D heroes to reliable
            full‑stack apps — I bring ideas to life with care and motion.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#showcase" className="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-md shadow-orange-500/30 hover:brightness-105 transition">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-white/80 dark:bg-zinc-800/80 backdrop-blur border border-white/50 dark:border-white/10 text-zinc-900 dark:text-white hover:bg-white/90 dark:hover:bg-zinc-800/90 transition">
              Contact
            </a>
          </div>
        </motion.div>

        <motion.div
          className="md:col-span-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
        >
          <div className="pointer-events-none select-none text-sm text-zinc-600/80 dark:text-zinc-300/80">
            <p className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/70 dark:bg-zinc-800/60 border border-white/50 dark:border-white/10 shadow-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              Live Spline — try clicking and dragging the scene!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
