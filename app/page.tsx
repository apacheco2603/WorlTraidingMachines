"use client";

import Link from "next/link";
import { useLanguage } from "./context/LanguageContext";

export default function Home() {
  const { language } = useLanguage();
  
  const content = {
    en: {
      heroTitle: "Heavy Machinery. Worldwide Shipping.",
      heroSubtitle: "Premium equipment for your most demanding projects, delivered anywhere in the world.",
      cta: "Explore Catalog",
      contact: "Contact Us"
    },
    es: {
      heroTitle: "Maquinaria Pesada. Envío Mundial.",
      heroSubtitle: "Equipos premium para sus proyectos más exigentes, entregados en cualquier parte del mundo.",
      cta: "Explorar Catálogo",
      contact: "Contáctenos"
    }
  };

  const t = content[language];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] min-h-[600px] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/4/41/Left_side_of_Flying_Scotsman.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent z-10" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              {t.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              {t.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/catalogo"
                className="inline-flex justify-center items-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold rounded shadow-lg transition-all duration-200 transform hover:-translate-y-1"
              >
                {t.cta}
              </Link>
              <Link 
                href="/nosotros"
                className="inline-flex justify-center items-center px-8 py-4 bg-slate-800/80 hover:bg-slate-700 backdrop-blur-sm border border-slate-600 text-white text-lg font-bold rounded shadow-lg transition-all duration-200"
              >
                {t.contact}
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Value Proposition */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-6">
              <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{language === 'es' ? 'Inventario Premium' : 'Premium Inventory'}</h3>
              <p className="text-slate-600 leading-relaxed">{language === 'es' ? 'Maquinaria de las mejores marcas, inspeccionada y lista para trabajar.' : 'Top-brand machinery, inspected and ready to work.'}</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{language === 'es' ? 'Exportación Global' : 'Global Export'}</h3>
              <p className="text-slate-600 leading-relaxed">{language === 'es' ? 'Gestionamos la logística internacional para que su equipo llegue seguro.' : 'We manage international logistics so your equipment arrives safely.'}</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{language === 'es' ? 'Compra Segura' : 'Secure Purchase'}</h3>
              <p className="text-slate-600 leading-relaxed">{language === 'es' ? 'Transacciones transparentes y soporte durante todo el proceso.' : 'Transparent transactions and support throughout the entire process.'}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
