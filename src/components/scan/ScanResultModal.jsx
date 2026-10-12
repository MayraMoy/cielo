import { GiftBox } from '../home/GiftBox';

export function ScanResultModal({
  species,
  isJunior = false,
  onStartTrivia,
  onClose,
}) {
  if (!species) return null;

  const descriptionText =
    isJunior && species.juniorDescription
      ? species.juniorDescription
      : species.description;

  const curiosityText =
    isJunior && species.juniorCuriosity
      ? species.juniorCuriosity
      : species.curiosity;

  return (
    <div className="absolute inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-3 animate-[modal-appear_220ms_ease-out]">
      <div className="w-full max-w-[350px] bg-white rounded-3xl p-5 shadow-2xl border border-[#D1D5DB] flex flex-col gap-3.5">
        {/* Encabezado con medalla de posta */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F2F4E6] text-[#687320] border border-[#CFD79F]">
            <span>🌿</span>
            <span>{species.stationLabel || 'Especie descubierta'}</span>
          </span>
          <span className="text-[11px] font-semibold text-[#7E8B28] bg-[#7E8B28]/10 px-2.5 py-0.5 rounded-md">
            Posta {species.step}/{species.totalSteps}
          </span>
        </div>

        {/* Nombre y datos del espécimen */}
        <div>
          <div className="flex items-baseline gap-2 flex-wrap">
            <h2 className="text-2xl font-bold text-[#1A1C16] tracking-tight">
              {species.name}
            </h2>
            {!isJunior && species.scientificName && (
              <span className="text-xs italic text-[#727763]">
                ({species.scientificName})
              </span>
            )}
          </div>
          <p className="text-xs font-medium text-[#7E8B28]">
            {species.tag} • {species.reserve}
          </p>
        </div>

        {/* Descripción botánica/zoológica adaptada por edad */}
        <div
          className={`${
            isJunior ? 'text-[13.5px]' : 'text-xs'
          } leading-relaxed text-[#3C4033] bg-[#F7F6F0] p-3.5 rounded-xl border border-black/5`}
        >
          <p className="mb-2">{descriptionText}</p>
          {curiosityText && (
            <p
              className={`${
                isJunior ? 'text-xs font-medium' : 'text-[11px] italic'
              } text-[#545C1E] bg-[#F2F4E6] p-2 rounded-lg border border-[#CFD79F]/60`}
            >
              💡 {curiosityText}
            </p>
          )}
        </div>

        {/* Tarjeta de desafío para desbloquear el regalo */}
        <div className="bg-[#FAF9F5] border border-[#E5E7EB] rounded-2xl p-3 flex items-center gap-3">
          <div className="shrink-0">
            <GiftBox className="w-11 h-11 animate-[gift-bounce_1.8s_ease-in-out_infinite]" />
          </div>
          <div className="flex flex-col">
            <p className="text-xs font-semibold text-[#1A1C16]">
              Regalo #{species.step} listo para destrabar
            </p>
            <p className="text-[11px] text-[#636856] leading-snug">
              {species.rewardText}
            </p>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex flex-col gap-2 pt-1">
          <button
            type="button"
            onClick={onStartTrivia}
            className="w-full py-3 px-4 bg-[#7E8B28] hover:bg-[#6D7821] text-white text-sm font-semibold rounded-xl shadow-sm transition-all duration-150 active:scale-[0.98] cursor-pointer"
          >
            {isJunior
              ? '🎯 ¡Jugar Trivia y Ganar Regalo!'
              : 'Responder Trivia de la Posta'}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full py-2 px-4 bg-transparent hover:bg-black/5 text-[#555A49] text-xs font-medium rounded-xl transition-all cursor-pointer"
          >
            Elegir otra posta QR
          </button>
        </div>
      </div>
    </div>
  );
}
