"use client";
import { useState, useRef } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef(null);

  const handleButtonClick = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');
    
    const formData = new FormData(formRef.current);
    formData.append("access_key", "a6e0176d-a205-49e9-8e29-d6d889920d5c");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await res.json();
      
      if (data.success) {
        setStatus('success');
        formRef.current.reset(); 
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
        setErrorMessage(data.message || "Errore dal server Web3Forms");
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage("Errore di rete: controlla la connessione");
    }
  };

  return (
    <form ref={formRef} className="space-y-5 relative z-[9999] pointer-events-auto">
      <div className="grid md:grid-cols-2 gap-5">
        <input type="text" name="name" required placeholder="NOME" className="w-full bg-white border-2 border-[#8B1A1A]/20 rounded-2xl px-5 py-4 focus:border-[#8B1A1A] outline-none transition-all text-xs font-bold tracking-widest relative z-[9999] pointer-events-auto" />
        <input type="text" name="company" placeholder="AZIENDA" className="w-full bg-white border-2 border-[#8B1A1A]/20 rounded-2xl px-5 py-4 focus:border-[#8B1A1A] outline-none transition-all text-xs font-bold tracking-widest relative z-[9999] pointer-events-auto" />
      </div>
      <input type="email" name="email" required placeholder="EMAIL" className="w-full bg-white border-2 border-[#8B1A1A]/20 rounded-2xl px-5 py-4 focus:border-[#8B1A1A] outline-none transition-all text-xs font-bold tracking-widest relative z-[9999] pointer-events-auto" />
      <textarea rows="5" name="message" required placeholder="MESSAGGIO" className="w-full bg-white border-2 border-[#8B1A1A]/20 rounded-2xl px-5 py-4 focus:border-[#8B1A1A] outline-none transition-all text-xs font-bold tracking-widest resize-none relative z-[9999] pointer-events-auto"></textarea>
      
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

      <button 
        onClick={handleButtonClick}
        disabled={status === 'sending'}
        className="w-full bg-[#1A1A1A] disabled:bg-slate-400 text-white font-[900] uppercase tracking-[0.25em] py-6 rounded-2xl flex items-center justify-center gap-4 hover:bg-[#8B1A1A] transition-all shadow-lg group relative z-[9999] pointer-events-auto cursor-pointer"
      >
        {status === 'sending' ? 'INVIO IN CORSO...' : 'CONTATTACI'}
        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </button>

      {status === 'success' && <p className="text-[#39A935] font-bold text-center mt-4">Messaggio inviato con successo! Ti ricontatteremo a breve.</p>}
      {status === 'error' && (
        <div className="text-red-500 font-bold text-center mt-4 flex flex-col items-center">
          <p>C'è stato un errore.</p>
          <p className="text-xs bg-red-100 p-2 rounded mt-2 text-red-800 break-all">{errorMessage}</p>
        </div>
      )}
    </form>
  );
}