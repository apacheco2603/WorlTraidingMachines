"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Terms() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Terms and Conditions",
      lastUpdated: "Last Updated: July 2026",
      sections: [
        {
          title: "1. International Shipping",
          text: "All quotes provided include estimated shipping costs based on the destination port. Final shipping costs may vary due to carrier rate changes, customs duties, and local taxes, which are the sole responsibility of the buyer."
        },
        {
          title: "2. Quotes and Availability",
          text: "Quotes are valid for 15 days from the date of issue. Machinery availability is subject to prior sale. We reserve the right to cancel quotes if the machinery is sold before a deposit is received."
        },
        {
          title: "3. Condition of Equipment",
          text: "Equipment is sold 'As-Is, Where-Is' unless otherwise specified in writing. We provide high-quality photographs and detailed inspection reports to ensure transparency."
        },
        {
          title: "4. Payments",
          text: "Full payment via wire transfer is required before any equipment is loaded for export. Letters of Credit may be accepted for transactions exceeding $100,000 USD."
        }
      ]
    },
    es: {
      title: "Términos y Condiciones",
      lastUpdated: "Última actualización: Julio 2026",
      sections: [
        {
          title: "1. Envíos Internacionales",
          text: "Todas las cotizaciones proporcionadas incluyen costos de envío estimados basados en el puerto de destino. Los costos finales pueden variar debido a cambios en las tarifas de los transportistas, aranceles aduaneros e impuestos locales, los cuales son responsabilidad exclusiva del comprador."
        },
        {
          title: "2. Cotizaciones y Disponibilidad",
          text: "Las cotizaciones son válidas por 15 días a partir de la fecha de emisión. La disponibilidad de la maquinaria está sujeta a venta previa. Nos reservamos el derecho de cancelar cotizaciones si la maquinaria se vende antes de recibir un depósito."
        },
        {
          title: "3. Condición del Equipo",
          text: "El equipo se vende 'Como está, Donde está' a menos que se especifique lo contrario por escrito. Proporcionamos fotografías de alta calidad e informes de inspección detallados para garantizar la transparencia."
        },
        {
          title: "4. Pagos",
          text: "Se requiere el pago total mediante transferencia bancaria antes de cargar cualquier equipo para su exportación. Se pueden aceptar Cartas de Crédito para transacciones que superen los $100,000 USD."
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t.title}
          </h1>
          <p className="text-slate-500">
            {t.lastUpdated}
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-slate-200">
          <div className="space-y-10">
            {t.sections.map((section, idx) => (
              <div key={idx}>
                <h2 className="text-xl font-bold text-slate-900 mb-4">{section.title}</h2>
                <p className="text-slate-700 leading-relaxed">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
