import React from 'react';
import { Target, Users, Award, Download } from 'lucide-react';
import { client } from "../../../../sanity/lib/client";
import { urlFor } from "../../../../sanity/lib/image";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getChiSiamoData() {
  try {
    const query = `*[_type == "page" && slug.current == "chi-siamo"][0]{
      tag,
      titleLine1,
      titleHighlight,
      titleLine2,
      paragraph1,
      paragraph2,
      mainImage,
      "brochureUrl": brochure.asset->url 
    }`;
    return await client.fetch(query, { t: new Date().getTime() }, { cache: 'no-store' });
  } catch (error) {
    console.error("Errore fetch Chi Siamo:", error);
    return null;
  }
}

export default async function ChiSiamoPage() {
  const sanityData = await getChiSiamoData();

  // Presi ESCLUSIVAMENTE da Sanity, nessun testo fisso
  const data = {
    header: {
      titlePart1: sanityData?.titleLine1,
      titleItalic: sanityData?.titleHighlight,
      titlePart2: sanityData?.titleLine2
    },
    intro: {
      paragraph1: sanityData?.paragraph1,
      paragraph2: sanityData?.paragraph2
    }
  };

  const imageUrl = sanityData?.mainImage 
    ? urlFor(sanityData.mainImage).width(1000).url() 
    : null;

  return (
    <main className="min-h-screen bg-white pt-40 pb-20 px-6 md:px-16 text-[#1A1A1A] font-sans uppercase">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
          
          {/* TAG FISSO: CONSULENZA TECNICA */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-[#8B1A1A]"></div>
            <span className="text-[#8B1A1A] text-xs font-bold tracking-[0.2em] uppercase">
              Consulenza Tecnica
            </span>
          </div>

          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85]">
            {data.header.titlePart1} <br /> 
            <span className="text-[#8B1A1A] italic">{data.header.titleItalic}</span> <br />
            {data.header.titlePart2}
          </h1>
        </header>

        <div className="grid lg:grid-cols-2 gap-20 mb-32 items-center text-slate-500 text-xl leading-relaxed font-medium normal-case">
          
          <div className="aspect-video bg-slate-100 rounded-[40px] overflow-hidden border border-slate-200 shadow-xl">
             {/* Mostra l'immagine solo se caricata su Sanity */}
             {imageUrl && (
               <img 
                 src={imageUrl} 
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                 alt={data.header.titlePart1 || "Scal Plastica"} 
               />
             )}
          </div>
          
          <div className="px-4 flex flex-col items-start">
            {/* Mostra il paragrafo solo se c'è testo su Sanity */}
            {data.intro.paragraph1 && (
              <p className="mb-6 border-l-4 border-[#8B1A1A] pl-6 italic text-[#1A1A1A]">
                {data.intro.paragraph1}
              </p>
            )}
            
            {/* Mostra il paragrafo solo se c'è testo su Sanity */}
            {data.intro.paragraph2 && (
              <p className="pl-7 mb-10">{data.intro.paragraph2}</p>
            )}
            
            {/* Il bottone appare SOLO se c'è un PDF caricato su Sanity */}
            {sanityData?.brochureUrl && (
              <a 
                href={sanityData.brochureUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-7 bg-[#1A1A1A] text-white font-[900] uppercase tracking-[0.25em] text-xs px-8 py-5 rounded-xl flex items-center gap-4 hover:bg-[#8B1A1A] transition-all shadow-lg group"
              >
                Scarica Brochure
                <Download size={16} className="group-hover:-translate-y-1 transition-transform" />
              </a>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}