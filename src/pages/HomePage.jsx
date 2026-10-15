import { useHome } from '../hooks/useHome';
import { useUserProfile } from '../hooks/useUserProfile';
import { useTheme } from '../hooks/useTheme';
import { useAccessibility } from '../hooks/useAccessibility';
import { useLanguage } from '../hooks/useLanguage';
import { CharacterProgressCard } from '../components/home/CharacterProgressCard';
import { DidYouKnowCard } from '../components/home/DidYouKnowCard';
import { CharacterRewardModal } from '../components/home/CharacterRewardModal';

export function HomePage() {
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
    <div className="w-full flex-1 relative flex flex-col justify-between select-none">
      {/* Contenido principal con padding ajustado para pantalla de celular */}
      <main className="w-full px-5 pt-3 pb-28 flex flex-col gap-4">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={toggleLargeText}
              className={`inline-flex items-center justify-center rounded-xl border px-2.5 py-1.5 text-xs font-bold active:scale-95 transition-all cursor-pointer ${
                isLargeText
                  ? 'border-[#687320] bg-[#687320] text-white dark:border-[#879532] dark:bg-[#879532]'
                  : 'border-[#CCD69E] bg-[#F2F4E6] text-[#4E5618] hover:bg-[#E4E8C8] dark:border-[#55623B] dark:bg-[#242B1E] dark:text-[#E3E9D5] dark:hover:bg-[#303A27]'
              }`}
              aria-label={isLargeText ? t('a11y.disable') : t('a11y.enable')}
              title={isLargeText ? t('a11y.active') : t('a11y.inactive')}
            >
              <span className="text-[12px] font-extrabold tracking-tight">A+</span>
            </button>

            <button
              type="button"
              onClick={toggleDarkMode}
              className="inline-flex items-center gap-1.5 rounded-xl border border-[#CCD69E] bg-[#F2F4E6] px-2.5 py-1.5 text-xs font-semibold text-[#4E5618] hover:bg-[#E4E8C8] active:scale-95 transition-all cursor-pointer dark:border-[#55623B] dark:bg-[#242B1E] dark:text-[#E3E9D5] dark:hover:bg-[#303A27]"
              aria-label={isDarkMode ? t('theme.toLight') : t('theme.toDark')}
              title={isDarkMode ? t('theme.toLight') : t('theme.toDark')}
            >
              {isDarkMode ? (
                <>
                  <svg className="w-3.5 h-3.5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                  <span>{t('theme.day')}</span>
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5 text-[#545C1E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                  <span>{t('theme.night')}</span>
                </>
              )}
            </button>
          </div>

          <button
            type="button"
            onClick={handleOpenFireSafety}
            className="inline-flex items-center gap-1.5 rounded-xl bg-[#A83B12] hover:bg-[#8F320F] text-white px-3 py-1.5 text-xs font-bold shadow-xs active:scale-95 transition-all cursor-pointer dark:bg-[#C85A27] dark:hover:bg-[#B34E1E]"
            aria-label={t('home.fireSafetyAria')}
          >
            <svg
              className="w-4 h-4 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 23c-4.97 0-9-4.03-9-9 0-3.64 2.22-6.66 4-9 .61-.8 1.94-.37 2 .67.15 2.65 1.76 4.33 3 5.33 1-1.33 1.5-3.33 1-5 1.5 1 4 3.5 4 8 0 4.97-4.03 9-9 9z" />
            </svg>
            <span>{HOME_DATA.fireSafety.buttonLabel}</span>
          </button>
        </div>

        <header className="mb-1 pl-0.5 pt-1">
          <h1 className="text-[26px] font-medium text-[#1E201A] leading-[1.08] tracking-[-0.05em] dark:text-[#F4F6ED]">
            {isJunior ? HOME_DATA.juniorGreeting : HOME_DATA.greeting}
          </h1>
          <p className="text-[34px] font-black text-[#6F7D1F] leading-[0.9] tracking-[-0.07em] mt-1.5 dark:text-[#DDEB7A]">
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
          icon={HOME_DATA.didYouKnowCard.icon}
          description={
            isJunior
              ? HOME_DATA.didYouKnowCard.juniorDescription
              : HOME_DATA.didYouKnowCard.description
          }
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
