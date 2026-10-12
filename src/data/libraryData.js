import halconImg from '../assets/4.png';
import molleImg from '../assets/2.png';
import carpinchoImg from '../assets/3.png';
import aveImg from '../assets/5.png';
import woodpeckerImg from '../assets/8.png';
import treeImg from '../assets/6.png';
import shrubImg from '../assets/7.png';
import fruitingShrubImg from '../assets/1.png';
import primerPremioImg from '../assets/primerPremio.png';

export const REWARD_CHARACTERS = [
  {
    step: 1,
    name: 'Ave Insectívora y Flora del Monte',
    badge: 'Premio 1 de 3 • Posta 1',
    image: primerPremioImg,
    unlockedSpeciesNames: ['Ave insectívora', 'Árbol', 'Arbusto'],
    description:
      '¡Desbloqueaste las especies del bosque nativo que viven junto al árbol Molle!',
  },
  {
    step: 2,
    name: 'Carpincho y Arbusto Frutal',
    badge: 'Premio 2 de 3 • Posta 2',
    image: carpinchoImg,
    unlockedSpeciesNames: ['Carpincho', 'Arbusto frutal'],
    description:
      '¡Desbloqueaste a los habitantes del humedal y sus plantas favoritas!',
  },
  {
    step: 3,
    name: 'Halcón y Pájaro Carpintero',
    badge: 'Premio 3 de 3 • Posta 3',
    image: halconImg,
    unlockedSpeciesNames: ['Halcón', 'Carpintero'],
    description:
      '¡Completaste las 3 postas! Ya tienes todas las aves y guardianes de Villa Cielo.',
  },
];

