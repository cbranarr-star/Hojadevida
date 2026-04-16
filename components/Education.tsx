import React from 'react';

const education = [
  { title: "Especialista Big Data e BI", period: "2025 - 2026", status: "En curso" },
  { title: "Ingeniero en Telecomunicaciones", period: "2021 - 2023", status: "Graduado" },
  { title: "Tecnólogo en Gestión de redes", period: "2016 - 2018", status: "Graduado" }
];

export default function Education() {
  return (
    <section className="bg-black py-24 px-6 text-white text-center">
      <div className="max-w-[980px] mx-auto">
        <h2 className="text-[40px] font-semibold mb-12">Formación Académica</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((edu, i) => (
            <div key={i} className="bg-[#1d1d1f] p-8 rounded-[12px] border border-white/5">
              <p className="text-[#0071e3] text-[14px] mb-2 font-semibold">{edu.period}</p>
              <h3 className="text-[19px] font-bold mb-2">{edu.title}</h3>
              <span className="text-[12px] opacity-60 uppercase tracking-widest">{edu.status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
