import { useLocation } from 'react-router-dom';
import { useHome } from '../hooks/useHome';
import { useUserProfile } from '../hooks/useUserProfile';
import { useTheme } from '../hooks/useTheme';
import { useAccessibility } from '../hooks/useAccessibility';
import { useLanguage } from '../hooks/useLanguage';
import { CharacterProgressCard } from '../components/home/CharacterProgressCard';
import { DidYouKnowCard } from '../components/home/DidYouKnowCard';
import { CharacterRewardModal } from '../components/home/CharacterRewardModal';

export function HomePage() {
  const location = useLocation();
  const {
    userName,
    unlockedCharacters,
    openedRewards,
    isRewardModalOpen,
    selectedRewardIndex,
    handleStartGame,
    handleOpenLibrary,
    handleOpenReward,
    handleCloseReward,
    handleOpenFireSafety,
  } = useHome();

  const { isJunior } = useUserProfile();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { isLargeText, toggleLargeText } = useAccessibility();
  const { t, content } = useLanguage();
  const HOME_DATA = content.home;

  return (
    <div className={`home-surface w-full flex-1 relative flex flex-col justify-between select-none ${location.state?.fromFireSafety ? 'animate-[page-enter-left_260ms_cubic-bezier(0.22,1,0.36,1)_both]' : ''}`}>
      {/* Contenido principal con padding ajustado para pantalla de celular */}
      <main className="w-full px-5 pt-3 pb-28 flex flex-col gap-5">
        <div className="flex flex-nowrap items-center justify-between gap-1">
          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              onClick={toggleLargeText}
              className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-2xl border px-2.5 py-1.5 text-xs font-bold shadow-[var(--control-shadow)] active:scale-95 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#687320] cursor-pointer dark:focus-visible:outline-[#C5D76A] ${
                isLargeText
                  ? 'border-[#687320] bg-[#687320] text-white dark:border-[#879532] dark:bg-[#879532]'
                  : 'border-[var(--surface-card-border)] bg-[var(--surface-card)] text-[var(--text-secondary)] hover:border-[var(--accent-soft-border)] hover:bg-[var(--accent-soft-bg)]'
              }`}
              aria-label={isLargeText ? t('a11y.disable') : t('a11y.enable')}
              title={isLargeText ? t('a11y.active') : t('a11y.inactive')}
              aria-pressed={isLargeText}
            >
              <span className="text-[12px] font-extrabold tracking-tight">A+</span>
            </button>

            <button
              type="button"
              onClick={toggleDarkMode}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[var(--surface-card-border)] bg-[var(--surface-card)] p-0 text-[var(--text-secondary)] shadow-[var(--control-shadow)] hover:border-[var(--accent-soft-border)] hover:bg-[var(--accent-soft-bg)] active:scale-95 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#687320] cursor-pointer dark:focus-visible:outline-[#C5D76A]"
              aria-label={isDarkMode ? t('theme.toLight') : t('theme.toDark')}
              title={isDarkMode ? t('theme.toLight') : t('theme.toDark')}
              aria-pressed={isDarkMode}
            >
              {isDarkMode ? (
                <svg className="h-4 w-4 text-amber-500 dark:text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg className="h-4 w-4 text-[#545C1E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
              <span className="sr-only">{isDarkMode ? t('theme.toLight') : t('theme.toDark')}</span>
            </button>
          </div>

          <button
            type="button"
            onClick={handleOpenFireSafety}
            className="inline-flex min-h-11 shrink-0 items-center gap-1 rounded-2xl border border-[#EBCDBE] bg-[#FFF5EF] px-2 py-2 text-[11px] font-bold whitespace-nowrap text-[#96340F] shadow-[var(--control-shadow)] hover:bg-[#FBE7DC] active:scale-95 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A83B12] cursor-pointer dark:border-[#70432F] dark:bg-[#38241C] dark:text-[#F0A57A] dark:hover:bg-[#43291E] dark:focus-visible:outline-[#C5D76A]"
            aria-label={t('home.fireSafetyAria')}
          >
            <svg
              className="h-4 w-4 text-current"
              viewBox="0 -960 960 960"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M240-400q0 52 21 98.5t60 81.5q-1-5-1-9v-9q0-32 12-60t35-51l113-111 113 111q23 23 35 51t12 60v9q0 4-1 9 39-35 60-81.5t21-98.5q0-50-18.5-94.5T648-574q-20 13-42 19.5t-45 6.5q-62 0-107.5-41T401-690q-39 33-69 68.5t-50.5 72Q261-513 250.5-475T240-400Zm240 52-57 56q-11 11-17 25t-6 29q0 32 23.5 55t56.5 23q33 0 56.5-23t23.5-55q0-16-6-29.5T537-292l-57-56Zm0-492v132q0 34 23.5 57t57.5 23q18 0 33.5-7.5T622-658l18-22q74 42 117 117t43 163q0 134-93 227T480-80q-134 0-227-93t-93-227q0-129 86.5-245T480-840Z" />
            </svg>
            <span>{HOME_DATA.fireSafety.buttonLabel}</span>
          </button>
        </div>

        <header className="mb-1 pl-0.5 pt-1">
          <h1 className="text-[30px] font-semibold text-[var(--text-primary)] leading-[1.08] tracking-[-0.03em]">
            {isJunior ? HOME_DATA.juniorGreeting : HOME_DATA.greeting}
          </h1>
          <p className="text-[36px] font-extrabold text-[var(--text-name)] leading-[0.95] tracking-[-0.03em] mt-1">
            {userName}
          </p>
        </header>

        {/* Tarjeta 1: Progreso de personaje y regalos */}
        <CharacterProgressCard
          title={
            isJunior
              ? HOME_DATA.characterCard.juniorTitle
              : HOME_DATA.characterCard.title
          }
          buttonText={
            isJunior
              ? HOME_DATA.characterCard.juniorButtonText
              : HOME_DATA.characterCard.buttonText
          }
          unlockedCount={unlockedCharacters}
          openedRewards={openedRewards}
          onOpenReward={handleOpenReward}
          onStartGame={handleStartGame}
        />

        {/* Tarjeta 2: Sabías que con el búho lector */}
        <DidYouKnowCard
          title={HOME_DATA.didYouKnowCard.title}
          facts={HOME_DATA.didYouKnowCard.facts}
          isJunior={isJunior}
        />
      </main>

      {isRewardModalOpen && (
        <CharacterRewardModal
          rewardIndex={selectedRewardIndex}
          onClose={handleCloseReward}
          onOpenLibrary={() => {
            handleCloseReward();
            handleOpenLibrary();
          }}
        />
      )}
    </div>
  );
}
