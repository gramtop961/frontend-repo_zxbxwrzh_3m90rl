import { Mail, Phone, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-orange-600 to-amber-500 dark:from-white dark:via-orange-300 dark:to-amber-200">
              Let’s build something great
            </span>
          </h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300">
            Reach out for collaborations, freelance work, or just to say hi.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a
            href="mailto:muhammadhassan.khaan@gmail.com"
            className="group flex items-center gap-3 rounded-lg border border-white/50 dark:border-white/10 bg-white/80 dark:bg-zinc-900/60 backdrop-blur px-4 py-3 hover:shadow-md hover:shadow-orange-500/10"
          >
            <Mail className="w-5 h-5 text-orange-600" />
            <span className="text-sm">muhammadhassan.khaan@gmail.com</span>
          </a>
          <a
            href="tel:+923206976078"
            className="group flex items-center gap-3 rounded-lg border border-white/50 dark:border-white/10 bg-white/80 dark:bg-zinc-900/60 backdrop-blur px-4 py-3 hover:shadow-md hover:shadow-orange-500/10"
          >
            <Phone className="w-5 h-5 text-orange-600" />
            <span className="text-sm">+92 320 6976078</span>
          </a>
          <a
            href="https://github.com/mhassan-dev"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-lg border border-white/50 dark:border-white/10 bg-white/80 dark:bg-zinc-900/60 backdrop-blur px-4 py-3 hover:shadow-md hover:shadow-orange-500/10"
          >
            <Github className="w-5 h-5 text-orange-600" />
            <span className="text-sm">github.com/mhassan-dev</span>
          </a>
          <a
            href="https://linkedin.com/in/mhassan-dev"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-lg border border-white/50 dark:border-white/10 bg-white/80 dark:bg-zinc-900/60 backdrop-blur px-4 py-3 hover:shadow-md hover:shadow-orange-500/10"
          >
            <Linkedin className="w-5 h-5 text-orange-600" />
            <span className="text-sm">linkedin.com/in/mhassan-dev</span>
          </a>
        </div>

        <p className="mt-10 text-center text-xs text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} Muhammad Hassan. All rights reserved.
        </p>
      </div>
    </section>
  );
}
