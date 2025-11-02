import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import MouseEffects from "./components/MouseEffects";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 antialiased">
      <ScrollProgress />
      <Navbar />
      <MouseEffects />
      <main className="pt-28">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
