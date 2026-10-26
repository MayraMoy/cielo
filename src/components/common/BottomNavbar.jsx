import { useLanguage } from '../../hooks/useLanguage';

export function BottomNavbar({
  isHidden = false,
  activeTab = 'home',
  onTabChange,
  onScanQR,
  onOpenLibrary,
}) {
  const { t } = useLanguage();

  const itemClass = (isActive) =>
    `flex min-h-[52px] min-w-0 flex-col items-center justify-center gap-0.5 rounded-2xl transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#687320] dark:focus-visible:outline-[#C5D76A] cursor-pointer ${
      isActive
        ? 'font-semibold text-[#545C1E] dark:text-[var(--text-name)]'
        : 'font-medium text-[var(--text-secondary)]'
    }`;

  return (
    <div
      className={`pointer-events-none absolute bottom-5 left-0 right-0 z-40 px-4 transition-[opacity,transform] duration-200 ${
        isHidden
          ? 'translate-y-24 opacity-0'
          : 'translate-y-0 opacity-100'
      }`}
      aria-hidden={isHidden}
      inert={isHidden}
    >
      <nav
        className="pointer-events-auto relative mx-auto grid h-[64px] w-full max-w-[320px] grid-cols-3 items-end rounded-[26px] border border-[var(--surface-card-border)] bg-[var(--surface-card)] px-2 pb-1.5 pt-1 shadow-[var(--card-shadow)] select-none transition-colors duration-200"
        aria-label={t('nav.ariaNav')}
      >
        <button
          type="button"
          onClick={() => onTabChange?.('home')}
          className={itemClass(activeTab === 'home')}
          aria-label={t('nav.home')}
          aria-current={activeTab === 'home' ? 'page' : undefined}
        >
          <svg viewBox="0 0 28 28" className="h-8 w-8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M5.5 12.5L14 5.5L22.5 12.5V22C22.5 22.8 21.8 23.5 21 23.5H7C6.2 23.5 5.5 22.8 5.5 22V12.5Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11 23.5V15H17V23.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="whitespace-nowrap text-xs leading-none">{t('nav.home')}</span>
        </button>

        <div className="relative h-full min-w-0">
          <button
            type="button"
            onClick={onScanQR}
            className={`absolute left-1/2 top-[-20px] z-10 flex h-[82px] w-full -translate-x-1/2 flex-col items-center justify-between rounded-2xl pb-2.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#687320] dark:focus-visible:outline-[#C5D76A] ${
              activeTab === 'scan'
                ? 'font-semibold text-[#545C1E] dark:text-[var(--text-name)]'
                : 'font-medium text-[var(--text-secondary)]'
            }`}
            aria-label={t('nav.scan')}
            aria-current={activeTab === 'scan' ? 'page' : undefined}
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] border-[3px] border-[var(--surface-card)] bg-[#7E8B28] text-white shadow-[0_6px_14px_rgba(69,78,24,0.24)] transition-transform active:scale-95">
              <svg viewBox="0 0 28 28" className="h-8 w-8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M5 10V6a1 1 0 0 1 1-1h4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                <path d="M18 5h4a1 1 0 0 1 1 1v4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                <path d="M5 18v4a1 1 0 0 0 1 1h4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                <path d="M18 23h4a1 1 0 0 0 1-1v-4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                <rect x="8.5" y="8.5" width="4" height="4" rx="0.8" fill="currentColor" />
                <rect x="15.5" y="8.5" width="4" height="4" rx="0.8" fill="currentColor" />
                <rect x="8.5" y="15.5" width="4" height="4" rx="0.8" fill="currentColor" />
                <rect x="15.5" y="15.5" width="2" height="2" fill="currentColor" />
                <rect x="18" y="15.5" width="2" height="2" fill="currentColor" />
                <rect x="15.5" y="18" width="2" height="2" fill="currentColor" />
                <rect x="18" y="18" width="2" height="2" fill="currentColor" />
              </svg>
            </span>
            <span className="whitespace-nowrap text-xs leading-none">{t('nav.scanShort')}</span>
          </button>
        </div>

        <button
          type="button"
          onClick={onOpenLibrary}
          className={itemClass(activeTab === 'library')}
          aria-label={t('nav.library')}
          aria-current={activeTab === 'library' ? 'page' : undefined}
        >
          <svg viewBox="0 0 28 28" className="h-8 w-8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6 9.5V20.5C6 22 7 23 8.5 23H20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            <rect x="9.5" y="5" width="13" height="15.5" rx="2" stroke="currentColor" strokeWidth="2.2" />
            <path d="M13.5 5V12L16 10L18.5 12V5" fill="currentColor" />
          </svg>
          <span className="whitespace-nowrap text-xs leading-none">{t('nav.library')}</span>
        </button>
      </nav>
    </div>
  );
}
