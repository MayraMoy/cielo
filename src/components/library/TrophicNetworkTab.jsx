import { useState } from 'react';
import { TROPHIC_NETWORK } from '../../data/library/trophicNetwork';
import { useTheme } from '../../hooks/useTheme';

const GRAPH_WIDTH = 360;
const GRAPH_HEIGHT = 600;
const NODE_WIDTH_PERCENT = 30;
const NODE_HEIGHT = 92;
const NODE_HEIGHT_PERCENT = (NODE_HEIGHT / GRAPH_HEIGHT) * 100;

const trophicLayers = [
  {
    id: 'tertiary',
    label: 'Consumidores terciarios',
    top: 0,
    height: 150,
    color: '#FFF4E7',
    darkColor: '#30261F',
  },
  {
    id: 'secondary',
    label: 'Consumidores secundarios',
    top: 150,
    height: 150,
    color: '#F0F5FB',
    darkColor: '#202A32',
  },
  {
    id: 'primary',
    label: 'Consumidores primarios',
    top: 300,
    height: 150,
    color: '#FFFBEA',
    darkColor: '#302F1F',
  },
  {
    id: 'producer',
    label: 'Productores',
    top: 450,
    height: 150,
    color: '#F4F7E6',
    darkColor: '#263020',
  },
];

function getLinkPath(food, consumer) {
  const startX = food.position.x;
  const startY = food.position.y - NODE_HEIGHT / 2;
  const endX = consumer.position.x;
  const endY = consumer.position.y + NODE_HEIGHT / 2;
  const controlY = (startY + endY) / 2;

  return `M ${startX} ${startY} C ${startX} ${controlY}, ${endX} ${controlY}, ${endX} ${endY}`;
}

function OrganismNode({ organism, isSelected, onSelect }) {
  const className = `absolute z-10 flex cursor-pointer flex-col items-center justify-center gap-1 rounded-xl border px-1 py-1.5 text-center shadow-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#687320] ${
    isSelected
      ? 'border-[#566116] bg-[#E4E8C8] ring-2 ring-[#7E8B28] dark:border-[#A4B544] dark:bg-[#303A27] dark:ring-[#A4B544]'
      : 'border-[#AEBB72] bg-white hover:border-[#7E8B28] dark:border-[#55623B] dark:hover:border-[#A4B544]'
  }`;
  const content = (
    <>
      {organism.image ? (
        <img
          src={organism.image}
          alt=""
          className="h-7 w-8 object-contain"
        />
      ) : (
        <span className="text-xl leading-none" aria-hidden="true">
          {organism.icon}
        </span>
      )}
      <span className="text-xs font-bold leading-tight text-[#1A1C16]">
        {organism.name}
      </span>
    </>
  );
  const position = {
    left: `${(organism.position.x / GRAPH_WIDTH) * 100}%`,
    top: `${(organism.position.y / GRAPH_HEIGHT) * 100}%`,
    width: `${NODE_WIDTH_PERCENT}%`,
    height: `${NODE_HEIGHT_PERCENT}%`,
    minHeight: 0,
    transform: 'translate(-50%, -50%)',
  };

  return (
    <button
      type="button"
      onClick={() => onSelect(organism.id)}
      aria-pressed={isSelected}
      aria-label={`Explorar conexiones de ${organism.name}`}
      className={className}
      style={position}
    >
      {content}
    </button>
  );
}

