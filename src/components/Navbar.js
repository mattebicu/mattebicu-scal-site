"use client";
import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Linkedin, Globe } from 'lucide-react';
import { client } from "../../sanity/lib/client";

export default function Navbar({ content: initialContent }) {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState('IT');
  const [content, setContent] = useState(initialContent);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(`*[_type == "home"][0]{
          "logoUrl": site.logo.asset->url,
          "siteName": site.name,
          "externalLink": site.externalLink,
          "socials": site.socials
        }`);
        if (data) setContent(data);
      } catch (err) {
        console.error("Errore fetch Sanity:", err);
      }
    };
    fetchData();
  }, []);

  const data = content || initialContent;
  
  const externalLinkTitle = data?.externalLink?.title || "Scal GreenPolymers";
  const externalLinkUrl = data?.externalLink?.url || "#";
  const linkedinUrl = data?.socials?.linkedin || "#";
  const logoUrl = data?.logoUrl;

  const brandRed = "text-[#39A935]";
  const brandRedHover = "hover:text-[#39A935]";
  const brandDark = "text-[#1A1A1A]";

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 h-20 md:h-24 flex justify-between items-center">
        
        {/* AREA LOGO - Ingrandito 1.5x (h-16 e h-20) */}
        <div className="flex-shrink-0 flex items-center">
          <a href="/" className="hover:opacity-90 transition-opacity block">
            {logoUrl && (
              <img 
                src={logoUrl} 
                alt={data?.siteName || "Logo"} 
                className="h-16 md:h-20 w-auto object-contain block -mt-1" 
              />
            )}
          </a>
        </div>

        {/* --- MENU DESKTOP --- */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500">
            <a href="/servizi" className={`${brandRedHover} transition-colors uppercase`}>Servizi</a>
            <a href="/chi-siamo" className={`${brandRedHover} transition-colors uppercase`}>Chi Siamo</a>
            <a href="/contatti" className={`${brandRedHover} transition-colors uppercase`}>Contatti</a>
          </div>

          <div className="h-6 w-px bg-slate-200 mx-2"></div>

          <div className="flex items-center gap-4">
            <button 
              className={`flex items-center gap-1 text-slate-400 ${brandRedHover} text-[10px] font-bold uppercase tracking-widest`}
              onClick={() => setLang(lang === 'IT' ? 'EN' : 'IT')}
            >
              <Globe size={16} />
              <span>{lang}</span>
            </button>

            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0077b5] transition-colors">
              <Linkedin size={20} strokeWidth={1.5} />
            </a>

            <a 
              href={externalLinkUrl} 
              target="_blank" 
              className={`flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-200 text-[10px] font-bold uppercase tracking-widest hover:bg-slate-50 transition-all ${brandDark}`}
            >
              {externalLinkTitle} <ArrowUpRight size={14} className={brandRed} />
            </a>
          </div>
        </div>

        {/* MENU MOBILE */}
        <button onClick={() => setIsOpen(!isOpen)} className={`lg:hidden ${brandDark}`}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-xl p-6 flex flex-col gap-6">
          <a href="/servizi" className="text-lg font-bold uppercase text-slate-600">Servizi</a>
          <a href="/chi-siamo" className="text-lg font-bold uppercase text-slate-600">Chi Siamo</a>
          <a href="/contatti" className="text-lg font-bold uppercase text-slate-600">Contatti</a>
          <hr className="border-slate-100" />
          <div className="flex items-center justify-between">
             <button onClick={() => setLang(lang === 'IT' ? 'EN' : 'IT')} className="flex items-center gap-2 text-slate-500 font-bold text-xs">
                <Globe size={16} /> {lang}
             </button>
             <a href={linkedinUrl} target="_blank" className="text-slate-500">
                <Linkedin size={20} />
              </a>
          </div>
        </div>
      )}
    </nav>
  );
}