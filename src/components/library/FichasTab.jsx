import { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { LockIcon } from './LockIcon';
import { LockedCardToast } from './LockedCardToast';

export function FichasTab({
  cards = [],
  unlockedCharacters,
  onOpenCard,
  onGoScan,
}) {
  const { t } = useLanguage();
  const [lockedHintCard, setLockedHintCard] = useState(null);

  return (
    <div>
      {/* Toast de carta bloqueada */}
      {lockedHintCard && (
        <LockedCardToast
          key={lockedHintCard.id}
          card={lockedHintCard}
          onGoScan={onGoScan}
          onClose={() => setLockedHintCard(null)}
        />
      )}

      {/* Cuadrícula de fichas en 2 columnas legibles */}
      <div className="grid grid-cols-2 gap-3.5 px-1 py-1">
        {cards.map((card) => {
          const isUnlocked =
            card.unlocked || (card.unlockStep ?? 1) <= unlockedCharacters;

          return (
            <button
              key={card.id}
              type="button"
              onClick={() => {
                if (isUnlocked) {
                  setLockedHintCard(null);
                  onOpenCard(card);
                } else {
                  setLockedHintCard(card);
                }
              }}
              aria-label={
                isUnlocked
                  ? t('library.fichas.openCard', { name: card.name })
                  : t('library.fichas.lockedHintAria', { name: card.name })
              }
              className={`relative flex flex-col items-center justify-between rounded-2xl border bg-[var(--surface-card)] p-3 text-center shadow-[var(--card-shadow)] transition-all active:scale-[0.98] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#687320] dark:focus-visible:outline-[#B9C76B] ${
                isUnlocked
                  ? 'border-[var(--surface-card-border)] hover:border-[#7E8B28] dark:hover:border-[var(--text-name)]'
                  : 'border-[var(--surface-card-border)] opacity-80'
              }`}
            >
              <div className="relative h-28 w-full flex items-center justify-center">
                <img
                  src={card.image}
                  alt={card.name}
                  className={`h-full w-full object-contain ${
                    isUnlocked ? '' : 'grayscale opacity-50 dark:opacity-40'
                  }`}
                />
                {!isUnlocked && (
                    <span className="absolute right-1 top-1 rounded-full border border-[var(--surface-card-border)] bg-[var(--surface-card)] p-1 text-[var(--text-name)] shadow-[var(--control-shadow)] transition-colors">
                    <LockIcon />
                  </span>
                )}
              </div>
              <span
                className={`mt-2 w-full text-xs sm:text-sm font-semibold leading-snug line-clamp-2 min-h-[2.4em] flex items-center justify-center text-center px-1 ${
                  isUnlocked
                    ? 'text-[var(--text-primary)]'
                    : 'text-[var(--text-secondary)]'
                }`}
              >
                {card.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
