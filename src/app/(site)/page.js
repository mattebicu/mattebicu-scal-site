import React from 'react';
import { ArrowRight } from 'lucide-react';
import { client } from "@/sanity/lib/client";
import HeroSlideshow from "@/components/HeroSlideshow";

async function getData() {
  const query = `{
    "homeData": *[_type == "home"][0]{
      hero {
        tag,
        titleLine1,
        titleLine2,
        titleLine3,
        titleLine4,
        description,
        ctaPrimary,
        slideshow
      },
      "testoSottoCopertina": sottoCopertina.testo
    }
  }`;
  return await client.fetch(query, {}, { next: { revalidate: 10 } });
}

export default async function Home() {
  const data = await getData();
  const hero = data?.homeData?.hero;

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-slate-900 overflow-x-hidden">
      <section className="px-6 lg:px-16 pt-32 pb-12 flex items-center min-h-[85vh]">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-4xl md:text-6xl lg:text-[72px] font-black uppercase leading-[0.9] mb-6">
              {hero?.titleLine1} <br />
              <span className="text-[#8B1A1A] italic">{hero?.titleLine3}</span>
            </h1>
            <p className="text-lg text-slate-500 mb-8 italic">{hero?.description}</p>
            <a href="/contatti" className="bg-[#1A1A1A] text-white px-10 py-5 rounded-lg font-bold uppercase text-[11px] inline-flex items-center gap-3">
              {hero?.ctaPrimary || "Contattaci"} <ArrowRight size={14} />
            </a>
          </div>
          <div className="lg:col-span-5 h-[450px] lg:h-[650px] relative rounded-[40px] overflow-hidden">
              {hero?.slideshow && <HeroSlideshow images={hero.slideshow} />}
          </div>
        </div>
      </section>
    </div>
  );
}