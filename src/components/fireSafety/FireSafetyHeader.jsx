import { useLanguage } from '../../hooks/useLanguage';

function ArrowLeft() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M19 12H5m7 7-7-7 7-7" />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M12 22a8 8 0 0 0 8-8c0-4-3-6-5-9 0 4-2 5-2 5S12 5 9 2c1 6-5 8-5 13a8 8 0 0 0 8 7Z" />
      <path d="M12 22a4 4 0 0 0 4-4c0-2-2-4-3-5 0 2-2 3-2 3s-2 2-2 3a3 3 0 0 0 3 3Z" />
    </svg>
  );
}

export function FireSafetyHeader({
  isDarkMode,
  isJunior,
  fireSafety,
  onBack,
}) {
  const { t } = useLanguage();
  return (
    <>
      <button
        type="button"
        onClick={onBack}
        className={`mb-6 inline-flex min-h-11 items-center gap-2 rounded-xl border px-3.5 py-2 text-sm font-semibold transition-[color,background-color,transform] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#687320] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--app-surface)] active:scale-[0.98] ${
          isDarkMode
            ? 'border-[#46503F] bg-[#20251B] text-[#F4F6ED] hover:bg-[#2B3325]'
            : 'border-[#E5DED2] bg-white text-[#37332D] shadow-xs hover:bg-[#F7F3EB]'
        }`}
      >
        <ArrowLeft />
        {t('common.backHome')}
      </button>

      <header className="mb-8">
        <h1
          className={`max-w-md text-[30px] font-extrabold leading-[1.12] tracking-[-0.03em] sm:text-4xl ${
            isDarkMode ? 'text-white' : 'text-[#211C18]'
          }`}
        >
          {isJunior ? fireSafety.juniorModalTitle : fireSafety.modalTitle}
        </h1>

        <div
          role="note"
          className="mt-5 rounded-2xl border border-[var(--surface-card-border)] bg-[var(--surface-card)] p-4 text-[var(--text-primary)] shadow-[var(--card-shadow)] sm:p-5"
        >
          <h2 className="flex items-center gap-2.5 text-lg font-bold leading-snug tracking-tight sm:text-xl">
            <span className={`shrink-0 ${isDarkMode ? 'text-[#FFB18A]' : 'text-[#B34E1E]'}`}>
              <FlameIcon />
            </span>
            <span>
              {t('fireSafety.anteIncendio')}
            </span>
          </h2>
          <p className="mt-2.5 text-[15px] font-normal leading-relaxed text-[var(--text-secondary)] sm:text-base">
            {isJunior ? fireSafety.juniorIntro : fireSafety.adultIntro}
          </p>
        </div>
      </header>
    </>
  );
}
