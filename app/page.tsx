import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Dashboards from '../components/Dashboards';

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      {/* Navegación Glassmorphism fija */}
      <nav className="fixed top-0 w-full z-50 h-[48px] bg-black/80 backdrop-blur-[20px] flex items-center justify-center border-b border-white/10">
        <span className="text-white text-[12px] font-normal tracking-tight">Cristian Bran Arriaga</span>
      </nav>

      <Hero />
      <Experience />
      <Skills />
      <Education />
      <Dashboards />

      <footer className="bg-[#f5f5f7] py-12 text-center text-[12px] text-[#1d1d1f]">
        <p>© 2026 Cristian Camilo Bran Arriaga. Medellín, Colombia.</p>
      </footer>
    </main>
  );
}
