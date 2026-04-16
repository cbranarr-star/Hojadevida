import React from 'react';

const experiences = [
  {
    company: "SAVIA SALUD EPS",
    role: "Analista de Inteligencia de Negocios",
    period: "02/2025 - En curso",
    location: "Medellín, Colombia",
    details: [
      "Generación de informes estratégicos y operativos en PowerBI sobre Cuentas Médicas, Mipres y Riesgo en Salud.",
      "Creación de queries para extracción de información en bases de datos MySQL y MariaDB.",
      "Desarrollo de scripts en Python para cruces de datos masivos y automatización.",
      "Manejo de herramientas de orquestación y control como Airflow, GitHub y Trello."
    ],
    bg: "bg-[#f5f5f7]", // Light Gray Apple
    text: "text-[#1d1d1f]"
  },
  {
    company: "SAVIA SALUD EPS",
    role: "Analista de Infraestructura",
    period: "05/2023 - 02/2025",
    location: "Medellín, Colombia",
    details: [
      "Administración de Active Directory (AD) y monitoreo de servidores con proveedores externos.",
      "Migración de servidores a la nube y ejecución de planes de recuperación ante desastres (DRP).",
      "Gestión de plataformas VPN Fortigate e implementación de nuevos servidores físicos y virtuales."
    ],
    bg: "bg-[#000000]", // Pure Black Apple
    text: "text-white"
  },
  {
    company: "COMWARE",
    role: "Analista Mesa de Servicios",
    period: "06/2019 - 04/2021",
    location: "Medellín, Colombia",
    details: [
      "Soporte técnico a la Red MPLS del operador Tigo-Une en topologías de anillo y bus.",
      "Monitoreo de red y manejo de plataformas corporativas como BMC Remedy y iMaster NCE."
    ],
    bg: "bg-[#f5f5f7]",
    text: "text-[#1d1d1f]"
  }
];

export default function Experience() {
  return (
    <section id="experiencia" className="w-full">
      {experiences.map((exp, index) => (
        <div key={index} className={`${exp.bg} ${exp.text} py-24 px-6 md:px-12`}>
          <div className="max-w-[980px] mx-auto">
            <span className="text-apple-blue font-semibold text-[14px] uppercase tracking-widest block mb-2">
              {exp.period}
            </span>
            <h2 className="text-[32px] md:text-[40px] font-semibold tracking-[-0.011em] leading-[1.1] mb-2">
              {exp.company}
            </h2>
            <h3 className="text-[21px] md:text-[24px] font-normal opacity-70 mb-8">
              {exp.role}
            </h3>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {exp.details.map((item, i) => (
                <li key={i} className="flex gap-3 text-[17px] leading-[1.47] font-normal tracking-[-0.022em]">
                  <span className="text-apple-blue">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