export function TrophicNetworkTab({ isJunior = false }) {
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const { isDarkMode } = useTheme();
  const focusedNode = TROPHIC_NETWORK.nodes.find(
    (node) => node.id === selectedNodeId
  );
  const foodsForFocusedNode = selectedNodeId
    ? TROPHIC_NETWORK.links
        .filter((link) => link.consumer === selectedNodeId)
        .map((link) =>
          TROPHIC_NETWORK.nodes.find((node) => node.id === link.food)?.name
        )
    : [];
  const consumersForFocusedNode = selectedNodeId
    ? TROPHIC_NETWORK.links
        .filter((link) => link.food === selectedNodeId)
        .map((link) =>
          TROPHIC_NETWORK.nodes.find((node) => node.id === link.consumer)?.name
        )
    : [];

  const handleNodeSelect = (nodeId) => {
    setSelectedNodeId((previous) => (previous === nodeId ? null : nodeId));
  };

  return (
    <section className="trophic-network" aria-labelledby="trophic-network-title">
      <div className="flex items-center px-1">
        <div>
          <h2
            id="trophic-network-title"
            className="text-lg font-bold text-[#1A1C16]"
          >
            Red trófica
          </h2>
        </div>
      </div>

      <p className="trophic-network-instruction mt-2 px-1 text-base font-normal leading-relaxed text-[#292D20] dark:text-[#DDE2D3]">
        {isJunior
          ? 'Tocá un ser vivo para ver cómo se conecta con los demás.'
          : 'Tocá un organismo para explorar sus conexiones con la red.'}
      </p>

      <div
        className="trophic-network-chart relative mx-auto mt-2 w-full max-w-[360px] overflow-hidden rounded-2xl border border-[#D9DFC3] bg-[#FCFCF8] shadow-sm dark:border-[#3D4633] dark:bg-[#1F241A]"
        role="group"
        aria-label="Red trófica: las flechas conectan alimentos y consumidores"
      >
        <div className="relative aspect-[360/600] w-full">
          {trophicLayers.map((layer) => (
            <div
              key={layer.id}
              className="absolute inset-x-0 border-b border-[#E7EAD9] dark:border-[#3D4633]"
              style={{
                top: `${(layer.top / GRAPH_HEIGHT) * 100}%`,
                height: `${(layer.height / GRAPH_HEIGHT) * 100}%`,
                backgroundColor: isDarkMode ? layer.darkColor : layer.color,
              }}
            >
              <span className="absolute left-3 top-2 text-xs font-bold text-[#343B14] dark:text-[#E1E7D8]">
                {layer.label}
              </span>
            </div>
          ))}

          <svg
            viewBox={`0 0 ${GRAPH_WIDTH} ${GRAPH_HEIGHT}`}
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 z-[1] h-full w-full"
            aria-hidden="true"
          >
            <defs>
              <marker
                id="trophic-arrow"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="5"
                markerHeight="5"
                orient="auto-start-reverse"
              >
                <path
                  d="M 0 0 L 10 5 L 0 10 z"
                  fill={isDarkMode ? '#C4D864' : '#7E8B28'}
                />
              </marker>
            </defs>
            {TROPHIC_NETWORK.links.map((link) => {
              const food = TROPHIC_NETWORK.nodes.find(
                (node) => node.id === link.food
              );
              const consumer = TROPHIC_NETWORK.nodes.find(
                (node) => node.id === link.consumer
              );
              const isHighlighted =
                selectedNodeId &&
                (selectedNodeId === link.food ||
                  selectedNodeId === link.consumer);

              return (
                <path
                  key={`${link.food}-${link.consumer}`}
                  d={getLinkPath(food, consumer)}
                  fill="none"
                  stroke={
                    isDarkMode
                      ? isHighlighted
                        ? '#E2EE9D'
                        : '#A8BD50'
                      : isHighlighted
                        ? '#566116'
                        : '#91A044'
                  }
                  strokeWidth={isHighlighted ? '3.5' : '2'}
                  strokeOpacity={selectedNodeId && !isHighlighted ? '0.45' : '0.8'}
                  strokeDasharray="4 3"
                  markerEnd="url(#trophic-arrow)"
                />
              );
            })}
          </svg>

          {TROPHIC_NETWORK.nodes.map((organism) => (
            <OrganismNode
              key={organism.id}
              organism={organism}
              isSelected={selectedNodeId === organism.id}
              onSelect={handleNodeSelect}
            />
          ))}
        </div>
      </div>

      {focusedNode && (
        <div
          className="mt-3 rounded-xl border border-[#CCD69E] bg-white px-3.5 py-3 shadow-xs dark:border-[#55623B] dark:bg-[#1F241A]"
          role="status"
          aria-live="polite"
        >
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-sm font-bold text-[#1A1C16]">
                {focusedNode.name}
              </p>
              {foodsForFocusedNode.length > 0 && (
                <p className="mt-1 text-sm leading-relaxed text-[#343B14] dark:text-[#DDE2D3]">
                  <span className="font-semibold">Se alimenta de:</span>{' '}
                  {foodsForFocusedNode.join(', ')}.
                </p>
              )}
              {consumersForFocusedNode.length > 0 && (
                <p className="mt-1 text-sm leading-relaxed text-[#343B14] dark:text-[#DDE2D3]">
                  <span className="font-semibold">Es alimento de:</span>{' '}
                  {consumersForFocusedNode.join(', ')}.
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={() => setSelectedNodeId(null)}
              className="shrink-0 cursor-pointer rounded-full px-2 py-1 text-sm font-semibold text-[#3F4A12] hover:bg-[#F2F4E6] dark:text-[#DDEB7A] dark:hover:bg-[#2A3222]"
              aria-label="Cerrar información del organismo"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
