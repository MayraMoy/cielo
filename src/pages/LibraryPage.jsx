import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { OwlMascot } from '../components/home/OwlMascot';
import { LIBRARY_CARDS, TROPHIC_LEVELS } from '../data/libraryData';
import { getUnlockedCharacters } from '../data/rewardProgress';
import { useUserProfile } from '../hooks/useUserProfile';
import { useAccessibility } from '../hooks/useAccessibility';

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
        className="relative w-full max-w-[355px] rounded-3xl border border-[#E5E7EB] bg-white p-5 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3.5 top-3.5 z-10 p-1 text-2xl leading-none text-[#1A1C16] hover:bg-black/5 rounded-full cursor-pointer"
          aria-label="Cerrar ficha"
        >
          ×
        </button>

        <div className="grid grid-cols-[105px_1fr] items-center gap-3.5 pr-4">
          <img
            src={card.image}
            alt={card.name}
            className="h-28 w-full object-contain"
          />
          <div className="min-w-0">
            <span className="inline-flex items-center gap-1 rounded-full border border-[#B5C370] bg-[#F2F4E6] px-2.5 py-0.5 text-xs font-semibold text-[#687320]">
              {card.category === 'Productor' ? '🌱' : '🐾'} {card.category}
            </span>
            <h2
              id="ficha-title"
              className="mt-1.5 text-xl font-bold leading-tight text-[#1A1C16]"
            >
              {card.name}
            </h2>
            {!isJunior && card.scientificName && (
              <p className="text-xs italic text-[#687320] mt-0.5">
                {card.scientificName}
              </p>
            )}
            <p className="mt-1.5 text-sm leading-relaxed text-[#3C4033]">
              {description}
            </p>
          </div>
        </div>

        <section className="mt-3.5 flex gap-3 rounded-2xl bg-[#F4F8DE] border border-[#CCD69E]/50 p-3.5 shadow-xs">
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
            <h3 className="text-xs font-bold text-[#1A1C16]">
              {isJunior
                ? '¿Cómo ayuda al bosque?'
                : '¿Qué aporta a la red trófica?'}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-[#555A49]">
              {contribution}
            </p>
          </div>
        </section>

        <section className="relative mt-3 flex min-h-[76px] gap-3 overflow-hidden rounded-2xl bg-[#F4F8DE] border border-[#CCD69E]/50 p-3.5 pr-16 shadow-xs">
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
            <h3 className="text-xs font-bold text-[#1A1C16]">
              Se alimenta de...
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-[#555A49]">
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
      className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-[modal-appear_200ms_ease-out]"
      onClick={onClose}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="trophic-info-title"
        className="trophic-modal w-full max-w-[345px] overflow-hidden rounded-3xl border border-[#CCD69E] shadow-2xl"
        style={{ backgroundColor: level.background }}
        onClick={(event) => event.stopPropagation()}
      >
        <header
          className="relative flex min-h-10 items-center justify-center px-10 py-2.5 border-b border-black/10"
          style={{ backgroundColor: level.accent }}
        >
          <h2
            id="trophic-info-title"
            className="text-center text-sm font-black !text-[#11130E]"
          >
            {level.label}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-2xl leading-none !text-[#11130E] hover:bg-black/10 rounded-full cursor-pointer"
            aria-label="Cerrar información"
          >
            ×
          </button>
        </header>

        <div className="grid min-h-[150px] grid-cols-[76px_1fr] items-center gap-3 p-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <img
              src={level.info.illustration[0].image}
              alt={level.info.illustration[0].name}
              className="h-[72px] w-[68px] object-contain drop-shadow-sm"
            />
            {level.info.illustration[1] && (
              <svg viewBox="0 0 64 28" className="h-6 w-14" aria-hidden="true">
                <path
                  d="M58 23C39 24 19 17 7 5"
                  fill="none"
                  stroke="#5F6D15"
                  strokeWidth="2.4"
                />
                <path d="m6 5 10 1-5 8" fill="#5F6D15" />
              </svg>
            )}
            {level.info.illustration[1] && (
              <img
                src={level.info.illustration[1].image}
                alt={level.info.illustration[1].name}
                className="h-[64px] w-[68px] object-contain drop-shadow-sm"
              />
            )}
          </div>
          <div className="flex flex-col justify-center gap-2.5 text-sm font-medium leading-relaxed !text-[#11130E]">
            <p className="!text-[#11130E]">
              {isJunior && level.info.juniorDescription
                ? level.info.juniorDescription
                : level.info.description}
            </p>
            <p className="font-extrabold !text-[#11130E] bg-black/5 p-2 rounded-xl border border-black/5">
              {level.info.example}
            </p>
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
  onGoRegister,
}) {
  const { isLargeText, toggleLargeText } = useAccessibility();

  const rankBadge =
    unlockedCharacters >= 3
      ? '🏅 Guardaparque Maestro'
      : unlockedCharacters >= 2
      ? '🌿 Explorador del Humedal'
      : unlockedCharacters >= 1
      ? '🧭 Explorador Inicial'
      : '🌱 Visitante Curioso';

  return (
    <section className="flex items-center justify-between gap-3 rounded-3xl border border-[#E5E7EB] bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3.5 min-w-0">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F2F4E6] border border-[#CCD69E] text-[#687320]">
          {isJunior ? (
            <svg
              className="w-6 h-6 text-[#687320]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-[#545C1E]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          )}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="text-base font-bold text-[#1A1C16] truncate">
              {user?.fullName || 'Explorador Invitado'}
            </h1>
            <span className="rounded-full bg-[#F2F4E6] border border-[#CFD79F] px-2.5 py-0.5 text-xs font-semibold text-[#545C1E]">
              {unlockedCardsCount}/{totalCardsCount} fichas
            </span>
          </div>
          <p className="text-xs font-semibold text-[#687320] mt-0.5">
            {rankBadge}
          </p>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-xs font-medium text-[#555A49]">
              {isJunior ? 'Guía Junior' : 'Guía Adulto'}
            </span>
            {!user?.fullName && (
              <button
                type="button"
                onClick={onGoRegister}
                className="text-xs font-semibold text-[#7E8B28] underline underline-offset-2 cursor-pointer"
              >
                • Registrarme
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Botón Accesibilidad A+ para agrandar tipografía */}
      <button
        type="button"
        onClick={toggleLargeText}
        className={`shrink-0 inline-flex items-center justify-center rounded-xl border px-2.5 py-1.5 text-xs font-bold shadow-xs active:scale-95 transition-all cursor-pointer ${
          isLargeText
            ? 'border-[#7E8B28] bg-[#7E8B28] text-white'
            : 'border-[#CCD69E] bg-[#F2F4E6] text-[#4E5618] hover:bg-[#E4E8C8]'
        }`}
        aria-label={isLargeText ? 'Desactivar texto agrandado' : 'Activar texto agrandado y remarcado (A+)'}
        title={isLargeText ? 'Modo Lectura Activo (A+)' : 'Agrandar y Remarcar Texto (A+)'}
      >
        <span className="text-[12px] font-extrabold tracking-tight">A+</span>
      </button>
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
  onOpenCard,
  onGoScan,
}) {
  const [lockedHintCard, setLockedHintCard] = useState(null);

  return (
    <div>
      {lockedHintCard && (
        <div className="mb-3.5 flex items-center justify-between gap-2.5 rounded-2xl border border-[#B5C370] bg-[#F2F4E6] p-3.5 text-xs text-[#3C4033] shadow-xs animate-[modal-appear_180ms_ease-out]">
          <div>
            <p className="font-bold text-sm text-[#545C1E]">
              🔒 {lockedHintCard.name} está bloqueada
            </p>
            <p className="text-xs mt-0.5 text-[#555A49]">{lockedHintCard.unlockHint}</p>
          </div>
          <button
            type="button"
            onClick={onGoScan}
            className="shrink-0 rounded-xl bg-[#7E8B28] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#6D7821] cursor-pointer"
          >
            Ir a QR
          </button>
        </div>
      )}

      <div className="grid grid-cols-3 gap-3 px-1 py-1">
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
              className={`relative flex flex-col items-center justify-between rounded-2xl bg-white p-2.5 text-center shadow-xs border transition-transform active:scale-95 cursor-pointer ${
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
                  <span className="absolute right-0.5 top-0.5 rounded-full bg-white/95 p-1 text-[#1A1C16] shadow-xs">
                    <LockIcon />
                  </span>
                )}
              </div>
              <span
                className={`mt-1.5 w-full truncate text-xs font-semibold ${
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
          <h2 className="text-base font-bold text-[#1A1C16]">
            Arma la red trófica
          </h2>
          <p
            className="pt-0.5 text-xs leading-relaxed text-[#3C4033]"
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
          className={`shrink-0 rounded-xl px-3.5 py-2 text-xs font-bold transition-all cursor-pointer border ${
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
        <div className="mt-3 rounded-2xl border border-[#B5C370] bg-white p-3.5 shadow-sm">
          {!completedChallenge ? (
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-xs font-bold text-[#1A1C16]">
                  ¿En qué nivel va: <span className="text-[#7E8B28]">{currentTarget.name}</span>?
                </p>
                <p className="text-xs text-[#555A49] mt-0.5">
                  Pista: {currentTarget.clue}
                </p>
              </div>
              <span className="rounded-full bg-[#F2F4E6] border border-[#CCD69E] px-2.5 py-0.5 text-xs font-semibold text-[#687320]">
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
                className="rounded-xl bg-[#7E8B28] px-3 py-1.5 text-xs font-semibold text-white cursor-pointer"
              >
                Jugar de nuevo
              </button>
            </div>
          )}

          {feedback && (
            <p
              className={`mt-2 text-xs font-semibold ${
                feedback.type === 'success' ? 'text-[#687320]' : 'text-red-600'
              }`}
            >
              {feedback.text}
            </p>
          )}
        </div>
      )}

      <div className="relative mt-3.5 flex flex-col gap-2.5 px-1">
        {TROPHIC_LEVELS.map((level) => (
          <article
            key={level.id}
            onClick={() => isChallengeMode && handleLevelGuess(level.id)}
            className={`trophic-card relative flex h-[88px] items-stretch overflow-hidden rounded-2xl border border-black/10 shadow-sm transition-transform ${
              isChallengeMode
                ? 'cursor-pointer hover:scale-[1.01] active:scale-[0.99] ring-2 ring-transparent hover:ring-[#7E8B28]'
                : ''
            }`}
            style={{ backgroundColor: level.background }}
          >
            <div
              className="relative flex w-10 shrink-0 items-center justify-center px-1 text-center text-[10px] font-bold leading-tight !text-[#11130E]"
              style={{ backgroundColor: level.accent }}
            >
              <span
                className="absolute left-1/2 top-1/2 w-[76px] -translate-x-1/2 -translate-y-1/2 -rotate-90 !text-[#11130E]"
                aria-label={level.label}
              >
                {level.displayLabel.map((line) => (
                  <span key={line} className="block whitespace-nowrap !text-[#11130E]">
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
                  <span className="max-w-full break-words text-center text-xs font-bold leading-tight !text-[#11130E]">
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
              className="absolute right-2.5 top-2.5 z-20 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#8D6500] text-xs font-bold text-[#8D6500] transition-transform hover:scale-110 cursor-pointer"
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
  const { user, isJunior } = useUserProfile();

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
          onGoRegister={() => navigate('/register')}
        />

        <div
          className="mt-4 flex p-1 rounded-2xl bg-[#E4E8C8] border border-[#CCD69E]"
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
                : 'text-[#4E5618] hover:text-[#1A1C16]'
            }`}
          >
            FICHAS ({unlockedCardsCount}/{LIBRARY_CARDS.length})
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeSection === 'network'}
            onClick={() => setActiveSection('network')}
            className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              activeSection === 'network'
                ? 'bg-[#7E8B28] text-white shadow-xs'
                : 'text-[#4E5618] hover:text-[#1A1C16]'
            }`}
          >
            RED TRÓFICA
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
