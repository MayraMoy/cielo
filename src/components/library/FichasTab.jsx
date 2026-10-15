import { useState } from 'react';
import { LIBRARY_CARDS } from '../../data/library/libraryCards';

export function LockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      aria-hidden="true"
    >
      <rect x="5" y="10" width="14" height="11" rx="1.5" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
    </svg>
  );
}

export function FichasTab({
  unlockedCharacters,
  onOpenCard,
  onGoScan,
}) {
  const [lockedHintCard, setLockedHintCard] = useState(null);

  return (
    <div>
      {/* Alerta / Pista de carta bloqueada */}
      {lockedHintCard && (
        <div className="mb-3.5 flex items-center justify-between gap-2.5 rounded-2xl border border-[#B5C370] dark:border-[#3D482B] bg-[#F2F4E6] dark:bg-[#1F2718] p-3.5 text-xs text-[#3C4033] dark:text-[#DDE2D3] shadow-xs animate-[modal-appear_180ms_ease-out]">
          <div>
            <p className="font-bold text-sm text-[#545C1E] dark:text-[#DDEB7A]">
              🔒 {lockedHintCard.name} está bloqueada
            </p>
            <p className="text-xs mt-0.5 text-[#555A49] dark:text-[#A8B298]">
              {lockedHintCard.unlockHint}
            </p>
          </div>
          <button
            type="button"
            onClick={onGoScan}
            className="shrink-0 rounded-xl bg-[#7E8B28] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#6D7821] cursor-pointer"
          >
            Ir a QR
          </button>
        </div>
      )}

      {/* Cuadrícula de fichas */}
      <div className="grid grid-cols-3 gap-3 px-1 py-1">
        {LIBRARY_CARDS.map((card) => {
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
              aria-label={`${card.name}${
                isUnlocked
                  ? ', abrir ficha'
                  : ', bloqueada (toca para ver pista)'
              }`}
              className={`relative flex flex-col items-center justify-between rounded-2xl bg-white dark:bg-[#1A1F14] p-2.5 text-center shadow-xs border transition-all active:scale-95 cursor-pointer ${
                isUnlocked
                  ? 'border-[#CFD79F] dark:border-[#353E2A] hover:border-[#7E8B28]'
                  : 'border-gray-200 dark:border-[#2C3322] opacity-80'
              }`}
            >
              <div className="relative h-20 w-full flex items-center justify-center">
                <img
                  src={card.image}
                  alt={card.name}
                  className={`h-full w-full object-contain ${
                    isUnlocked ? '' : 'grayscale opacity-50 dark:opacity-40'
                  }`}
                />
                {!isUnlocked && (
                  <span className="absolute right-0.5 top-0.5 rounded-full bg-white/95 dark:bg-[#252E1B] p-1 text-[#1A1C16] dark:text-[#DDEB7A] border border-black/5 dark:border-[#3D482B] shadow-xs transition-colors">
                    <LockIcon />
                  </span>
                )}
              </div>
              <span
                className={`mt-1.5 w-full truncate text-xs font-semibold ${
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
