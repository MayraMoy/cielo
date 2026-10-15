import { useEffect } from 'react';
import { Portal } from '../common/Portal';
import { LockIcon } from './LockIcon';
import { useLanguage } from '../../hooks/useLanguage';
import { useDismissAnimation } from '../../hooks/useDismissAnimation';
import { playLockedSound } from '../../utils/sound';

export function LockedCardToast({ card, onGoScan, onClose, duration = 4500 }) {
  const { t } = useLanguage();
  const { isClosing, requestClose } = useDismissAnimation(onClose, 220);

  useEffect(() => {
    playLockedSound();
  }, []);

  useEffect(() => {
    const timer = setTimeout(requestClose, duration);
    return () => clearTimeout(timer);
  }, [requestClose, duration]);

  if (!card) return null;

  return (
    <Portal>
      <div className="absolute inset-x-0 top-16 z-[60] flex justify-center px-4 pointer-events-none">
        <div
          role="status"
          aria-live="polite"
          className={`pointer-events-auto w-full max-w-[350px] flex items-center justify-between gap-2.5 rounded-2xl border border-[#B5C370] dark:border-[#3D482B] bg-[#F2F4E6] dark:bg-[#1F2718] p-3.5 text-xs text-[#3C4033] dark:text-[#DDE2D3] shadow-[0_12px_28px_rgba(44,53,20,0.18)] ${
            isClosing
              ? 'animate-[toast-up-out_200ms_ease-in_forwards]'
              : 'animate-[toast-down-in_240ms_ease-out]'
          }`}
        >
          <div className="flex items-start gap-2">
            <span className="text-[#545C1E] dark:text-[#DDEB7A] mt-0.5 shrink-0">
              <LockIcon />
            </span>
            <div>
              <p className="font-bold text-sm text-[#545C1E] dark:text-[#DDEB7A]">
                {t('library.fichas.lockedTitle', { name: card.name })}
              </p>
              <p className="text-xs mt-0.5 text-[#555A49] dark:text-[#A8B298]">
                {card.unlockHint}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onGoScan}
            className="shrink-0 rounded-xl bg-[#7E8B28] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#6D7821] cursor-pointer"
          >
            {t('library.fichas.goQr')}
          </button>
        </div>
      </div>
    </Portal>
  );
}
