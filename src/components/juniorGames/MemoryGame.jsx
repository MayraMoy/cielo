import { useLanguage } from '../../hooks/useLanguage';
import { useMemoryGame } from '../../hooks/useMemoryGame';

const PAIR_IDS = ['molle', 'carpincho', 'halcon'];

export function MemoryGame({ speciesById = {}, onComplete }) {
  const { t } = useLanguage();
  const { deck, flipped, matched, moves, handleFlip } = useMemoryGame({
    speciesIds: PAIR_IDS,
    onComplete,
  });

  const totalPairs = PAIR_IDS.length;

  return (
    <div className="w-full max-w-[360px] mx-auto flex flex-col gap-4">
      <div className="flex items-center justify-between text-xs font-bold text-[#545C1E] dark:text-[#DDEB7A]">
        <span className="rounded-full bg-[#F2F4E6] dark:bg-[#242B1E] border border-[#CFD79F] dark:border-[#3D482B] px-3 py-1">
          {t('juniorGames.memorama.moves', { n: moves })}
        </span>
        <span className="rounded-full bg-[#F2F4E6] dark:bg-[#242B1E] border border-[#CFD79F] dark:border-[#3D482B] px-3 py-1">
          {t('juniorGames.memorama.pairs', {
            found: matched.length,
            total: totalPairs,
          })}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {deck.map((card, index) => {
          const species = speciesById[card.speciesId];
          const isFaceUp =
            flipped.includes(card.uid) || matched.includes(card.speciesId);
          const isMatched = matched.includes(card.speciesId);

          return (
            <button
              key={card.uid}
              type="button"
              onClick={() => handleFlip(card.uid, card.speciesId)}
              disabled={isFaceUp}
              aria-label={
                isFaceUp
                  ? t('juniorGames.memorama.ariaFlipped', {
                      n: index + 1,
                      name: species?.name || '',
                    })
                  : t('juniorGames.memorama.ariaHidden', { n: index + 1 })
              }
              className={`relative aspect-square rounded-2xl border-2 flex items-center justify-center overflow-hidden transition-all duration-200 active:scale-95 cursor-pointer ${
                isMatched
                  ? 'border-[#7E8B28] bg-[#F2F7D9] dark:bg-[#2D3624] dark:border-[#879532]'
                  : isFaceUp
                  ? 'border-[#7E8B28] bg-white dark:bg-[#1F241A] dark:border-[#879532]'
                  : 'border-[#CCD69E] bg-gradient-to-br from-[#7E8B28] to-[#687320] dark:border-[#3D482B]'
              }`}
            >
              {isFaceUp ? (
                <div className="flex flex-col items-center justify-center gap-1 p-1">
                  <img
                    src={species?.image}
                    alt={species?.name}
                    className="w-12 h-12 object-contain"
                    draggable={false}
                  />
                  <span className="text-[10px] font-bold text-center leading-tight text-[#1A1C16] dark:text-[#F4F6ED] line-clamp-2">
                    {species?.name}
                  </span>
                </div>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-white/90"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 19 2c2 2 2.6 3.5 1.5 9.2A7 7 0 0 1 11 20Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.5 12 13 13 12" />
                </svg>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
