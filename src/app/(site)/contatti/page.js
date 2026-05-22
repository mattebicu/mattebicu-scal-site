import React from 'react';
import { Mail, Phone, Send, MapPin } from 'lucide-react';
import { client } from "../../../../sanity/lib/client";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getPageData() {
  try {
    const data = await client.fetch(
      `{
        "info": *[_type == "siteSettings"][0]{
          email,
          phone,
          phone2,
          address,
          "siteName": name
        },
        "page": *[_type == "page" && slug.current == "contatti"][0]{
          contactTitle,
          poeticPhrase
        }
      }`, 
      {}, 
      { cache: 'no-store' }
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
  
  // Prende il titolo da Sanity, se vuoto usa il fallback
  const rawTitle = data?.page?.contactTitle || "Contattaci";
  const poeticPhrase = data?.page?.poeticPhrase || "Ogni granulo di plastica riciclata racconta una storia di rinascita e di circolarità";
  
  const words = rawTitle.split(' ');
  const mainText = words.slice(0, -1).join(' ');
  const lastWord = words[words.length - 1];

  return (
    <main className="min-h-screen bg-white pt-44 pb-20 px-6 lg:px-16 font-sans text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <div className="flex flex-col">
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-[#39A935]"></div>
            <span className="text-[#39A935] text-xs font-bold tracking-[0.2em] uppercase">
              materie plastiche
            </span>
          </div>

          <h1 className="text-6xl md:text-[80px] font-[900] tracking-tighter uppercase leading-[0.85] mb-8">
            {mainText} <br />
            <span className="text-[#39A935] italic">{lastWord}</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 italic mb-16 border-l-4 border-[#39A935] pl-6 py-1 leading-relaxed">
            "{poeticPhrase}"
          </p>
          
          <div className="space-y-10">
            {/* EMAIL */}
            <a href={`mailto:${info?.email}`} className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white border border-[#39A935]/20 rounded-2xl flex items-center justify-center text-[#39A935] shadow-sm group-hover:bg-[#39A935] group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400 mb-1 tracking-widest">Email Advisory</p>
                <p className="font-bold text-xl group-hover:text-[#39A935] transition-colors">{info?.email || "info@scal-plastica.com"}</p>
              </div>
            </a>

            {/* UFFICIO TECNICO 1 */}
            <a href={`tel:${info?.phone?.replace(/\s+/g, '')}`} className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white border border-[#39A935]/20 rounded-2xl flex items-center justify-center text-[#39A935] shadow-sm group-hover:bg-[#39A935] group-hover:text-white transition-all">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400 mb-1 tracking-widest">Ufficio Tecnico</p>
                <p className="font-bold text-xl group-hover:text-[#39A935] transition-colors">{info?.phone || "+39 375 6107995"}</p>
              </div>
            </a>

            {/* UFFICIO TECNICO 2 */}
            {info?.phone2 && (
              <a href={`tel:${info?.phone2?.replace(/\s+/g, '')}`} className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white border border-[#39A935]/20 rounded-2xl flex items-center justify-center text-[#39A935] shadow-sm group-hover:bg-[#39A935] group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 mb-1 tracking-widest">Ufficio Tecnico</p>
                  <p className="font-bold text-xl group-hover:text-[#39A935] transition-colors">{info?.phone2}</p>
                </div>
              </a>
            )}

            {/* INDIRIZZO */}
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-white border border-[#39A935]/20 rounded-2xl flex items-center justify-center text-[#39A935] shadow-sm">
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
              <input type="text" placeholder="NOME" className="w-full bg-white border-2 border-[#39A935]/20 rounded-2xl px-5 py-4 focus:border-[#39A935] outline-none transition-all text-xs font-bold tracking-widest" />
              <input type="text" placeholder="AZIENDA" className="w-full bg-white border-2 border-[#39A935]/20 rounded-2xl px-5 py-4 focus:border-[#39A935] outline-none transition-all text-xs font-bold tracking-widest" />
            </div>
            <input type="email" placeholder="EMAIL" className="w-full bg-white border-2 border-[#39A935]/20 rounded-2xl px-5 py-4 focus:border-[#39A935] outline-none transition-all text-xs font-bold tracking-widest" />
            <textarea rows="5" placeholder="MESSAGGIO" className="w-full bg-white border-2 border-[#39A935]/20 rounded-2xl px-5 py-4 focus:border-[#39A935] outline-none transition-all text-xs font-bold tracking-widest resize-none"></textarea>
            
            <button type="button" className="w-full bg-[#1A1A1A] text-white font-[900] uppercase tracking-[0.25em] py-6 rounded-2xl flex items-center justify-center gap-4 hover:bg-[#39A935] transition-all shadow-lg group">
              CONTATTACI 
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}