// components/Experience.tsx
const experiences = [
  {
    company: "SAVIA SALUD EPS",
    role: "Analista de Inteligencia de Negocios",
    period: "2025 - En curso",
    desc: "Creación de tableros en PowerBI, scripts en Python y manejo de Big Data.", [cite: 25, 26]
    bg: "bg-apple-gray",
    textColor: "text-apple-near-black"
  },
  {
    company: "COMWARE",
    role: "Analista Mesa de Servicios",
    period: "2019 - 2021",
    desc: "Soporte en Red MPLS y monitoreo de topologías en anillo y bus.", [cite: 35, 37]
    bg: "bg-apple-black",
    textColor: "text-white"
  }
];

export default function Experience() {
  return (
    <div id="experiencia">
      {experiences.map((exp, i) => (
        <section key={i} className={`${exp.bg} ${exp.textColor} py-24 px-8 min-h-[60vh] flex flex-col items-center justify-center`}>
          <h2 className="text-4xl font-semibold mb-2">{exp.company}</h2>
          <h3 className="text-2xl mb-4 text-apple-blue">{exp.role}</h3>
          <p className="max-w-xl text-center opacity-80">{exp.desc}</p>
          <span className="mt-4 font-light italic">{exp.period}</span>
        </section>
      ))}
    </div>
  )
}
