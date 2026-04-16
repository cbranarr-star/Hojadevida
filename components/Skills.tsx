import React from 'react';

const skillGroups = [
  {
    category: "Data Intelligence & BI",
    skills: [
      { name: "Power BI (Dashboards Estratégicos)", level: "95%" },
      { name: "SQL (MySQL / MariaDB)", level: "90%" },
      { name: "Python (Cruces de datos & Automatización)", level: "85%" },
      { name: "Big Data & BI (Especialista)", level: "80%" }
    ]
  },
  {
    category: "Infraestructura & Redes",
    skills: [
      { name: "Administración Active Directory", level: "90%" },
      { name: "Redes MPLS & Topologías", level: "85%" },
      { name: "Cloud Migration & DRP", level: "75%" },
      { name: "Seguridad VPN (Fortigate)", level: "80%" }
    ]
  }
];

export default function Skills() {
  return (
    <section className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-[980px] mx-auto">
        <h2 className="text-[40px] md:text-[56px] font-semibold tracking-[-0.028em] leading-[1.07] text-apple-near-black mb-16 text-center">
          Habilidades Técnicas
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="space-y-8">
              <h3 className="text-[21px] font-semibold text-apple-near-black border-b border-gray-100 pb-4">
                {group.category}
              </h3>
              <div className="space-y-6">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    <div className="flex justify-between text-[14px] font-medium text-gray-600">
                      <span>{skill.name}</span>
                      <span>{skill.level}</span>
                    </div>
                    {/* Barra de progreso estilo Apple */}
                    <div className="h-[6px] w-full bg-apple-gray rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-apple-blue rounded-full transition-all duration-1000"
                        style={{ width: skill.level }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
