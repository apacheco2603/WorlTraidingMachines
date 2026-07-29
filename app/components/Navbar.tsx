"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = {
    en: [
      { name: 'Home', href: '/' },
      { name: 'Catalog', href: '/catalogo' },
      { name: 'About Us', href: '/nosotros' }
    ],
    es: [
      { name: 'Inicio', href: '/' },
      { name: 'Catálogo', href: '/catalogo' },
      { name: 'Nosotros', href: '/nosotros' }
    ]
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search implementation will go to /buscar
    const form = e.target as HTMLFormElement;
    const query = new FormData(form).get('q');
    if (query) {
      window.location.href = `/buscar?q=${query}`;
    }
  };

  return (
    <header className="bg-white border-b border-slate-200">
      {/* Top Bar (Language, Social, Contact) */}
      <div className="bg-slate-100 border-b border-slate-200 text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Language Switcher */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => toggleLanguage('es')}
              className={`font-semibold transition-colors ${language === 'es' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
            >
              ES
            </button>
            <span className="text-slate-300">|</span>
            <button 
              onClick={() => toggleLanguage('en')}
              className={`font-semibold transition-colors ${language === 'en' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
            >
              EN
            </button>
          </div>
          
          {/* Contact Info Placeholder */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-600 font-medium">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +1 234 567 890
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              +1 234 567 890
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              contact@worldtrading.com
            </span>
          </div>
        </div>
      </div>

      {/* Main Bar (Logo & Search) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <span className="font-extrabold text-2xl text-slate-900 tracking-tight">WORLD<span className="text-blue-600">TRAIDING</span>MACHINES</span>
        </Link>
        
        <form onSubmit={handleSearch} className="w-full md:w-96 flex">
          <input 
            type="text" 
            name="q"
            placeholder={language === 'es' ? 'Buscar...' : 'Search...'} 
            className="w-full border border-slate-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </form>
      </div>

      {/* Navigation Menu */}
      <div className="bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="hidden sm:flex sm:items-center space-x-8">
              <Link href="/" className="text-white hover:text-blue-400 font-medium transition-colors">
                {language === 'es' ? 'Todas las máquinas' : 'All machines'}
              </Link>
              <Link href="/nosotros" className="text-slate-300 hover:text-white font-medium transition-colors">
                {language === 'es' ? 'Nosotros' : 'About us'}
              </Link>
              <Link href="/terminos" className="text-slate-300 hover:text-white font-medium transition-colors">
                {language === 'es' ? 'Términos' : 'Privacy policy'}
              </Link>
              <a href="mailto:contact@worldtrading.com" className="text-slate-300 hover:text-white font-medium transition-colors">
                {language === 'es' ? 'Contacto' : 'Contact'}
              </a>
            </div>
            
            <div className="sm:hidden flex w-full justify-between items-center">
              <span className="text-white font-medium">{language === 'es' ? 'Menú' : 'Menu'}</span>
              <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {isOpen && (
          <div className="sm:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-white font-medium hover:bg-slate-700 rounded-md">
                {language === 'es' ? 'Todas las máquinas' : 'All machines'}
              </Link>
              <Link href="/nosotros" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-md">
                {language === 'es' ? 'Nosotros' : 'About us'}
              </Link>
              <Link href="/terminos" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-md">
                {language === 'es' ? 'Términos' : 'Privacy policy'}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
