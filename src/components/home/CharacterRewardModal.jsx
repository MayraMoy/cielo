import { useLanguage } from '../../hooks/useLanguage';
import { useDismissAnimation } from '../../hooks/useDismissAnimation';
import { Portal } from '../common/Portal';

export function CharacterRewardModal({ rewardIndex = 0, onClose, onOpenLibrary }) {
  const { t, content } = useLanguage();
  const { isClosing, requestClose } = useDismissAnimation(onClose, 220);
  const REWARD_CHARACTERS = content.library.rewards;
  const reward = REWARD_CHARACTERS[rewardIndex] || REWARD_CHARACTERS[0];

  return (
    <Portal>
      <div
        className={`absolute inset-0 z-[70] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm ${
          isClosing
            ? 'animate-[overlay-fade-out_220ms_ease-in_forwards]'
            : 'animate-[overlay-fade-in_180ms_ease-out]'
        }`}
        onClick={requestClose}
      >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="reward-modal-title"
        className={`relative w-full max-w-[320px] rounded-3xl border border-[#E5E7EB] bg-white p-6 text-center shadow-2xl ${
          isClosing
            ? 'animate-[modal-disappear_200ms_ease-in_forwards]'
            : 'animate-[modal-appear_220ms_ease-out]'
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        {/* Botón Cerrar */}
        <button
          type="button"
          onClick={requestClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-xl text-[#4A4E3E] transition-colors hover:bg-black/5 cursor-pointer"
          aria-label={t('library.rewardModal.closeAria')}
        >
          ×
        </button>

        {/* Badge / Etapa */}
        <span className="inline-block rounded-full border border-[#99AB49] bg-[#F2F4E6] px-3 py-0.5 text-xs font-semibold text-[#545C1E]">
          {reward.badge}
        </span>

        {/* Imagen Destacada del Personaje */}
        <div className="my-4 flex justify-center">
          <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-[#FAF9F5] p-2 border border-[#E5E7EB]">
            <img
              src={reward.image}
              alt={reward.name}
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        {/* Título del Premio */}
        <h2 id="reward-modal-title" className="text-lg font-bold text-[#1A1C16]">
          {reward.name}
        </h2>

        {/* Descripción Breve */}
        <p className="mt-1.5 text-xs text-[#555A49] leading-relaxed">
          {reward.description}
        </p>

        {/* Fichas Desbloqueadas */}
        <div className="mt-3 rounded-xl bg-[#FAF9F5] px-3 py-2 border border-[#E5E7EB]">
          <p className="text-xs font-medium text-[#3C4033]">
            <strong className="text-[#1A1C16]">{t('library.rewardModal.newSheets')}</strong>{' '}
            {reward.unlockedSpeciesNames.join(', ')}
          </p>
        </div>

        {/* Botones de Acción */}
        <div className="mt-5 flex flex-col gap-2">
          {onOpenLibrary && (
            <button
              type="button"
              onClick={onOpenLibrary}
              className="w-full rounded-xl bg-[#7E8B28] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#6D7821] cursor-pointer"
            >
              {t('library.rewardModal.viewCollection')}
            </button>
          )}
          <button
            type="button"
            onClick={requestClose}
            className={`w-full rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors cursor-pointer ${
              onOpenLibrary
                ? 'bg-transparent text-[#545C1E] hover:bg-[#F2F4E6]'
                : 'bg-[#7E8B28] text-white hover:bg-[#6D7821]'
            }`}
          >
            {t('library.rewardModal.continue')}
          </button>
        </div>
      </section>
      </div>
    </Portal>
  );
}