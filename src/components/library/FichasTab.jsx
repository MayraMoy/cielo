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
              className={`relative flex flex-col items-center justify-between rounded-2xl bg-white dark:bg-[#1A1F14] p-3 text-center shadow-xs border transition-all active:scale-95 cursor-pointer ${
                isUnlocked
                  ? 'border-[#CFD79F] dark:border-[#353E2A] hover:border-[#7E8B28]'
                  : 'border-gray-200 dark:border-[#2C3322] opacity-80'
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
                  <span className="absolute right-1 top-1 rounded-full bg-white/95 dark:bg-[#252E1B] p-1 text-[#1A1C16] dark:text-[#DDEB7A] border border-black/5 dark:border-[#3D482B] shadow-xs transition-colors">
                    <LockIcon />
                  </span>
                )}
              </div>
              <span
                className={`mt-2 w-full text-xs sm:text-sm font-semibold leading-snug line-clamp-2 min-h-[2.4em] flex items-center justify-center text-center px-1 ${
                  isUnlocked
                    ? 'text-[#1A1C16] dark:text-[#F4F6ED]'
                    : 'text-gray-500 dark:text-[#8E977F]'
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
