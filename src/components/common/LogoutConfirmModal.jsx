import { Portal } from './Portal';
import { useLanguage } from '../../hooks/useLanguage';
import { useDismissAnimation } from '../../hooks/useDismissAnimation';

const LogoutIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M15 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4" />
    <path d="M10 17l-5-5 5-5" />
    <path d="M5 12h12" />
  </svg>
);

export function LogoutConfirmModal({ onConfirm, onClose }) {
  const { t } = useLanguage();
  const { isClosing, requestClose } = useDismissAnimation(onClose, 200);

  return (
    <Portal>
      <div
        className={`absolute inset-0 z-[80] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 ${
          isClosing
            ? 'animate-[overlay-fade-out_200ms_ease-in_forwards]'
            : 'animate-[overlay-fade-in_160ms_ease-out]'
        }`}
        onClick={requestClose}
      >
        <section
          role="dialog"
          aria-modal="true"
          aria-labelledby="logout-title"
          className={`w-full max-w-[330px] rounded-3xl border border-[#E5E7EB] dark:border-[#38402D] bg-white dark:bg-[#1A1F15] p-5 shadow-2xl ${
            isClosing
              ? 'animate-[modal-disappear_180ms_ease-in_forwards]'
              : 'animate-[modal-appear_200ms_ease-out]'
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FDF3ED] dark:bg-[#38241C] text-[#A83B12] dark:text-[#F0A57A] border border-[#F3D6C6] dark:border-[#5A3A2B]">
            <LogoutIcon />
          </div>

          <h2
            id="logout-title"
            className="mt-3 text-center text-lg font-bold text-[#1A1C16] dark:text-[#F4F6ED]"
          >
            {t('common.logoutTitle')}
          </h2>
          <p className="mt-1.5 text-center text-[13px] leading-relaxed text-[#555A49] dark:text-[#B8BFAC]">
            {t('common.logoutMessage')}
          </p>

          <div className="mt-5 flex flex-col gap-2">
            <button
              type="button"
              onClick={onConfirm}
              className="w-full py-3 rounded-xl bg-[#A83B12] hover:bg-[#8F320F] dark:bg-[#C85A27] dark:hover:bg-[#B34E1E] text-white text-sm font-semibold shadow-sm active:scale-[0.98] transition-all cursor-pointer"
            >
              {t('common.logoutConfirm')}
            </button>
            <button
              type="button"
              onClick={requestClose}
              className="w-full py-3 rounded-xl bg-transparent hover:bg-black/5 dark:hover:bg-white/5 text-[#545C1E] dark:text-[#DDEB7A] text-sm font-semibold transition-all cursor-pointer"
            >
              {t('common.cancel')}
            </button>
          </div>
        </section>
      </div>
    </Portal>
  );
}
