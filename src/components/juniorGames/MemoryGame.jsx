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
    <div className="mx-auto flex w-full max-w-[360px] flex-col gap-4">
      <header className="text-left">
        <h1 className="text-[25px] font-bold leading-tight tracking-tight text-[var(--text-primary)]">
          {t('juniorGames.memorama.challengeTitle')}
        </h1>
        <p className="mt-1 text-sm leading-snug text-[var(--text-secondary)]">
          {t('juniorGames.memorama.challengeSubtitle')}
        </p>
      </header>

      <div className="flex items-center justify-between gap-3 text-xs text-[var(--text-secondary)]" aria-live="polite">
        <span>
          {t('juniorGames.memorama.moves', { n: moves })}
        </span>
        <span className="text-right">
          {t('juniorGames.memorama.pairs', {
            found: matched.length,
            total: totalPairs,
          })}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
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
              className={`relative aspect-square rounded-2xl border-2 flex items-center justify-center overflow-hidden shadow-[var(--control-shadow)] transition-all duration-200 active:scale-95 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#687320] dark:focus-visible:outline-[#C5D76A] ${
                isMatched
                  ? 'border-[var(--brand-olive)] bg-[var(--surface-card)] ring-1 ring-[var(--brand-olive)]'
                  : isFaceUp
                  ? 'border-[var(--surface-card-border)] bg-[var(--surface-card)]'
                  : 'border-[var(--brand-olive-hover)] bg-[var(--brand-olive)]'
              }`}
            >
              {isFaceUp ? (
                <div className="flex flex-col items-center justify-center gap-1 p-1">
                  <img
                    src={species?.image}
                    alt={species?.name}
                    className="h-16 w-16 object-contain"
                    draggable={false}
                  />
                  <span className="line-clamp-2 text-[11px] font-bold text-center leading-tight text-[var(--text-primary)]">
                    {species?.name}
                  </span>
                </div>
              ) : (
                <span className="absolute inset-1 flex items-center justify-center rounded-[13px] border border-white/25" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  className="h-9 w-9 text-white/90"
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
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
