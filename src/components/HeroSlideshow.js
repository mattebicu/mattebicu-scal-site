'use client';
import { useState, useEffect } from 'react';
import { urlFor } from "../../sanity/lib/image";

export default function HeroSlideshow({ images }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    
    // Cambiato da 4000 a 6000 (6 secondi) per uno scorrimento più lento
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000); 
    
    return () => clearInterval(timer);
  }, [images]);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center text-slate-300 font-bold uppercase tracking-widest bg-slate-50 rounded-[3rem] border border-slate-100 shadow-inner">
        SCAL PLASTICA IMAGE
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden rounded-[3rem] shadow-2xl border border-slate-100 bg-slate-50">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={urlFor(img).width(1200).height(1000).url()}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      {/* Indicatori (pallini) in basso */}
      {images.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {images.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-700 ${
                i === current ? 'bg-blue-600 w-8' : 'bg-white/50 w-2'
              }`}
            />
          ))}
        </div>
      )}
      
      {/* Overlay sfumato per profondità */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none"></div>
    </div>
  );
}