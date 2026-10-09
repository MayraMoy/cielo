import halconImg from '../assets/4.png';
import molleImg from '../assets/2.png';
import carpinchoImg from '../assets/3.png';
import aveImg from '../assets/5.png';
import woodpeckerImg from '../assets/5.png';
import treeImg from '../assets/6.png';
import shrubImg from '../assets/7.png';
import fruitingShrubImg from '../assets/1.png';

export const LIBRARY_CARDS = [
  {
    id: 'halcon',
    name: 'Halcón',
    image: halconImg,
    category: 'Consumidor',
    description: 'Ave rapaz que observa el entorno desde las alturas y ayuda a mantener el equilibrio natural.',
    contribution: 'Regula las poblaciones de otros animales y forma parte esencial de la red trófica.',
    diet: 'Se alimenta de pequeños animales, como aves y roedores.',
  },
  {
    id: 'molle',
    name: 'Molle',
    image: molleImg,
    unlocked: true,
    category: 'Productor',
    description: 'Árbol nativo de hojas resistentes y frutos aromáticos, conocido por brindar refugio a otras especies.',
    contribution: 'Su sombra protege a plantas jóvenes y sus frutos sirven de alimento y refugio para la fauna.',
    diet: 'Produce su propio alimento utilizando luz solar, agua y nutrientes del suelo.',
  },
  {
    id: 'carpincho',
    name: 'Carpincho',
    image: carpinchoImg,
    category: 'Consumidor',
    description: 'El roedor más grande del mundo; vive cerca del agua y suele desplazarse en grupos.',
    contribution: 'Transfiere la energía de las plantas a los animales que se alimentan de él.',
    diet: 'Es herbívoro: come pastos, plantas acuáticas y otros vegetales.',
  },
  {
    id: 'ave-insectivora',
    name: 'Ave insectívora',
    image: aveImg,
    requiresFirstReward: true,
    category: 'Consumidor',
    description: 'Ave de pico fuerte que busca insectos entre la corteza y las ramas de los árboles.',
    contribution: 'Ayuda a controlar las poblaciones de insectos y favorece el equilibrio del bosque.',
    diet: 'Se alimenta principalmente de insectos y larvas que encuentra en los árboles.',
  },
  {
    id: 'carpintero',
    name: 'Carpintero',
    image: woodpeckerImg,
    category: 'Consumidor',
    description: 'Ave que usa su pico resistente para buscar alimento en troncos y ramas.',
    contribution: 'Consume insectos y crea cavidades que luego pueden ser refugio para otros animales.',
    diet: 'Se alimenta de insectos y larvas que encuentra en la madera.',
  },
  {
    id: 'arbol',
    name: 'Árbol',
    image: treeImg,
    category: 'Productor',
    description: 'Planta leñosa de gran tamaño que brinda sombra y estructura al bosque.',
    contribution: 'Ofrece alimento y refugio, y produce oxígeno para el ecosistema.',
    diet: 'Produce su alimento mediante la fotosíntesis, a partir de luz, agua y dióxido de carbono.',
  },
  {
    id: 'arbusto',
    name: 'Arbusto',
    image: shrubImg,
    category: 'Productor',
    description: 'Planta leñosa de menor tamaño, con ramas que nacen cerca del suelo.',
    contribution: 'Aporta refugio y alimento a insectos, aves y pequeños mamíferos.',
    diet: 'Produce su propio alimento usando luz solar, agua y nutrientes del suelo.',
  },
  {
    id: 'arbusto-frutal',
    name: 'Arbusto frutal',
    image: fruitingShrubImg,
    category: 'Productor',
    description: 'Arbusto nativo que produce flores y frutos aprovechados por la fauna local.',
    contribution: 'Sus flores y frutos alimentan a distintos organismos y ayudan a sostener la red trófica.',
    diet: 'Produce su propio alimento mediante la fotosíntesis.',
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
        'Los organismos que se comen a los consumidores primarios se llaman consumidores secundarios. Los consumidores secundarios por lo general comen carne (carnívoros).',
      example: 'Por ejemplo, el Halcón se come al Carpincho.',
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
      { name: 'Pájaro', image: aveImg },
      { name: 'Carpincho', image: carpinchoImg },
    ],
    info: {
      description:
        'Los organismos que comen productores primarios son consumidores primarios. Los consumidores primarios usualmente son también herbívoros, aunque también pueden ser consumidores de algas o bacterias.',
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
        'En la base de la cadena alimentaria se encuentran los productores primarios. Los productores primarios son autótrofos y por lo general son organismos fotosintéticos (tales como plantas, algas o cianobacterias).',
      example:
        'Un organismo autótrofo produce su propio alimento a partir de materia inorgánica y energía.',
      illustration: [
        { name: 'Arbusto frutal', image: fruitingShrubImg },
      ],
    },
  },
];
