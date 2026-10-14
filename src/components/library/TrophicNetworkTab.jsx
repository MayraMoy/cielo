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
    darkColor: '#251D14',
    textColor: '#8D4314',
    darkTextColor: '#FFC899',
  },
  {
    id: 'secondary',
    label: 'Consumidores secundarios',
    top: 150,
    height: 150,
    color: '#F0F5FB',
    darkColor: '#16212E',
    textColor: '#214B77',
    darkTextColor: '#B9DAFB',
  },
  {
    id: 'primary',
    label: 'Consumidores primarios',
    top: 300,
    height: 150,
    color: '#FFFBEA',
    darkColor: '#252312',
    textColor: '#705F12',
    darkTextColor: '#FDE047',
  },
  {
    id: 'producer',
    label: 'Productores',
    top: 450,
    height: 150,
    color: '#F4F7E6',
    darkColor: '#1A2313',
    textColor: '#4E5B18',
    darkTextColor: '#D9EE85',
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

function OrganismNode({ organism, isSelected, onSelect, isDarkMode = false }) {
  const className = `absolute z-10 flex cursor-pointer flex-col items-center justify-center gap-1 rounded-2xl border px-1.5 py-1.5 text-center shadow-md transition-all duration-200 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 ${
    isSelected
      ? isDarkMode
        ? 'border-[#C5D76A] bg-[#2E3B1C] ring-2 ring-[#DDEB7A] shadow-lg'
        : 'border-[#566116] bg-[#E4E8C8] ring-2 ring-[#7E8B28] shadow-lg'
      : isDarkMode
      ? 'border-[#475432] bg-[#202619] hover:border-[#8E9F44]'
      : 'border-[#CCD69E] bg-white hover:border-[#7E8B28]'
  }`;

  const content = (
    <>
      <img
        src={organism.image}
        alt={organism.name}
        className="h-8 w-9 object-contain drop-shadow-sm"
      />
      <span
        className={`text-xs font-bold leading-tight px-1 max-w-full break-words ${
          isDarkMode ? 'text-[#F4F6ED]' : 'text-[#1A1C16]'
        }`}
      >
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
  const { isDarkMode } = useTheme();
  const [selectedNodeId, setSelectedNodeId] = useState(null);

  const focusedNode = TROPHIC_NETWORK.nodes.find(
    (node) => node.id === selectedNodeId
  );

  const foodsForFocusedNode = selectedNodeId
    ? TROPHIC_NETWORK.links
        .filter((link) => link.consumer === selectedNodeId)
        .map((link) =>
          TROPHIC_NETWORK.nodes.find((node) => node.id === link.food)?.name
        )
        .filter(Boolean)
    : [];

  const consumersForFocusedNode = selectedNodeId
    ? TROPHIC_NETWORK.links
        .filter((link) => link.food === selectedNodeId)
        .map((link) =>
          TROPHIC_NETWORK.nodes.find((node) => node.id === link.consumer)?.name
        )
        .filter(Boolean)
    : [];

  const handleNodeSelect = (nodeId) => {
    setSelectedNodeId((previous) => (previous === nodeId ? null : nodeId));
  };

  return (
    <section className="trophic-network pb-28" aria-labelledby="trophic-network-title">
      <div className="flex items-center px-1">
        <div>
          <h2
            id="trophic-network-title"
            className={`text-lg font-bold ${
              isDarkMode ? 'text-[#F4F6ED]' : 'text-[#1A1C16]'
            }`}
          >
            Red trófica
          </h2>
        </div>
      </div>

      <p
        className={`trophic-network-instruction mt-2 px-1 text-sm font-medium leading-relaxed ${
          isDarkMode ? 'text-[#DDE2D3]' : 'text-[#555A49]'
        }`}
      >
        {isJunior
          ? 'Tocá un ser vivo para ver cómo se conecta con los demás.'
          : 'Tocá un organismo para explorar sus conexiones con la red.'}
      </p>

      <div
        className={`relative mx-auto mt-2 w-full max-w-[360px] overflow-hidden rounded-2xl border shadow-sm transition-colors ${
          isDarkMode
            ? 'border-[#3D4633] bg-[#1A1E14]'
            : 'border-[#D9DFC3] bg-[#FCFCF8]'
        }`}
        role="group"
        aria-label="Red trófica: las flechas conectan alimentos y consumidores"
      >
        <div className="relative aspect-[360/600] w-full">
          {trophicLayers.map((layer) => (
            <div
              key={layer.id}
              className={`absolute inset-x-0 border-b transition-colors ${
                isDarkMode ? 'border-white/10' : 'border-[#E7EAD9]'
              }`}
              style={{
                top: `${(layer.top / GRAPH_HEIGHT) * 100}%`,
                height: `${(layer.height / GRAPH_HEIGHT) * 100}%`,
                backgroundColor: isDarkMode ? layer.darkColor : layer.color,
              }}
            >
              <span
                className="absolute left-3 top-2 text-xs font-black tracking-wide"
                style={{ color: isDarkMode ? layer.darkTextColor : layer.textColor }}
              >
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
                <path d="M 0 0 L 10 5 L 0 10 z" fill={isDarkMode ? '#A4B544' : '#7E8B28'} />
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
                    isHighlighted
                      ? isDarkMode ? '#DDEB7A' : '#566116'
                      : isDarkMode ? '#768832' : '#91A044'
                  }
                  strokeWidth={isHighlighted ? '3.5' : '2'}
                  strokeOpacity={selectedNodeId && !isHighlighted ? '0.35' : '0.9'}
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
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </div>

      {focusedNode && (
        <div
          className={`mt-3 rounded-2xl border p-4 shadow-sm transition-colors ${
            isDarkMode
              ? 'border-[#424E33] bg-[#202619]'
              : 'border-[#CCD69E] bg-white'
          }`}
          role="status"
          aria-live="polite"
        >
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span
                  className={`text-base font-black ${
                    isDarkMode ? 'text-[#F4F6ED]' : 'text-[#1A1C16]'
                  }`}
                >
                  {focusedNode.name}
                </span>
                <span
                  className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                    isDarkMode
                      ? 'border-[#55623B] bg-[#2A3420] text-[#DDEB7A]'
                      : 'border-[#CCD69E] bg-[#F2F4E6] text-[#545C1E]'
                  }`}
                >
                  {trophicLayers.find((l) => l.id === focusedNode.kind)?.label ||
                    'Organismo'}
                </span>
              </div>
              {foodsForFocusedNode.length > 0 && (
                <p
                  className={`mt-1 text-sm leading-relaxed ${
                    isDarkMode ? 'text-[#DDE2D3]' : 'text-[#343B14]'
                  }`}
                >
                  <span
                    className={`font-bold ${
                      isDarkMode ? 'text-[#DDEB7A]' : 'text-[#545C1E]'
                    }`}
                  >
                    Se alimenta de:
                  </span>{' '}
                  {foodsForFocusedNode.join(', ')}.
                </p>
              )}
              {consumersForFocusedNode.length > 0 && (
                <p
                  className={`mt-1 text-sm leading-relaxed ${
                    isDarkMode ? 'text-[#DDE2D3]' : 'text-[#343B14]'
                  }`}
                >
                  <span
                    className={`font-bold ${
                      isDarkMode ? 'text-[#DDEB7A]' : 'text-[#545C1E]'
                    }`}
                  >
                    Es alimento de:
                  </span>{' '}
                  {consumersForFocusedNode.join(', ')}.
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={() => setSelectedNodeId(null)}
              className={`shrink-0 cursor-pointer rounded-xl px-3 py-1.5 text-xs font-bold transition-colors ${
                isDarkMode
                  ? 'bg-[#2A3420] text-[#DDEB7A] hover:bg-[#344026]'
                  : 'bg-[#F2F4E6] text-[#4E5618] hover:bg-[#E4E8C8]'
              }`}
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
