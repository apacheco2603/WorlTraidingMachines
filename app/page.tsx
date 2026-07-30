"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useLanguage } from './context/LanguageContext';
import { machineryList } from './data/machinery';
import SidebarFilter, { FilterState } from './components/SidebarFilter';
import SidebarWidgets from './components/SidebarWidgets';
import MachineListItem from './components/MachineListItem';

export default function Home() {
  const { language } = useLanguage();

  const [filters, setFilters] = useState<FilterState>({
    producer: '',
    category: '',
    yearMin: '',
    yearMax: '',
    weightMin: '',
    weightMax: ''
  });

  const availableProducers = useMemo(() => {
    const producers = machineryList.map(m => m.producer);
    return Array.from(new Set(producers)).sort();
  }, []);

  const availableCategories = useMemo(() => {
    const categories = machineryList.map(m => m.category);
    return Array.from(new Set(categories)).sort();
  }, []);

  const filteredMachinery = useMemo(() => {
    return machineryList.filter(machine => {
      if (filters.producer && machine.producer !== filters.producer) return false;
      if (filters.category && machine.category !== filters.category) return false;
      
      if (filters.yearMin && machine.year < parseInt(filters.yearMin)) return false;
      if (filters.yearMax && machine.year > parseInt(filters.yearMax)) return false;

      if (filters.weightMin && machine.weight < parseInt(filters.weightMin)) return false;
      if (filters.weightMax && machine.weight > parseInt(filters.weightMax)) return false;

      return true;
    });
  }, [filters]);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Breadcrumb or Title Area */}
        <div className="mb-8 border-b border-slate-200 pb-4">
          <h1 className="text-3xl font-extrabold text-slate-900">
            {language === 'es' ? 'Todas las máquinas' : 'All machines'}
          </h1>
          <p className="text-slate-500 mt-2">
            {filteredMachinery.length} {language === 'es' ? 'resultados encontrados' : 'results found'}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <SidebarFilter 
              filters={filters}
              setFilters={setFilters}
              availableProducers={availableProducers}
              availableCategories={availableCategories}
            />
            <SidebarWidgets />
          </div>

          {/* Main Grid */}
          <div className="flex-1">
            {filteredMachinery.length > 0 ? (
              <div className="flex flex-col">
                {filteredMachinery.map((machine) => (
                  <MachineListItem key={machine.id} machine={machine} language={language} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 border-2 border-dashed border-slate-200 rounded-lg">
                <p className="text-slate-500 text-lg">
                  {language === 'es' ? 'No se encontraron máquinas con esos filtros.' : 'No machines found with those filters.'}
                </p>
                <button 
                  onClick={() => setFilters({ producer: '', category: '', yearMin: '', yearMax: '', weightMin: '', weightMax: '' })}
                  className="mt-4 text-blue-600 font-semibold hover:underline"
                >
                  {language === 'es' ? 'Limpiar todos los filtros' : 'Clear all filters'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
