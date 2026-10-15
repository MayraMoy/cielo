import { useLanguage } from '../../hooks/useLanguage';
import { useDismissAnimation } from '../../hooks/useDismissAnimation';
import { Portal } from '../common/Portal';
import { GiftBox } from '../home/GiftBox';

export function ScanResultModal({
  species,
  isJunior = false,
  onStartTrivia,
  onClose,
}) {
  const { t } = useLanguage();
  const { isClosing, requestClose } = useDismissAnimation(onClose, 220);
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
    <Portal>
      <div
        className={`absolute inset-0 z-[70] bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 font-['Poppins'] ${
          isClosing
            ? 'animate-[overlay-fade-out_220ms_ease-in_forwards]'
            : 'animate-[overlay-fade-in_180ms_ease-out]'
        }`}
      >
      <div
        className={`w-full max-w-[340px] bg-white dark:bg-[#1E231B] rounded-3xl p-6 shadow-2xl border border-[#E5E7EB] dark:border-[#2D3528] flex flex-col gap-4 transition-colors ${
          isClosing
            ? 'animate-[modal-disappear_200ms_ease-in_forwards]'
            : 'animate-[modal-appear_220ms_ease-out]'
        }`}
      >
        
        {/* Cabecera */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-[#556018] dark:text-[#C4D864] tracking-tight">
            {species.stationLabel || t('scan.discoveredFallback')}
          </span>
          <span className="text-xs font-medium text-[#727763] dark:text-[#9EA48F]">
            {t('scan.stationShort', { step: species.step, total: species.totalSteps })}
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
              {t('scan.giftAvailable', { n: species.step })}
            </p>
            <p className="text-[11px] text-[#555A49] dark:text-[#9EA48F] leading-tight truncate">
              {isJunior ? t('scan.playToWinGift') : species.rewardText}
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
            {isJunior ? t('scan.playGame') : t('scan.answerTrivia')}
          </button>
          <button
            type="button"
            onClick={requestClose}
            className="w-full py-2 px-4 bg-transparent hover:bg-black/5 dark:hover:bg-white/5 text-[#727763] dark:text-[#9EA48F] text-xs font-medium rounded-xl transition-all cursor-pointer"
          >
            {t('scan.chooseAnother')}
          </button>
        </div>

      </div>
      </div>
    </Portal>
  );
}