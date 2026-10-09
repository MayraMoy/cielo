import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BottomNavbar } from '../components/common/BottomNavbar';
import { OwlMascot } from '../components/home/OwlMascot';
import { LIBRARY_CARDS, TROPHIC_LEVELS } from '../data/libraryData';
import { getUnlockedCharacters } from '../data/rewardProgress';

function FichaDetailModal({ card, onClose }) {
  return (
    <div
      className="absolute inset-0 z-50 flex items-center justify-center bg-black/55 p-3 backdrop-blur-sm"
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
          className="absolute right-3 top-2 z-10 p-1 text-2xl leading-none text-[#1A1C16]"
          aria-label="Cerrar ficha"
        >
          ×
        </button>

        <div className="grid grid-cols-[102px_1fr] items-center gap-3 pr-5">
          <img src={card.image} alt={card.name} className="h-32 w-full object-contain" />
          <div className="min-w-0">
            <span className="inline-flex items-center gap-1 rounded-full border border-[#B5C370] bg-[#F2F4E6] px-3 py-1 text-xs font-medium text-[#687320]">
              {card.category === 'Productor' ? (
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M20 4C11 4 5 8 5 14a6 6 0 0 0 6 6c6 0 9-7 9-16Z" />
                  <path d="M4 21c3-5 6-8 12-12" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M12 3v4m0 0-3-3m3 3 3-3M5 10h14v3a7 7 0 0 1-14 0v-3Zm3 10h8m-4-1v2" />
                </svg>
              )}
              {card.category}
            </span>
            <h2 id="ficha-title" className="mt-2 text-lg font-semibold leading-tight text-[#1A1C16]">
              {card.name}
            </h2>
            <p className="mt-1 text-[11px] leading-snug text-[#3C4033]">
              {card.description}
            </p>
          </div>
        </div>

        <section className="mt-3 flex gap-3 rounded-xl bg-[#F4F8DE] p-3 shadow-[0_3px_5px_rgba(0,0,0,0.18)]">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#89931D] text-[#7E8B28]">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <circle cx="12" cy="5" r="2" />
              <circle cx="6" cy="17" r="2" />
              <circle cx="18" cy="17" r="2" />
              <path d="m11 7-4 8m6-8 4 8M8 17h8" />
            </svg>
          </span>
          <div>
            <h3 className="text-[11px] font-semibold text-[#1A1C16]">¿Qué aporta a la red trófica?</h3>
            <p className="mt-1 text-[10px] leading-snug text-[#555A49]">{card.contribution}</p>
          </div>
        </section>

        <section className="relative mt-3 flex min-h-[76px] gap-3 overflow-hidden rounded-xl bg-[#F4F8DE] p-3 pr-16 shadow-[0_3px_5px_rgba(0,0,0,0.18)]">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#89931D] text-[#7E8B28]">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M4 4h16l-2 7H6L4 4Zm2 7v3a6 6 0 0 0 12 0v-3M12 20v-4m-4-2h8" />
            </svg>
          </span>
          <div>
            <h3 className="text-[11px] font-semibold text-[#1A1C16]">Se alimenta de...</h3>
            <p className="mt-1 text-[10px] leading-snug text-[#555A49]">{card.diet}</p>
          </div>
          <OwlMascot className="absolute -bottom-2 -right-1 w-[62px]" />
        </section>
      </section>
    </div>
  );
}

