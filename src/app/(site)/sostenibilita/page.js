import React from 'react';
import { ShieldCheck, Globe, Recycle } from 'lucide-react';

export default function SostenibilitaPage() {
  return (
    <main className="min-h-screen bg-scal-green text-white pt-40 pb-20 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-scal-lime font-bold uppercase tracking-[0.4em] mb-6 text-xs">Impatto Ambientale</h2>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-12 uppercase italic text-white">
              VALORE <br /> PER IL <br /> <span className="text-scal-lime italic">FUTURO.</span>
            </h1>
            <p className="text-white/60 text-xl md:text-2xl leading-relaxed max-w-lg mb-16 font-medium">
              Scal Green Polymers non è solo un'azienda di riciclo. È un laboratorio di economia circolare applicata.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="border-l border-scal-lime/30 pl-8">
                <Globe className="text-scal-lime mb-4" size={32} />
                <span className="block text-5xl font-black mb-2">-40%</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Carbon Footprint ridotto</span>
              </div>
              <div className="border-l border-scal-lime/30 pl-8">
                <ShieldCheck className="text-scal-lime mb-4" size={32} />
                <span className="block text-5xl font-black mb-2">100%</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Tracciabilità Garantita</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-white/5 rounded-[60px] md:rounded-[100px] border border-white/10 flex items-center justify-center p-16 md:p-24 relative overflow-hidden group">
              <div className="text-center z-10">
                <Recycle size={180} className="text-scal-lime opacity-20 mb-8 mx-auto group-hover:rotate-180 transition-transform duration-1000" />
                <p className="text-sm md:text-lg font-bold uppercase tracking-[0.5em] text-scal-lime italic">Circular Lab</p>
              </div>
              <div className="absolute -top-24 -right-24 w-80 h-80 bg-scal-lime/10 blur-[120px] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}