import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Education from '../components/Education';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Barra de Navegación de Plataforma  */}
      <nav className="glass-panel fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[1200px] h-[64px] rounded-full z-[100] px-8 flex items-center justify-between">
        <div className="text-[18px] font-bold tracking-tighter">CB<span className="text-[#0071e3]">.</span></div>
        <div className="hidden md:flex gap-10 text-[13px] font-medium text-gray-300 uppercase tracking-widest">
          <a href="#experiencia" className="hover:text-white transition-colors">Portafolio</a>
          <a href="#habilidades" className="hover:text-white transition-colors">Habilidades</a>
          <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
        </div>
        <button className="bg-white text-black px-5 py-2 rounded-full text-[12px] font-bold hover:bg-gray-200">
          HIRE ME
        </button>
      </nav>

      <Hero />
      <Experience />
      <div id="habilidades" className="section-light py-20"><Skills /></div>
      <Education />
    </main>
  );
}
