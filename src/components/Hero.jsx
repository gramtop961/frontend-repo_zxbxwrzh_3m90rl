import { motion } from "framer-motion";
import { Rocket, Sparkles } from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-br from-slate-950 via-[#0b0b2a] to-[#160a33] text-white">
      {/* Gradient noise field */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.22),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.22),transparent_35%),radial-gradient(circle_at_50%_90%,rgba(99,102,241,0.22),transparent_40%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-16 md:flex-row md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 w-full md:w-1/2"
        >
          <div className 
            ="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
            <Sparkles className="h-4 w-4 text-fuchsia-300" />
            <span className="text-xs text-fuchsia-200">Interactive • Futuristic • Vibrant</span>
          </div>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Muhammad Hassan
          </h1>
          <p className="mt-2 bg-gradient-to-r from-fuchsia-300 via-cyan-300 to-indigo-300 bg-clip-text text-lg font-semibold text-transparent">
            App & Web Developer — building immersive, high‑performance experiences
          </p>
          <p className="mt-4 max-w-xl text-base text-slate-200 sm:text-lg">
            I craft fast, responsive, and animated products with a distinct visual identity. Dive into my work and
            let’s create something memorable together.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-fuchsia-500/30 transition hover:shadow-cyan-400/40"
            >
              <Rocket className="h-4 w-4 transition group-hover:translate-x-0.5" />
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full md:w-1/2"
          aria-label="Interactive 3D scene"
        >
          <div className="relative h-[380px] w-full sm:h-[450px] md:h-[520px]">
            <Spline
              scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
              style={{ width: "100%", height: "100%" }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
