import { useEffect, useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'showcase', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

function smoothScrollTo(targetId) {
  const el = document.getElementById(targetId);
  if (!el) return;
  const header = document.getElementById('site-header');
  const headerHeight = header ? header.offsetHeight : 0;

  const startY = window.scrollY;
  const endY = Math.max(0, el.getBoundingClientRect().top + window.scrollY - headerHeight - 12);
  const duration = 700;

  const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  let start;

  function step(timestamp) {
    if (start === undefined) start = timestamp;
    const elapsed = timestamp - start;
    const progress = Math.min(1, elapsed / duration);
    const eased = easeInOutCubic(progress);
    window.scrollTo(0, startY + (endY - startY) * eased);
    if (elapsed < duration) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      {
        root: null,
        threshold: 0.6,
        rootMargin: '-20% 0px -20% 0px',
      }
    );

    sections.forEach((s) => {
      const node = document.getElementById(s.id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onResize = () => setOpen(false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header id="site-header" className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/50 dark:bg-zinc-900/40 border-b border-white/20 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button onClick={() => smoothScrollTo('home')} className="group inline-flex items-center gap-2">
          <span className="relative inline-grid place-items-center w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 text-white shadow-md shadow-orange-500/30">
            <Rocket className="w-4 h-4 transition-transform group-hover:rotate-12" />
          </span>
          <span className="font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-orange-600 to-amber-500 dark:from-white dark:via-orange-300 dark:to-amber-200">
            Muhammad Hassan
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-6">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => smoothScrollTo(s.id)}
              className={`relative px-2 py-1 text-sm font-medium transition-colors ${
                active === s.id
                  ? 'text-zinc-900 dark:text-white'
                  : 'text-zinc-600 dark:text-zinc-300'
              }`}
            >
              <span>{s.label}</span>
              {active === s.id && (
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md bg-white/60 dark:bg-zinc-800/60 border border-white/30 dark:border-white/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/30 dark:border-white/10 bg-white/70 dark:bg-zinc-900/70 backdrop-blur">
          <div className="px-4 py-3 flex flex-col gap-2">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  smoothScrollTo(s.id);
                  setOpen(false);
                }}
                className={`text-left px-2 py-2 rounded-md ${
                  active === s.id
                    ? 'bg-gradient-to-r from-orange-500/10 to-amber-400/10 text-zinc-900 dark:text-white'
                    : 'text-zinc-700 dark:text-zinc-300'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
