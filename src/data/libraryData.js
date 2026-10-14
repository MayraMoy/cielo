import halconImg from '../assets/4.png';
import molleImg from '../assets/6.png'; // 6.png es el árbol Molle
import carpinchoImg from '../assets/3.png';
import aveImg from '../assets/5.png'; // 5.png es el ave insectívora
import woodpeckerImg from '../assets/2.png'; // 2.png es el pájaro carpintero
import shrubImg from '../assets/7.png'; // 7.png es el espinillo
import fruitingShrubImg from '../assets/8.png'; // 8.png es el arbusto con frutos
import serranoShrubImg from '../assets/1.png'; // 1.png es el arbusto serrano

export const REWARD_CHARACTERS = [
  {
    step: 1,
    name: 'Árbol Molle y Aves del Monte',
    badge: 'Premio 1 de 3 • Estación 1',
    image: molleImg,
    unlockedSpeciesNames: ['Árbol Molle', 'Ave insectívora', 'Arbusto serrano'],
    description:
      '¡Desbloqueaste las especies del bosque nativo que crecen y se refugian junto al árbol Molle!',
  },
  {
    step: 2,
    name: 'Carpincho y Arbusto Frutal',
    badge: 'Premio 2 de 3 • Estación 2',
    image: carpinchoImg,
    unlockedSpeciesNames: ['Carpincho', 'Arbusto frutal'],
    description:
      '¡Desbloqueaste a los habitantes del humedal y sus plantas favoritas!',
  },
  {
    step: 3,
    name: 'Halcón y Pájaro Carpintero',
    badge: 'Premio 3 de 3 • Estación 3',
    image: halconImg,
    unlockedSpeciesNames: ['Halcón', 'Carpintero'],
    description:
      '¡Completaste las 3 estaciones! Ya tienes todas las aves y guardianes de Villa Cielo.',
  },
];

