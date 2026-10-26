import { useLanguage } from '../../hooks/useLanguage';
import { useDismissAnimation } from '../../hooks/useDismissAnimation';
import { Portal } from '../common/Portal';
import { Check, PartyPopper, X } from 'lucide-react';

export function CharacterRewardModal({ rewardIndex = 0, onClose, onOpenLibrary }) {
  const { t, content } = useLanguage();
  const { isClosing, requestClose } = useDismissAnimation(onClose, 220);
  const REWARD_CHARACTERS = content.library.rewards;
  const reward = REWARD_CHARACTERS[rewardIndex] || REWARD_CHARACTERS[0];
  const progressLabel = reward.badge.split('\u2022')[0].trim();

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
          className={`relative max-h-[90%] w-full max-w-[350px] overflow-y-auto rounded-2xl border border-[var(--surface-card-border)] bg-[var(--surface-card)] p-5 text-left shadow-[var(--card-shadow)] ${
            isClosing
              ? 'animate-[modal-disappear_200ms_ease-in_forwards]'
              : 'animate-[modal-appear_220ms_ease-out]'
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={requestClose}
            className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full text-xl text-[var(--text-secondary)] transition-colors hover:bg-[var(--surface-step)] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#687320] dark:focus-visible:outline-[#B9C76B]"
            aria-label={t('library.rewardModal.closeAria')}
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
          <div className="flex items-center gap-3 rounded-xl border border-[var(--accent-soft-border)] bg-[var(--accent-soft-bg)] px-3 py-2.5">
            <span className="flex h-10 w-10 shrink-0 animate-[reward-pop_450ms_ease-out_both] items-center justify-center rounded-xl bg-[var(--brand-olive)] text-white shadow-[var(--control-shadow)]">
              <PartyPopper className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="flex min-w-0 flex-col gap-0.5">
              <span className="text-sm font-bold leading-tight text-[var(--text-primary)]">
                {t('library.rewardModal.unlockedStatus')}
              </span>
              <span className="text-xs leading-tight text-[var(--text-secondary)]">
                {progressLabel}
              </span>
            </span>
          </div>
          <div className="mt-3 flex items-start gap-3">
            <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[var(--surface-card-border)] bg-[var(--surface-step)] p-1.5">
              <img
                src={reward.image}
                alt={reward.name}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="min-w-0 flex-1 pt-0.5">
              <h2
                id="reward-modal-title"
                className="text-[17px] font-bold leading-snug tracking-tight text-[var(--text-primary)]"
              >
                {reward.name}
              </h2>
            </div>
          </div>
          <section className="mt-4" aria-labelledby="reward-unlocked-heading">
            <h3 id="reward-unlocked-heading" className="text-[13px] font-semibold text-[var(--text-primary)]">
              {t('library.rewardModal.newSheets')}
            </h3>
            <ul className="mt-1.5 flex flex-wrap gap-1.5" aria-labelledby="reward-unlocked-heading">
              {reward.unlockedSpeciesNames.map((name) => (
                <li
                  key={name}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--surface-card-border)] bg-[var(--surface-step)] px-2.5 py-1.5 text-xs leading-snug text-[var(--text-secondary)]"
                >
                  <Check className="h-3.5 w-3.5 shrink-0 text-[var(--brand-olive)]" aria-hidden="true" />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </section>
          <div className="mt-4 flex flex-col gap-1.5">
            {onOpenLibrary && (
              <button
                type="button"
                onClick={onOpenLibrary}
                className="w-full rounded-xl bg-[var(--brand-olive)] px-4 py-3 text-sm font-semibold text-white shadow-[var(--control-shadow)] transition-colors hover:bg-[var(--brand-olive-hover)] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#687320] dark:focus-visible:outline-[#B9C76B]"
              >
                {t('library.rewardModal.viewCollection')}
              </button>
            )}
            <button
              type="button"
              onClick={requestClose}
              className={`min-h-11 w-full rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#687320] dark:focus-visible:outline-[#B9C76B] ${
                onOpenLibrary
                  ? 'bg-transparent text-[var(--text-name)] hover:bg-[var(--surface-step)]'
                  : 'bg-[var(--brand-olive)] text-white hover:bg-[var(--brand-olive-hover)]'
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
