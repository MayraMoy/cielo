import { useState, useRef } from 'react';
import { TROPHIC_NETWORK } from '../../data/library/trophicNetwork';
import { useTheme } from '../../hooks/useTheme';

const GRAPH_WIDTH = 360;
const GRAPH_HEIGHT = 900;
const NODE_WIDTH_PERCENT = 29.5;
const NODE_HEIGHT = 86;
const NODE_HEIGHT_PERCENT = (NODE_HEIGHT / GRAPH_HEIGHT) * 100;

const trophicLayers = [
  {
    id: 'tertiary',
    label: 'Consumidores terciarios',
    top: 0,
    height: 240,
    color: '#FFF4E7',
    darkColor: '#251D14',
    textColor: '#8D4314',
    darkTextColor: '#FFC899',
  },
  {
    id: 'secondary',
    label: 'Consumidores secundarios',
    top: 240,
    height: 240,
    color: '#F0F5FB',
    darkColor: '#16212E',
    textColor: '#214B77',
    darkTextColor: '#B9DAFB',
  },
  {
    id: 'primary',
    label: 'Consumidores primarios',
    top: 480,
    height: 250,
    color: '#FFFBEA',
    darkColor: '#252312',
    textColor: '#705F12',
    darkTextColor: '#FDE047',
  },
  {
    id: 'producer',
    label: 'Productores',
    top: 730,
    height: 170,
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

function MaximizeIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
    </svg>
  );
}

function OrganismNode({
  organism,
  isSelected,
  onSelect,
  isDarkMode = false,
  hasDraggedRef,
}) {
  const className = `trophic-node-card absolute z-10 flex cursor-pointer flex-col items-center justify-center rounded-2xl border px-1 py-1 text-center shadow-md transition-all duration-200 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 overflow-hidden ${
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
        alt=""
        className="h-8 w-9 shrink-0 object-contain drop-shadow-sm mb-0.5 pointer-events-none"
      />
      <span
        className={`trophic-organism-name text-[11px] leading-[1.15] font-bold w-full text-center tracking-tight px-0.5 line-clamp-2 ${
          isDarkMode ? 'text-[#F4F6ED]' : 'text-[#1A1C16]'
        }`}
      >
        {organism.name}
      </span>
      {organism.scientificName && (
        <span
          className={`text-[9px] italic font-medium w-full text-center truncate px-0.5 opacity-75 ${
            isDarkMode ? 'text-[#DDE2D3]' : 'text-[#555A49]'
          }`}
        >
          {organism.scientificName}
        </span>
      )}
    </>
  );

  const position = {
    left: `${(organism.position.x / GRAPH_WIDTH) * 100}%`,
    top: `${(organism.position.y / GRAPH_HEIGHT) * 100}%`,
    width: `${NODE_WIDTH_PERCENT}%`,
    height: `${NODE_HEIGHT_PERCENT}%`,
    minHeight: `${NODE_HEIGHT}px`,
    transform: 'translate(-50%, -50%)',
  };

  const handleClick = (e) => {
    e.stopPropagation();
    if (hasDraggedRef?.current) {
      return;
    }
    onSelect(organism.id);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={isSelected}
      aria-label={`Explorar conexiones de ${organism.name}`}
      className={className}
      style={position}
    >
      {content}
    </button>
  );
}

function OrganismInfoCard({
  organism,
  foods,
  consumers,
  onClose,
  isDarkMode,
  trophicLayersList,
}) {
  if (!organism) return null;

  return (
    <div
      className={`rounded-2xl border p-4 shadow-md transition-all animate-[modal-appear_180ms_ease-out] ${
        isDarkMode
          ? 'border-[#424E33] bg-[#202619] text-[#F4F6ED]'
          : 'border-[#CCD69E] bg-white text-[#1A1C16]'
      }`}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <img
              src={organism.image}
              alt=""
              className="w-7 h-7 object-contain shrink-0 drop-shadow-xs"
            />
            <span className="text-base font-black">
              {organism.name}
            </span>
            {organism.scientificName && (
              <span
                className={`text-xs italic font-medium ${
                  isDarkMode ? 'text-[#DDEB7A]' : 'text-[#687320]'
                }`}
              >
                ({organism.scientificName})
              </span>
            )}
            <span
              className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                isDarkMode
                  ? 'border-[#55623B] bg-[#2A3420] text-[#DDEB7A]'
                  : 'border-[#CCD69E] bg-[#F2F4E6] text-[#545C1E]'
              }`}
            >
              {trophicLayersList.find((l) => l.id === organism.kind)?.label ||
                'Organismo'}
            </span>
          </div>

          {foods.length > 0 && (
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
              {foods.join(', ')}.
            </p>
          )}

          {consumers.length > 0 && (
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
              {consumers.join(', ')}.
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={onClose}
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
  );
}

