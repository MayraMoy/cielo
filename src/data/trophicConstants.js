export const GRAPH_WIDTH = 360;
export const GRAPH_HEIGHT = 760;
export const NODE_WIDTH_PERCENT = 30;
export const NODE_HEIGHT = 92;
export const NODE_HEIGHT_PERCENT = (NODE_HEIGHT / GRAPH_HEIGHT) * 100;

export const trophicLayers = [
  {
    id: 'tertiary',
    label: 'Consumidores terciarios',
    top: 0,
    height: 190,
    color: '#FFF4E7',
    darkColor: '#251D14',
    textColor: '#8D4314',
    darkTextColor: '#FFC899',
  },
  {
    id: 'secondary',
    label: 'Consumidores secundarios',
    top: 190,
    height: 190,
    color: '#F0F5FB',
    darkColor: '#16212E',
    textColor: '#214B77',
    darkTextColor: '#B9DAFB',
  },
  {
    id: 'primary',
    label: 'Consumidores primarios',
    top: 380,
    height: 190,
    color: '#FFFBEA',
    darkColor: '#252312',
    textColor: '#705F12',
    darkTextColor: '#FDE047',
  },
  {
    id: 'producer',
    label: 'Productores',
    top: 570,
    height: 190,
    color: '#F4F7E6',
    darkColor: '#1A2313',
    textColor: '#4E5B18',
    darkTextColor: '#D9EE85',
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