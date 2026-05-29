"use client";
import { useState, useRef } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef(null);

  const handleButtonClick = async (e) => {
    e.preventDefault();
    alert("React funziona! Ora proviamo l'invio...");
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
    <form ref={formRef} noValidate className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <input type="text" name="name" placeholder="NOME" className="w-full bg-white border-2 border-[#8B1A1A]/20 rounded-2xl px-5 py-4 focus:border-[#8B1A1A] outline-none transition-all text-xs font-bold tracking-widest" />
        <input type="text" name="company" placeholder="AZIENDA" className="w-full bg-white border-2 border-[#8B1A1A]/20 rounded-2xl px-5 py-4 focus:border-[#8B1A1A] outline-none transition-all text-xs font-bold tracking-widest" />
      </div>
      <input type="email" name="email" placeholder="EMAIL" className="w-full bg-white border-2 border-[#8B1A1A]/20 rounded-2xl px-5 py-4 focus:border-[#8B1A1A] outline-none transition-all text-xs font-bold tracking-widest" />
      <textarea rows="5" name="message" placeholder="MESSAGGIO" className="w-full bg-white border-2 border-[#8B1A1A]/20 rounded-2xl px-5 py-4 focus:border-[#8B1A1A] outline-none transition-all text-xs font-bold tracking-widest resize-none"></textarea>
      
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

      <button 
        type="button" 
        onClick={handleButtonClick}
        disabled={status === 'sending'}
        className="w-full bg-[#1A1A1A] disabled:bg-slate-400 text-white font-[900] uppercase tracking-[0.25em] py-6 rounded-2xl flex items-center justify-center gap-4 hover:bg-[#8B1A1A] transition-all shadow-lg cursor-pointer"
      >
        {status === 'sending' ? 'INVIO IN CORSO...' : 'CONTATTACI'}
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