function TrophicInfoModal({ level, onClose }) {
  return (
    <div
      className="absolute inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm"
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
          <h2 id="trophic-info-title" className="text-center text-sm font-bold text-[#1A1C16]">
            {level.label}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-2xl leading-none text-[#1A1C16]"
            aria-label="Cerrar información"
          >
            ×
          </button>
        </header>

        <div className="grid min-h-[150px] grid-cols-[72px_1fr] items-center gap-2 p-3">
          <div className="flex flex-col items-center justify-center gap-2">
            <img
              src={level.info.illustration[0].image}
              alt={level.info.illustration[0].name}
              className="h-[76px] w-[68px] object-contain"
            />
            {level.info.illustration[1] && (
              <svg viewBox="0 0 64 28" className="h-6 w-14" aria-hidden="true">
                <path d="M58 23C39 24 19 17 7 5" fill="none" stroke="#82921E" strokeWidth="2" />
                <path d="m6 5 10 1-5 8" fill="#82921E" />
              </svg>
            )}
            {level.info.illustration[1] && (
              <img
                src={level.info.illustration[1].image}
                alt={level.info.illustration[1].name}
                className="h-[68px] w-[72px] object-contain"
              />
            )}
          </div>
          <div className="flex flex-col justify-center gap-3 text-[10px] leading-snug text-[#1A1C16]">
            <p>{level.info.description}</p>
            <p className="font-medium">{level.info.example}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function LoginPrompt() {
  return (
    <section className="flex items-center gap-4 rounded-xl border border-[#D1D5DB] bg-white px-5 py-4 shadow-[0_4px_12px_rgba(0,0,0,0.12)]">
      <svg
        viewBox="0 0 24 24"
        className="h-9 w-9 shrink-0 text-[#1A1C16]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="9" r="3" />
        <path d="M5.8 18.5c1.3-2.5 3.3-3.7 6.2-3.7s4.9 1.2 6.2 3.7" />
      </svg>
      <div className="min-w-0">
        <h1 className="text-sm font-medium text-[#1A1C16]">Inicia sesión</h1>
        <p className="text-xs text-[#3C4033]">Guarda tu progreso</p>
        <button
          type="button"
          className="mt-1 inline-flex items-center gap-1.5 text-[11px] text-[#555A49] underline decoration-[#8A8F7B] underline-offset-2 transition-colors hover:text-[#1A1C16]"
        >
          <span className="font-semibold text-[#4285F4]" aria-hidden="true">G</span>
          Continúa con Google
        </button>
      </div>
    </section>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <rect x="5" y="10" width="14" height="11" rx="1.5" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
    </svg>
  );
}

function FichasTab({ unlockedCharacters, onOpenCard }) {
  return (
    <div className="grid grid-cols-3 gap-x-3 gap-y-4 px-1 py-2">
      {LIBRARY_CARDS.map((card) => {
        const isUnlocked = card.unlocked || (card.requiresFirstReward && unlockedCharacters > 0);

        return (
        <button
          key={card.id}
          type="button"
          onClick={() => isUnlocked && onOpenCard(card)}
          disabled={!isUnlocked}
          aria-label={`${card.name}${isUnlocked ? ', abrir ficha' : ', bloqueada'}`}
          className="relative flex aspect-square w-full items-center justify-center rounded-xl bg-white p-2 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7E8B28] disabled:cursor-not-allowed"
        >
          <img
            src={card.image}
            alt={card.name}
            className={`h-full w-full object-contain ${isUnlocked ? '' : 'grayscale opacity-60'}`}
          />
          {!isUnlocked && (
            <span className="absolute right-1 top-1 rounded-full bg-white/90 p-1 text-[#1A1C16]">
              <LockIcon />
            </span>
          )}
        </button>
        );
      })}
    </div>
  );
}

function TrophicNetworkTab() {
  const [selectedLevel, setSelectedLevel] = useState(null);

  return (
    <section>
      <h2 className="px-2 text-base font-semibold text-[#1A1C16]">Arma la red trófica</h2>
      <p className="px-2 pt-1 text-[13px] leading-snug text-[#3C4033]">
        Relacioná los organismos para entender cómo se alimentan entre sí.
      </p>
      <div className="relative mt-4 flex flex-col gap-2 px-1">
        {TROPHIC_LEVELS.map((level) => (
          <article
            key={level.id}
            className="relative flex h-[84px] items-stretch overflow-hidden rounded-xl border border-black/10 shadow-[0_3px_6px_rgba(0,0,0,0.2)]"
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
                  <span key={line} className="block whitespace-nowrap">{line}</span>
                ))}
              </span>
            </div>
            <div className="relative z-10 flex min-w-0 flex-1 items-center justify-around gap-1 px-2">
              {level.organisms.map((organism) => (
                <div key={organism.name} className="flex min-w-0 flex-1 flex-col items-center">
                  <img src={organism.image} alt="" className="h-12 w-14 object-contain" />
                  <span className="max-w-full break-words text-center text-[9px] font-medium leading-tight text-[#1A1C16]">{organism.name}</span>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setSelectedLevel(level)}
              aria-label={`Información: ${level.label}`}
              className="absolute right-2 top-2 z-20 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#8D6500] text-[11px] font-bold text-[#8D6500] transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8D6500]"
            >
              i
            </button>
          </article>
        ))}
        <svg
          viewBox="0 0 300 276"
          className="pointer-events-none absolute inset-0 h-full w-full"
          fill="none"
          aria-hidden="true"
        >
          <path d="M92 246C65 218 68 190 82 166" stroke="#82921E" strokeWidth="2" markerEnd="url(#arrow)" />
          <path d="M150 246C176 218 188 192 198 166" stroke="#82921E" strokeWidth="2" markerEnd="url(#arrow)" />
          <path d="M228 246C251 218 247 190 232 166" stroke="#82921E" strokeWidth="2" markerEnd="url(#arrow)" />
          <path d="M123 134C105 106 117 78 145 51" stroke="#82921E" strokeWidth="2" markerEnd="url(#arrow)" />
          <path d="M226 134C247 106 208 77 155 51" stroke="#82921E" strokeWidth="2" markerEnd="url(#arrow)" />
          <defs>
            <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0 0 8 4 0 8" fill="#82921E" />
            </marker>
          </defs>
        </svg>
      </div>
      {selectedLevel && (
        <TrophicInfoModal level={selectedLevel} onClose={() => setSelectedLevel(null)} />
      )}
    </section>
  );
}

export function LibraryPage() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('fichas');
  const [unlockedCharacters] = useState(getUnlockedCharacters);
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="relative flex w-full flex-1 flex-col select-none bg-[#FAF9F5]">
      <main className="flex-1 px-5 pb-28 pt-8">
        <LoginPrompt />

        <div className="mt-4 flex overflow-hidden rounded-md bg-[#C6CBAA]" role="tablist" aria-label="Secciones de la biblioteca">
          <button
            type="button"
            role="tab"
            aria-selected={activeSection === 'fichas'}
            onClick={() => setActiveSection('fichas')}
            className={`flex-1 py-2 text-[10px] font-semibold transition-colors ${activeSection === 'fichas' ? 'bg-[#89931D] text-white' : 'text-[#1A1C16]'}`}
          >
            FICHAS
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeSection === 'network'}
            onClick={() => setActiveSection('network')}
            className={`flex-1 py-2 text-[10px] font-semibold transition-colors ${activeSection === 'network' ? 'bg-[#89931D] text-white' : 'text-[#1A1C16]'}`}
          >
            RED TRÓFICA
          </button>
        </div>

        <div className="mt-4">
          {activeSection === 'fichas' ? (
            <FichasTab
              unlockedCharacters={unlockedCharacters}
              onOpenCard={setSelectedCard}
            />
          ) : (
            <TrophicNetworkTab />
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
        <FichaDetailModal card={selectedCard} onClose={() => setSelectedCard(null)} />
      )}
    </div>
  );
}
