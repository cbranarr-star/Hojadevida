import React from 'react';

const education = [
  {
    title: "Especialista Big Data e BI",
    institution: "Institución Universitaria", // Puedes ajustar el nombre de la U
    period: "02/2025 - 01/2026",
    status: "En curso"
  },
  {
    title: "Ingeniero en Telecomunicaciones",
    institution: "Institución Universitaria",
    period: "02/2021 - 07/2023",
    status: "Graduado"
  },
  {
    title: "Tecnólogo en Gestión de redes de datos",
    institution: "SENA / Institución",
    period: "01/2016 - 04/2018",
    status: "Graduado"
  },
  {
    title: "Técnico en Sistemas",
    institution: "Institución Educativa",
    period: "01/2014 - 12/2015",
    status: "Graduado"
  }
];

export default function Education() {
  return (
    <section className="bg-[#f5f5f7] py-24 px-6">
      <div className="max-w-[980px] mx-auto text-center">
        <h2 className="text-[40px] md:text-[56px] font-semibold tracking-[-0.028em] leading-[1.07] text-[#1d1d1f] mb-16">
          Formación Académica
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-[12px] shadow-[rgba(0,0,0,0.1)_0px_4px_20px] hover:scale-[1.02] transition-transform duration-300"
            >
              <span className="text-apple-blue text-[14px] font-semibold uppercase tracking-wider">
                {edu.period}
              </span>
              <h3 className="text-[21px] font-bold text-[#1d1d1f] mt-2 leading-tight">
                {edu.title}
              </h3>
              <p className="text-[17px] text-gray-500 mt-1">
                {edu.institution}
              </p>
              <div className="mt-4 inline-block bg-gray-100 px-3 py-1 rounded-full text-[12px] font-medium text-gray-600">
                {edu.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
