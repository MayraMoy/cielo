import { useLanguage } from '../../hooks/useLanguage';

export function BottomNavbar({
  activeTab = 'home',
  onTabChange,
  onScanQR,
  onOpenLibrary,
}) {
  const { t } = useLanguage();
  return (
    <div className="absolute bottom-5 left-0 right-0 px-4 z-40 pointer-events-none">
      <nav
        className="pointer-events-auto bg-[#F8F5F0] dark:bg-[#1F241A] rounded-[26px] shadow-[0_10px_24px_rgba(44,53,20,0.09)] border border-[#E7E4D8] dark:border-[#353D2B] px-6 py-3 flex items-center justify-center gap-x-14 relative select-none transition-colors duration-200"
        aria-label={t('nav.ariaNav')}
      >
        <button
          type="button"
          onClick={() => onTabChange?.('home')}
          className="flex flex-col items-center justify-center px-2 group cursor-pointer transition-colors relative"
          aria-label={t('nav.home')}
          aria-current={activeTab === 'home' ? 'page' : undefined}
        >
          <span
            className={`w-8 h-1 rounded-full mb-1.5 transition-all ${
              activeTab === 'home' ? 'bg-[#7E8B28]' : 'bg-transparent'
            }`}
          />

          <svg
            viewBox="0 0 28 28"
            className="w-8 h-8 text-[#1A1C16] dark:text-[#F4F6ED] transition-transform group-hover:scale-105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M5.5 12.5L14 5.5L22.5 12.5V22C22.5 22.8 21.8 23.5 21 23.5H7C6.2 23.5 5.5 22.8 5.5 22V12.5Z"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 23.5V15H17V23.5"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="relative -top-5 flex justify-center">
          <button
            type="button"
            onClick={onScanQR}
            className="w-14 h-14 bg-[#7E8B28] hover:bg-[#738220] text-white rounded-[20px] flex items-center justify-center shadow-[0_10px_18px_rgba(126,139,40,0.2)] ring-4 ring-[#F8F5F0] dark:ring-[#141710] transition-all duration-150 hover:scale-[1.02] active:scale-95 cursor-pointer"
            aria-label={t('nav.scan')}
          >
            <svg
              viewBox="0 0 28 28"
              className="w-7 h-7 text-white select-none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
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
          </button>
        </div>

        <button
          type="button"
          onClick={onOpenLibrary}
          className="flex flex-col items-center justify-center px-2 group cursor-pointer transition-colors relative"
          aria-label={t('nav.ariaLibrary')}
          aria-current={activeTab === 'library' ? 'page' : undefined}
        >
          <span
            className={`w-8 h-1 rounded-full mb-1.5 transition-all ${
              activeTab === 'library' ? 'bg-[#7E8B28]' : 'bg-transparent'
            }`}
          />

          <svg
            viewBox="0 0 28 28"
            className="w-8 h-8 text-[#1A1C16] dark:text-[#F4F6ED] transition-transform group-hover:scale-105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M6 9.5V20.5C6 22 7 23 8.5 23H20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            <rect x="9.5" y="5" width="13" height="15.5" rx="2" stroke="currentColor" strokeWidth="2.2" />
            <path d="M13.5 5V12L16 10L18.5 12V5" fill="currentColor" />
          </svg>
        </button>
      </nav>
    </div>
  );
}
