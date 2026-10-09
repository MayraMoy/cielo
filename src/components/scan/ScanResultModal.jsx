import { GiftBox } from '../home/GiftBox';

export function ScanResultModal({ species, onClose, onGoHome }) {
  if (!species) return null;

  return (
    <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-3 animate-fade-in">
      <div className="w-full max-w-[350px] bg-white rounded-3xl p-5 shadow-2xl border border-[#D1D5DB] flex flex-col gap-3.5 transform transition-all animate-slide-up">
        {/* Encabezado con medalla de logro */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F2F4E6] text-[#687320] border border-[#CFD79F]">
            <span>🌿</span>
            <span>Especie descubierta</span>
          </span>
          <span className="text-[11px] font-medium text-[#7E8B28] bg-[#7E8B28]/10 px-2 py-0.5 rounded-md">
            +1 Logro
          </span>
        </div>

        {/* Nombre y datos del espécimen */}
        <div>
          <div className="flex items-baseline gap-2">
            <h2 className="text-2xl font-bold text-[#1A1C16] tracking-tight">
              {species.name}
            </h2>
            <span className="text-xs italic text-[#727763]">
              ({species.scientificName})
            </span>
          </div>
          <p className="text-xs font-medium text-[#7E8B28]">
            {species.tag} • {species.reserve}
          </p>
        </div>

        {/* Tarjeta de recompensa con regalo desbloqueado */}
        <div className="bg-[#FAF9F5] border border-[#E5E7EB] rounded-2xl p-3 flex items-center gap-3">
          <div className="shrink-0 transform hover:scale-110 transition-transform">
            <GiftBox className="w-12 h-12" />
          </div>
          <div className="flex flex-col">
            <p className="text-xs font-semibold text-[#1A1C16]">
              ¡Personaje 1/3 desbloqueado!
            </p>
            <p className="text-[11px] text-[#636856] leading-snug">
              {species.rewardText}
            </p>
          </div>
        </div>

        {/* Descripción botánica breve */}
        <div className="text-xs leading-relaxed text-[#3C4033] bg-[#F7F6F0] p-3 rounded-xl border border-black/5">
          <p className="mb-1.5">{species.description}</p>
          {species.curiosity && (
            <p className="text-[11px] text-[#555A49] italic">
              💡 {species.curiosity}
            </p>
          )}
        </div>

        {/* Botones de acción */}
        <div className="flex flex-col gap-2 pt-1">
          <button
            type="button"
            onClick={onGoHome}
            className="w-full py-2.5 px-4 bg-[#7E8B28] hover:bg-[#6D7821] text-white text-sm font-medium rounded-xl shadow-sm transition-all duration-150 active:scale-[0.98] cursor-pointer"
          >
            Ver avance en el Inicio
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full py-2 px-4 bg-transparent hover:bg-black/5 text-[#555A49] text-xs font-medium rounded-xl transition-all cursor-pointer"
          >
            Escanear otro código QR
          </button>
        </div>
      </div>
    </div>
  );
}
