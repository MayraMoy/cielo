import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LockKeyhole } from 'lucide-react';
import { ExplorerProfileHeader } from '../components/library/ExplorerProfileHeader';
import { FichaDetailModal } from '../components/library/FichaDetailModal';
import { FichasTab } from '../components/library/FichasTab';
import { TrophicNetworkTab } from '../components/library/TrophicNetworkTab';
import { GiftBox } from '../components/home/GiftBox';
import { CharacterRewardModal } from '../components/home/CharacterRewardModal';
import {
  getOpenedRewards,
  getUnlockedCharacters,
  markRewardAsOpened,
} from '../data/rewardProgress';
import { useUserProfile } from '../hooks/useUserProfile';
import { useLanguage } from '../hooks/useLanguage';

export function LibraryPage() {
  const navigate = useNavigate();
  const { t, content } = useLanguage();
  const LIBRARY_CARDS = content.library.cards;
  const [activeSection, setActiveSection] = useState('fichas');
  const [unlockedCharacters] = useState(getUnlockedCharacters);
  const [openedRewards, setOpenedRewards] = useState(getOpenedRewards);
  const [selectedRewardIndex, setSelectedRewardIndex] = useState(null);
  const [showLockedMessage, setShowLockedMessage] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const lockedTimerRef = useRef(null);
  const { user, isJunior } = useUserProfile();

  const totalRewards = 3;
  const rewardProgress = Math.min(Math.max(unlockedCharacters, 0), totalRewards);

  useEffect(() => () => window.clearTimeout(lockedTimerRef.current), []);

  const handleRewardClick = (index, isUnlocked) => {
    window.clearTimeout(lockedTimerRef.current);

    if (isUnlocked) {
      setShowLockedMessage(false);
      const updated = markRewardAsOpened(index);
      setOpenedRewards([...updated]);
      setSelectedRewardIndex(index);
      return;
    }

    setShowLockedMessage(true);
    lockedTimerRef.current = window.setTimeout(
      () => setShowLockedMessage(false),
      3000,
    );
  };

  const unlockedCardsCount = useMemo(() => {
    return LIBRARY_CARDS.filter(
      (c) => c.unlocked || (c.unlockStep ?? 1) <= unlockedCharacters
    ).length;
  }, [LIBRARY_CARDS, unlockedCharacters]);

  return (
    <div className="relative flex w-full flex-1 flex-col select-none bg-[var(--app-surface)] transition-colors">
      <main
        className={`flex-1 px-5 pt-5 transition-all duration-300 ${
          activeSection === 'network' ? 'pb-36' : 'pb-40'
        }`}
      >
        <ExplorerProfileHeader
          user={user}
          unlockedCharacters={unlockedCharacters}
          onGoRegister={() => navigate('/register')}
          onOpenProfile={() => navigate('/profile')}
        />

        {/* Progreso de los 3 regalos/personajes dentro de Colección */}
        <section
          className="mt-4 rounded-2xl border border-[var(--surface-card-border)] bg-[var(--surface-card)] p-4 shadow-[var(--card-shadow)] transition-colors"
          aria-label={t('home.characterCard.rewardsGroupAria')}
        >
          <h2 className="mb-3 text-[15px] font-semibold leading-snug text-[var(--text-primary)]">
            {isJunior
              ? content.home.characterCard.juniorTitle
              : content.home.characterCard.title}
          </h2>

          <div className="relative w-full py-1">
            <div
              className="absolute left-[16%] right-[16%] top-1/2 z-0 h-1 -translate-y-1/2 rounded-full bg-[var(--surface-card-border)]"
              role="progressbar"
              aria-label={t('home.characterCard.unlockedAria')}
              aria-valuemin={0}
              aria-valuemax={totalRewards}
              aria-valuenow={rewardProgress}
            >
              <div
                className="h-full rounded-full bg-[#687320] transition-[width] duration-700 dark:bg-[var(--brand-olive)]"
                style={{ width: `${(rewardProgress / totalRewards) * 100}%` }}
              />
            </div>

            <div
              className="relative z-10 flex w-full items-center justify-between px-2"
              role="group"
              aria-label={t('home.characterCard.rewardsGroupAria')}
            >
              {Array.from({ length: totalRewards }, (_, index) => {
                const isUnlocked = index < unlockedCharacters;
                const isOpened = openedRewards.includes(index);

                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleRewardClick(index, isUnlocked)}
                    aria-label={
                      isUnlocked
                        ? isOpened
                          ? t('home.characterCard.rewardOpenedAria', { n: index + 1 })
                          : t('home.characterCard.rewardOpenAria', { n: index + 1 })
                        : t('home.characterCard.rewardLockedAria', { n: index + 1 })
                    }
                    className={`relative flex h-14 w-14 items-center justify-center rounded-full border-2 bg-[var(--surface-step)] transition-all active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#687320] dark:focus-visible:outline-[#C5D76A] cursor-pointer ${
                      isUnlocked
                        ? 'border-[#687320] shadow-[0_2px_8px_rgba(69,78,24,0.16)] dark:border-[var(--text-name)]'
                        : 'border-[var(--control-border)]'
                    }`}
                  >
                    <GiftBox
                      isOpen={isOpened}
                      className={`h-10 w-10 object-contain transition-[filter,opacity] ${
                        isUnlocked ? 'opacity-100' : 'grayscale opacity-60'
                      }`}
                    />
                    {!isUnlocked && (
                      <LockKeyhole
                        className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-[var(--surface-card)] p-0.5 text-[#545C1E] dark:text-[var(--text-name)]"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {showLockedMessage && (
            <p
              className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-[var(--surface-card-border)] bg-[var(--surface-step)] px-3 py-2 text-center text-xs font-medium text-[var(--text-secondary)]"
              role="status"
              aria-live="polite"
            >
              <LockKeyhole className="h-4 w-4 shrink-0 text-[#545C1E] dark:text-[var(--text-name)]" aria-hidden="true" />
              <span>{t('home.characterCard.rewardLockedMessage')}</span>
            </p>
          )}
        </section>

        <div
          className="mt-4 flex p-1.5 rounded-2xl bg-[var(--surface-card)] border border-[var(--surface-card-border)] shadow-[var(--control-shadow)] transition-colors"
          role="tablist"
          aria-label={t('library.tabs.sectionsAria')}
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeSection === 'fichas'}
            onClick={() => setActiveSection('fichas')}
            className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              activeSection === 'fichas'
                ? 'bg-[#7E8B28] text-white shadow-xs'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            {t('library.tabs.fichas', {
              n: unlockedCardsCount,
              total: LIBRARY_CARDS.length,
            })}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeSection === 'network'}
            onClick={() => setActiveSection('network')}
            className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              activeSection === 'network'
                ? 'bg-[#7E8B28] text-white shadow-xs'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            {t('library.tabs.network')}
          </button>
        </div>

        <div className="mt-3.5">
          {activeSection === 'fichas' ? (
            <FichasTab
              cards={LIBRARY_CARDS}
              unlockedCharacters={unlockedCharacters}
              onOpenCard={setSelectedCard}
              onGoScan={() => navigate('/scan')}
            />
          ) : (
            <TrophicNetworkTab isJunior={isJunior} />
          )}
        </div>
      </main>

      {selectedCard && (
        <FichaDetailModal
          card={selectedCard}
          isJunior={isJunior}
          onClose={() => setSelectedCard(null)}
        />
      )}

      {selectedRewardIndex !== null && (
        <CharacterRewardModal
          rewardIndex={selectedRewardIndex}
          onClose={() => setSelectedRewardIndex(null)}
          onOpenLibrary={() => setSelectedRewardIndex(null)}
        />
      )}
    </div>
  );
}
