import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// A subtle, performant mouse-follow glow and parallax grid
export default function MouseEffects() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 0.2 });
  const y = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 0.2 });

  useEffect(() => {
    const handleMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[5] select-none" aria-hidden>
      {/* Cursor glow */}
      <motion.div
        style={{ left: x, top: y }}
        className="absolute h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-2xl"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.6),rgba(56,189,248,0.35)_40%,transparent_65%)]" />
      </motion.div>

      {/* Subtle parallax grid that shifts with the cursor */}
      <motion.div
        style={{ x: x, y: y, translateX: "-20%", translateY: "-20%" }}
        className="absolute -inset-10 opacity-[0.05]"
      >
        <div className="h-full w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.6)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </motion.div>
    </div>
  );
}