export const LIBRARY_CARDS = [
  {
    id: 'molle',
    name: 'Árbol Molle',
    scientificName: 'Schinus areira',
    image: molleImg,
    unlocked: true,
    unlockStep: 0,
    category: 'Productor',
    trophicRole: 'producers',
    unlockHint: 'Desbloqueada desde el inicio de tu recorrido.',
    description:
      'Árbol nativo de copa frondosa, hojas aromáticas y ramas colgantes, fundamental como refugio de biodiversidad.',
    juniorDescription:
      'Es el gran árbol guardián de la reserva. Con sus ramas largas hace una sombrilla gigante para cuidar a otras plantas y pájaros.',
    contribution:
      'Actúa como árbol nodriza: su sombra protege a plantas jóvenes y sus frutos alimentan a la fauna silvestre.',
    juniorContribution:
      'Les da casa y comida a los pajaritos y protege del sol fuerte a las plantitas bebés.',
    diet: 'Produce su propio alimento mediante fotosíntesis utilizando luz solar, agua y nutrientes del suelo.',
    juniorDiet:
      '¡Fabrica su propia comida usando la energía del sol, agua de lluvia y tierra fértil!',
  },
  {
    id: 'ave-insectivora',
    name: 'Ave insectívora',
    scientificName: 'Lepidocolaptes angustirostris',
    image: aveImg,
    requiresFirstReward: true,
    unlockStep: 1,
    category: 'Consumidor',
    trophicRole: 'primary-consumer',
    unlockHint: 'Escaneá la Estación 1 (Árbol Molle) y superá la trivia para desbloquearla.',
    description:
      'Ave de pico fuerte y estilizado que busca insectos y larvas entre la corteza de los árboles.',
    juniorDescription:
      'Un pajarito súper curioso que recorre las ramas buscando bichitos escondidos en la corteza.',
    contribution:
      'Controla naturalmente las poblaciones de insectos, favoreciendo la salud de los árboles del bosque.',
    juniorContribution:
      'Cuida a los árboles comiéndose los insectos que podrían lastimar sus hojas.',
    diet: 'Se alimenta principalmente de insectos, semillas y larvas que encuentra en los troncos.',
    juniorDiet: 'Come bichitos pequeños, orugas y semillas de los árboles.',
  },
  {
    id: 'arbusto-serrano',
    name: 'Arbusto serrano',
    scientificName: 'Baccharis salicifolia',
    image: serranoShrubImg,
    unlockStep: 1,
    category: 'Productor',
    trophicRole: 'producers',
    unlockHint: 'Escaneá la Estación 1 (Árbol Molle) y superá la trivia para desbloquearlo.',
    description:
      'Planta leñosa autóctona que florece en las laderas serranas, protegiendo los suelos de la erosión.',
    juniorDescription:
      'Una planta bajita y tupida que funciona como escondite secreto para animalitos pequeños.',
    contribution:
      'Aporta refugio y alimento a insectos polinizadores, aves y pequeños mamíferos.',
    juniorContribution:
      'Es el refugio favorito de mariposas, grillos y pajaritos cuando quieren descansar.',
    diet: 'Produce su propio alimento usando luz solar, agua y minerales del suelo.',
    juniorDiet: 'Usa el sol y el agua de la tierra para crecer verde y fuerte.',
  },
  {
    id: 'carpincho',
    name: 'Carpincho',
    scientificName: 'Hydrochoerus hydrochaeris',
    image: carpinchoImg,
    unlockStep: 2,
    category: 'Consumidor',
    trophicRole: 'primary-consumer',
    unlockHint: 'Escaneá la Estación 2 (Sendero del Humedal) en el lector QR para desbloquearlo.',
    description:
      'El roedor más grande del mundo; vive cerca del agua y suele desplazarse en grupos familiares.',
    juniorDescription:
      '¡El roedor más grande y simpático! Le encanta nadar en familia y tomar sol en la orilla.',
    contribution:
      'Transfiere la energía de las plantas a los carnívoros y mantiene cortos los pastizales ribereños.',
    juniorContribution:
      'Corta el pasto de forma natural y ayuda a que crezcan nuevas plantitas cerca del agua.',
    diet: 'Es herbívoro: come pastos, plantas acuáticas y frutos silvestres.',
    juniorDiet: 'Es vegetariano: come pastito tierno, hierbas y plantas del agua.',
  },
  {
    id: 'arbusto-frutal',
    name: 'Arbusto frutal',
    scientificName: 'Celtis ehrenbergiana',
    image: fruitingShrubImg,
    unlockStep: 2,
    category: 'Productor',
    trophicRole: 'producers',
    unlockHint: 'Escaneá la Estación 2 (Sendero del Humedal) en el lector QR para desbloquearlo.',
    description:
      'Arbusto nativo con frutos redondeados y dulces, muy codiciados por aves y mamíferos de la reserva.',
    juniorDescription:
      '¡El supermercado natural del bosque! Da frutitas dulces que alimentan a aves y mamíferos.',
    contribution:
      'Sus flores y frutos alimentan a decenas de organismos y sostienen la red trófica del humedal.',
    juniorContribution:
      'Sus frutas dan mucha energía a los animales que pasean por la reserva.',
    diet: 'Produce su propio alimento mediante fotosíntesis a partir de energía solar.',
    juniorDiet: 'Crece gracias a la energía del sol y los minerales del suelo.',
  },
  {
    id: 'halcon',
    name: 'Halcón',
    scientificName: 'Falco sparverius',
    image: halconImg,
    unlockStep: 3,
    category: 'Consumidor',
    trophicRole: 'secondary-consumer',
    unlockHint: 'Escaneá la Estación 3 (Mirador del Cielo) en el lector QR para desbloquearlo.',
    description:
      'Ave rapaz que observa el entorno desde las alturas y ayuda a mantener el equilibrio natural.',
    juniorDescription:
      'El guardián del cielo: vuela rapidísimo y tiene una vista increíble desde las alturas.',
    contribution:
      'Regula las poblaciones de roedores y reptiles, ocupando el nivel de consumidor secundario.',
    juniorContribution:
      'Mantiene el equilibrio del ecosistema en lo más alto de la cadena alimentaria.',
    diet: 'Se alimenta de pequeños animales, como roedores, reptiles y pequeñas aves.',
    juniorDiet: 'Es carnívoro: se alimenta de otros animales más pequeños del monte.',
  },
  {
    id: 'carpintero',
    name: 'Pájaro Carpintero',
    scientificName: 'Colaptes melanochloros',
    image: woodpeckerImg,
    unlockStep: 3,
    category: 'Consumidor',
    trophicRole: 'primary-consumer',
    unlockHint: 'Escaneá la Estación 3 (Mirador del Cielo) en el lector QR para desbloquearlo.',
    description:
      'Ave de plumaje llamativo y pico cincelador que busca larvas e insectos en troncos secos.',
    juniorDescription:
      '¡El constructor del bosque! Golpea los troncos "toc-toc" con su pico fuerte para hacer huequitos.',
    contribution:
      'Consume insectos de la madera y crea cavidades que luego sirven de nido a otras especies.',
    juniorContribution:
      'Los huequitos que hace en los árboles después sirven como casita para otros pájaros.',
    diet: 'Se alimenta de insectos xilófagos y larvas que habitan dentro de la madera.',
    juniorDiet: 'Come larvas, hormigas y bichitos que viven dentro de los troncos.',
  },
  {
    id: 'espinillo',
    name: 'Espinillo',
    scientificName: 'Vachellia caven',
    image: shrubImg,
    unlockStep: 3,
    category: 'Productor',
    trophicRole: 'producers',
    unlockHint: 'Escaneá la Estación 3 (Mirador del Cielo) en el lector QR para desbloquearlo.',
    description:
      'Árbol o arbusto espinoso característico del monte cordobés, famoso por sus flores aromáticas doradas.',
    juniorDescription:
      'Tiene ramitas con espinas y pompones amarillos con un perfume riquísimo que atrae abejas.',
    contribution:
      'Fija nitrógeno al suelo enriqueciéndolo y brinda refugio impenetrable a aves pequeñas.',
    juniorContribution:
      'Mejora la tierra del monte y sus espinas protegen los nidos de los pájaros pequeños.',
    diet: 'Produce su propio alimento a partir del sol y fija nutrientes atmosféricos al suelo.',
    juniorDiet: 'Toma luz del sol y ayuda a enriquecer la tierra de la reserva.',
  },
];

