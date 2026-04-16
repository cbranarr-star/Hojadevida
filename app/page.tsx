import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Skills from '../components/Skills'; // Nuevo import
import Dashboards from '../components/Dashboards';

export default function Home() {
  return (
    <main className="bg-apple-black min-h-screen">
      <nav className="fixed top-0 w-full z-50 h-[48px] bg-black/80 backdrop-blur-[20px] flex items-center justify-center border-b border-white/10">
        <span className="text-white text-[12px] font-normal tracking-tight">Cristian Bran Arriaga — Portafolio</span>
      </nav>

      <Hero />
      <Experience />
      <Skills /> {/* Insertado aquí para transición suave entre texto y visual */}
      <Dashboards />
      
      <footer className="bg-apple-gray py-12 text-center text-[12px] text-gray-500">
        <p>© 2026 Cristian Camilo Bran Arriaga. Medellín, Colombia.</p>
      </footer>
    </main>
  );
}
