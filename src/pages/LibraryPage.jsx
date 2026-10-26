import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExplorerProfileHeader } from '../components/library/ExplorerProfileHeader';
import { FichaDetailModal } from '../components/library/FichaDetailModal';
import { FichasTab } from '../components/library/FichasTab';
import { TrophicNetworkTab } from '../components/library/TrophicNetworkTab';
import { getUnlockedCharacters } from '../data/rewardProgress';
import { useUserProfile } from '../hooks/useUserProfile';
import { useLanguage } from '../hooks/useLanguage';

export function LibraryPage() {
  const navigate = useNavigate();
  const { t, content } = useLanguage();
  const LIBRARY_CARDS = content.library.cards;
  const [activeSection, setActiveSection] = useState('fichas');
  const [unlockedCharacters] = useState(getUnlockedCharacters);
  const [selectedCard, setSelectedCard] = useState(null);
  const { user, isJunior } = useUserProfile();

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
    </div>
  );
}
