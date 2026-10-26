import { useEffect, useRef } from 'react';
import { ChevronDown, Gift, Lightbulb, MapPin, X } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { useDismissAnimation } from '../../hooks/useDismissAnimation';
import { Portal } from '../common/Portal';

export function ScanResultModal({
  species,
  isJunior = false,
  onStartTrivia,
  onClose,
}) {
  const { t, content } = useLanguage();
  const { isClosing, requestClose } = useDismissAnimation(onClose, 220);
  const primaryActionRef = useRef(null);
  const reward = content.library.rewards.find((item) => item.step === species?.step);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    primaryActionRef.current?.focus({ preventScroll: true });

    return () => previouslyFocused?.focus?.();
  }, []);

  if (!species) return null;

  const descriptionText =
    isJunior && species.juniorDescription
      ? species.juniorDescription
      : species.description;

  const curiosityText =
    isJunior && species.juniorCuriosity
      ? species.juniorCuriosity
      : species.curiosity;

  const stationName = species.stationLabel?.split(':').slice(1).join(':').trim();

  return (
    <Portal>
      <div
        className={`absolute inset-0 z-[70] flex items-end justify-center bg-black/60 backdrop-blur-xs font-['Poppins'] ${
          isClosing
            ? 'animate-[overlay-fade-out_220ms_ease-in_forwards]'
            : 'animate-[overlay-fade-in_180ms_ease-out]'
        }`}
        onClick={requestClose}
      >
        <section
          role="dialog"
          aria-modal="true"
          aria-labelledby="scan-result-title"
          aria-describedby="scan-result-description"
          className={`relative max-h-[94%] w-full max-w-[390px] touch-pan-y overflow-y-auto rounded-t-2xl border border-[var(--surface-card-border)] bg-[var(--surface-card)] p-5 pb-8 text-[var(--text-primary)] shadow-[0_-8px_28px_rgba(0,0,0,0.2)] ${
            isClosing
              ? 'animate-[sheet-slide-out_220ms_ease-in_forwards]'
              : 'animate-[sheet-slide-in_320ms_cubic-bezier(0.22,1,0.36,1)]'
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <header className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent-soft-border)] bg-[var(--accent-soft-bg)] px-2.5 py-1 text-xs font-semibold text-[var(--accent-soft-text)]">
                <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                {t('scan.stationOf', {
                  current: species.step,
                  total: species.totalSteps,
                })}
              </span>
              {stationName && (
                <p className="mt-1.5 text-xs font-medium text-[var(--text-secondary)]">
                  {stationName}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={requestClose}
              className="-mr-2 -mt-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[var(--text-secondary)] transition-colors hover:bg-[var(--surface-step)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#687320] dark:focus-visible:outline-[#B9C76B]"
              aria-label={t('scan.closeResult')}
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </header>

          <div className="mt-2 flex items-center gap-3">
            {species.image && (
              <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-2xl border border-[var(--surface-card-border)] bg-[var(--surface-step)] p-1.5">
                <img
                  src={species.image}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
            )}
            <div className="min-w-0">
              <h2
                id="scan-result-title"
                className="text-xl font-bold leading-tight tracking-tight text-[var(--text-primary)]"
              >
                {species.name || t('scan.discoveredFallback')}
              </h2>
              <div className="mt-1 flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-xs font-medium text-[var(--text-name)]">
                {!isJunior && species.scientificName && (
                  <span className="italic text-[var(--text-secondary)]">
                    {species.scientificName}
                  </span>
                )}
                <span>{species.tag}</span>
              </div>
            </div>
          </div>

          <p
            id="scan-result-description"
            className="mt-3 text-[13.5px] leading-relaxed text-[var(--text-secondary)]"
          >
            {descriptionText}
          </p>

          {curiosityText && (
            <details className="group mt-1.5">
              <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-lg py-2 text-sm font-medium text-[var(--text-name)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#687320] dark:focus-visible:outline-[#B9C76B]">
                <Lightbulb className="h-3.5 w-3.5" aria-hidden="true" />
                {t('scan.curiosityLabel')}
                <ChevronDown className="ml-auto h-4 w-4 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="pb-2 pl-[22px] text-xs leading-relaxed text-[var(--text-secondary)]">
                {curiosityText}
              </p>
            </details>
          )}

          <section className="mt-2 flex items-center gap-3 border-t border-[var(--surface-card-border)] pt-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[var(--accent-soft-border)] bg-[var(--accent-soft-bg)] text-[var(--brand-olive)]">
              <Gift className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-medium leading-tight text-[var(--text-secondary)]">
                {t('scan.lockedRewardLabel')}
              </p>
              <p className="mt-0.5 text-[13px] font-semibold leading-snug text-[var(--text-secondary)]">
                {reward?.name || species.rewardText}
              </p>
            </div>
          </section>

          <div className="mt-3 flex flex-col gap-1.5">
            <button
              ref={primaryActionRef}
              type="button"
              onClick={onStartTrivia}
              className="flex min-h-[58px] w-full flex-col items-center justify-center gap-0.5 rounded-xl bg-[var(--brand-olive)] px-4 py-2.5 text-center text-white shadow-[var(--control-shadow)] transition-colors hover:bg-[var(--brand-olive-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#687320] dark:focus-visible:outline-[#B9C76B]"
            >
              <span className="text-sm font-semibold leading-tight">
                {isJunior ? t('scan.gameButtonTitle') : t('scan.triviaButtonTitle')}
              </span>
              <span className="text-xs font-medium leading-tight text-white/90">
                {isJunior ? t('scan.gameButtonHint') : t('scan.triviaButtonHint')}
              </span>
            </button>
            <button
              type="button"
              onClick={requestClose}
              className="min-h-11 w-full rounded-xl border border-[var(--surface-card-border)] bg-[var(--surface-card)] px-4 py-2.5 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:bg-[var(--surface-step)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#687320] dark:focus-visible:outline-[#B9C76B]"
            >
              {t('scan.chooseAnotherAction')}
            </button>
          </div>
        </section>
      </div>
    </Portal>
  );
}
