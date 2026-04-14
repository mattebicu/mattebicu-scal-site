import React from 'react';
import { Mail, Phone, Send, MapPin } from 'lucide-react';
// Percorso corretto: 4 livelli indietro
import { client } from "../../../../sanity/lib/client";

async function getPageData() {
  try {
    const data = await client.fetch(
      `{
        "info": *[_type == "siteSettings"][0]{
          email,
          phone,
          address,
          "siteName": name
        },
        "page": *[_type == "page" && slug.current == "contatti"][0]{
          contactTitle
        }
      }`, {}, { next: { revalidate: 0 } }
    );
    return data;
  } catch (error) {
    console.error("Errore fetch Contatti:", error);
    return null;
  }
}

export default async function ContattiPage() {
  const data = await getPageData();
  const info = data?.info;
  
  const rawTitle = data?.page?.contactTitle || "Richiedi i nostri Servizi";
  
  const words = rawTitle.split(' ');
  const mainText = words.slice(0, -1).join(' ');
  const lastWord = words[words.length - 1];

  return (
    <main className="min-h-screen bg-white pt-44 pb-20 px-6 lg:px-16 font-sans text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <div className="flex flex-col">
          <h1 className="text-6xl md:text-[80px] font-[900] tracking-tighter uppercase leading-[0.85] mb-20">
            {mainText} <br />
            <span className="text-[#8B1A1A] italic">{lastWord}</span>
          </h1>
          
          <div className="space-y-10">
            <a href={`mailto:${info?.email}`} className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white border border-[#8B1A1A]/20 rounded-2xl flex items-center justify-center text-[#8B1A1A] shadow-sm group-hover:bg-[#8B1A1A] group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400 mb-1 tracking-widest">Email Advisory</p>
                <p className="font-bold text-xl group-hover:text-[#8B1A1A] transition-colors">{info?.email || "info@scal-plastica.com"}</p>
              </div>
            </a>

            <a href={`tel:${info?.phone?.replace(/\s+/g, '')}`} className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white border border-[#8B1A1A]/20 rounded-2xl flex items-center justify-center text-[#8B1A1A] shadow-sm group-hover:bg-[#8B1A1A] group-hover:text-white transition-all">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400 mb-1 tracking-widest">
                  {info?.siteName || "SCAL Plastica"}
                </p>
                <p className="font-bold text-xl group-hover:text-[#8B1A1A] transition-colors">{info?.phone || "+39 375 6107995"}</p>
              </div>
            </a>

            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-white border border-[#8B1A1A]/20 rounded-2xl flex items-center justify-center text-[#8B1A1A] shadow-sm">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400 mb-1 tracking-widest">Sede Legale</p>
                <p className="font-bold text-xl">{info?.address || "Via Via - Torino - Italia"}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:mt-32 bg-slate-50/50 p-8 md:p-14 rounded-[60px] border border-slate-100 shadow-sm">
          <form className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <input type="text" placeholder="NOME" className="w-full bg-white border-2 border-[#8B1A1A]/20 rounded-2xl px-5 py-4 focus:border-[#8B1A1A] outline-none transition-all text-xs font-bold tracking-widest" />
              <input type="text" placeholder="AZIENDA" className="w-full bg-white border-2 border-[#8B1A1A]/20 rounded-2xl px-5 py-4 focus:border-[#8B1A1A] outline-none transition-all text-xs font-bold tracking-widest" />
            </div>
            <input type="email" placeholder="EMAIL" className="w-full bg-white border-2 border-[#8B1A1A]/20 rounded-2xl px-5 py-4 focus:border-[#8B1A1A] outline-none transition-all text-xs font-bold tracking-widest" />
            <textarea rows="5" placeholder="MESSAGGIO" className="w-full bg-white border-2 border-[#8B1A1A]/20 rounded-2xl px-5 py-4 focus:border-[#8B1A1A] outline-none transition-all text-xs font-bold tracking-widest resize-none"></textarea>
            
            <button type="button" className="w-full bg-[#1A1A1A] text-white font-[900] uppercase tracking-[0.25em] py-6 rounded-2xl flex items-center justify-center gap-4 hover:bg-[#8B1A1A] transition-all shadow-lg group">
              Invia Richiesta 
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}