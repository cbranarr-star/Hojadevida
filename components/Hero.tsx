// components/Hero.tsx
export default function Hero() {
  return (
    <section className="bg-apple-black text-white h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl md:text-7xl font-semibold tracking-apple-tight leading-apple-headline mb-4">
        Cristian Bran Arriaga
      </h1>
      <p className="text-xl md:text-2xl font-normal text-gray-400 max-w-2xl">
        Ingeniero en Telecomunicaciones & Especialista en Big Data e BI. [cite: 21, 22]
      </p>
      <div className="mt-8 flex gap-4">
        <button className="bg-apple-blue px-6 py-2 rounded-full hover:bg-opacity-90 transition">
          Ver Proyectos
        </button>
        <a href="#experiencia" className="text-apple-blue hover:underline flex items-center">
          Saber más >
        </a>
      </div>
    </section>
  )
}
