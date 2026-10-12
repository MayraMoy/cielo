import { GiftBox } from './GiftBox';
import { REWARD_CHARACTERS } from '../../data/libraryData';

export function CharacterRewardModal({ rewardIndex = 0, onClose, onOpenLibrary }) {
  const reward = REWARD_CHARACTERS[rewardIndex] || REWARD_CHARACTERS[0];

  return (
    <div
      className="absolute inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="reward-modal-title"
        className="relative w-full max-w-[340px] rounded-3xl border border-[#D1D5DB] bg-white px-6 pb-6 pt-5 text-center shadow-2xl animate-[modal-appear_220ms_ease-out]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-2xl leading-none text-[#4A4E3E] transition-colors hover:bg-black/5 cursor-pointer"
          aria-label="Cerrar premio"
        >
          ×
        </button>

        <div className="flex justify-center">
          <GiftBox className="w-20 h-20 animate-[gift-bounce_1.2s_ease-in-out_infinite]" />
        </div>
        <h2 id="reward-modal-title" className="mt-2 text-xl font-bold text-[#1A1C16]">
          ¡Felicidades!
        </h2>
        <p className="mt-1 text-xs leading-snug text-[#3C4033]">
          {reward.description}
        </p>

        <div className="mx-auto mt-4 flex w-full max-w-[270px] items-center gap-3 rounded-2xl border border-[#D1D5DB] bg-[#FAF9F5] p-3 text-left shadow-sm">
          <img
            src={reward.image}
            alt={reward.name}
            className="h-20 w-20 shrink-0 object-contain"
          />
          <div>
            <p className="text-sm font-semibold text-[#1A1C16] leading-tight">
              {reward.name}
            </p>
            <span className="mt-1.5 inline-flex rounded-full border border-[#99AB49] bg-[#F2F4E6] px-2.5 py-0.5 text-[10px] font-medium text-[#545C1E]">
              {reward.badge}
            </span>
            <p className="mt-1 text-[10px] text-[#555A49]">
              Fichas: {reward.unlockedSpeciesNames.join(', ')}
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-2">
          {onOpenLibrary && (
            <button
              type="button"
              onClick={onOpenLibrary}
              className="w-full rounded-xl bg-[#7E8B28] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#6D7821] cursor-pointer"
            >
              Ver en mi Colección
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className={`w-full rounded-xl px-4 py-2.5 text-sm font-medium transition-colors cursor-pointer ${
              onOpenLibrary
                ? 'bg-[#F2F4E6] text-[#545C1E] hover:bg-[#E4E8C8]'
                : 'bg-[#7E8B28] text-white hover:bg-[#6D7821]'
            }`}
          >
            ¡Genial!
          </button>
        </div>
      </section>
    </div>
  );
}
