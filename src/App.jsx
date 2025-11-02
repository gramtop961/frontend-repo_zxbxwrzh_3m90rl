import { useEffect, useMemo, useRef } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Showcase from './components/Showcase.jsx';
import Contact from './components/Contact.jsx';
import { useSpring } from 'framer-motion';

export default function App() {
  // Enhanced global cursor effects (glow + grid parallax + magnetic hover)
  const glowRef = useRef(null);
  const gridRef = useRef(null);
  const cursorRef = useRef(null);

  // Smooth spring for the glow position
  const pos = useSpring(0, { stiffness: 120, damping: 20, mass: 0.3 });
  const posY = useSpring(0, { stiffness: 120, damping: 20, mass: 0.3 });

  useEffect(() => {
    const handleMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      pos.set(x);
      posY.set(y);

      // Parallax grid subtle shift
      if (gridRef.current) {
        const dx = (x / window.innerWidth - 0.5) * 16; // +-8px
        const dy = (y / window.innerHeight - 0.5) * 16;
        gridRef.current.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
      }
    };

    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, [pos, posY]);

  useEffect(() => {
    const unsubX = pos.on('change', (x) => {
      if (glowRef.current) glowRef.current.style.setProperty('--x', `${x}px`);
      if (cursorRef.current) cursorRef.current.style.transform = `translate3d(${x}px, var(--y), 0)`;
    });
    const unsubY = posY.on('change', (y) => {
      if (glowRef.current) glowRef.current.style.setProperty('--y', `${y}px`);
      if (cursorRef.current) cursorRef.current.style.setProperty('--y', `${y}px`);
    });
    return () => {
      unsubX();
      unsubY();
    };
  }, [pos, posY]);

  // Magnetic hover elements: data-magnetic
  useEffect(() => {
    const magnets = Array.from(document.querySelectorAll('[data-magnetic="true"]'));
    const strength = 0.25;

    function onMouseMove(e) {
      magnets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) * strength;
        const dy = (e.clientY - cy) * strength;
        el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
      });
    }
    function onMouseLeave() {
      magnets.forEach((el) => {
        el.style.transform = 'translate3d(0,0,0)';
      });
    }

    window.addEventListener('pointermove', onMouseMove);
    window.addEventListener('pointerleave', onMouseLeave);
    return () => {
      window.removeEventListener('pointermove', onMouseMove);
      window.removeEventListener('pointerleave', onMouseLeave);
    };
  }, []);

  const gridPattern = useMemo(
    () =>
      `radial-gradient(ellipse at top left, rgba(255,255,255,0.18), transparent 45%),
       radial-gradient(ellipse at bottom right, rgba(255,200,0,0.10), transparent 40%),
       linear-gradient(to right, transparent 49%, rgba(255,255,255,0.06) 50%, transparent 51%),
       linear-gradient(to bottom, transparent 49%, rgba(255,255,255,0.06) 50%, transparent 51%)`,
    []
  );

  return (
    <div className="relative min-h-[100svh] bg-gradient-to-b from-orange-50 via-amber-50 to-amber-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-900 text-zinc-900 dark:text-white">
      {/* Top scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 opacity-70" style={{ transformOrigin: '0 0', scaleX: `calc(var(--scroll, 0))` }} />

      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <Contact />
      </main>

      {/* Global mouse effects */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-[60] mix-blend-screen">
        {/* Cursor glow */}
        <div
          ref={glowRef}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{
            left: 'var(--x)',
            top: 'var(--y)',
            width: 420,
            height: 420,
            background:
              'radial-gradient(circle at center, rgba(255,168,0,0.35) 0%, rgba(255,107,0,0.25) 35%, rgba(255,107,0,0.10) 60%, transparent 70%)',
            filter: 'saturate(120%)',
          }}
        />
        {/* Thin accent ring */}
        <div
          ref={cursorRef}
          className="absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-orange-400/60 shadow-[0_0_20px_rgba(255,165,0,0.35)]"
          style={{ left: 0, top: 0 }}
        />
        {/* Parallax grid overlay */}
        <div
          ref={gridRef}
          className="absolute inset-0 opacity-30 dark:opacity-20"
          style={{
            backgroundImage: gridPattern,
            backgroundSize: 'var(--size,28px) var(--size,28px), var(--size,28px) var(--size,28px), 28px 28px, 28px 28px',
            backgroundPosition: '0 0, 0 0, 0 0, 0 0',
          }}
        />
      </div>
    </div>
  );
}
