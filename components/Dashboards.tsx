// components/Dashboards.tsx
export default function Dashboards() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[980px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Proyectos & Dashboards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Espacio para tus futuros proyectos de PowerBI/Tableau */}
          <div className="aspect-video bg-apple-gray rounded-2xl flex items-center justify-center border border-gray-200 group hover:shadow-xl transition-shadow cursor-pointer">
            <p className="text-gray-500 group-hover:text-apple-blue font-medium">
              + Agregar Nuevo Dashboard de BI
            </p>
          </div>
          <div className="aspect-video bg-apple-gray rounded-2xl flex items-center justify-center border border-gray-200">
            <p className="text-gray-500 italic">Próximamente: Análisis de Riesgo en Salud [cite: 26]</p>
          </div>
        </div>
      </div>
    </section>
  )
}
