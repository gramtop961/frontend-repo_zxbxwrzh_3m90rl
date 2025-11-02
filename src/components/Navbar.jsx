import { useEffect, useMemo, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function animateScrollTo(targetY, duration = 800) {
  const startY = window.scrollY || window.pageYOffset;
  const diff = targetY - startY;
  let start;

  function step(timestamp) {
    if (start === undefined) start = timestamp;
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);
    window.scrollTo(0, startY + diff * eased);
    if (elapsed < duration) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const headerRef = useRef(null);

  const observers = useMemo(() => new Map(), []);

  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href)).filter(Boolean);
    const opts = { root: null, rootMargin: "-40% 0px -50% 0px", threshold: 0 };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(`#${entry.target.id}`);
        }
      });
    }, opts);
    sections.forEach((s) => {
      io.observe(s);
      observers.set(s, io);
    });
    return () => io.disconnect();
  }, [observers]);

  function handleNavClick(e, href) {
    e.preventDefault();
    const el = document.querySelector(href);
    if (!el) return;
    const headerH = headerRef.current?.offsetHeight || 0;
    const rect = el.getBoundingClientRect();
    const targetY = rect.top + window.scrollY - headerH - 12; // small gap
    animateScrollTo(targetY);
    setOpen(false);
  }

  return (
    <div ref={headerRef} className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white shadow-[0_8px_40px_-12px_rgba(168,85,247,0.35)] backdrop-blur-xl">
          <a href="#home" onClick={(e)=>handleNavClick(e, '#home')} className="text-sm font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">My Portfolio</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className={`relative rounded-xl px-3 py-2 text-sm text-slate-200 transition hover:text-white ${
                  active === l.href ? "text-white" : ""
                }`}
              >
                {active === l.href && (
                  <span className="absolute inset-0 -z-0 rounded-xl bg-gradient-to-r from-fuchsia-500/20 to-cyan-400/20 ring-1 ring-white/10" />
                )}
                <span className="relative z-10">{l.label}</span>
              </a>
            ))}
          </nav>

          <button
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white backdrop-blur md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur md:hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className="block px-4 py-3 text-sm text-white/90 hover:bg-white/10"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
