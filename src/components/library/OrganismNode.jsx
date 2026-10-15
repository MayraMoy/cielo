import { GRAPH_WIDTH, GRAPH_HEIGHT, NODE_WIDTH_PERCENT, NODE_HEIGHT_PERCENT } from '../../data/trophicConstants';

export function OrganismNode({ organism, isSelected, onSelect, isDarkMode = false }) {
  const className = `trophic-node-card absolute z-10 flex cursor-pointer flex-col items-center justify-center rounded-2xl border px-1 py-1 text-center shadow-sm transition-all duration-200 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 overflow-hidden ${
    isSelected
      ? isDarkMode
        ? 'border-[#C5D76A] bg-[#2E3B1C] ring-2 ring-[#DDEB7A] shadow-md'
        : 'border-[#566116] bg-[#E4E8C8] ring-2 ring-[#7E8B28] shadow-md'
      : isDarkMode
      ? 'border-[#475432] bg-[#202619] hover:border-[#8E9F44]'
      : 'border-[#AEBB72] bg-white hover:border-[#7E8B28]'
  }`;

  const content = (
    <>
      {organism.image ? (
        <img
          src={organism.image}
          alt=""
          className="h-10 w-11 object-contain shrink-0 mb-0.5 pointer-events-none"
        />
      ) : (
        <span className="text-2xl leading-none" aria-hidden="true">
          {organism.icon}
        </span>
      )}
      <span
        className={`text-[11px] font-bold leading-tight w-full truncate px-0.5 ${
          isDarkMode ? 'text-[#F4F6ED]' : 'text-[#1A1C16]'
        }`}
      >
        {organism.name}
      </span>
    </>
  );

  const position = {
    left: `${(organism.position.x / GRAPH_WIDTH) * 100}%`,
    top: `${((organism.position.y * (760 / 600)) / GRAPH_HEIGHT) * 100}%`,
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