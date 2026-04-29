"use client";
import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const formData = new FormData(e.target);
    
    // 👇 INCOLLA QUI LA TUA ACCESS KEY DI WEB3FORMS 👇
    formData.append("access_key", "LA_TUA_ACCESS_KEY_QUI");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      if (res.ok) {
        setStatus('success');
        e.target.reset(); // Svuota il form
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <input type="text" name="name" required placeholder="NOME" className="w-full bg-white border-2 border-[#8B1A1A]/20 rounded-2xl px-5 py-4 focus:border-[#8B1A1A] outline-none transition-all text-xs font-bold tracking-widest" />
        <input type="text" name="company" placeholder="AZIENDA" className="w-full bg-white border-2 border-[#8B1A1A]/20 rounded-2xl px-5 py-4 focus:border-[#8B1A1A] outline-none transition-all text-xs font-bold tracking-widest" />
      </div>
      <input type="email" name="email" required placeholder="EMAIL" className="w-full bg-white border-2 border-[#8B1A1A]/20 rounded-2xl px-5 py-4 focus:border-[#8B1A1A] outline-none transition-all text-xs font-bold tracking-widest" />
      <textarea rows="5" name="message" required placeholder="MESSAGGIO" className="w-full bg-white border-2 border-[#8B1A1A]/20 rounded-2xl px-5 py-4 focus:border-[#8B1A1A] outline-none transition-all text-xs font-bold tracking-widest resize-none"></textarea>
      
      <button 
        type="submit" 
        disabled={status === 'sending'}
        className="w-full bg-[#1A1A1A] disabled:bg-slate-400 text-white font-[900] uppercase tracking-[0.25em] py-6 rounded-2xl flex items-center justify-center gap-4 hover:bg-[#8B1A1A] transition-all shadow-lg group"
      >
        {status === 'sending' ? 'INVIO IN CORSO...' : 'CONTATTACI'}
        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </button>

      {status === 'success' && <p className="text-[#39A935] font-bold text-center mt-4">Messaggio inviato con successo! Ti ricontatteremo a breve.</p>}
      {status === 'error' && <p className="text-red-500 font-bold text-center mt-4">C'è stato un errore. Riprova più tardi.</p>}
    </form>
  );
}