import { useEffect, useMemo, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { useUserProfile } from '../hooks/useUserProfile';
import { unlockCharacterByStation } from '../data/rewardProgress';
import { MemoryGame } from '../components/juniorGames/MemoryGame';
import { ComparisonGame } from '../components/juniorGames/ComparisonGame';
import { JuniorGameCompletedCard } from '../components/juniorGames/JuniorGameCompletedCard';

export function JuniorGamesPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isJunior } = useUserProfile();
  const { t, content } = useLanguage();

  const stationStep = location.state?.stationStep || 1;
  const [mode, setMode] = useState('hub');
  const [lastGame, setLastGame] = useState('memorama');

  // Los juegos son solo para niños: los adultos van a la trivia.
  useEffect(() => {
    if (!isJunior) {
      navigate('/trivia', { replace: true, state: { stationStep } });
    }
  }, [isJunior, navigate, stationStep]);

  const speciesById = useMemo(() => {
    const map = {};
    content.library.cards.forEach((card) => {
      map[card.id] = card;
    });
    return map;
  }, [content]);

  const handleComplete = useCallback(() => {
    unlockCharacterByStation(stationStep);
    setMode('completed');
  }, [stationStep]);

  const goToHub = () => setMode('hub');

  const games = [
    {
      id: 'memorama',
      title: t('juniorGames.memorama.title'),
      description: t('juniorGames.memorama.description'),
      icon: (
        <div className="grid grid-cols-2 gap-1">
          <img src={speciesById.molle?.image} alt="" className="w-6 h-6 object-contain" />
          <img src={speciesById.carpincho?.image} alt="" className="w-6 h-6 object-contain" />
        </div>
      ),
    },
    {
      id: 'comparison',
      title: t('juniorGames.comparison.title'),
      description: t('juniorGames.comparison.description'),
      icon: (
        <div className="flex items-center gap-1">
          <img src={speciesById.halcon?.image} alt="" className="w-6 h-6 object-contain" />
          <span className="text-[#7E8B28] font-black text-sm">?</span>
          <img src={speciesById.molle?.image} alt="" className="w-6 h-6 object-contain" />
        </div>
      ),
    },
  ];

  return (
    <div className="w-full flex-1 flex flex-col select-none bg-[var(--app-surface)]">
      <header className="w-full flex items-center justify-between px-5 pt-3">
        {mode === 'hub' || mode === 'completed' ? (
          <button
            type="button"
            onClick={() => navigate('/scan')}
            className="flex items-center gap-1.5 rounded-xl border border-[#E5DED2] dark:border-[#46503F] bg-white dark:bg-[#20251B] px-3 py-1.5 text-xs font-semibold text-[#37332D] dark:text-[#F4F6ED] active:scale-95 transition-all cursor-pointer"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            {t('juniorGames.back')}
          </button>
        ) : (
          <button
            type="button"
            onClick={goToHub}
            className="flex items-center gap-1.5 rounded-xl border border-[#E5DED2] dark:border-[#46503F] bg-white dark:bg-[#20251B] px-3 py-1.5 text-xs font-semibold text-[#37332D] dark:text-[#F4F6ED] active:scale-95 transition-all cursor-pointer"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            {t('juniorGames.back')}
          </button>
        )}

        <span className="rounded-full bg-[#F2F4E6] dark:bg-[#242B1E] border border-[#CFD79F] dark:border-[#3D482B] px-3 py-1 text-xs font-bold text-[#545C1E] dark:text-[#DDEB7A]">
          {t('juniorGames.stationBadge', { n: stationStep })}
        </span>
      </header>

      <main className="w-full flex-1 flex flex-col justify-center px-5 py-6">
        {mode === 'hub' && (
          <div className="flex flex-col gap-5">
            <div className="text-center">
              <h1 className="text-[26px] font-black text-[#6F7D1F] dark:text-[#DDEB7A] leading-tight tracking-tight">
                {t('juniorGames.hubTitle')}
              </h1>
              <p className="mt-1 text-sm font-medium text-[#555A49] dark:text-[#B8BFAC]">
                {t('juniorGames.hubSubtitle')}
              </p>
            </div>

            <div className="flex flex-col gap-3.5">
              {games.map((game) => (
                <button
                  key={game.id}
                  type="button"
                  onClick={() => setMode(game.id)}
                  className="flex items-center gap-4 rounded-3xl border border-[#E7E4D8] dark:border-[#3D4633] bg-[#F7F4EE] dark:bg-[#20251B] p-4 text-left shadow-[0_8px_18px_rgba(28,33,15,0.05)] transition-all active:scale-[0.99] cursor-pointer"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white dark:bg-[#141710] border border-[#E5E7EB] dark:border-[#353D2B]">
                    {game.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[16px] font-bold text-[#1A1C16] dark:text-[#F4F6ED]">
                      {game.title}
                    </span>
                    <span className="mt-0.5 block text-xs font-medium text-[#555A49] dark:text-[#B8BFAC]">
                      {game.description}
                    </span>
                  </span>
                  <span className="shrink-0 rounded-xl bg-[#7E8B28] px-3.5 py-2 text-xs font-bold text-white">
                    {t('juniorGames.play')}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {mode === 'memorama' && (
          <MemoryGame
            speciesById={speciesById}
            onComplete={() => {
              setLastGame('memorama');
              handleComplete();
            }}
          />
        )}

        {mode === 'comparison' && (
          <ComparisonGame
            speciesById={speciesById}
            onComplete={() => {
              setLastGame('comparison');
              handleComplete();
            }}
          />
        )}

        {mode === 'completed' && (
          <div className="flex justify-center">
            <JuniorGameCompletedCard
              title={
                lastGame === 'comparison'
                  ? t('juniorGames.comparison.winTitle')
                  : t('juniorGames.memorama.winTitle')
              }
              onGoHome={() => navigate('/home')}
              onSeeCollection={() => navigate('/library')}
              onChooseAnother={() => navigate('/scan')}
              onReplay={goToHub}
            />
          </div>
        )}
      </main>
    </div>
  );
}
