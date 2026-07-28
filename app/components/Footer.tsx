"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { language } = useLanguage();

  const content = {
    en: {
      about: 'Your trusted partner for heavy machinery and equipment export worldwide. Quality and reliability in every shipment.',
      linksTitle: 'Quick Links',
      catalog: 'Catalog',
      aboutUs: 'About Us',
      terms: 'Terms & Conditions',
      contactTitle: 'Contact',
      rights: 'All rights reserved.'
    },
    es: {
      about: 'Su socio de confianza para la exportación de maquinaria pesada a nivel mundial. Calidad y confiabilidad en cada envío.',
      linksTitle: 'Enlaces Rápidos',
      catalog: 'Catálogo',
      aboutUs: 'Nosotros',
      terms: 'Términos y Condiciones',
      contactTitle: 'Contacto',
      rights: 'Todos los derechos reservados.'
    }
  };

  const t = content[language];

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="font-bold text-xl text-white tracking-wide">WORLD<span className="text-blue-500">TRAIDING</span>MACHINES</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              {t.about}
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wider uppercase text-sm">{t.linksTitle}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/catalogo" className="hover:text-blue-400 transition-colors duration-200">
                  {t.catalog}
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-blue-400 transition-colors duration-200">
                  {t.aboutUs}
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="hover:text-blue-400 transition-colors duration-200">
                  {t.terms}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wider uppercase text-sm">{t.contactTitle}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                export@maquinariapro.example.com
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Texas, United States
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} World Traiding Machines. {t.rights}</p>
        </div>
      </div>
    </footer>
  );
}
