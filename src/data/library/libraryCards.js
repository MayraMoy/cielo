import { arbol, ave, arbusto, aveImg, carpinchoImg, fruitingShrubImg, halconImg, molleImg, serranoShrubImg, shrubImg, woodpeckerImg } from './images';

export const LIBRARY_CARDS = [
  {
    id: 'molle',
    name: 'Árbol Molle',
    scientificName: 'Schinus areira',
    image: molleImg,
    detailImage: arbol,
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
    detailImage: ave,
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
    detailImage: arbusto,
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
