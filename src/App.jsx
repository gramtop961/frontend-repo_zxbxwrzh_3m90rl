import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Showcase from './components/Showcase.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  // Scroll progress (top bar)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, restDelta: 0.001 });

  return (
    <div className="relative min-h-[100svh] bg-gradient-to-b from-orange-50 via-amber-50 to-amber-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-900 text-zinc-900 dark:text-white">
      {/* Top scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 origin-left bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400/90 z-50"
        style={{ scaleX }}
      />

      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <Contact />
      </main>
    </div>
  );
}
