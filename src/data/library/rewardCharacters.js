import { carpinchoImg, halconImg, molleImg } from './images';

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
