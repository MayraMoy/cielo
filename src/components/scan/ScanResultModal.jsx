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
    <div className="absolute inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 animate-[modal-appear_220ms_ease-out] font-['Poppins']">
      <div className="w-full max-w-[340px] bg-white dark:bg-[#1E231B] rounded-3xl p-6 shadow-2xl border border-[#E5E7EB] dark:border-[#2D3528] flex flex-col gap-4 transition-colors">
        
        {/* Cabecera */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#F2F4E6] dark:bg-[#2A3320] text-[#687320] dark:text-[#C4D864] border border-[#CFD79F] dark:border-[#425032]">
            <span>🌿</span>
            <span>{species.stationLabel || 'Especie descubierta'}</span>
          </span>
          <span className="text-xs font-medium text-[#7E8B28] dark:text-[#A8B848]">
            Est. {species.step}/{species.totalSteps}
          </span>
        </div>

        {/* Título y Categoría */}
        <div>
          <h2 className="text-xl font-bold text-[#1A1C16] dark:text-[#F3F4F1] tracking-tight leading-tight">
            {species.name}
          </h2>
          <div className="flex items-center gap-1.5 mt-0.5 flex-wrap text-xs font-medium text-[#7E8B28] dark:text-[#A8B848]">
            {!isJunior && species.scientificName && (
              <>
                <span className="italic text-[#727763] dark:text-[#9EA48F]">
                  {species.scientificName}
                </span>
                <span className="text-stone-300 dark:text-stone-600">•</span>
              </>
            )}
            <span>{species.tag}</span>
          </div>
        </div>

        {/* Descripción e Info Curiosa */}
        <div className="text-[13.5px] leading-relaxed text-[#2B2F25] dark:text-[#D1D5CB] flex flex-col gap-2.5">
          <p>{descriptionText}</p>
          {curiosityText && (
            <p className="text-xs font-medium text-[#464D18] dark:text-[#E2EE9D] bg-[#F2F4E6]/80 dark:bg-[#28311D] p-3 rounded-xl border border-transparent dark:border-[#3D4B2A] leading-snug">
              💡 {curiosityText}
            </p>
          )}
        </div>

        {/* Divisor */}
        <div className="border-t border-[#E5E7EB]/75 dark:border-[#2D3528] my-0.5" />

        {/* Sección Recompensa */}
        <div className="flex items-center gap-3">
          <GiftBox className="w-9 h-9 shrink-0 animate-[gift-bounce_1.8s_ease-in-out_infinite]" />
          <div className="min-w-0">
            <p className="text-xs font-bold text-[#1A1C16] dark:text-[#F3F4F1]">
              Regalo #{species.step} disponible
            </p>
            <p className="text-[11px] text-[#555A49] dark:text-[#9EA48F] leading-tight truncate">
              {species.rewardText}
            </p>
          </div>
        </div>

        {/* Botones */}
        <div className="flex flex-col gap-2 pt-1">
          <button
            type="button"
            onClick={onStartTrivia}
            className="w-full py-3 px-4 bg-[#7E8B28] hover:bg-[#6D7821] dark:bg-[#8D9C2D] dark:hover:bg-[#7E8B28] text-white text-sm font-semibold rounded-xl shadow-sm transition-all cursor-pointer"
          >
            {isJunior ? '🎯 ¡Jugar Trivia y Ganar Regalo!' : 'Responder Trivia de la Estación'}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full py-2 px-4 bg-transparent hover:bg-black/5 dark:hover:bg-white/5 text-[#727763] dark:text-[#9EA48F] text-xs font-medium rounded-xl transition-all cursor-pointer"
          >
            Elegir otra estación QR
          </button>
        </div>

      </div>
    </div>
  );
}