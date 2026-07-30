"use client";

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { machineryList } from '../data/machinery';
import { Suspense } from 'react';
import SidebarWidgets from '../components/SidebarWidgets';
import MachineListItem from '../components/MachineListItem';

function SearchResultsContent() {
  const { language } = useLanguage();
  const searchParams = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';

  const filteredMachinery = machineryList.filter(machine => {
    if (!query) return true;
    const nameMatch = machine.name[language as 'en' | 'es'].toLowerCase().includes(query);
    const producerMatch = machine.producer.toLowerCase().includes(query);
    const modelMatch = machine.model.toLowerCase().includes(query);
    const categoryMatch = machine.category.toLowerCase().includes(query);
    
    return nameMatch || producerMatch || modelMatch || categoryMatch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-extrabold text-slate-900">
          {language === 'es' ? 'Resultados de búsqueda' : 'Search results'}
        </h1>
        <p className="text-slate-500 mt-2">
          {language === 'es' ? 'Para: ' : 'For: '} 
          <span className="font-semibold text-slate-800">"{query}"</span>
          <span className="mx-2">•</span>
          {filteredMachinery.length} {language === 'es' ? 'resultados encontrados' : 'results found'}
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-64 flex-shrink-0">
          <SidebarWidgets />
        </div>

        <div className="flex-1">
        {filteredMachinery.length > 0 ? (
          <div className="flex flex-col">
            {filteredMachinery.map((machine) => (
              <MachineListItem key={machine.id} machine={machine} language={language} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border-2 border-dashed border-slate-200 rounded-lg">
            <p className="text-slate-500 text-lg mb-4">
              {language === 'es' ? 'No se encontraron máquinas para esta búsqueda.' : 'No machines found for this search.'}
            </p>
            <Link 
              href="/"
              className="text-blue-600 font-semibold hover:underline"
            >
              {language === 'es' ? 'Volver al catálogo' : 'Back to catalog'}
            </Link>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

export default function BuscarPage() {
  return (
    <div className="bg-white min-h-screen">
      <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-8">Cargando resultados... / Loading results...</div>}>
        <SearchResultsContent />
      </Suspense>
    </div>
  );
}
