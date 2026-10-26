import { useEffect, useRef, useState } from 'react';
import { LockKeyhole } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { GiftBox } from './GiftBox';

export function CharacterProgressCard({
  title,
  buttonText,
  unlockedCount = 0,
  openedRewards = [],
  onOpenReward,
  onStartGame,
}) {
  const { t } = useLanguage();
  const totalSteps = 3;
  const [showLockedMessage, setShowLockedMessage] = useState(false);
  const lockedMessageTimer = useRef(null);
  const progress = Math.min(Math.max(unlockedCount, 0), totalSteps);

  useEffect(() => () => window.clearTimeout(lockedMessageTimer.current), []);

  const handleRewardClick = (index, isUnlocked) => {
    window.clearTimeout(lockedMessageTimer.current);

    if (isUnlocked) {
      setShowLockedMessage(false);
      onOpenReward(index);
      return;
    }

    setShowLockedMessage(true);
    lockedMessageTimer.current = window.setTimeout(
      () => setShowLockedMessage(false),
      3000,
    );
  };

  const handleStartGame = () => {
    window.clearTimeout(lockedMessageTimer.current);
    setShowLockedMessage(false);
    onStartGame();
  };

  return (
    <div className="rounded-2xl border border-[var(--surface-card-border)] bg-[var(--surface-card)] p-4 pb-3.5 shadow-[var(--card-shadow)] transition-colors duration-200 font-['Poppins']">
      <h2 className="mb-3 text-[16px] font-medium leading-snug tracking-[-0.01em] text-[var(--text-primary)]">
        {title}
      </h2>

      <div className="relative mb-4 mt-1 w-full py-2">
        <div
          className="absolute left-[16%] right-[16%] top-1/2 z-0 h-1 -translate-y-1/2 rounded-full bg-[var(--surface-card-border)]"
          role="progressbar"
          aria-label={t('home.characterCard.unlockedAria')}
          aria-valuemin={0}
          aria-valuemax={totalSteps}
          aria-valuenow={progress}
        >
          <div
            className="h-full rounded-full bg-[#687320] transition-[width] duration-700 dark:bg-[var(--brand-olive)]"
            style={{ width: `${(progress / totalSteps) * 100}%` }}
          />
        </div>

        <div
          className="relative z-10 flex w-full items-center justify-between px-2"
          role="group"
          aria-label={t('home.characterCard.rewardsGroupAria')}
        >
          {Array.from({ length: totalSteps }, (_, index) => {
            const isUnlocked = index < unlockedCount;
            const isOpened = openedRewards.includes(index);

            return (
              <button
                key={index}
                type="button"
                onClick={() => handleRewardClick(index, isUnlocked)}
                aria-label={
                  isUnlocked
                    ? isOpened
                      ? t('home.characterCard.rewardOpenedAria', { n: index + 1 })
                      : t('home.characterCard.rewardOpenAria', { n: index + 1 })
                    : t('home.characterCard.rewardLockedAria', { n: index + 1 })
                }
                className={`relative flex h-16 w-16 items-center justify-center rounded-full border-2 bg-[var(--surface-step)] transition-all active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#687320] dark:focus-visible:outline-[#C5D76A] ${
                  isUnlocked
                    ? 'cursor-pointer border-[#7E8B28] shadow-[0_2px_8px_rgba(69,78,24,0.12)] dark:border-[var(--text-name)]'
                    : 'cursor-pointer border-[var(--control-border)]'
                }`}
              >
                <GiftBox
                  isOpen={isOpened}
                  className={`h-12 w-12 object-contain transition-[filter,opacity] ${
                    isUnlocked ? 'opacity-100' : 'grayscale opacity-60'
                  }`}
                />
                {!isUnlocked && (
                  <LockKeyhole
                    className="absolute bottom-0.5 right-0.5 h-4 w-4 rounded-full bg-[var(--surface-card)] p-0.5 text-[#545C1E] dark:text-[var(--text-name)]"
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {showLockedMessage && (
        <p
          className="mb-3 flex items-center justify-center gap-2 rounded-xl border border-[var(--surface-card-border)] bg-[var(--surface-step)] px-3 py-2 text-center text-xs font-medium text-[var(--text-secondary)]"
          role="status"
          aria-live="polite"
        >
          <LockKeyhole className="h-4 w-4 shrink-0 text-[#545C1E] dark:text-[var(--text-name)]" aria-hidden="true" />
          <span>{t('home.characterCard.rewardLockedMessage')}</span>
        </p>
      )}

      <button
        type="button"
        onClick={handleStartGame}
        className="w-full rounded-2xl bg-[var(--brand-olive)] px-5 py-3 text-[14px] font-semibold text-white shadow-[0_6px_12px_rgba(69,78,24,0.16)] transition-all duration-200 hover:bg-[var(--brand-olive-hover)] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#687320] dark:focus-visible:outline-[#C5D76A] cursor-pointer"
      >
        {buttonText}
      </button>
    </div>
  );
}
