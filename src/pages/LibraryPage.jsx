import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExplorerProfileHeader } from '../components/library/ExplorerProfileHeader';
import { FichaDetailModal } from '../components/library/FichaDetailModal';
import { FichasTab } from '../components/library/FichasTab';
import { TrophicNetworkTab } from '../components/library/TrophicNetworkTab';
import { LIBRARY_CARDS } from '../data/library/libraryCards';
import { getUnlockedCharacters } from '../data/rewardProgress';
import { useUserProfile } from '../hooks/useUserProfile';

export function LibraryPage() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('fichas');
  const [unlockedCharacters] = useState(getUnlockedCharacters);
  const [selectedCard, setSelectedCard] = useState(null);
  const { user, isJunior } = useUserProfile();

  const unlockedCardsCount = useMemo(() => {
    return LIBRARY_CARDS.filter(
      (c) => c.unlocked || (c.unlockStep ?? 1) <= unlockedCharacters
    ).length;
  }, [unlockedCharacters]);

  return (
    <div className="relative flex w-full flex-1 flex-col select-none bg-[#FAF9F5] dark:bg-[#141710] transition-colors">
      <main
        className="flex-1 px-5 pt-5 pb-36 transition-all duration-300"
      >
        <ExplorerProfileHeader
          user={user}
          isJunior={isJunior}
          unlockedCardsCount={unlockedCardsCount}
          totalCardsCount={LIBRARY_CARDS.length}
          unlockedCharacters={unlockedCharacters}
          onGoRegister={() => navigate('/register')}
        />

        <div
          className="mt-4 flex p-1 rounded-2xl bg-[#E4E8C8] dark:bg-[#202619] border border-[#CCD69E] dark:border-[#353E2A] transition-colors"
          role="tablist"
          aria-label="Secciones de la biblioteca"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeSection === 'fichas'}
            onClick={() => setActiveSection('fichas')}
            className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              activeSection === 'fichas'
                ? 'bg-[#7E8B28] text-white shadow-xs'
                : 'text-[#4E5618] dark:text-[#B3BE8E] hover:text-[#1A1C16] dark:hover:text-white'
            }`}
          >
            Fichas ({unlockedCardsCount}/{LIBRARY_CARDS.length})
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeSection === 'network'}
            onClick={() => setActiveSection('network')}
            className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              activeSection === 'network'
                ? 'bg-[#7E8B28] text-white shadow-xs'
                : 'text-[#4E5618] dark:text-[#B3BE8E] hover:text-[#1A1C16] dark:hover:text-white'
            }`}
          >
            Red trófica
          </button>
        </div>

        <div className="mt-3.5">
          {activeSection === 'fichas' ? (
            <FichasTab
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
