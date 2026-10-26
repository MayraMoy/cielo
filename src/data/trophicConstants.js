export const GRAPH_WIDTH = 360;
export const GRAPH_HEIGHT = 1080;
export const NODE_WIDTH_PERCENT = 29;
export const NODE_HEIGHT = 96;
export const NODE_HEIGHT_PERCENT = (NODE_HEIGHT / GRAPH_HEIGHT) * 100;

export const trophicLayers = [
  {
    id: 'tertiary',
    label: 'Consumidores terciarios',
    top: 0,
    height: 270,
    color: '#FFF8F0',
    darkColor: '#241B12',
    textColor: '#8D4314',
    darkTextColor: '#FFC899',
    badgeBg: '#FFEAD4',
    darkBadgeBg: '#3A2716',
    badgeBorder: '#F2D0B0',
    darkBadgeBorder: '#55381F',
  },
  {
    id: 'secondary',
    label: 'Consumidores secundarios',
    top: 270,
    height: 270,
    color: '#F2F7FC',
    darkColor: '#141E2B',
    textColor: '#214B77',
    darkTextColor: '#B9DAFB',
    badgeBg: '#DEECFA',
    darkBadgeBg: '#1B2C42',
    badgeBorder: '#BDD7F5',
    darkBadgeBorder: '#294263',
  },
  {
    id: 'primary',
    label: 'Consumidores primarios',
    top: 540,
    height: 310,
    color: '#FFFDF0',
    darkColor: '#242010',
    textColor: '#705F12',
    darkTextColor: '#FDE047',
    badgeBg: '#FFF3C4',
    darkBadgeBg: '#383313',
    badgeBorder: '#F0DF96',
    darkBadgeBorder: '#59501B',
  },
  {
    id: 'producer',
    label: 'Productores',
    top: 850,
    height: 230,
    color: '#F5F8EC',
    darkColor: '#172211',
    textColor: '#4E5B18',
    darkTextColor: '#D9EE85',
    badgeBg: '#E7F0CC',
    darkBadgeBg: '#27381B',
    badgeBorder: '#CFE09B',
    darkBadgeBorder: '#3F5927',
  },
];

export function getLinkPath(food, consumer) {
  const startX = food.position.x;
  const startY = food.position.y - NODE_HEIGHT / 2;
  const endX = consumer.position.x;
  const endY = consumer.position.y + NODE_HEIGHT / 2;
  const controlY = (startY + endY) / 2;

  return `M ${startX} ${startY} C ${startX} ${controlY}, ${endX} ${controlY}, ${endX} ${endY}`;
}