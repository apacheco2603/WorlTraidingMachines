import Link from 'next/link';
import { Machinery } from '../data/machinery';

interface Props {
  machine: Machinery;
  language: string;
}

export default function MachineListItem({ machine, language }: Props) {
  // Title matches the style: "PRODUCER MODEL" in uppercase
  const title = `${machine.producer} ${machine.model}`.toUpperCase();

  return (
    <div className="flex flex-col sm:flex-row bg-white border-b border-slate-200 py-6 gap-6 relative">
      {/* Left side: Image */}
      <div className="w-full sm:w-72 h-48 flex-shrink-0 bg-slate-100 overflow-hidden relative">
        <div 
          className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-500"
          style={{ backgroundImage: `url('${machine.imageUrl}')` }}
        />
      </div>

      {/* Right side: Details */}
      <div className="flex-1 flex flex-col relative pb-12 sm:pb-0">
        <h2 className="text-2xl font-bold text-red-700 mb-4">{title}</h2>
        
        <ul className="space-y-2 text-slate-700">
          <li className="flex items-center">
            <span className="text-red-600 font-bold mr-2">{'>'}</span>
            <span className="w-48">{language === 'es' ? 'productor:' : 'producer:'}</span>
            <span className="font-semibold">{machine.producer.toUpperCase()}</span>
          </li>
          <li className="flex items-center">
            <span className="text-red-600 font-bold mr-2">{'>'}</span>
            <span className="w-48">{language === 'es' ? 'modelo:' : 'model:'}</span>
            <span className="font-semibold">{machine.model.toUpperCase()}</span>
          </li>
          <li className="flex items-center">
            <span className="text-red-600 font-bold mr-2">{'>'}</span>
            <span className="w-48">{language === 'es' ? 'categoría:' : 'category:'}</span>
            <span className="font-semibold">{machine.category.toLowerCase()}</span>
          </li>
          <li className="flex items-center">
            <span className="text-red-600 font-bold mr-2">{'>'}</span>
            <span className="w-48">{language === 'es' ? 'año de fabricación:' : 'year of manufacture:'}</span>
            <span className="font-semibold">{machine.year}</span>
          </li>
          <li className="flex items-center">
            <span className="text-red-600 font-bold mr-2">{'>'}</span>
            <span className="w-48">{language === 'es' ? 'peso (t):' : 'weight (t):'}</span>
            <span className="font-semibold">{machine.weight}</span>
          </li>
        </ul>

        <Link 
          href={`/catalogo/${machine.id}`}
          className="absolute bottom-0 right-0 bg-slate-600 hover:bg-slate-700 text-white px-6 py-2 flex items-center gap-2 transition-colors"
        >
          {language === 'es' ? 'más' : 'more'} <span className="font-bold">{'>'}</span>
        </Link>
      </div>
    </div>
  );
}
