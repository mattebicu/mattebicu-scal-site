"use client";
import { useState, useEffect } from 'react';
import { ArrowUpRight, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { client } from "../../sanity/lib/client"; // Assicurati che il percorso sia giusto
import { urlFor } from "../../sanity/lib/image";

export default function Footer() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1. CHIEDIAMO ESPLICITAMENTE phoneGreen A SANITY
        const data = await client.fetch(`{
          "home": *[_type == "home"][0],
          "settings": *[_type == "siteSettings"][0]{
            ...,
            phoneGreen,
            logo,
            socials
          }
        }`);
        if (data) setContent(data);
      } catch (err) {
        console.error("Errore Footer:", err);
      }
    };
    fetchData();
  }, []);

  const home = content?.home;
  const settings = content?.settings;

  const logoUrl = settings?.logo 
    ? urlFor(settings.logo).url() 
    : (home?.site?.logo ? urlFor(home.site.logo).url() : null);

  const siteName = settings?.name || home?.site?.name || "SCAL PLASTICA";

  return (
    <footer className="bg-white text-slate-900 pt-20 pb-10 border-t border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* LOGO E DESCRIZIONE */}
          <div className="flex flex-col gap-6">
            <a href="/">
              {logoUrl ? (
                <img src={logoUrl} alt={siteName} className="h-16 w-auto object-contain block" />
              ) : (
                <span className="font-black text-2xl tracking-tighter uppercase text-[#8B1A1A]">{siteName}</span>
              )}
            </a>
            <p className="text-slate-500 text-sm italic font-medium">
              Eccellenza e innovazione nella consulenza tecnica per il mondo delle materie plastiche.
            </p>
          </div>

          {/* MENU */}
          <div>
            <h4 className="font-bold uppercase text-[11px] tracking-widest text-[#8B1A1A] mb-8">Menu</h4>
            <ul className="flex flex-col gap-4 text-sm font-bold uppercase text-slate-600">
              <li><a href="/audit" className="hover:text-[#8B1A1A] transition-colors">Audit</a></li>
              <li><a href="/chi-siamo" className="hover:text-[#8B1A1A] transition-colors">Chi Siamo</a></li>
              <li><a href="/contatti" className="hover:text-[#8B1A1A] transition-colors">Contatti</a></li>
            </ul>
          </div>

          {/* NETWORK */}
          <div>
            <h4 className="font-bold uppercase text-[11px] tracking-widest text-[#8B1A1A] mb-8">Network</h4>
            <div className="flex flex-col gap-6">
              <a href={home?.site?.externalLink?.url || "#"} target="_blank" className="flex items-center gap-2 text-sm font-bold hover:text-[#8B1A1A] transition-colors">
                {home?.site?.externalLink?.title || "Scal GreenPolymers"} <ArrowUpRight size={16} />
              </a>
              <a href={settings?.socials?.linkedin || home?.site?.socials?.linkedin || "#"} target="_blank" className="p-3 w-fit rounded-full border border-slate-200 text-slate-400 hover:text-[#0077b5] hover:border-[#0077b5] transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* CONTATTI (MODIFICATO PER AGGIUNGERE IL SECONDO NUMERO) */}
          <div>
            <h4 className="font-bold uppercase text-[11px] tracking-widest text-[#8B1A1A] mb-8">Contatti</h4>
            <ul className="flex flex-col gap-6 text-sm text-slate-600 font-bold uppercase">
              
              <li>
                <a href={`mailto:${settings?.email}`} className="flex items-center gap-3 hover:text-[#8B1A1A] transition-colors">
                  <Mail size={16} className="text-[#8B1A1A]" /> 
                  {settings?.email || "info@scal-plastica.com"}
                </a>
              </li>
              
              {/* PRIMO NUMERO */}
              <li>
                <div className="text-[10px] text-slate-400 mb-1 tracking-widest">SCAL Plastica</div>
                <a href={`tel:${settings?.phone?.replace(/\s+/g, '')}`} className="flex items-center gap-3 hover:text-[#8B1A1A] transition-colors">
                  <Phone size={16} className="text-[#8B1A1A]" /> 
                  {settings?.phone || "+39 000 0000000"}
                </a>
              </li>

              {/* SECONDO NUMERO (GREENPOLYMERS) - ORA È QUI */}
              {settings?.phoneGreen && (
                <li>
                  <div className="text-[10px] text-slate-400 mb-1 tracking-widest">GreenPolymers</div>
                  <a href={`tel:${settings?.phoneGreen?.replace(/\s+/g, '')}`} className="flex items-center gap-3 hover:text-[#8B1A1A] transition-colors">
                    <Phone size={16} className="text-[#8B1A1A]" /> 
                    {settings?.phoneGreen}
                  </a>
                </li>
              )}

              <li className="flex items-start gap-3 italic mt-2">
                <MapPin size={16} className="text-[#8B1A1A] shrink-0 mt-1" /> 
                <span>{settings?.address || "Italia"}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="pt-8 border-t border-slate-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
              © 2026 {siteName} {settings?.vatNumber ? `- P.IVA ${settings.vatNumber}` : ''}
            </p>
            <div className="flex gap-6 text-[10px] uppercase font-bold tracking-widest text-slate-400">
              <a href="/privacy" className="hover:text-[#8B1A1A]">Privacy Policy</a>
              <a href="/cookie" className="hover:text-[#8B1A1A]">Cookie Policy</a>
            </div>
          </div>
          {settings?.legalInfo && (
            <p className="text-[9px] uppercase font-bold tracking-widest text-slate-300 leading-relaxed whitespace-pre-line text-center md:text-left">
              {settings.legalInfo}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}