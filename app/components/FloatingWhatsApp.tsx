"use client";

import { useLanguage } from "../context/LanguageContext";

export default function FloatingWhatsApp() {
  const { language } = useLanguage();
  const phoneNumber = "1234567890"; // Reemplazar con el número real
  
  const textEs = "Hola, me gustaría recibir más información sobre sus maquinarias.";
  const textEn = "Hello, I would like to receive more information about your machinery.";
  
  const message = language === 'es' ? textEs : textEn;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg shadow-green-500/30 transition-transform hover:scale-110 flex items-center justify-center group"
      aria-label="Contact on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="w-8 h-8 fill-current"
      >
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 512l149.8-39.3c32.5 18.4 69.3 28.1 106.7 28.1h.1c122.3 0 222.4-99.6 222.4-222 0-59.3-23.1-115.1-65.1-157.2zM224 435.5h-.1c-33.1 0-65.5-8.9-94-25.7l-6.7-4-69.8 18.3L72 356.1l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.6 82.6-184.2 184.5-184.2 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 54 81.3 54 130.5 0 101.8-82.8 184.2-184.3 184.2zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
      </svg>
      
      {/* Tooltip */}
      <span className="absolute right-16 bg-slate-900 text-white text-sm font-medium py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {language === 'es' ? '¡Contáctanos!' : 'Contact us!'}
      </span>
    </a>
  );
}
