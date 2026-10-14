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
  return (
    <>
      <button
        type="button"
        onClick={onBack}
        className={`mb-6 inline-flex min-h-11 items-center gap-2 rounded-xl border px-3.5 py-2 text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
          isDarkMode
            ? 'border-[#46503F] bg-[#20251B] text-[#F4F6ED] hover:bg-[#2B3325]'
            : 'border-[#E5DED2] bg-white text-[#37332D] shadow-xs hover:bg-[#F7F3EB]'
        }`}
      >
        <ArrowLeft />
        Volver al inicio
      </button>

      <header className="mb-10">
        <h1
          className={`max-w-md text-[28px] font-extrabold leading-tight tracking-[-0.03em] sm:text-4xl ${
            isDarkMode ? 'text-white' : 'text-[#211C18]'
          }`}
        >
          {isJunior ? fireSafety.juniorModalTitle : fireSafety.modalTitle}
        </h1>

        <div
          className={`mt-6 flex items-start gap-4 rounded-r-2xl border-l-4 p-4 sm:p-5 ${
            isDarkMode
              ? 'border-[#FFD76A] bg-[#2A2314] text-[#FFF1C7]'
              : 'border-[#E5B83B] bg-[#FFF8E7] text-[#493710]'
          }`}
        >
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl shadow-xs ${
              isDarkMode
                ? 'bg-[#40331A] text-[#FFD76A]'
                : 'bg-[#FBE8B0] text-[#533B0B]'
            }`}
          >
            <FlameIcon />
          </div>

          <div className="min-w-0 flex-1">
            <h2 className="text-base font-bold leading-snug tracking-tight sm:text-lg">
              Ante un incendio
            </h2>
            <p className="mt-1.5 text-sm font-normal leading-relaxed opacity-95 sm:text-base">
              {isJunior ? fireSafety.juniorIntro : fireSafety.adultIntro}
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
