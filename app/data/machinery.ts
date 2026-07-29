export interface Machinery {
  id: string;
  name: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
  features: {
    en: string[];
    es: string[];
  };
  imageUrl: string;
  producer: string;
  model: string;
  category: string;
  weight: number; // in tons
  year: number;
}

export const machineryList: Machinery[] = [
  {
    id: 'excavator-hx300',
    name: {
      en: 'Excavator HX300',
      es: 'Excavadora HX300'
    },
    description: {
      en: 'Heavy-duty excavator designed for maximum performance, durability, and fuel efficiency in the toughest environments.',
      es: 'Excavadora de trabajo pesado diseñada para máximo rendimiento, durabilidad y eficiencia de combustible en los entornos más difíciles.'
    },
    features: {
      en: ['30 Ton Operating Weight', '2.5m³ Bucket Capacity', 'High-efficiency Engine'],
      es: ['30 Ton de Peso Operativo', 'Capacidad de Cuchara de 2.5m³', 'Motor de Alta Eficiencia']
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Excavator_Postiguet_Beach_2.jpg',
    producer: 'Caterpillar',
    model: '320DL',
    category: 'Excavators',
    weight: 30,
    year: 2018
  },
  {
    id: 'bulldozer-d9',
    name: {
      en: 'Bulldozer D9',
      es: 'Bulldozer D9'
    },
    description: {
      en: 'A large track-type tractor designed to handle the most demanding earthmoving tasks with superior pushing power.',
      es: 'Un tractor de orugas grande diseñado para manejar las tareas de movimiento de tierras más exigentes con una potencia de empuje superior.'
    },
    features: {
      en: ['410 HP Gross Power', 'Elevated Sprocket Design', 'Advanced Blade Control'],
      es: ['410 HP de Potencia Bruta', 'Diseño de Rueda Motriz Elevada', 'Control Avanzado de Hoja']
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/CatD9T.jpg',
    producer: 'Caterpillar',
    model: 'D9T',
    category: 'Dozers',
    weight: 50,
    year: 2016
  },
  {
    id: 'wheel-loader-wl950',
    name: {
      en: 'Wheel Loader WL950',
      es: 'Cargador Frontal WL950'
    },
    description: {
      en: 'Versatile wheel loader delivering powerful breakout force, fast cycle times, and exceptional operator comfort.',
      es: 'Cargador frontal versátil que ofrece potente fuerza de arranque, tiempos de ciclo rápidos y excepcional confort para el operador.'
    },
    features: {
      en: ['4.0m³ Bucket Capacity', 'Smooth Transmission', 'Ergonomic Cabin'],
      es: ['Capacidad de Cuchara de 4.0m³', 'Transmisión Suave', 'Cabina Ergonómica']
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Front_end_loader_2.jpg',
    producer: 'Komatsu',
    model: 'WA380',
    category: 'Wheel Loaders',
    weight: 18,
    year: 2020
  },
  {
    id: 'dump-truck-hd785',
    name: {
      en: 'Dump Truck HD785',
      es: 'Camión Volquete HD785'
    },
    description: {
      en: 'Rigid dump truck built to haul massive loads efficiently across mining and heavy construction sites.',
      es: 'Camión volquete rígido construido para transportar cargas masivas eficientemente en sitios de minería y construcción pesada.'
    },
    features: {
      en: ['100 Ton Payload Capacity', 'Advanced Retarder System', 'Durable Frame'],
      es: ['Capacidad de Carga de 100 Toneladas', 'Sistema Retardador Avanzado', 'Chasis Duradero']
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Freightliner_M2_106_6x4_2014_%2814240376744%29.jpg',
    producer: 'Volvo',
    model: 'A40G',
    category: 'Dumpers',
    weight: 40,
    year: 2019
  },
  {
    id: 'motor-grader-mg140',
    name: {
      en: 'Motor Grader MG140',
      es: 'Motoniveladora MG140'
    },
    description: {
      en: 'Precision motor grader for road construction, maintenance, and fine grading applications.',
      es: 'Motoniveladora de precisión para construcción de carreteras, mantenimiento y aplicaciones de nivelación fina.'
    },
    features: {
      en: ['14ft Moldboard', 'All-Wheel Drive Option', 'High Visibility Cab'],
      es: ['Vertedera de 14 pies', 'Opción de Tracción Total', 'Cabina de Alta Visibilidad']
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Grader_2.jpg',
    producer: 'John Deere',
    model: '772G',
    category: 'Graders',
    weight: 20,
    year: 2017
  },
  {
    id: 'crane-tc50',
    name: {
      en: 'Truck Crane TC50',
      es: 'Grúa sobre Camión TC50'
    },
    description: {
      en: 'Mobile truck crane with long boom reach, high lifting capacity, and excellent roadability.',
      es: 'Grúa móvil sobre camión con largo alcance de pluma, alta capacidad de elevación y excelente movilidad en carretera.'
    },
    features: {
      en: ['50 Ton Lifting Capacity', 'Telescopic Boom', 'Advanced Safety System'],
      es: ['Capacidad de Elevación de 50 Ton', 'Pluma Telescópica', 'Sistema de Seguridad Avanzado']
    },
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/KATO_truck_mounted_crane.jpg',
    producer: 'Kato',
    model: 'NK-500E',
    category: 'Cranes',
    weight: 39,
    year: 2015
  }
];
