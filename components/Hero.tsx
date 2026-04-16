import React from 'react';

export default function Hero() {
  return (
    <section className="bg-apple-black text-white min-h-screen flex flex-col justify-center items-center text-center px-6 pt-[48px]">
      {/* Etiqueta de especialidad con estilo Apple */}
      <p className="text-apple-blue font-semibold text-[14px] md:text-[17px] mb-4 tracking-tight">
        Especialista Big Data e BI
      </p>

      {/* Headline principal: Tipografía SF Pro Display 56px, Peso 600, Line-height 1.07 */}
      <h1 className="text-[40px] md:text-[56px] font-semibold tracking-[-0.028em] leading-[1.07] max-w-[800px] mb-6">
        Cristian Camilo Bran Arriaga
      </h1>

      {/* Sub-headline: Versatilidad y adaptación [cite: 10, 11] */}
      <p className="text-[19px] md:text-[21px] text-gray-400 font-normal tracking-tight max-w-[600px] leading-[1.19] mb-10">
        Ingeniero en Telecomunicaciones con gran capacidad para adaptarse a entornos complejos y aportar soluciones basadas en datos. [cite: 11, 21]
      </p>

      {/* CTAs estilo Apple: Pill radius 980px */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <button className="bg-apple-blue text-white px-[22px] py-[10px] rounded-[980px] font-normal text-[17px] hover:bg-opacity-90 transition-all">
          Ver Dashboards
        </button>
        <a 
          href="mailto:ccbran1998@hotmail.com" 
          className="text-apple-blue text-[17px] hover:underline flex items-center gap-1"
        >
          Contactar  <span className="text-[14px]"> {'>'} </span>
        </a>
      </div>

      {/* Detalles técnicos sutiles en la parte inferior */}
      <div className="absolute bottom-10 text-[12px] text-gray-500 uppercase tracking-widest">
        Medellín, Colombia 
      </div>
    </section>
  );
}