export function TrophicNetworkTab({ isJunior = false }) {
  const { isDarkMode } = useTheme();
  const [selectedNodeId, setSelectedNodeId] = useState(null);

  // Estados de Zoom, Paneo y Modo Inmersivo
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isImmersive, setIsImmersive] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0, panX: 0, panY: 0 });
  const hasDraggedRef = useRef(false);
  const pinchStartDistRef = useRef(0);
  const pinchStartZoomRef = useRef(1);

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

  const clampPan = (newX, newY, currentZoom) => {
    if (currentZoom <= 1) return { x: 0, y: 0 };
    const maxPanX = (GRAPH_WIDTH * (currentZoom - 1)) / 2 + 50;
    const maxPanY = (GRAPH_HEIGHT * (currentZoom - 1)) / 2 + 100;
    return {
      x: Math.max(-maxPanX, Math.min(maxPanX, newX)),
      y: Math.max(-maxPanY, Math.min(maxPanY, newY)),
    };
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(2.5, +(prev + 0.25).toFixed(2)));
  };

  const handleZoomOut = () => {
    setZoom((prev) => {
      const next = Math.max(1, +(prev - 0.25).toFixed(2));
      if (next === 1) setPan({ x: 0, y: 0 });
      return next;
    });
  };

  const handleResetZoom = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  // Controladores de arrastre con mouse
  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    isDraggingRef.current = true;
    setIsDragging(true);
    hasDraggedRef.current = false;
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      panX: pan.x,
      panY: pan.y,
    };
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
      hasDraggedRef.current = true;
    }
    if (zoom > 1) {
      setPan(
        clampPan(
          dragStartRef.current.panX + dx,
          dragStartRef.current.panY + dy,
          zoom
        )
      );
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    setIsDragging(false);
  };

  // Controladores de gestos táctiles
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      isDraggingRef.current = true;
      setIsDragging(true);
      hasDraggedRef.current = false;
      dragStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        panX: pan.x,
        panY: pan.y,
      };
    } else if (e.touches.length === 2) {
      isDraggingRef.current = false;
      setIsDragging(false);
      hasDraggedRef.current = true;
      pinchStartDistRef.current = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      pinchStartZoomRef.current = zoom;
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 1 && isDraggingRef.current) {
      const dx = e.touches[0].clientX - dragStartRef.current.x;
      const dy = e.touches[0].clientY - dragStartRef.current.y;
      if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
        hasDraggedRef.current = true;
      }
      if (zoom > 1) {
        setPan(
          clampPan(
            dragStartRef.current.panX + dx,
            dragStartRef.current.panY + dy,
            zoom
          )
        );
      }
    } else if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      if (pinchStartDistRef.current > 0) {
        const factor = dist / pinchStartDistRef.current;
        const nextZoom = Math.min(
          2.5,
          Math.max(1, +(pinchStartZoomRef.current * factor).toFixed(2))
        );
        setZoom(nextZoom);
        if (nextZoom === 1) setPan({ x: 0, y: 0 });
      }
    }
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
    setIsDragging(false);
  };

  // Renderizado del contenido interno del diagrama
  const renderDiagramContent = () => (
    <>
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
            className="absolute left-3 top-2.5 z-[6] inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider shadow-xs backdrop-blur-sm border transition-colors"
            style={{
              color: isDarkMode ? layer.darkTextColor : layer.textColor,
              backgroundColor: isDarkMode
                ? 'rgba(26, 31, 20, 0.94)'
                : 'rgba(255, 255, 255, 0.94)',
              borderColor: isDarkMode
                ? 'rgba(255, 255, 255, 0.12)'
                : 'rgba(0, 0, 0, 0.08)',
            }}
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
            <path
              d="M 0 0 L 10 5 L 0 10 z"
              fill={isDarkMode ? '#A4B544' : '#7E8B28'}
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
            (selectedNodeId === link.food || selectedNodeId === link.consumer);

          return (
            <path
              key={`${link.food}-${link.consumer}`}
              d={getLinkPath(food, consumer)}
              fill="none"
              stroke={
                isHighlighted
                  ? isDarkMode
                    ? '#DDEB7A'
                    : '#566116'
                  : isDarkMode
                  ? '#768832'
                  : '#91A044'
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
          hasDraggedRef={hasDraggedRef}
        />
      ))}
    </>
  );

  return (
    <section
      className={`trophic-network transition-all duration-300 ${
        focusedNode ? 'pb-28' : 'pb-4'
      }`}
      aria-labelledby="trophic-network-title"
    >
      <div className="flex items-center justify-between px-1">
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

        {/* Botón para meterse a pantalla completa */}
        <button
          type="button"
          onClick={() => {
            setIsImmersive(true);
            setZoom(1.25);
          }}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer active:scale-95 ${
            isDarkMode
              ? 'bg-[#252E1B] hover:bg-[#2F3A22] text-[#DDEB7A] border border-[#3D482B]'
              : 'bg-[#F2F4E6] hover:bg-[#E4E8C8] text-[#4E5618] border border-[#CCD69E]'
          }`}
          aria-label="Meterse a la red trófica en pantalla completa"
        >
          <MaximizeIcon className="w-3.5 h-3.5" />
          <span>Meterse a la red</span>
        </button>
      </div>

      <p
        className={`trophic-network-instruction mt-2 px-1 text-sm font-medium leading-relaxed ${
          isDarkMode ? 'text-[#DDE2D3]' : 'text-[#555A49]'
        }`}
      >
        {isJunior
          ? 'Tocá un ser vivo para ver su tarjeta o usá el zoom para explorar.'
          : 'Tocá un organismo para ver su información o ampliá con zoom para ver de cerca.'}
      </p>

      {/* Barra de controles de Zoom en la vista normal */}
      <div className="mt-2.5 flex items-center justify-between px-1">
        <span
          className={`text-xs font-semibold ${
            isDarkMode ? 'text-[#A8B298]' : 'text-[#687320]'
          }`}
        >
          {zoom > 1 ? '🔍 Arrastrá para moverte' : '🔍 Acercá para ver detalles'}
        </span>

        <div
          className={`inline-flex items-center gap-1 p-0.5 rounded-xl border shadow-xs ${
            isDarkMode
              ? 'bg-[#1F241A] border-[#353D2B]'
              : 'bg-[#F8F5F0] border-[#E7E4D8]'
          }`}
        >
          <button
            type="button"
            onClick={handleZoomOut}
            disabled={zoom <= 1}
            className={`w-7 h-7 flex items-center justify-center rounded-lg text-sm font-bold transition-colors ${
              zoom <= 1
                ? 'opacity-40 cursor-not-allowed text-gray-400'
                : isDarkMode
                ? 'text-[#F4F6ED] hover:bg-[#2C3520] cursor-pointer'
                : 'text-[#1A1C16] hover:bg-black/5 cursor-pointer'
            }`}
            aria-label="Alejar red (Zoom Out)"
            title="Alejar (-)"
          >
            −
          </button>

          <button
            type="button"
            onClick={handleResetZoom}
            className={`px-2 h-7 flex items-center justify-center rounded-lg text-[11px] font-black tracking-tight transition-colors cursor-pointer ${
              zoom > 1
                ? isDarkMode
                  ? 'bg-[#2E3B1C] text-[#DDEB7A]'
                  : 'bg-[#E4E8C8] text-[#545C1E]'
                : isDarkMode
                ? 'text-[#C5CCB8]'
                : 'text-[#555A49]'
            }`}
            aria-label="Restablecer zoom a 100%"
            title="Restablecer (100%)"
          >
            {Math.round(zoom * 100)}%
          </button>

          <button
            type="button"
            onClick={handleZoomIn}
            disabled={zoom >= 2.5}
            className={`w-7 h-7 flex items-center justify-center rounded-lg text-sm font-bold transition-colors ${
              zoom >= 2.5
                ? 'opacity-40 cursor-not-allowed text-gray-400'
                : isDarkMode
                ? 'text-[#F4F6ED] hover:bg-[#2C3520] cursor-pointer'
                : 'text-[#1A1C16] hover:bg-black/5 cursor-pointer'
            }`}
            aria-label="Acercar red (Zoom In)"
            title="Acercar (+)"
          >
            +
          </button>
        </div>
      </div>

      {/* Contenedor del Diagrama con soporte de Zoom y Paneo */}
      <div
        className={`relative mx-auto mt-2 w-full max-w-[360px] overflow-hidden rounded-2xl border shadow-sm transition-colors ${
          isDarkMode
            ? 'border-[#3D4633] bg-[#1A1E14]'
            : 'border-[#D9DFC3] bg-[#FCFCF8]'
        }`}
        role="group"
        aria-label="Red trófica: las flechas conectan alimentos y consumidores"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="relative aspect-[360/900] w-full select-none transition-transform duration-75"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: 'center center',
            cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
          }}
        >
          {renderDiagramContent()}
        </div>
      </div>

      {/* Tarjeta informativa en la vista normal */}
      {focusedNode && (
        <div className="mt-3">
          <OrganismInfoCard
            organism={focusedNode}
            foods={foodsForFocusedNode}
            consumers={consumersForFocusedNode}
            onClose={() => setSelectedNodeId(null)}
            isDarkMode={isDarkMode}
            trophicLayersList={trophicLayers}
          />
        </div>
      )}

      {/* MODAL INMERSIVO / PANTALLA COMPLETA ("METERSE A LA RED") */}
      {isImmersive && (
        <div
          className="absolute inset-0 z-50 flex flex-col bg-[#FAF9F5] dark:bg-[#141710] select-none animate-[modal-appear_180ms_ease-out]"
          role="dialog"
          aria-modal="true"
          aria-label="Modo inmersivo de la red trófica"
        >
          {/* Barra superior del modo inmersivo */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#E5E7EB] dark:border-[#2C3520] bg-white/90 dark:bg-[#1A1F14]/90 backdrop-blur-md shrink-0">
            <div>
              <h3 className="text-sm font-bold text-[#1A1C16] dark:text-[#F4F6ED] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#7E8B28] animate-pulse" />
                Explorador de Red Trófica
              </h3>
              <p className="text-[11px] text-[#6F7762] dark:text-[#A8B298]">
                Hacé zoom y tocá cada animal para ver su ficha
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsImmersive(false)}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#F2F4E6] dark:bg-[#252E1B] text-[#4E5618] dark:text-[#DDEB7A] border border-[#CCD69E] dark:border-[#3D482B] text-xs font-bold hover:bg-[#E4E8C8] cursor-pointer transition-colors active:scale-95"
            >
              <span>✕ Salir</span>
            </button>
          </div>

          {/* Área interactiva a pantalla completa */}
          <div
            className="flex-1 relative overflow-hidden flex items-center justify-center p-2"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Controles de Zoom flotantes dentro del modo inmersivo */}
            <div className="absolute top-3 right-3 z-30 flex items-center gap-1 p-1 rounded-xl bg-white/95 dark:bg-[#1F241A]/95 backdrop-blur-md border border-[#CCD69E] dark:border-[#353D2B] shadow-sm">
              <button
                type="button"
                onClick={handleZoomOut}
                disabled={zoom <= 1}
                className={`w-7 h-7 flex items-center justify-center rounded-lg text-sm font-bold transition-colors ${
                  zoom <= 1
                    ? 'opacity-40 cursor-not-allowed text-gray-400'
                    : isDarkMode
                    ? 'text-[#F4F6ED] hover:bg-[#2C3520] cursor-pointer'
                    : 'text-[#1A1C16] hover:bg-black/5 cursor-pointer'
                }`}
                title="Alejar (-)"
              >
                −
              </button>
              <button
                type="button"
                onClick={handleResetZoom}
                className="px-2 h-7 flex items-center justify-center rounded-lg text-[11px] font-black cursor-pointer text-[#4E5618] dark:text-[#DDEB7A]"
                title="Restablecer (100%)"
              >
                {Math.round(zoom * 100)}%
              </button>
              <button
                type="button"
                onClick={handleZoomIn}
                disabled={zoom >= 2.5}
                className={`w-7 h-7 flex items-center justify-center rounded-lg text-sm font-bold transition-colors ${
                  zoom >= 2.5
                    ? 'opacity-40 cursor-not-allowed text-gray-400'
                    : isDarkMode
                    ? 'text-[#F4F6ED] hover:bg-[#2C3520] cursor-pointer'
                    : 'text-[#1A1C16] hover:bg-black/5 cursor-pointer'
                }`}
                title="Acercar (+)"
              >
                +
              </button>
            </div>

            {/* Diagrama escalado y desplazable */}
            <div
              className="relative aspect-[360/900] w-full max-w-[360px] select-none transition-transform duration-75"
              style={{
                transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                transformOrigin: 'center center',
                cursor:
                  zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
              }}
            >
              {renderDiagramContent()}
            </div>

            {/* Tarjeta informativa flotante al tocar cualquier animal */}
            {focusedNode && (
              <div className="absolute bottom-3 inset-x-3 z-40">
                <OrganismInfoCard
                  organism={focusedNode}
                  foods={foodsForFocusedNode}
                  consumers={consumersForFocusedNode}
                  onClose={() => setSelectedNodeId(null)}
                  isDarkMode={isDarkMode}
                  trophicLayersList={trophicLayers}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
