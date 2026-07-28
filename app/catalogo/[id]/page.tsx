"use client";

import { useState, use } from "react";
import Link from "next/link";
import { machineryList } from "../../data/machinery";
import { countries } from "../../data/countries";
import { useLanguage } from "../../context/LanguageContext";

export default function MachineDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const { language } = useLanguage();
  const [selectedCountry, setSelectedCountry] = useState(countries[0].code); // Default is first which is PE

  const machine = machineryList.find(m => m.id === resolvedParams.id);

  if (!machine) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            {language === 'es' ? 'Máquina no encontrada' : 'Machine not found'}
          </h2>
          <Link href="/catalogo" className="text-blue-600 hover:underline">
            {language === 'es' ? 'Volver al catálogo' : 'Return to catalog'}
          </Link>
        </div>
      </div>
    );
  }

  const selectedCountryName = countries.find(c => c.code === selectedCountry)?.name;

  const handleWhatsAppClick = (withShipping: boolean) => {
    const phoneNumber = "1234567890"; // Reemplazar con el número real
    const textEs = withShipping 
      ? `Hola, estoy interesado en cotizar la máquina ${machine.name.es} con envío a ${selectedCountryName}.`
      : `Hola, estoy interesado en cotizar la máquina ${machine.name.es}.`;
    
    const textEn = withShipping
      ? `Hello, I am interested in getting a quote for the ${machine.name.en} with shipping to ${selectedCountryName}.`
      : `Hello, I am interested in getting a quote for the ${machine.name.en}.`;
  
    const finalMessage = language === 'es' ? textEs : textEn;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/catalogo" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium">
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {language === 'es' ? 'Volver al catálogo' : 'Back to catalog'}
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Image Side */}
            <div 
              className="h-96 lg:h-auto min-h-[500px] w-full bg-cover bg-center"
              style={{ backgroundImage: `url('${machine.imageUrl}')` }}
            />
            
            {/* Content Side */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                {machine.name[language]}
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {machine.description[language]}
              </p>

              <div className="mb-10">
                <h3 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                  {language === 'es' ? 'Características Principales' : 'Key Features'}
                </h3>
                <ul className="space-y-3">
                  {machine.features[language].map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 space-y-6">
                <div>
                  <label htmlFor="country" className="block text-sm font-semibold text-slate-700 mb-2">
                    {language === 'es' ? 'Seleccione el país de destino:' : 'Select destination country:'}
                  </label>
                  <select
                    id="country"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="block w-full bg-white border border-slate-300 text-slate-900 rounded py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium"
                  >
                    {countries.map(c => (
                      <option key={c.code} value={c.code}>{c.name}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={() => handleWhatsAppClick(false)} className="flex-1 px-6 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded shadow transition-colors">
                    {language === 'es' ? 'Cotizar' : 'Quote'}
                  </button>
                  <button onClick={() => handleWhatsAppClick(true)} className="flex-1 px-6 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded shadow transition-colors">
                    {language === 'es' ? `Cotizar con envío a ${selectedCountryName}` : `Quote with shipping to ${selectedCountryName}`}
                  </button>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
