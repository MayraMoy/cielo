import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { BottomNavbar } from '../components/common/BottomNavbar';
import { OwlMascot } from '../components/home/OwlMascot';
import { LIBRARY_CARDS, TROPHIC_LEVELS } from '../data/libraryData';
import { getUnlockedCharacters } from '../data/rewardProgress';
import { useUserProfile } from '../hooks/useUserProfile';

function FichaDetailModal({ card, isJunior = false, onClose }) {
  const description =
    isJunior && card.juniorDescription
      ? card.juniorDescription
      : card.description;
  const contribution =
    isJunior && card.juniorContribution
      ? card.juniorContribution
      : card.contribution;
  const diet = isJunior && card.juniorDiet ? card.juniorDiet : card.diet;

  return (
    <div
      className="absolute inset-0 z-50 flex items-center justify-center bg-black/55 p-3 backdrop-blur-sm animate-[modal-appear_200ms_ease-out]"
      onClick={onClose}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="ficha-title"
        className="relative w-full max-w-[350px] rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-2 z-10 p-1 text-2xl leading-none text-[#1A1C16] cursor-pointer"
          aria-label="Cerrar ficha"
        >
          ×
        </button>

        <div className="grid grid-cols-[100px_1fr] items-center gap-3 pr-5">
          <img
            src={card.image}
            alt={card.name}
            className="h-28 w-full object-contain"
          />
          <div className="min-w-0">
            <span className="inline-flex items-center gap-1 rounded-full border border-[#B5C370] bg-[#F2F4E6] px-3 py-0.5 text-xs font-medium text-[#687320]">
              {card.category === 'Productor' ? '🌱' : '🐾'} {card.category}
            </span>
            <h2
              id="ficha-title"
              className="mt-1.5 text-lg font-bold leading-tight text-[#1A1C16]"
            >
              {card.name}
            </h2>
            {!isJunior && card.scientificName && (
              <p className="text-[11px] italic text-[#687320]">
                {card.scientificName}
              </p>
            )}
            <p
              className={`mt-1 ${
                isJunior ? 'text-[12.5px]' : 'text-[11.5px]'
              } leading-snug text-[#3C4033]`}
            >
              {description}
            </p>
          </div>
        </div>

        <section className="mt-3 flex gap-3 rounded-xl bg-[#F4F8DE] p-3 shadow-[0_3px_5px_rgba(0,0,0,0.12)]">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#89931D] text-[#7E8B28]">
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <circle cx="12" cy="5" r="2" />
              <circle cx="6" cy="17" r="2" />
              <circle cx="18" cy="17" r="2" />
              <path d="m11 7-4 8m6-8 4 8M8 17h8" />
            </svg>
          </span>
          <div>
            <h3
              className={`${
                isJunior ? 'text-xs' : 'text-[11px]'
              } font-semibold text-[#1A1C16]`}
            >
              {isJunior
                ? '¿Cómo ayuda al bosque?'
                : '¿Qué aporta a la red trófica?'}
            </h3>
            <p
              className={`mt-1 ${
                isJunior ? 'text-[12px]' : 'text-[11px]'
              } leading-snug text-[#555A49]`}
            >
              {contribution}
            </p>
          </div>
        </section>

        <section className="relative mt-3 flex min-h-[76px] gap-3 overflow-hidden rounded-xl bg-[#F4F8DE] p-3 pr-16 shadow-[0_3px_5px_rgba(0,0,0,0.12)]">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#89931D] text-[#7E8B28]">
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <path d="M4 4h16l-2 7H6L4 4Zm2 7v3a6 6 0 0 0 12 0v-3M12 20v-4m-4-2h8" />
            </svg>
          </span>
          <div>
            <h3
              className={`${
                isJunior ? 'text-xs' : 'text-[11px]'
              } font-semibold text-[#1A1C16]`}
            >
              Se alimenta de...
            </h3>
            <p
              className={`mt-1 ${
                isJunior ? 'text-[12px]' : 'text-[11px]'
              } leading-snug text-[#555A49]`}
            >
              {diet}
            </p>
          </div>
          <OwlMascot className="absolute -bottom-2 -right-1 w-[62px]" />
        </section>
      </section>
    </div>
  );
}