export const LIBRARY_CARDS = [
  {
    id: 'molle',
    name: 'Molle',
    scientificName: 'Schinus areira',
    image: molleImg,
    unlocked: true,
    unlockStep: 0,
    category: 'Productor',
    trophicRole: 'producers',
    unlockHint: 'Desbloqueada desde el inicio de tu recorrido.',
    description:
      'Árbol nativo de hojas resistentes y frutos aromáticos, conocido por brindar refugio a otras especies.',
    juniorDescription:
      'Es el árbol guardián de la reserva. Con sus ramas largas hace una sombrilla gigante para cuidar a otras plantas y pájaros.',
    contribution:
      'Su sombra protege a plantas jóvenes y sus frutos sirven de alimento y refugio para la fauna.',
    juniorContribution:
      'Les da casa y comida a los pajaritos y protege del sol fuerte a las plantitas bebés.',
    diet: 'Produce su propio alimento utilizando luz solar, agua y nutrientes del suelo.',
    juniorDiet:
      '¡Fabrica su propia comida usando la energía del sol, agua de lluvia y tierra!',
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
    unlockHint: 'Escaneá la Posta 1 (Molle) y superá la trivia para desbloquearla.',
    description:
      'Ave de pico fuerte que busca insectos entre la corteza y las ramas de los árboles.',
    juniorDescription:
      'Un pajarito súper curioso que recorre las ramas buscando bichitos escondidos en la corteza.',
    contribution:
      'Ayuda a controlar las poblaciones de insectos y favorece el equilibrio del bosque.',
    juniorContribution:
      'Cuida a los árboles comiéndose los insectos que podrían lastimar sus hojas.',
    diet: 'Se alimenta principalmente de insectos, semillas y larvas que encuentra en los árboles.',
    juniorDiet: 'Come bichitos pequeños, orugas y semillas de los árboles.',
  },
  {
    id: 'arbol',
    name: 'Árbol nativo',
    scientificName: 'Prosopis alba',
    image: treeImg,
    unlockStep: 1,
    category: 'Productor',
    trophicRole: 'producers',
    unlockHint: 'Escaneá la Posta 1 (Molle) y superá la trivia para desbloquearlo.',
    description:
      'Planta leñosa de gran tamaño que brinda sombra, oxígeno y estructura al bosque.',
    juniorDescription:
      'Los gigantes verdes del parque: limpian el aire que respiramos y refrescan todo el sendero.',
    contribution:
      'Ofrece alimento y refugio, y produce oxígeno esencial para el ecosistema.',
    juniorContribution:
      'Fabrica aire puro y sostiene los nidos de muchas aves de Villa Cielo.',
    diet: 'Produce su alimento mediante la fotosíntesis, a partir de luz, agua y dióxido de carbono.',
    juniorDiet: 'Toma agua por sus raíces y usa la luz del sol en sus hojas verdes.',
  },
  {
    id: 'arbusto',
    name: 'Arbusto serrano',
    scientificName: 'Baccharis salicifolia',
    image: shrubImg,
    unlockStep: 1,
    category: 'Productor',
    trophicRole: 'producers',
    unlockHint: 'Escaneá la Posta 1 (Molle) y superá la trivia para desbloquearlo.',
    description:
      'Planta leñosa de menor tamaño, con ramas que nacen cerca del suelo y protegen contra la erosión.',
    juniorDescription:
      'Una planta bajita y tupida que funciona como escondite secreto para animalitos pequeños.',
    contribution:
      'Aporta refugio y alimento a insectos, aves y pequeños mamíferos.',
    juniorContribution:
      'Es el refugio favorito de mariposas, grillos y pajaritos cuando quieren descansar.',
    diet: 'Produce su propio alimento usando luz solar, agua y nutrientes del suelo.',
    juniorDiet: 'Usa el sol y el agua de la tierra para crecer fuerte.',
  },
  {
    id: 'carpincho',
    name: 'Carpincho',
    scientificName: 'Hydrochoerus hydrochaeris',
    image: carpinchoImg,
    unlockStep: 2,
    category: 'Consumidor',
    trophicRole: 'primary-consumer',
    unlockHint: 'Escaneá la Posta 2 (Sendero del Humedal) en el lector QR para desbloquearlo.',
    description:
      'El roedor más grande del mundo; vive cerca del agua y suele desplazarse en grupos familiares.',
    juniorDescription:
      '¡El roedor más grande y simpático! Le encanta nadar en familia y tomar sol en la orilla.',
    contribution:
      'Transfiere la energía de las plantas a los animales que se alimentan de él y mantiene cortos los pastizales.',
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
    unlockHint: 'Escaneá la Posta 2 (Sendero del Humedal) en el lector QR para desbloquearlo.',
    description:
      'Arbusto nativo que produce flores y frutos dulces aprovechados por la fauna local.',
    juniorDescription:
      '¡El supermercado natural del bosque! Da frutitas dulces que alimentan a aves y mamíferos.',
    contribution:
      'Sus flores y frutos alimentan a distintos organismos y ayudan a sostener la red trófica.',
    juniorContribution:
      'Sus frutas dan mucha energía a los animales que pasean por la reserva.',
    diet: 'Produce su propio alimento mediante la fotosíntesis.',
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
    unlockHint: 'Escaneá la Posta 3 (Mirador del Cielo) en el lector QR para desbloquearlo.',
    description:
      'Ave rapaz que observa el entorno desde las alturas y ayuda a mantener el equilibrio natural.',
    juniorDescription:
      'El guardián del cielo: vuela rapidísimo y tiene una vista increíble desde las alturas.',
    contribution:
      'Regula las poblaciones de otros animales y forma parte esencial de la red trófica como consumidor secundario.',
    juniorContribution:
      'Mantiene el equilibrio del ecosistema en lo más alto de la cadena alimentaria.',
    diet: 'Se alimenta de pequeños animales, como aves, reptiles y roedores.',
    juniorDiet: 'Es carnívoro: se alimenta de otros animales más pequeños del monte.',
  },
  {
    id: 'carpintero',
    name: 'Carpintero',
    scientificName: 'Colaptes melanochloros',
    image: woodpeckerImg,
    unlockStep: 3,
    category: 'Consumidor',
    trophicRole: 'secondary-consumer',
    unlockHint: 'Escaneá la Posta 3 (Mirador del Cielo) en el lector QR para desbloquearlo.',
    description:
      'Ave que usa su pico resistente para buscar larvas e insectos ocultos en troncos y ramas.',
    juniorDescription:
      '¡El constructor del bosque! Golpea los troncos "toc-toc" con su pico fuerte para hacer huequitos.',
    contribution:
      'Consume insectos de la madera y crea cavidades que luego sirven de nido para otras especies.',
    juniorContribution:
      'Los huequitos que hace en los árboles después sirven como casita para otros pájaros.',
    diet: 'Se alimenta de insectos y larvas que encuentra en la madera.',
    juniorDiet: 'Come larvas, hormigas y bichitos que viven dentro de los troncos.',
  },
];

export const TROPHIC_LEVELS = [
  {
    id: 'secondary-consumer',
    label: 'Consumidor secundario',
    displayLabel: ['Consumidor', 'secundario'],
    background: '#FFD8B0',
    accent: '#FFAE4E',
    organisms: [{ name: 'Halcón', image: halconImg }],
    info: {
      description:
        'Los organismos que se comen a los consumidores primarios se llaman consumidores secundarios. Por lo general son carnívoros o depredadores.',
      juniorDescription:
        'Son los animales cazadores que se alimentan de otros animales más pequeños para mantener el equilibrio del bosque.',
      example: 'Por ejemplo, el Halcón se alimenta de pequeños herbívoros.',
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
      { name: 'Ave', image: aveImg },
      { name: 'Carpincho', image: carpinchoImg },
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
      { name: 'Árbol', image: treeImg },
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
