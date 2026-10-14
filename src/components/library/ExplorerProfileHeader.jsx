import { useAccessibility } from '../../hooks/useAccessibility';

// SVG nativo equivalente a la brújula "explore" de Material Symbols
const ExploreIcon = () => (
  <svg
    className="w-6 h-6 text-[#545C1E]"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM6.5 17.5L9.5 9.5L17.5 6.5L14.5 14.5L6.5 17.5ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" />
  </svg>
);

export function ExplorerProfileHeader({
  user,
  unlockedCardsCount,
  totalCardsCount,
  unlockedCharacters,
  onGoRegister,
}) {
  const { isLargeText, toggleLargeText } = useAccessibility();

  const rankBadge =
    unlockedCharacters >= 3
      ? 'Guardaparque Maestro'
      : unlockedCharacters >= 2
      ? 'Explorador del Humedal'
      : unlockedCharacters >= 1
      ? 'Explorador Inicial'
      : 'Visitante Curioso';

  return (
    <section className="flex items-center justify-between gap-3 rounded-3xl border border-[#E5E7EB] bg-white p-4 shadow-xs">
      <div className="flex items-center gap-3.5 min-w-0">
        
        {/* Contenedor del icono de la brújula */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F2F4E6] border border-[#CCD69E] shadow-2xs">
          <ExploreIcon />
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="text-base font-bold text-[#1A1C16] truncate">
              {user?.fullName || 'Explorador Invitado'}
            </h1>
            <span className="rounded-full bg-[#F2F4E6] border border-[#CFD79F] px-2.5 py-0.5 text-xs font-semibold text-[#545C1E]">
              {unlockedCardsCount}/{totalCardsCount} fichas
            </span>
          </div>

          <p className="text-xs font-semibold text-[#687320] mt-0.5">
            {rankBadge}
          </p>

          <div className="mt-1 flex items-center gap-2">
            {!user?.fullName && (
              <button
                type="button"
                onClick={onGoRegister}
                className="text-xs font-semibold text-[#7E8B28] underline underline-offset-2 cursor-pointer hover:text-[#545C1E] transition-colors"
              >
                • Registrarme
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Botón Accesibilidad A+ */}
      <button
        type="button"
        onClick={toggleLargeText}
        className={`shrink-0 inline-flex items-center justify-center rounded-xl border px-2.5 py-1.5 text-xs font-bold shadow-xs active:scale-95 transition-all cursor-pointer ${
          isLargeText
            ? 'border-[#7E8B28] bg-[#7E8B28] text-white'
            : 'border-[#CCD69E] bg-[#F2F4E6] text-[#4E5618] hover:bg-[#E4E8C8]'
        }`}
        aria-label={isLargeText ? 'Desactivar texto agrandado' : 'Activar texto agrandado y remarcado (A+)'}
        title={isLargeText ? 'Modo Lectura Activo (A+)' : 'Agrandar y Remarcar Texto (A+)'}
      >
        <span className="text-[12px] font-extrabold tracking-tight">A+</span>
      </button>
    </section>
  );
}