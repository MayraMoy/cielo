import regaloImg from '../../assets/regalo.webp';

export function GiftBox({ isOpen = false, className = "w-14 h-14" }) {
  if (isOpen) {
    return (
      <div className={`relative flex items-center justify-center select-none ${className}`}>
        {/* Halo de resplandor para regalo abierto */}
        <span className="absolute inset-0 rounded-full bg-amber-400/25 blur-sm pointer-events-none" />
        <svg
          viewBox="0 0 72 72"
          className="w-full h-full drop-shadow-md overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Destellos dorados saliendo de la caja */}
          <path d="M36 2L38 12L48 14L38 16L36 26L34 16L24 14L34 12Z" fill="#FACC15" />
          <path d="M54 12L55 17L60 18L55 19L54 24L53 19L48 18L53 17Z" fill="#FDE047" opacity="0.9" />
          <path d="M16 16L17 20L21 21L17 22L16 26L15 22L11 21L15 20Z" fill="#FDE047" opacity="0.9" />

          {/* Tapa abierta inclinada flotando hacia arriba */}
          <g transform="translate(6, 0) rotate(-18 36 22)">
            <rect x="16" y="20" width="38" height="8" rx="2.5" fill="#C83E2B" />
            <rect x="16" y="20" width="38" height="3" fill="#DC4C38" />
            <rect x="32" y="20" width="6" height="8" fill="#FACC15" />
            {/* Moño del lazo */}
            <path d="M35 20 C31 15, 25 16, 28 20 Z" fill="#FBBF24" />
            <path d="M35 20 C39 15, 45 16, 42 20 Z" fill="#FBBF24" />
          </g>

          {/* Interior luminoso de la caja abierta */}
          <ellipse cx="36" cy="33" rx="17" ry="6" fill="#FEF08A" />
          <ellipse cx="36" cy="33" rx="12" ry="4" fill="#FFFFFF" />

          {/* Cuerpo de la caja de regalo */}
          <path d="M19 33 H53 L50 60 C50 62, 48 64, 46 64 H26 C24 64, 22 62, 22 60 Z" fill="#991B1B" />
          <path d="M20 33 H52 L49 59 C49 61, 47 63, 45 63 H27 C25 63, 23 61, 23 59 Z" fill="#B91C1C" />

          {/* Cinta dorada vertical */}
          <path d="M33 33 H39 L38.5 64 H33.5 Z" fill="#FACC15" />

          {/* Cinta horizontal */}
          <path d="M20.5 45 H51.5" stroke="#FBBF24" strokeWidth="3" />

          {/* Insignia verde de regalo ya abierto / reclamado */}
          <circle cx="51" cy="53" r="8.5" fill="#7E8B28" stroke="#FFFFFF" strokeWidth="1.8" />
          <path d="M47.5 53.5 L50 56 L54.5 50.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }

  return (
    <img
      src={regaloImg}
      alt="Paquete de regalo"
      className={`object-contain select-none drop-shadow-sm ${className}`}
      draggable={false}
    />
  );
}
