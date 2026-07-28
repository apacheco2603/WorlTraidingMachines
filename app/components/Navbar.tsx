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

  return (
    <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="font-bold text-xl text-white tracking-wide">WORLD<span className="text-blue-500">TRAIDING</span>MACHINES</span>
            </Link>
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            {navLinks[language].map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-2 border-l border-slate-700 pl-6 ml-2">
              <button 
                onClick={() => toggleLanguage('es')}
                className={`text-sm font-semibold transition-colors ${language === 'es' ? 'text-blue-500' : 'text-slate-500 hover:text-slate-300'}`}
              >
                ES
              </button>
              <span className="text-slate-700">|</span>
              <button 
                onClick={() => toggleLanguage('en')}
                className={`text-sm font-semibold transition-colors ${language === 'en' ? 'text-blue-500' : 'text-slate-500 hover:text-slate-300'}`}
              >
                EN
              </button>
            </div>
          </div>

          <div className="flex items-center sm:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
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
        <div className="sm:hidden bg-slate-800 pb-4 pt-2">
          <div className="px-2 space-y-1">
            {navLinks[language].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex px-3 py-4 space-x-4 border-t border-slate-700 mt-2">
              <button 
                onClick={() => { toggleLanguage('es'); setIsOpen(false); }}
                className={`text-sm font-semibold ${language === 'es' ? 'text-blue-500' : 'text-slate-400'}`}
              >
                Español
              </button>
              <button 
                onClick={() => { toggleLanguage('en'); setIsOpen(false); }}
                className={`text-sm font-semibold ${language === 'en' ? 'text-blue-500' : 'text-slate-400'}`}
              >
                English
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
