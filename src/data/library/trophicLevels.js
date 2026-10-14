import { aveImg, carpinchoImg, fruitingShrubImg, halconImg, molleImg, woodpeckerImg } from './images';

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
