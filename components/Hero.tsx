export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-[980px] mx-auto text-center relative z-10">
        <h1 className="text-[56px] md:text-[88px] font-semibold tracking-[-0.04em] leading-[1.02] gradient-text mb-6">
          Ingeniería de Datos <br/> con Estilo.
        </h1>
        <p className="text-[21px] md:text-[24px] text-gray-400 max-w-[700px] mx-auto mb-10 font-medium">
          Cristian Bran Arriaga. Especialista en BI y Big Data. <br/>
          Transformando infraestructuras complejas en soluciones visuales inteligentes.
        </p>
        <div className="flex justify-center gap-6">
          <button className="bg-[#0071e3] text-white px-8 py-4 rounded-full text-[17px] font-semibold apple-shadow hover:bg-[#0077ed] transition-all">
            Ver Dashboards
          </button>
          <button className="glass-panel text-white px-8 py-4 rounded-full text-[17px] font-semibold hover:bg-white/10 transition-all">
            Descargar HDV
          </button>
        </div>
      </div>
      
      {/* Elemento Decorativo de Fondo - Glow sutil [cite: 6] */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#0071e3]/20 blur-[120px] rounded-full -z-10" />
    </section>
  );
}
