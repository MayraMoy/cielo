import {
  aveImg,
  carpinchoImg,
  fruitingShrubImg,
  halconImg,
  molleImg,
  woodpeckerImg,
  insectsImg,
  reptilesImg,
  pastosImg,
  zorroImg,
  joteImg,
  yararaImg,
  ratonaImg,
  cuisImg,
  naranjeroImg,
  pepiteroImg,
} from './images';

export const TROPHIC_NETWORK = {
  nodes: [
    // ---------------- PRODUCTORES ----------------
    {
      id: 'molle',
      name: 'Árbol Molle',
      image: molleImg,
      kind: 'producer',
      position: { x: 62, y: 960 },
    },
    {
      id: 'fruiting-shrub',
      name: 'Arbusto frutal',
      image: fruitingShrubImg,
      kind: 'producer',
      position: { x: 180, y: 960 },
    },
    {
      id: 'wetland-plants',
      name: 'Pastos y plantas acuáticas',
      image: pastosImg,
      kind: 'producer',
      position: { x: 298, y: 960 },
    },

    // ---------------- CONSUMIDORES PRIMARIOS ----------------
    {
      id: 'insects',
      name: 'Insectos y larvas',
      image: insectsImg,
      kind: 'primary',
      position: { x: 62, y: 638 },
    },
    {
      id: 'cuis',
      name: 'Cuis chico',
      scientificName: 'Microcavia australis',
      image: cuisImg,
      kind: 'primary',
      position: { x: 180, y: 638 },
    },
    {
      id: 'carpincho',
      name: 'Carpincho',
      image: carpinchoImg,
      kind: 'primary',
      position: { x: 298, y: 638 },
    },
    {
      id: 'naranjero',
      name: 'Naranjero',
      scientificName: 'Thraupis bonariensis',
      image: naranjeroImg,
      kind: 'primary',
      position: { x: 115, y: 772 },
    },
    {
      id: 'pepitero',
      name: 'Pepitero de collar',
      scientificName: 'Saltator aurantiirostris',
      image: pepiteroImg,
      kind: 'primary',
      position: { x: 245, y: 772 },
    },

    // ---------------- CONSUMIDORES SECUNDARIOS ----------------
    {
      id: 'ave-insectivora',
      name: 'Ave insectívora',
      image: aveImg,
      kind: 'secondary',
      position: { x: 95, y: 368 },
    },
    {
      id: 'carpintero',
      name: 'Pájaro carpintero',
      image: woodpeckerImg,
      kind: 'secondary',
      position: { x: 265, y: 368 },
    },
    {
      id: 'ratona',
      name: 'Ratona común',
      scientificName: 'Troglodytes aedon',
      image: ratonaImg,
      kind: 'secondary',
      position: { x: 95, y: 482 },
    },
    {
      id: 'small-prey',
      name: 'Roedores y reptiles',
      image: reptilesImg,
      kind: 'secondary',
      position: { x: 265, y: 482 },
    },

    // ---------------- CONSUMIDORES TERCIARIOS ----------------
    {
      id: 'halcon',
      name: 'Halcón',
      image: halconImg,
      kind: 'tertiary',
      position: { x: 95, y: 96 },
    },
    {
      id: 'yarara',
      name: 'Yarará chica',
      scientificName: 'Bothrops diporus',
      image: yararaImg,
      kind: 'tertiary',
      position: { x: 265, y: 96 },
    },
    {
      id: 'zorro',
      name: 'Zorro gris',
      scientificName: 'Lycalopex gymnocercus',
      image: zorroImg,
      kind: 'tertiary',
      position: { x: 95, y: 210 },
    },
    {
      id: 'jote',
      name: 'Jote cabeza colorada',
      scientificName: 'Cathartes aura',
      image: joteImg,
      kind: 'tertiary',
      position: { x: 265, y: 210 },
    },
  ],
  links: [
    // Productores -> Consumidores primarios
    { food: 'molle', consumer: 'insects' },
    { food: 'fruiting-shrub', consumer: 'insects' },
    { food: 'fruiting-shrub', consumer: 'naranjero' },
    { food: 'fruiting-shrub', consumer: 'pepitero' },
    { food: 'wetland-plants', consumer: 'cuis' },
    { food: 'wetland-plants', consumer: 'carpincho' },

    // Consumidores primarios -> Consumidores secundarios
    { food: 'insects', consumer: 'ave-insectivora' },
    { food: 'insects', consumer: 'carpintero' },
    { food: 'insects', consumer: 'ratona' },

    // Interacciones hacia Consumidores terciarios (Carnívoros, Omnívoros y Carroñeros)
    { food: 'cuis', consumer: 'yarara' },
    { food: 'cuis', consumer: 'zorro' },
    { food: 'cuis', consumer: 'halcon' },
    { food: 'cuis', consumer: 'jote' },
    { food: 'ratona', consumer: 'halcon' },
    { food: 'ratona', consumer: 'yarara' },
    { food: 'ratona', consumer: 'zorro' },
    { food: 'ave-insectivora', consumer: 'halcon' },
    { food: 'carpintero', consumer: 'halcon' },
    { food: 'small-prey', consumer: 'halcon' },
    { food: 'small-prey', consumer: 'yarara' },
    { food: 'small-prey', consumer: 'zorro' },
    { food: 'carpincho', consumer: 'jote' },
    { food: 'zorro', consumer: 'jote' },
  ],
};
