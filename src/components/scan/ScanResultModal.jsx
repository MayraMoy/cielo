import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, Gift, Lightbulb, MapPin, X } from 'lucide-react';
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
  const dragStartYRef = useRef(null);
  const suppressGrabberClickRef = useRef(false);
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
    <Portal containerId="app-content">
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
          className={`relative flex max-h-[calc(100%-1rem)] w-full max-w-[390px] flex-col overflow-hidden rounded-t-2xl border border-[var(--surface-card-border)] bg-[var(--surface-card)] text-[var(--text-primary)] shadow-[0_-8px_28px_rgba(0,0,0,0.2)] ${
            isClosing
              ? 'animate-[sheet-slide-out_220ms_ease-in_forwards]'
              : 'animate-[sheet-slide-in_320ms_cubic-bezier(0.22,1,0.36,1)]'
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            aria-label={t('scan.swipeDownClose')}
            onPointerDown={(event) => {
              dragStartYRef.current = event.clientY;
              suppressGrabberClickRef.current = false;
            }}
            onPointerUp={(event) => {
              if (dragStartYRef.current === null) return;
              const dragDistance = event.clientY - dragStartYRef.current;
              dragStartYRef.current = null;
              if (dragDistance > 48) {
                suppressGrabberClickRef.current = true;
                requestClose();
              }
            }}
            onPointerCancel={() => {
              dragStartYRef.current = null;
            }}
            onClick={() => {
              if (suppressGrabberClickRef.current) {
                suppressGrabberClickRef.current = false;
                return;
              }
              requestClose();
            }}
            className="mx-auto flex h-11 w-full shrink-0 touch-none items-center justify-center"
          >
            <span className="h-1 w-9 rounded-full bg-[var(--text-secondary)]" aria-hidden="true" />
          </button>

          <header className="flex shrink-0 items-start justify-between gap-3 px-5 pb-2">
            <div className="flex min-w-0 items-center gap-2 pt-0.5">
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[var(--accent-soft-border)] bg-[var(--accent-soft-bg)] px-2.5 py-1 text-xs font-semibold text-[var(--accent-soft-text)]">
                <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                {t('scan.stationOf', {
                  current: species.step,
                  total: species.totalSteps,
                })}
              </span>
              {stationName && (
                <p className="truncate text-xs font-medium text-[var(--text-secondary)]">
                  <span aria-hidden="true">· </span>
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

          <div className="mt-2 flex shrink-0 items-center gap-3 px-5">
            {species.image && (
              <img
                src={species.image}
                alt=""
                className="h-[72px] w-[72px] shrink-0 object-contain"
              />
            )}
            <div className="min-w-0">
              <h2
                id="scan-result-title"
                className="text-xl font-bold leading-tight tracking-tight text-[var(--text-primary)]"
              >
                {species.name || t('scan.discoveredFallback')}
              </h2>
              {!isJunior && species.scientificName && (
                <p className="mt-0.5 text-xs italic leading-tight text-[var(--text-secondary)]">
                  {species.scientificName}
                </p>
              )}
              {species.tag && (
                <p className="mt-1 text-[11px] font-medium leading-tight text-[var(--text-name)]">
                  {species.tag.split('•').map((role, index) => (
                    <span key={`${role}-${index}`}>
                      {index > 0 && <span className="px-1 text-[var(--text-secondary)]" aria-hidden="true">·</span>}
                      {role.trim()}
                    </span>
                  ))}
                </p>
              )}
            </div>
          </div>

          <div className="min-h-0 flex-1 touch-pan-y overflow-y-auto px-5 pb-2">
            <p
              id="scan-result-description"
              className="mt-2 text-[13.5px] leading-[1.5] text-[var(--text-secondary)]"
            >
              {descriptionText}
            </p>

            {curiosityText && (
              <details className="group mt-2 border-y border-[var(--surface-card-border)]">
                <summary className="flex min-h-12 cursor-pointer list-none items-center gap-2 py-2 text-sm font-medium text-[var(--text-name)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#687320] dark:focus-visible:outline-[#B9C76B]">
                  <Lightbulb className="h-3.5 w-3.5" aria-hidden="true" />
                  {t('scan.curiosityLabel')}
                  <ChevronDown className="ml-auto h-4 w-4 transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="pb-3 pl-[22px] text-xs leading-relaxed text-[var(--text-secondary)]">
                  {curiosityText}
                </p>
              </details>
            )}

            <section className="mt-3 flex items-center gap-3">
              <Gift className="h-5 w-5 shrink-0 text-[var(--brand-olive)]" aria-hidden="true" />
              <div className="min-w-0">
                <p className="text-[11px] font-medium leading-tight text-[var(--text-secondary)]">
                  {t('scan.lockedRewardLabel')}
                </p>
                <p className="mt-0.5 text-[13px] font-semibold leading-snug text-[var(--text-secondary)]">
                  {reward?.name || species.rewardText}
                </p>
              </div>
            </section>

          </div>

          <div className="shrink-0 bg-[var(--surface-card)] px-5 pt-3 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <button
              ref={primaryActionRef}
              type="button"
              onClick={onStartTrivia}
              className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-[var(--brand-olive)] px-4 py-2.5 text-center text-sm font-semibold text-white shadow-[var(--control-shadow)] transition-colors hover:bg-[var(--brand-olive-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#687320] dark:focus-visible:outline-[#B9C76B]"
            >
              {isJunior ? t('scan.gameButtonTitle') : t('scan.triviaButtonTitle')}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </section>
      </div>
    </Portal>
  );
}
