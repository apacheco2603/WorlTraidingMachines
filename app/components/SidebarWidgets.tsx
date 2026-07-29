"use client";

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function SidebarWidgets() {
  const { language } = useLanguage();
  const [usdAmount, setUsdAmount] = useState<string>('');
  const [converted, setConverted] = useState({
    eur: 0,
    pln: 0,
    gbp: 0
  });

  const handleConvert = () => {
    const amount = parseFloat(usdAmount);
    if (isNaN(amount)) {
      setConverted({ eur: 0, pln: 0, gbp: 0 });
      return;
    }
    
    // Placeholder exchange rates relative to 1 USD
    const rates = {
      eur: 0.92,
      pln: 3.98,
      gbp: 0.79
    };

    setConverted({
      eur: Number((amount * rates.eur).toFixed(2)),
      pln: Number((amount * rates.pln).toFixed(2)),
      gbp: Number((amount * rates.gbp).toFixed(2))
    });
  };

  return (
    <div className="space-y-6 mt-6">
      {/* Opening Hours Widget */}
      <div className="bg-slate-700 text-white rounded-lg p-6 shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="font-bold text-lg uppercase tracking-wider">
            {language === 'es' ? 'Horario de Atención' : 'Opening Hours'}
          </h3>
        </div>
        <ul className="space-y-2 text-sm">
          <li className="flex justify-between"><span className="font-semibold">{language === 'es' ? 'Lunes' : 'Monday'}:</span> <span>8:00 - 16:00</span></li>
          <li className="flex justify-between"><span className="font-semibold">{language === 'es' ? 'Martes' : 'Tuesday'}:</span> <span>8:00 - 16:00</span></li>
          <li className="flex justify-between"><span className="font-semibold">{language === 'es' ? 'Miércoles' : 'Wednesday'}:</span> <span>8:00 - 16:00</span></li>
          <li className="flex justify-between"><span className="font-semibold">{language === 'es' ? 'Jueves' : 'Thursday'}:</span> <span>8:00 - 16:00</span></li>
          <li className="flex justify-between"><span className="font-semibold">{language === 'es' ? 'Viernes' : 'Friday'}:</span> <span>8:00 - 16:00</span></li>
          <li className="flex justify-between"><span className="font-semibold">{language === 'es' ? 'Sábado' : 'Saturday'}:</span> <span>{language === 'es' ? 'Cerrado' : 'closed'}</span></li>
          <li className="flex justify-between"><span className="font-semibold">{language === 'es' ? 'Domingo' : 'Sunday'}:</span> <span>{language === 'es' ? 'Cerrado' : 'closed'}</span></li>
        </ul>
      </div>

      {/* Currency Converter Widget */}
      <div className="bg-slate-600 text-white rounded-lg p-6 shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h3 className="font-bold text-lg uppercase tracking-wider">
            {language === 'es' ? 'Conversor de Moneda' : 'Currency Converter'}
          </h3>
        </div>
        
        <div className="space-y-4 text-sm font-semibold">
          <div className="flex items-center gap-2">
            <label className="w-10">USD:</label>
            <input 
              type="number" 
              value={usdAmount}
              onChange={(e) => setUsdAmount(e.target.value)}
              className="flex-1 px-2 py-1 text-black border border-transparent rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="0"
            />
            <button 
              onClick={handleConvert}
              className="px-3 py-1 bg-slate-700 hover:bg-slate-800 border border-slate-500 rounded text-xs tracking-wider transition-colors"
            >
              {language === 'es' ? 'convertir' : 'convert'}
            </button>
          </div>
          
          <div className="flex justify-between items-center text-slate-300">
            <span>EUR:</span>
            <span className="text-yellow-500">{converted.eur}</span>
          </div>
          <div className="flex justify-between items-center text-slate-300">
            <span>PLN:</span>
            <span className="text-yellow-500">{converted.pln}</span>
          </div>
          <div className="flex justify-between items-center text-slate-300">
            <span>GBP:</span>
            <span className="text-yellow-500">{converted.gbp}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
