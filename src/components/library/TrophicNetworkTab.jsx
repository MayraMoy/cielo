import { useState, useRef } from 'react';
import { TROPHIC_NETWORK } from '../../data/library/trophicNetwork';
import { useTheme } from '../../hooks/useTheme';
import { Portal } from '../common/Portal';

const GRAPH_WIDTH = 360;
const GRAPH_HEIGHT = 1080;
const NODE_WIDTH_PERCENT = 29;
const NODE_HEIGHT = 96;
const NODE_HEIGHT_PERCENT = (NODE_HEIGHT / GRAPH_HEIGHT) * 100;

const trophicLayers = [
  {
    id: 'tertiary',
    label: 'Consumidores terciarios',
    top: 0,
    height: 270,
    color: '#FFF8F0',
    darkColor: '#241B12',
  },
  {
    id: 'secondary',
    label: 'Consumidores secundarios',
    top: 270,
    height: 270,
    color: '#F2F7FC',
    darkColor: '#141E2B',
  },
  {
    id: 'primary',
    label: 'Consumidores primarios',
    top: 540,
    height: 310,
    color: '#FFFDF0',
    darkColor: '#242010',
  },
  {
    id: 'producer',
    label: 'Productores',
    top: 850,
    height: 230,
    color: '#F5F8EC',
    darkColor: '#172211',
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
  isConnected,
  isDimmed,
  onSelect,
  hasDraggedRef,
}) {
  const isLongName = organism.name.length > 15;
  const className = `trophic-node-card group absolute z-10 flex cursor-pointer flex-col items-center pt-2 pb-1.5 px-1.5 text-center rounded-xl border transition-all duration-200 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 ${
    isSelected
      ? 'border-[#7E8B28] dark:border-[#DDEB7A] bg-[var(--surface-card)] ring-2 ring-[#7E8B28] dark:ring-[#DDEB7A] shadow-[var(--card-shadow)] scale-105 z-20'
      : isConnected
      ? 'border-[#7E8B28] dark:border-[#C5D76A] bg-[var(--surface-card)] shadow-[var(--control-shadow)] z-15'
      : isDimmed
      ? 'border-[var(--surface-card-border)] bg-[var(--surface-card)] opacity-35 hover:opacity-80'
      : 'border-[var(--surface-card-border)] bg-[var(--surface-card)] shadow-[var(--control-shadow)] hover:border-[#7E8B28] hover:shadow-[var(--card-shadow)]'
  }`;

  const content = (
    <>
      <img
        src={organism.image}
        alt=""
        className="h-6.5 w-6.5 sm:h-7 sm:w-7 shrink-0 object-contain drop-shadow-xs pointer-events-none transition-transform group-hover:scale-105 mb-1"
      />
      <div className="flex-1 w-full flex items-center justify-center min-h-0">
        <span
          className={`trophic-organism-name font-bold w-full text-center tracking-tight px-0.5 line-clamp-3 break-words text-[var(--text-primary)] ${
            isLongName
              ? 'text-[9.5px] sm:text-[10px] leading-[1.15]'
              : 'text-[10px] sm:text-[10.5px] leading-[1.18]'
          }`}
        >
          {organism.name}
        </span>
      </div>
    </>
  );

  const position = {
    left: `${(organism.position.x / GRAPH_WIDTH) * 100}%`,
    top: `${(organism.position.y / GRAPH_HEIGHT) * 100}%`,
    width: `${NODE_WIDTH_PERCENT}%`,
    height: `${NODE_HEIGHT_PERCENT}%`,
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
  trophicLayersList,
}) {
  if (!organism) return null;

  const currentLayer = trophicLayersList.find((l) => l.id === organism.kind);

  return (
    <div
      className="rounded-2xl border border-[var(--surface-card-border)] bg-[var(--surface-card)] p-3.5 shadow-[var(--card-shadow)] transition-all animate-[modal-appear_180ms_ease-out] text-[var(--text-primary)]"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-start justify-between gap-2.5">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <img
              src={organism.image}
              alt=""
              className="w-7 h-7 object-contain shrink-0 drop-shadow-xs"
            />
            <span className="text-base font-black truncate text-[var(--text-primary)]">
              {organism.name}
            </span>
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-lg border border-[var(--surface-card-border)] bg-[var(--surface-step)] text-[var(--text-secondary)] shadow-2xs">
              {currentLayer?.label || 'Organismo'}
            </span>
          </div>

          {foods.length > 0 && (
            <p className="mt-1 text-xs leading-relaxed text-[var(--text-secondary)]">
              <span className="font-bold text-[var(--text-primary)]">
                Se alimenta de:
              </span>{' '}
              {foods.join(', ')}.
            </p>
          )}

          {consumers.length > 0 && (
            <p className="mt-1 text-xs leading-relaxed text-[var(--text-secondary)]">
              <span className="font-bold text-[var(--text-primary)]">
                Es alimento de:
              </span>{' '}
              {consumers.join(', ')}.
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="shrink-0 cursor-pointer rounded-xl border border-[var(--surface-card-border)] bg-[var(--surface-card)] hover:bg-black/5 dark:hover:bg-white/5 px-2.5 py-1 text-xs font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] shadow-[var(--control-shadow)] transition-colors"
          aria-label="Cerrar información del organismo"
        >
          ✕ Cerrar
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

  const connectedNodeIds = selectedNodeId
    ? TROPHIC_NETWORK.links
        .filter(
          (link) =>
            link.food === selectedNodeId || link.consumer === selectedNodeId
        )
        .map((link) =>
          link.food === selectedNodeId ? link.consumer : link.food
        )
    : [];

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
          className="absolute inset-x-0 border-b border-[var(--surface-card-border)]/50 transition-colors"
          style={{
            top: `${(layer.top / GRAPH_HEIGHT) * 100}%`,
            height: `${(layer.height / GRAPH_HEIGHT) * 100}%`,
            backgroundColor: isDarkMode ? layer.darkColor : layer.color,
          }}
        >
          <span className="absolute left-3.5 top-3 z-[6] inline-flex items-center px-2.5 py-0.5 rounded-lg text-[11px] font-bold tracking-tight bg-[var(--surface-card)]/90 backdrop-blur-xs border border-[var(--surface-card-border)] text-[var(--text-secondary)] shadow-2xs transition-colors">
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
              fill={isDarkMode ? '#8E9F44' : '#7E8B28'}
            />
          </marker>
          <marker
            id="trophic-arrow-highlight"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path
              d="M 0 0 L 10 5 L 0 10 z"
              fill={isDarkMode ? '#DDEB7A' : '#545C1E'}
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
          const isDimmed = selectedNodeId && !isHighlighted;

          return (
            <path
              key={`${link.food}-${link.consumer}`}
              d={getLinkPath(food, consumer)}
              fill="none"
              stroke={
                isHighlighted
                  ? isDarkMode
                    ? '#DDEB7A'
                    : '#545C1E'
                  : isDarkMode
                  ? '#7E8E38'
                  : '#82923A'
              }
              strokeWidth={isHighlighted ? '3' : '1.75'}
              strokeOpacity={isHighlighted ? '1' : isDimmed ? '0.08' : '0.35'}
              markerEnd={
                isHighlighted
                  ? 'url(#trophic-arrow-highlight)'
                  : 'url(#trophic-arrow)'
              }
              className="transition-[stroke-opacity,stroke-width,stroke] duration-200"
            />
          );
        })}
      </svg>

      {TROPHIC_NETWORK.nodes.map((organism) => {
        const isSelected = selectedNodeId === organism.id;
        const isConnected =
          selectedNodeId && connectedNodeIds.includes(organism.id);
        const isDimmed = selectedNodeId && !isSelected && !isConnected;

        return (
          <OrganismNode
            key={organism.id}
            organism={organism}
            isSelected={isSelected}
            isConnected={isConnected}
            isDimmed={isDimmed}
            onSelect={handleNodeSelect}
            hasDraggedRef={hasDraggedRef}
          />
        );
      })}
    </>
  );

  return (
    <section
      className="trophic-network pb-4 transition-all duration-300"
      aria-label="Red trófica interactiva"
    >
      {/* Guía y controles en línea, fluidos sobre el fondo sin card envolvente */}
      <div className="flex flex-col gap-2.5 px-0.5 mb-3">
        <p className="trophic-network-instruction text-xs font-normal leading-relaxed text-[var(--text-secondary)]">
          {isJunior ? (
            <>
              Tocá un animal para ver qué come. Las flechas van del{' '}
              <span className="font-semibold text-[var(--text-primary)]">alimento</span> al{' '}
              <span className="font-semibold text-[var(--text-primary)]">consumidor</span>.
            </>
          ) : (
            <>
              Tocá un organismo para ver su alimentación. Las flechas van del{' '}
              <span className="font-semibold text-[var(--text-primary)]">alimento</span> al{' '}
              <span className="font-semibold text-[var(--text-primary)]">consumidor</span>.
            </>
          )}
        </p>

        <div className="flex items-center justify-between gap-2">
          <div className="text-[11px] font-medium text-[var(--text-secondary)]">
            {zoom > 1 && (
              <span className="inline-flex items-center gap-1 text-[#687320] dark:text-[#C5D76A] font-semibold">
                <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 shrink-0" aria-hidden="true">
                  <path d="M8 1a1 1 0 0 1 1 1v1.1a5.002 5.002 0 0 1 3.9 3.9H14a1 1 0 1 1 0 2h-1.1a5.002 5.002 0 0 1-3.9 3.9V14a1 1 0 1 1-2 0v-1.1A5.002 5.002 0 0 1 3.1 9H2a1 1 0 0 1 0-2h1.1A5.002 5.002 0 0 1 7 3.1V2a1 1 0 0 1 1-1z" />
                </svg>
                <span>Arrastrá para moverte</span>
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5 shrink-0 ml-auto">
            {/* Controles de Zoom */}
            <div className="inline-flex items-center gap-0.5 p-0.5 rounded-xl border border-[var(--surface-card-border)] bg-[var(--surface-card)] shadow-[var(--control-shadow)]">
              <button
                type="button"
                onClick={handleZoomOut}
                disabled={zoom <= 1}
                className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-bold transition-colors ${
                  zoom <= 1
                    ? 'opacity-30 cursor-not-allowed text-[var(--text-secondary)]'
                    : 'text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer'
                }`}
                aria-label="Alejar red"
                title="Alejar (-)"
              >
                −
              </button>

              <button
                type="button"
                onClick={handleResetZoom}
                className={`min-w-[42px] h-8 px-1.5 flex items-center justify-center rounded-lg text-[11px] font-bold tracking-tight transition-colors cursor-pointer ${
                  zoom > 1
                    ? 'bg-[#7E8B28] text-white shadow-xs'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
                aria-label={`Restablecer zoom; nivel actual ${Math.round(zoom * 100)}%`}
                title="Restablecer (100%)"
              >
                {Math.round(zoom * 100)}%
              </button>

              <button
                type="button"
                onClick={handleZoomIn}
                disabled={zoom >= 2.5}
                className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-bold transition-colors ${
                  zoom >= 2.5
                    ? 'opacity-30 cursor-not-allowed text-[var(--text-secondary)]'
                    : 'text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer'
                }`}
                aria-label="Acercar red"
                title="Acercar (+)"
              >
                +
              </button>
            </div>

            {/* Botón de pantalla completa / Explorar */}
            <button
              type="button"
              onClick={() => {
                setIsImmersive(true);
                setZoom(1);
                setPan({ x: 0, y: 0 });
              }}
              className="inline-flex items-center gap-1.5 h-9 px-3 rounded-xl border border-[var(--surface-card-border)] bg-[var(--surface-card)] shadow-[var(--control-shadow)] text-xs font-semibold text-[var(--text-primary)] hover:border-[#7E8B28] hover:text-[#545C1E] transition-all active:scale-95 cursor-pointer"
              aria-label="Meterse a la red trófica en pantalla completa"
              title="Explorar en pantalla completa"
            >
              <MaximizeIcon className="w-3.5 h-3.5 text-[#687320] dark:text-[#C5D76A]" />
              <span>Explorar</span>
            </button>
          </div>
        </div>
      </div>

      {/* Contenedor del Diagrama con soporte de Zoom y Paneo */}
      <div
        className="relative mx-auto w-full max-w-[360px] overflow-hidden rounded-2xl border border-[var(--surface-card-border)] bg-[var(--surface-card)] shadow-[var(--card-shadow)] transition-colors"
        role="group"
        aria-label="Red trófica: las flechas conectan alimentos y consumidores"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ touchAction: zoom > 1 ? 'none' : 'pan-y' }}
      >
        <div
          className="relative aspect-[360/1080] w-full select-none transition-transform duration-75"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: 'center center',
            cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
          }}
        >
          {renderDiagramContent()}
        </div>
      </div>

      {/* Tarjeta flotante informativa al tocar un organismo en vista normal */}
      {focusedNode && !isImmersive && (
        <Portal>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-45 flex justify-center px-4 pb-20">
            <div className="pointer-events-auto w-full max-w-[350px]">
              <OrganismInfoCard
                organism={focusedNode}
                foods={foodsForFocusedNode}
                consumers={consumersForFocusedNode}
                onClose={() => setSelectedNodeId(null)}
                trophicLayersList={trophicLayers}
              />
            </div>
          </div>
        </Portal>
      )}

      {/* MODAL INMERSIVO / PANTALLA COMPLETA ("METERSE A LA RED") */}
      {isImmersive && (
        <div
          className="absolute inset-0 z-50 flex flex-col bg-[var(--app-surface)] select-none animate-[modal-appear_180ms_ease-out]"
          role="dialog"
          aria-modal="true"
          aria-label="Modo inmersivo de la red trófica"
        >
          {/* Barra superior del modo inmersivo */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--surface-card-border)] bg-[var(--surface-card)] backdrop-blur-md shrink-0">
            <div>
              <h3 className="text-sm font-bold text-[var(--text-primary)]">
                Explorador de Red Trófica
              </h3>
              <p className="text-[11px] text-[var(--text-secondary)]">
                Tocá cada animal para ver su alimentación
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsImmersive(false)}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[var(--surface-card)] border border-[var(--surface-card-border)] text-xs font-bold text-[var(--text-primary)] hover:border-[#7E8B28] cursor-pointer transition-colors active:scale-95 shadow-[var(--control-shadow)]"
            >
              <span>✕ Salir</span>
            </button>
          </div>

          {/* Área interactiva a pantalla completa */}
          <div
            className="flex-1 relative min-h-0 overflow-y-auto overflow-x-hidden flex flex-col items-center p-2"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ touchAction: zoom > 1 ? 'none' : 'pan-y' }}
          >
            {/* Controles de Zoom flotantes dentro del modo inmersivo */}
            <div className="sticky top-0 z-30 flex w-full max-w-[360px] shrink-0 justify-end px-1 py-2 pointer-events-none">
              <div className="pointer-events-auto inline-flex items-center gap-0.5 p-0.5 rounded-xl border border-[var(--surface-card-border)] bg-[var(--surface-card)] shadow-[var(--control-shadow)]">
                <button
                  type="button"
                  onClick={handleZoomOut}
                  disabled={zoom <= 1}
                  className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-bold transition-colors ${
                    zoom <= 1
                      ? 'opacity-30 cursor-not-allowed text-[var(--text-secondary)]'
                      : 'text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer'
                  }`}
                  aria-label="Alejar red"
                  title="Alejar (-)"
                >
                  −
                </button>
                <button
                  type="button"
                  onClick={handleResetZoom}
                  className={`min-w-[42px] h-8 px-1.5 flex items-center justify-center rounded-lg text-[11px] font-bold tracking-tight transition-colors cursor-pointer ${
                    zoom > 1
                      ? 'bg-[#7E8B28] text-white shadow-xs'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                  aria-label={`Restablecer zoom; nivel actual ${Math.round(zoom * 100)}%`}
                  title="Restablecer (100%)"
                >
                  {Math.round(zoom * 100)}%
                </button>
                <button
                  type="button"
                  onClick={handleZoomIn}
                  disabled={zoom >= 2.5}
                  className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-bold transition-colors ${
                    zoom >= 2.5
                      ? 'opacity-30 cursor-not-allowed text-[var(--text-secondary)]'
                      : 'text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer'
                  }`}
                  aria-label="Acercar red"
                  title="Acercar (+)"
                >
                  +
                </button>
              </div>
            </div>

            {/* Diagrama escalado y desplazable */}
            <div
              className="relative aspect-[360/1080] w-full max-w-[360px] shrink-0 select-none transition-transform duration-75"
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
              <div className="sticky bottom-4 z-40 w-full max-w-[350px] mt-auto">
                <OrganismInfoCard
                  organism={focusedNode}
                  foods={foodsForFocusedNode}
                  consumers={consumersForFocusedNode}
                  onClose={() => setSelectedNodeId(null)}
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
