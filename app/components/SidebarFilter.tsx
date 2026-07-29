"use client";

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export interface FilterState {
  producer: string;
  category: string;
  yearMin: string;
  yearMax: string;
  weightMin: string;
  weightMax: string;
}

interface SidebarFilterProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  availableProducers: string[];
  availableCategories: string[];
}

export default function SidebarFilter({ filters, setFilters, availableProducers, availableCategories }: SidebarFilterProps) {
  const { language } = useLanguage();

  const handleReset = () => {
    setFilters({
      producer: '',
      category: '',
      yearMin: '',
      yearMax: '',
      weightMin: '',
      weightMax: ''
    });
  };

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 w-full md:w-64 flex-shrink-0">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-lg text-slate-800">
          {language === 'es' ? 'Filtros' : 'Filters'}
        </h2>
        <button 
          onClick={handleReset}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          {language === 'es' ? 'Limpiar' : 'Reset'}
        </button>
      </div>

      <div className="space-y-6">
        {/* Producer */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            {language === 'es' ? 'Marca' : 'Producer'}
          </label>
          <select 
            className="w-full border border-slate-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={filters.producer}
            onChange={(e) => setFilters({ ...filters, producer: e.target.value })}
          >
            <option value="">{language === 'es' ? 'Todas' : 'All'}</option>
            {availableProducers.map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            {language === 'es' ? 'Categoría' : 'Category'}
          </label>
          <select 
            className="w-full border border-slate-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          >
            <option value="">{language === 'es' ? 'Todas' : 'All'}</option>
            {availableCategories.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Year */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            {language === 'es' ? 'Año' : 'Year'}
          </label>
          <div className="flex items-center space-x-2">
            <input 
              type="number" 
              placeholder="Min" 
              className="w-full border border-slate-300 rounded-md p-2 text-sm"
              value={filters.yearMin}
              onChange={(e) => setFilters({ ...filters, yearMin: e.target.value })}
            />
            <span className="text-slate-400">-</span>
            <input 
              type="number" 
              placeholder="Max" 
              className="w-full border border-slate-300 rounded-md p-2 text-sm"
              value={filters.yearMax}
              onChange={(e) => setFilters({ ...filters, yearMax: e.target.value })}
            />
          </div>
        </div>

        {/* Weight */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            {language === 'es' ? 'Peso (Ton)' : 'Weight (Ton)'}
          </label>
          <div className="flex items-center space-x-2">
            <input 
              type="number" 
              placeholder="Min" 
              className="w-full border border-slate-300 rounded-md p-2 text-sm"
              value={filters.weightMin}
              onChange={(e) => setFilters({ ...filters, weightMin: e.target.value })}
            />
            <span className="text-slate-400">-</span>
            <input 
              type="number" 
              placeholder="Max" 
              className="w-full border border-slate-300 rounded-md p-2 text-sm"
              value={filters.weightMax}
              onChange={(e) => setFilters({ ...filters, weightMax: e.target.value })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
