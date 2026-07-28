"use client";

import Link from "next/link";
import { machineryList } from "../data/machinery";
import { useLanguage } from "../context/LanguageContext";

export default function Catalog() {
  const { language } = useLanguage();

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {language === 'es' ? 'Nuestro Catálogo' : 'Our Catalog'}
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {language === 'es' 
              ? 'Explore nuestra selección de maquinaria pesada premium disponible para exportación inmediata.' 
              : 'Explore our selection of premium heavy machinery available for immediate export.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {machineryList.map((machine) => (
            <div key={machine.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200 transition-transform hover:-translate-y-1 hover:shadow-xl">
              <div 
                className="h-64 w-full bg-cover bg-center"
                style={{ backgroundImage: `url('${machine.imageUrl}')` }}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{machine.name[language]}</h3>
                <p className="text-slate-600 mb-6 line-clamp-2">
                  {machine.description[language]}
                </p>
                
                <Link 
                  href={`/catalogo/${machine.id}`}
                  className="block w-full text-center px-4 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded transition-colors"
                >
                  {language === 'es' ? 'Ver Detalles' : 'View Details'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
