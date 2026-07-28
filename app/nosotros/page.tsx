"use client";

import { useLanguage } from "../context/LanguageContext";

export default function AboutUs() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "About Us",
      subtitle: "Your trusted partner in heavy machinery worldwide.",
      paragraph1: "With over two decades of experience in the heavy machinery industry, World Traiding Machines has established itself as a leading exporter of premium construction and mining equipment based in the United States.",
      paragraph2: "We understand that your projects demand reliability. That's why every piece of machinery in our inventory undergoes rigorous inspection by certified mechanics before being approved for export. Our global logistics network ensures that your equipment arrives safely, on time, and ready to work.",
      valuesTitle: "Our Core Values",
      values: [
        { title: "Quality Assurance", desc: "We only sell equipment that meets our strict performance standards." },
        { title: "Global Reach", desc: "Seamless shipping and logistics to any major port worldwide." },
        { title: "Integrity", desc: "Transparent transactions with no hidden fees or surprises." }
      ]
    },
    es: {
      title: "Nosotros",
      subtitle: "Su socio de confianza en maquinaria pesada a nivel mundial.",
      paragraph1: "Con más de dos décadas de experiencia en la industria de maquinaria pesada, World Traiding Machines se ha establecido como un exportador líder de equipos premium de construcción y minería con sede en los Estados Unidos.",
      paragraph2: "Entendemos que sus proyectos exigen confiabilidad. Es por eso que cada pieza de maquinaria en nuestro inventario se somete a una rigurosa inspección por mecánicos certificados antes de ser aprobada para la exportación. Nuestra red logística global garantiza que su equipo llegue de manera segura, a tiempo y listo para trabajar.",
      valuesTitle: "Nuestros Valores",
      values: [
        { title: "Garantía de Calidad", desc: "Solo vendemos equipos que cumplen con nuestros estrictos estándares de rendimiento." },
        { title: "Alcance Global", desc: "Envíos y logística sin problemas a cualquier puerto importante del mundo." },
        { title: "Integridad", desc: "Transacciones transparentes sin cargos ocultos ni sorpresas." }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            {t.title}
          </h1>
          <p className="text-xl text-blue-600 font-medium">
            {t.subtitle}
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-slate-200 mb-12">
          <div className="prose prose-lg text-slate-700 max-w-none">
            <p className="mb-6 leading-relaxed">{t.paragraph1}</p>
            <p className="leading-relaxed">{t.paragraph2}</p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">{t.valuesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.values.map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="font-bold text-lg">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
