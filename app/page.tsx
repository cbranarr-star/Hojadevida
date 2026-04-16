import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Dashboards from '../components/Dashboards';

export default function Home() {
  return (
    <main className="bg-apple-black min-h-screen">
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <Dashboards />
    </main>
  );
}
