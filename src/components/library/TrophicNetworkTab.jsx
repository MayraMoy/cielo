import { useMemo, useState } from 'react';
import { TROPHIC_LEVELS } from '../../data/library/trophicLevels';
import { TrophicInfoModal } from './TrophicInfoModal';

export function TrophicNetworkTab({ isJunior = false }) {
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
