import { Briefcase, Database, Layout } from 'lucide-react';

const roles = [
  {
    company: "SAVIA SALUD EPS",
    role: "Analista de Inteligencia de Negocios",
    period: "2025 - Presente",
    desc: "Liderando la automatización de informes estratégicos en Power BI y queries masivos en MariaDB.",
    icon: <Database className="text-[#0071e3]" size={24} />
  },
  {
    company: "SAVIA SALUD EPS",
    role: "Analista de Infraestructura",
    period: "2023 - 2025",
    desc: "Administración de Directorio Activo y migración de servidores críticos a la nube.",
    icon: <Layout className="text-[#0071e3]" size={24} />
  }
];

export default function Experience() {
  return (
    <div className="max-w-[1200px] mx-auto py-20 px-6">
      <h2 className="text-[12px] uppercase tracking-[0.2em] text-[#0071e3] font-bold mb-4 text-center">Trayectoria</h2>
      <h3 className="text-[48px] font-semibold text-center mb-16 gradient-text">Experiencia Profesional.</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {roles.map((item, i) => (
          <div key={i} className="glass-panel p-10 rounded-[24px] hover:scale-[1.02] transition-transform duration-500">
            <div className="mb-6">{item.icon}</div>
            <span className="text-[14px] text-gray-400 font-medium">{item.period}</span>
            <h4 className="text-[24px] font-bold mt-2 mb-4">{item.company}</h4>
            <p className="text-[17px] text-gray-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
