import { GRAPH_WIDTH, GRAPH_HEIGHT, NODE_WIDTH_PERCENT, NODE_HEIGHT_PERCENT } from '../../data/trophicConstants';

export function OrganismNode({ organism, isSelected, onSelect }) {
  const isLongName = organism.name.length > 15;
  const className = `trophic-node-card group absolute z-10 flex cursor-pointer flex-col items-center pt-2 pb-1.5 px-1.5 text-center rounded-xl border transition-all duration-200 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 ${
    isSelected
      ? 'border-[#7E8B28] dark:border-[#DDEB7A] bg-[var(--surface-card)] ring-2 ring-[#7E8B28] dark:ring-[#DDEB7A] shadow-[var(--card-shadow)] scale-105 z-20'
      : 'border-[var(--surface-card-border)] bg-[var(--surface-card)] shadow-[var(--control-shadow)] hover:border-[#7E8B28] hover:shadow-[var(--card-shadow)]'
  }`;

  const content = (
    <>
      {organism.image ? (
        <img
          src={organism.image}
          alt=""
          className="h-6.5 w-6.5 sm:h-7 sm:w-7 object-contain shrink-0 drop-shadow-xs pointer-events-none transition-transform group-hover:scale-105 mb-1"
        />
      ) : (
        <span className="text-xl leading-none mb-1" aria-hidden="true">
          {organism.icon}
        </span>
      )}
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