function TrophicInfoModal({ level, isJunior = false, onClose }) {
  return (
    <div
      className="absolute inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm animate-[modal-appear_200ms_ease-out]"
      onClick={onClose}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="trophic-info-title"
        className="w-full max-w-[340px] overflow-hidden rounded-2xl shadow-2xl"
        style={{ backgroundColor: level.background }}
        onClick={(event) => event.stopPropagation()}
      >
        <header
          className="relative flex min-h-9 items-center justify-center px-10 py-2"
          style={{ backgroundColor: level.accent }}
        >
          <h2
            id="trophic-info-title"
            className="text-center text-sm font-bold text-[#1A1C16]"
          >
            {level.label}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-2xl leading-none text-[#1A1C16] cursor-pointer"
            aria-label="Cerrar información"
          >
            ×
          </button>
        </header>

        <div className="grid min-h-[150px] grid-cols-[72px_1fr] items-center gap-2 p-3.5">
          <div className="flex flex-col items-center justify-center gap-2">
            <img
              src={level.info.illustration[0].image}
              alt={level.info.illustration[0].name}
              className="h-[72px] w-[68px] object-contain"
            />
            {level.info.illustration[1] && (
              <svg viewBox="0 0 64 28" className="h-6 w-14" aria-hidden="true">
                <path
                  d="M58 23C39 24 19 17 7 5"
                  fill="none"
                  stroke="#82921E"
                  strokeWidth="2"
                />
                <path d="m6 5 10 1-5 8" fill="#82921E" />
              </svg>
            )}
            {level.info.illustration[1] && (
              <img
                src={level.info.illustration[1].image}
                alt={level.info.illustration[1].name}
                className="h-[64px] w-[68px] object-contain"
              />
            )}
          </div>
          <div
            className={`flex flex-col justify-center gap-2.5 ${
              isJunior ? 'text-[12.5px]' : 'text-[11px]'
            } leading-snug text-[#1A1C16]`}
          >
            <p>
              {isJunior && level.info.juniorDescription
                ? level.info.juniorDescription
                : level.info.description}
            </p>
            <p className="font-semibold">{level.info.example}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function ExplorerProfileHeader({
  user,
  isJunior,
  unlockedCardsCount,
  totalCardsCount,
  unlockedCharacters,
  onToggleMode,
  onGoRegister,
}) {
  const rankBadge =
    unlockedCharacters >= 3
      ? '🏅 Guardaparque Maestro'
      : unlockedCharacters >= 2
      ? '🌿 Explorador del Humedal'
      : unlockedCharacters >= 1
      ? '🧭 Explorador Inicial'
      : '🌱 Visitante Curioso';

  return (
    <section className="flex items-center justify-between gap-3 rounded-2xl border border-[#D1D5DB] bg-white px-4 py-3.5 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-3 min-w-0">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F2F4E6] border border-[#B5C370] text-lg">
          {isJunior ? '👦' : '🧑'}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <h1 className="text-sm font-bold text-[#1A1C16] truncate">
              {user?.fullName || 'Explorador Invitado'}
            </h1>
            <span className="rounded-full bg-[#F2F4E6] border border-[#CFD79F] px-2 py-0.5 text-[10px] font-semibold text-[#545C1E]">
              {unlockedCardsCount}/{totalCardsCount} fichas
            </span>
          </div>
          <p className="text-[11px] font-medium text-[#687320] mt-0.5">
            {rankBadge}
          </p>
          <div className="mt-1 flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleMode}
              className="text-[10px] font-semibold text-[#555A49] underline decoration-[#8A8F7B] underline-offset-2 hover:text-[#1A1C16] cursor-pointer"
            >
              Modo: {isJunior ? 'Junior (Niños)' : 'Adulto'} (Cambiar)
            </button>
            {!user?.fullName && (
              <button
                type="button"
                onClick={onGoRegister}
                className="text-[10px] font-semibold text-[#7E8B28] underline underline-offset-2 cursor-pointer"
              >
                • Registrarme
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function LockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      aria-hidden="true"
    >
      <rect x="5" y="10" width="14" height="11" rx="1.5" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
    </svg>
  );
}

function FichasTab({
  unlockedCharacters,
  isJunior,
  onOpenCard,
  onGoScan,
}) {
  const [lockedHintCard, setLockedHintCard] = useState(null);

  return (
    <div>
      {lockedHintCard && (
        <div className="mb-3 flex items-center justify-between gap-2 rounded-xl border border-[#B5C370] bg-[#F2F4E6] px-3 py-2.5 text-xs text-[#3C4033] animate-[modal-appear_180ms_ease-out]">
          <div>
            <p className="font-bold text-[#545C1E]">
              🔒 {lockedHintCard.name} está bloqueada
            </p>
            <p className="text-[11px] mt-0.5">{lockedHintCard.unlockHint}</p>
          </div>
          <button
            type="button"
            onClick={onGoScan}
            className="shrink-0 rounded-lg bg-[#7E8B28] px-2.5 py-1.5 text-[11px] font-semibold text-white hover:bg-[#6D7821] cursor-pointer"
          >
            Ir a QR
          </button>
        </div>
      )}

      <div className="grid grid-cols-3 gap-x-3 gap-y-3.5 px-1 py-1">
        {LIBRARY_CARDS.map((card) => {
          const isUnlocked =
            card.unlocked || (card.unlockStep ?? 1) <= unlockedCharacters;

          return (
            <button
              key={card.id}
              type="button"
              onClick={() => {
                if (isUnlocked) {
                  setLockedHintCard(null);
                  onOpenCard(card);
                } else {
                  setLockedHintCard(card);
                }
              }}
              aria-label={`${card.name}${
                isUnlocked ? ', abrir ficha' : ', bloqueada (toca para ver pista)'
              }`}
              className={`relative flex flex-col items-center justify-between rounded-xl bg-white p-2 text-center shadow-2xs border transition-transform active:scale-95 cursor-pointer ${
                isUnlocked
                  ? 'border-[#CFD79F] hover:border-[#7E8B28]'
                  : 'border-gray-200 opacity-75'
              }`}
            >
              <div className="relative h-20 w-full flex items-center justify-center">
                <img
                  src={card.image}
                  alt={card.name}
                  className={`h-full w-full object-contain ${
                    isUnlocked ? '' : 'grayscale opacity-55'
                  }`}
                />
                {!isUnlocked && (
                  <span className="absolute right-0.5 top-0.5 rounded-full bg-white/95 p-1 text-[#1A1C16] shadow-2xs">
                    <LockIcon />
                  </span>
                )}
              </div>
              <span
                className={`mt-1 w-full truncate ${
                  isJunior ? 'text-[11px]' : 'text-[10px]'
                } font-semibold ${
                  isUnlocked ? 'text-[#1A1C16]' : 'text-gray-500'
                }`}
              >
                {card.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function TrophicNetworkTab({ isJunior = false }) {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [isChallengeMode, setIsChallengeMode] = useState(false);

  const challengeItems = useMemo(
    () => [
      {
        name: 'Molle',
        role: 'producers',
        clue: 'Fabrica su propio alimento con la luz del sol',
      },
      {
        name: 'Carpincho',
        role: 'primary-consumer',
        clue: 'Come pastos y plantas cerca del agua (herbívoro)',
      },
      {
        name: 'Halcón',
        role: 'secondary-consumer',
        clue: 'Ave rapaz cazadora que vigila desde las alturas',
      },
    ],
    []
  );

  const [challengeIndex, setChallengeIndex] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [completedChallenge, setCompletedChallenge] = useState(false);

  const currentTarget = challengeItems[challengeIndex];

  const handleLevelGuess = (levelId) => {
    if (!isChallengeMode || completedChallenge) return;

    if (levelId === currentTarget.role) {
      if (challengeIndex + 1 < challengeItems.length) {
        setFeedback({
          type: 'success',
          text: `¡Muy bien! ${currentTarget.name} ubicado correctamente.`,
        });
        setChallengeIndex((prev) => prev + 1);
      } else {
        setFeedback({
          type: 'success',
          text: '🎉 ¡Felicitaciones! Armaste toda la red trófica de Villa Cielo.',
        });
        setCompletedChallenge(true);
      }
    } else {
      setFeedback({
        type: 'error',
        text: `¡Casi! Leé la pista de ${currentTarget.name} y probá otro escalón.`,
      });
    }
  };

  const resetChallenge = () => {
    setChallengeIndex(0);
    setFeedback(null);
    setCompletedChallenge(false);
  };

  return (
    <section>
      <div className="flex items-center justify-between gap-2 px-1">
        <div>
          <h2 className="text-base font-semibold text-[#1A1C16]">
            Arma la red trófica
          </h2>
          <p
            className={`pt-0.5 ${
              isJunior ? 'text-[13px]' : 'text-xs'
            } leading-snug text-[#3C4033]`}
          >
            {isChallengeMode
              ? 'Tocá el escalón correcto para ubicar a cada especie:'
              : 'Relacioná los organismos para entender cómo se alimentan entre sí.'}
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setIsChallengeMode((prev) => !prev);
            resetChallenge();
          }}
          className={`shrink-0 rounded-xl px-3 py-1.5 text-[11px] font-semibold transition-all cursor-pointer border ${
            isChallengeMode
              ? 'bg-[#1A1C16] text-white border-[#1A1C16]'
              : 'bg-[#F2F4E6] text-[#545C1E] border-[#B5C370] hover:bg-[#E4E8C8]'
          }`}
        >
          {isChallengeMode ? 'Ver Mapa' : '🎮 Practicar'}
        </button>
      </div>

      {/* Tarjeta de consigna cuando el Modo Práctica está activo */}
      {isChallengeMode && (
        <div className="mt-2.5 rounded-xl border border-[#B5C370] bg-white p-3 shadow-xs">
          {!completedChallenge ? (
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-xs font-bold text-[#1A1C16]">
                  ¿En qué nivel va: <span className="text-[#7E8B28]">{currentTarget.name}</span>?
                </p>
                <p className="text-[11px] text-[#555A49] mt-0.5">
                  Pista: {currentTarget.clue}
                </p>
              </div>
              <span className="rounded-full bg-[#F2F4E6] px-2.5 py-0.5 text-[10px] font-semibold text-[#687320]">
                {challengeIndex + 1}/{challengeItems.length}
              </span>
            </div>
          ) : (
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs font-bold text-[#545C1E]">
                🌟 ¡Red trófica completada con éxito!
              </p>
              <button
                type="button"
                onClick={resetChallenge}
                className="rounded-lg bg-[#7E8B28] px-2.5 py-1 text-[11px] font-semibold text-white cursor-pointer"
              >
                Jugar de nuevo
              </button>
            </div>
          )}

          {feedback && (
            <p
              className={`mt-1.5 text-[11px] font-medium ${
                feedback.type === 'success' ? 'text-[#687320]' : 'text-red-600'
              }`}
            >
              {feedback.text}
            </p>
          )}
        </div>
      )}

      <div className="relative mt-3 flex flex-col gap-2 px-1">
        {TROPHIC_LEVELS.map((level) => (
          <article
            key={level.id}
            onClick={() => isChallengeMode && handleLevelGuess(level.id)}
            className={`relative flex h-[84px] items-stretch overflow-hidden rounded-xl border border-black/10 shadow-[0_3px_6px_rgba(0,0,0,0.18)] transition-transform ${
              isChallengeMode
                ? 'cursor-pointer hover:scale-[1.01] active:scale-[0.99] ring-2 ring-transparent hover:ring-[#7E8B28]'
                : ''
            }`}
            style={{ backgroundColor: level.background }}
          >
            <div
              className="relative flex w-10 shrink-0 items-center justify-center px-1 text-center text-[9px] font-medium leading-tight text-[#1A1C16]"
              style={{ backgroundColor: level.accent }}
            >
              <span
                className="absolute left-1/2 top-1/2 w-[76px] -translate-x-1/2 -translate-y-1/2 -rotate-90"
                aria-label={level.label}
              >
                {level.displayLabel.map((line) => (
                  <span key={line} className="block whitespace-nowrap">
                    {line}
                  </span>
                ))}
              </span>
            </div>
            <div className="relative z-10 flex min-w-0 flex-1 items-center justify-around gap-1 px-2">
              {level.organisms.map((organism) => (
                <div
                  key={organism.name}
                  className="flex min-w-0 flex-1 flex-col items-center"
                >
                  <img
                    src={organism.image}
                    alt=""
                    className="h-12 w-14 object-contain"
                  />
                  <span className="max-w-full break-words text-center text-[10px] font-semibold leading-tight text-[#1A1C16]">
                    {organism.name}
                  </span>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedLevel(level);
              }}
              aria-label={`Información: ${level.label}`}
              className="absolute right-2 top-2 z-20 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#8D6500] text-[11px] font-bold text-[#8D6500] transition-transform hover:scale-110 cursor-pointer"
            >
              i
            </button>
          </article>
        ))}

        {!isChallengeMode && (
          <svg
            viewBox="0 0 300 276"
            className="pointer-events-none absolute inset-0 h-full w-full"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M92 246C65 218 68 190 82 166"
              stroke="#82921E"
              strokeWidth="2"
              markerEnd="url(#arrow)"
            />
            <path
              d="M150 246C176 218 188 192 198 166"
              stroke="#82921E"
              strokeWidth="2"
              markerEnd="url(#arrow)"
            />
            <path
              d="M228 246C251 218 247 190 232 166"
              stroke="#82921E"
              strokeWidth="2"
              markerEnd="url(#arrow)"
            />
            <path
              d="M123 134C105 106 117 78 145 51"
              stroke="#82921E"
              strokeWidth="2"
              markerEnd="url(#arrow)"
            />
            <path
              d="M226 134C247 106 208 77 155 51"
              stroke="#82921E"
              strokeWidth="2"
              markerEnd="url(#arrow)"
            />
            <defs>
              <marker
                id="arrow"
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="4"
                orient="auto"
              >
                <path d="M0 0 8 4 0 8" fill="#82921E" />
              </marker>
            </defs>
          </svg>
        )}
      </div>

      {selectedLevel && (
        <TrophicInfoModal
          level={selectedLevel}
          isJunior={isJunior}
          onClose={() => setSelectedLevel(null)}
        />
      )}
    </section>
  );
}

export function LibraryPage() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('fichas');
  const [unlockedCharacters] = useState(getUnlockedCharacters);
  const [selectedCard, setSelectedCard] = useState(null);
  const { user, isJunior, toggleMode } = useUserProfile();

  const unlockedCardsCount = useMemo(() => {
    return LIBRARY_CARDS.filter(
      (c) => c.unlocked || (c.unlockStep ?? 1) <= unlockedCharacters
    ).length;
  }, [unlockedCharacters]);

  return (
    <div className="relative flex w-full flex-1 flex-col select-none bg-[#FAF9F5]">
      <main className="flex-1 px-5 pb-28 pt-5">
        <ExplorerProfileHeader
          user={user}
          isJunior={isJunior}
          unlockedCardsCount={unlockedCardsCount}
          totalCardsCount={LIBRARY_CARDS.length}
          unlockedCharacters={unlockedCharacters}
          onToggleMode={toggleMode}
          onGoRegister={() => navigate('/register')}
        />

        <div
          className="mt-3.5 flex overflow-hidden rounded-lg bg-[#C6CBAA]"
          role="tablist"
          aria-label="Secciones de la biblioteca"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeSection === 'fichas'}
            onClick={() => setActiveSection('fichas')}
            className={`flex-1 py-2 text-[11px] font-semibold transition-colors cursor-pointer ${
              activeSection === 'fichas'
                ? 'bg-[#89931D] text-white'
                : 'text-[#1A1C16]'
            }`}
          >
            FICHAS ({unlockedCardsCount}/{LIBRARY_CARDS.length})
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeSection === 'network'}
            onClick={() => setActiveSection('network')}
            className={`flex-1 py-2 text-[11px] font-semibold transition-colors cursor-pointer ${
              activeSection === 'network'
                ? 'bg-[#89931D] text-white'
                : 'text-[#1A1C16]'
            }`}
          >
            RED TRÓFICA
          </button>
        </div>

        <div className="mt-3.5">
          {activeSection === 'fichas' ? (
            <FichasTab
              unlockedCharacters={unlockedCharacters}
              isJunior={isJunior}
              onOpenCard={setSelectedCard}
              onGoScan={() => navigate('/scan')}
            />
          ) : (
            <TrophicNetworkTab isJunior={isJunior} />
          )}
        </div>
      </main>

      <BottomNavbar
        activeTab="library"
        onTabChange={(tabId) => {
          if (tabId === 'home') navigate('/home');
        }}
        onScanQR={() => navigate('/scan')}
        onOpenLibrary={() => navigate('/library')}
      />
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
