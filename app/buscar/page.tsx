"use client";

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { machineryList } from '../data/machinery';

export default function BuscarPage() {
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
    <div className="bg-white min-h-screen">
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

        <div className="flex-1">
          {filteredMachinery.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredMachinery.map((machine) => (
                <div key={machine.id} className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url('${machine.imageUrl}')` }}
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="text-xs font-bold text-blue-600 mb-1 uppercase tracking-wider">
                      {machine.producer}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1 leading-tight">
                      {machine.producer} {machine.model}
                    </h3>
                    <div className="text-sm text-slate-500 mb-4 flex gap-3">
                      <span>{machine.year}</span>
                      <span>•</span>
                      <span>{machine.weight}t</span>
                    </div>
                    <div className="mt-auto">
                      <Link 
                        href={`/catalogo/${machine.id}`}
                        className="block w-full text-center px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded text-sm transition-colors"
                      >
                        {language === 'es' ? 'Ver Detalles' : 'View Details'}
                      </Link>
                    </div>
                  </div>
                </div>
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
