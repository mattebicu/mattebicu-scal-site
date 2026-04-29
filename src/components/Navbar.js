"use client";
import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Linkedin } from 'lucide-react';
import { client } from "../../sanity/lib/client";

export default function Navbar({ content: initialContent }) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(initialContent);

  useEffect(() => {
    // 1. Fetch Dati Sanity
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

    // 2. Iniezione Script Google Translate
    const addGoogleTranslateScript = () => {
      if (!document.getElementById('google-translate-script')) {
        const script = document.createElement('script');
        script.id = 'google-translate-script';
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.body.appendChild(script);

        window.googleTranslateElementInit = () => {
          // Inizializza il widget per il Desktop
          new window.google.translate.TranslateElement(
            { pageLanguage: 'it', layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE },
            'google_translate_element'
          );
          // Inizializza il widget per il Mobile
          new window.google.translate.TranslateElement(
            { pageLanguage: 'it', layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE },
            'google_translate_element_mobile'
          );
        };
      }
    };
    addGoogleTranslateScript();
  }, []);

  const data = content || initialContent;
  
  const externalLinkTitle = data?.externalLink?.title || "Scal Consulenze Plastiche";
  const externalLinkUrl = "https://scal-plastica.com/";
  const linkedinUrl = data?.socials?.linkedin || "#";
  const logoUrl = data?.logoUrl;

  const brandRed = "text-[#39A935]";
  const brandRedHover = "hover:text-[#39A935]";
  const brandDark = "text-[#1A1A1A]";

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white border-b border-slate-100 shadow-sm">
      {/* Altezza della navbar aumentata a h-28 e h-32 */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 h-28 md:h-32 flex justify-between items-center">
        
        <div className="flex-shrink-0 flex items-center">
          <a href="/" className="hover:opacity-90 transition-opacity block">
            {logoUrl && (
              <img 
                src={logoUrl} 
                alt={data?.siteName || "Logo"} 
                // Altezza del logo aumentata a h-24 e h-28
                className="h-24 md:h-28 w-auto object-contain block -mt-1" 
              />
            )}
          </a>
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500">
            <a href="/servizi" className={`${brandRedHover} transition-colors uppercase`}>Servizi</a>
            <a href="/chi-siamo" className={`${brandRedHover} transition-colors uppercase`}>Chi Siamo</a>
            <a href="/contatti" className={`${brandRedHover} transition-colors uppercase`}>Contatti</a>
          </div>

          <div className="h-6 w-px bg-slate-200 mx-2"></div>

          <div className="flex items-center gap-4">
            
            {/* CONTAINER GOOGLE TRANSLATE DESKTOP */}
            <div id="google_translate_element" className="h-[30px] overflow-hidden flex items-center"></div>

            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0077b5] transition-colors ml-2">
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

        <button onClick={() => setIsOpen(!isOpen)} className={`lg:hidden ${brandDark}`}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-28 left-0 w-full bg-white border-b border-slate-100 shadow-xl p-6 flex flex-col gap-6">
          <a href="/servizi" className="text-lg font-bold uppercase text-slate-600">Servizi</a>
          <a href="/chi-siamo" className="text-lg font-bold uppercase text-slate-600">Chi Siamo</a>
          <a href="/contatti" className="text-lg font-bold uppercase text-slate-600">Contatti</a>
          <hr className="border-slate-100" />
          <div className="flex items-center justify-between">
             
             {/* CONTAINER GOOGLE TRANSLATE MOBILE */}
             <div id="google_translate_element_mobile"></div>
             
             <a href={linkedinUrl} target="_blank" className="text-slate-500">
                <Linkedin size={20} />
              </a>
          </div>
        </div>
      )}
    </nav>
  );
}