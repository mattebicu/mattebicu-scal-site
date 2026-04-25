import React from 'react';
import { ArrowRight } from 'lucide-react';
// Percorso corretto: 4 livelli indietro
import { client } from "../../../../sanity/lib/client";
import { urlFor } from "../../../../sanity/lib/image";

async function getData() {
  try {
    const query = `{
      "page": *[_type == "home"][0]{
        "tag": hero.tag,
        "titleLine1": hero.titleLine1,
        "titleHighlight": hero.titleLine3
      },
      "products": *[_type == "product"] | order(_createdAt asc) {
        name,
        description,
        image
      }
    }`;
    return await client.fetch(query, {}, { next: { revalidate: 0 } });
  } catch (error) {
    console.error("Errore nel recupero dati Sanity:", error);
    return null;
  }
}

export default async function ServiziPage() {
  const data = await getData();
  
  const pageHeader = {
    tag: data?.page?.tag || "Expertise Tecnica",
    line1: data?.page?.titleLine1 || "Servizi di",
    highlight: data?.page?.titleHighlight || "Audit"
  };

  const services = data?.products || [];

  return (
    <main className="min-h-screen bg-white pt-44 pb-20 px-6 md:px-16 text-[#1A1A1A] font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="mb-32">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#39A935]"></div>
            <h2 className="text-[#39A935] font-bold uppercase tracking-[0.4em] text-xs italic">
              {pageHeader.tag}
            </h2>
          </div>
          <h1 className="text-6xl md:text-[110px] font-black tracking-tighter uppercase leading-[0.8] mb-4">
            {pageHeader.line1} <br />
            <span className="text-[#39A935] italic">{pageHeader.highlight}</span>
          </h1>
        </header>

        <div className="flex flex-col border-t border-slate-100">
          {services.map((service, i) => {
            const imgUrl = service.image ? urlFor(service.image).width(800).url() : null;
            
            return (
              <div 
                key={i} 
                className="group border-b border-slate-100 py-20 flex flex-col md:flex-row gap-12 items-center transition-all relative overflow-hidden"
              >
                <div className="flex-1 z-10">
                  <span className="text-2xl text-[#39A935] font-black opacity-40 italic mb-8 block">
                    {(i + 1).toString().padStart(2, '0')} //
                  </span>
                  
                  <h3 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-6 leading-[0.9] group-hover:text-[#39A935] transition-colors duration-500">
                    {service.name}
                  </h3>
                  
                  <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-xl font-medium mb-10 uppercase tracking-tight">
                    {service.description}
                  </p>
                  
                  <a href="/contatti" className="inline-flex items-center gap-3 font-black uppercase tracking-[0.2em] text-xs border-b-2 border-[#39A935] pb-2 hover:gap-6 transition-all duration-300">
                    Approfondisci <ArrowRight size={18} className="text-[#39A935]" />
                  </a>
                </div>

                <div className="w-full md:w-[450px] h-[300px] md:h-[450px] relative shrink-0 rounded-[40px] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-105">
                  {imgUrl ? (
                    <img 
                      src={imgUrl} 
                      alt={service.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300 font-bold uppercase tracking-widest">
                      No Image
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}