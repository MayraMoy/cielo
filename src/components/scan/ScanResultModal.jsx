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
    <div className="absolute inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-3 animate-[modal-appear_220ms_ease-out] font-['Poppins']">
      <div className="w-full max-w-[340px] bg-white rounded-3xl p-6 shadow-2xl border border-[#E5E7EB] flex flex-col gap-4">
        
        {/* Cabecera */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#F2F4E6] text-[#687320] border border-[#CFD79F]">
            <span>🌿</span>
            <span>{species.stationLabel || 'Especie descubierta'}</span>
          </span>
          <span className="text-xs font-medium text-[#7E8B28]">
            Est. {species.step}/{species.totalSteps}
          </span>
        </div>

        {/* Título y Categoría (Sin caja contenedora) */}
        <div>
          <h2 className="text-xl font-bold text-[#1A1C16] tracking-tight leading-tight">
            {species.name}
          </h2>
          <div className="flex items-center gap-1.5 mt-0.5 flex-wrap text-xs font-medium text-[#7E8B28]">
            {!isJunior && species.scientificName && (
              <>
                <span className="italic text-[#727763]">{species.scientificName}</span>
                <span>•</span>
              </>
            )}
            <span>{species.tag}</span>
          </div>
        </div>

        {/* Descripción limpia en texto plano (sin bordes ni fondo gris) */}
        <div className="text-[13.5px] leading-relaxed text-[#2B2F25] flex flex-col gap-2.5">
          <p>{descriptionText}</p>
          {curiosityText && (
            <p className="text-xs font-medium text-[#545C1E] bg-[#F2F4E6]/60 p-2.5 rounded-xl leading-snug">
              💡 {curiosityText}
            </p>
          )}
        </div>

        {/* Línea divisoria sutil para separar el regalo de la lectura */}
        <div className="border-t border-[#E5E7EB]/75 my-0.5" />

        {/* Sección de Recompensa (Minimalista, sin caja de tarjeta) */}
        <div className="flex items-center gap-3">
          <GiftBox className="w-9 h-9 shrink-0 animate-[gift-bounce_1.8s_ease-in-out_infinite]" />
          <div className="min-w-0">
            <p className="text-xs font-bold text-[#1A1C16]">
              Regalo #{species.step} disponible
            </p>
            <p className="text-[11px] text-[#555A49] leading-tight truncate">
              {species.rewardText}
            </p>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex flex-col gap-2 pt-1">
          <button
            type="button"
            onClick={onStartTrivia}
            className="w-full py-3 px-4 bg-[#7E8B28] hover:bg-[#6D7821] text-white text-sm font-semibold rounded-xl shadow-sm transition-all cursor-pointer"
          >
            {isJunior ? '🎯 ¡Jugar Trivia y Ganar Regalo!' : 'Responder Trivia de la Estación'}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full py-2 px-4 bg-transparent hover:bg-black/5 text-[#727763] text-xs font-medium rounded-xl transition-all cursor-pointer"
          >
            Elegir otra estación QR
          </button>
        </div>

      </div>
    </div>
  );
}