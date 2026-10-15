import { Portal } from '../common/Portal';
import { useDismissAnimation } from '../../hooks/useDismissAnimation';

export function TrophicInfoModal({ level, isJunior = false, onClose }) {
  const { isClosing, requestClose } = useDismissAnimation(onClose, 200);

  return (
    <Portal>
      <div
        className={`absolute inset-0 z-[70] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm ${
          isClosing
            ? 'animate-[overlay-fade-out_200ms_ease-in_forwards]'
            : 'animate-[overlay-fade-in_160ms_ease-out]'
        }`}
        onClick={requestClose}
      >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="trophic-info-title"
        className={`trophic-modal w-full max-w-[345px] overflow-hidden rounded-3xl border border-[#CCD69E] shadow-2xl ${
          isClosing
            ? 'animate-[modal-disappear_180ms_ease-in_forwards]'
            : 'animate-[modal-appear_200ms_ease-out]'
        }`}
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
            onClick={requestClose}
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
    </Portal>
  );
}
