import React from 'react';

const experiences = [
  {
    company: "SAVIA SALUD EPS",
    role: "Analista de Inteligencia de Negocios",
    period: "02/2025 - En curso",
    details: [
      "Generación de informes estratégicos en PowerBI sobre Cuentas Médicas y Riesgo en Salud.",
      "Creación de queries SQL en MySQL y MariaDB para extracción de información.",
      "Desarrollo de scripts en Python para cruces de datos masivos.",
      "Manejo de orquestadores como Airflow y control de versiones con GitHub."
    ],
    bg: "bg-[#f5f5f7]", text: "text-[#1d1d1f]"
  },
  {
    company: "SAVIA SALUD EPS",
    role: "Analista de Infraestructura",
    period: "05/2023 - 02/2025",
    details: [
      "Administración de Active Directory y monitoreo de servidores críticos.",
      "Gestión de plataformas VPN Fortigate y actualización de inventario.",
      "Migración de servidores a la nube y ejecución de planes DRP."
    ],
    bg: "bg-[#000000]", text: "text-white"
  },
  {
    company: "COMWARE",
    role: "Analista Mesa de Servicios",
    period: "06/2019 - 04/2021",
    details: [
      "Soporte a la Red MPLS del operador Tigo-Une en topologías de anillo y bus.",
      "Monitoreo de red con iMaster NCE y manejo de tickets en BMC Remedy."
    ],
    bg: "bg-[#f5f5f7]", text: "text-[#1d1d1f]"
  }
];

export default function Experience() {
  return (
    <section>
      {experiences.map((exp, i) => (
        <div key={i} className={`${exp.bg} ${exp.text} py-24 px-6`}>
          <div className="max-w-[980px] mx-auto">
            <h2 className="text-[40px] font-semibold tracking-[-0.011em] mb-2">{exp.company}</h2>
            <h3 className="text-[21px] text-[#0071e3] mb-8">{exp.role}</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {exp.details.map((detail, j) => (
                <li key={j} className="text-[17px] leading-[1.47] opacity-80">• {detail}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
