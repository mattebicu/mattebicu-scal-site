"use client";
import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);

    // Controllo campi obbligatori
    const name = formData.get('name');
    const company = formData.get('company');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name || !company || !email || !message) {
      setStatus('error');
      setErrorMessage('Attenzione: tutti i campi (Nome, Azienda, Email, Messaggio) sono obbligatori.');
      return;
    }

    setStatus('sending');
    setErrorMessage('');
    
    formData.append("access_key", "a6e0176d-a205-49e9-8e29-d6d889920d5c");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await res.json();
      
      if (data.success) {
        setStatus('success');
        form.reset(); 
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
    <form noValidate className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-5">
        <input type="text" name="name" required placeholder="NOME" className="w-full bg-white border-2 border-[#39A935]/20 rounded-2xl px-5 py-4 focus:border-[#39A935] outline-none transition-all text-xs font-bold tracking-widest" />
        <input type="text" name="company" required placeholder="AZIENDA" className="w-full bg-white border-2 border-[#39A935]/20 rounded-2xl px-5 py-4 focus:border-[#39A935] outline-none transition-all text-xs font-bold tracking-widest" />
      </div>
      <input type="email" name="email" required placeholder="EMAIL" className="w-full bg-white border-2 border-[#39A935]/20 rounded-2xl px-5 py-4 focus:border-[#39A935] outline-none transition-all text-xs font-bold tracking-widest" />
      <textarea rows="5" name="message" required placeholder="MESSAGGIO" className="w-full bg-white border-2 border-[#39A935]/20 rounded-2xl px-5 py-4 focus:border-[#39A935] outline-none transition-all text-xs font-bold tracking-widest resize-none"></textarea>
      
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

      <button 
        type="submit" 
        disabled={status === 'sending'}
        className="w-full bg-[#1A1A1A] disabled:bg-slate-400 text-white font-[900] uppercase tracking-[0.25em] py-6 rounded-2xl flex items-center justify-center gap-4 hover:bg-[#39A935] transition-all shadow-lg group cursor-pointer"
      >
        {status === 'sending' ? 'INVIO IN CORSO...' : 'CONTATTACI'}
        {status !== 'sending' && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
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