export const TROPHIC_LEVELS = [
  {
    id: 'secondary-consumer',
    label: 'Consumidor secundario',
    displayLabel: ['Consumidor', 'secundario'],
    background: '#FFD8B0',
    accent: '#FFAE4E',
    organisms: [
      { name: 'Halcón', image: halconImg },
    ],
    info: {
      description:
        'En la cima de la red trófica están los depredadores que regulan el equilibrio natural de la reserva.',
      juniorDescription:
        '¡El gran cazador del cielo! Se alimenta de otros animales más pequeños para mantener sano el bosque.',
      example: 'Por ejemplo, el Halcón regula las poblaciones de pequeños roedores y aves.',
      illustration: [
        { name: 'Halcón', image: halconImg },
        { name: 'Carpincho', image: carpinchoImg },
      ],
    },
  },
  {
    id: 'primary-consumer',
    label: 'Consumidor primario',
    displayLabel: ['Consumidor', 'primario'],
    background: '#FFF6A8',
    accent: '#FFF27A',
    organisms: [
      { name: 'Carpintero', image: woodpeckerImg },
      { name: 'Carpincho', image: carpinchoImg },
      { name: 'Ave insectívora', image: aveImg },
    ],
    info: {
      description:
        'Los organismos que comen productores primarios son consumidores primarios. Usualmente son herbívoros que comen hojas, semillas o frutos.',
      juniorDescription:
        '¡Son los comedores de plantas! Se alimentan de hojas, pasto, flores y frutitas del bosque.',
      example: 'Por ejemplo, el Carpincho come al Arbusto Frutal.',
      illustration: [
        { name: 'Carpincho', image: carpinchoImg },
        { name: 'Arbusto frutal', image: fruitingShrubImg },
      ],
    },
  },
  {
    id: 'producers',
    label: 'Productores',
    displayLabel: ['Productores'],
    background: '#F0FF9A',
    accent: '#DFFF67',
    organisms: [
      { name: 'Árbol Molle', image: molleImg },
      { name: 'Arbusto frutal', image: fruitingShrubImg },
    ],
    info: {
      description:
        'En la base de la cadena alimentaria se encuentran los productores primarios. Son organismos fotosintéticos que producen su propio alimento usando luz solar.',
      juniorDescription:
        '¡Son la base de toda la vida en la reserva! Las plantas fabrican su propia comida con sol y agua.',
      example:
        'Un organismo productor transforma energía solar en alimento para todo el ecosistema.',
      illustration: [
        { name: 'Arbusto frutal', image: fruitingShrubImg },
      ],
    },
  },
];
