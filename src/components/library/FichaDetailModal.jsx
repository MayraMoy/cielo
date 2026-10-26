import { OwlMascot } from '../home/OwlMascot';
import { Portal } from '../common/Portal';
import { useLanguage } from '../../hooks/useLanguage';
import { useDismissAnimation } from '../../hooks/useDismissAnimation';

const CloseIcon = () => (
  <svg
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

// Icono de hoja minimalista para Productor
const LeafIcon = () => (
  <svg
    className="h-3.5 w-3.5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 19 2c2 2 2.6 3.5 1.5 9.2A7 7 0 0 1 11 20Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.5 12 13 13 12" />
  </svg>
);

// Icono de huella minimalista para Consumidor / Fauna
const PawIcon = () => (
  <svg
    className="h-3.5 w-3.5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm6 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm-9 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm12 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm-7.5-2c1.4 0 2.5 1.6 2.5 3.5S11.4 19 10 19s-2.5-1.1-2.5-3s1.1-3.5 2.5-3.5Z" />
  </svg>
);

export function FichaDetailModal({ card, isJunior = false, onClose }) {
  const { t } = useLanguage();
  const { isClosing, requestClose } = useDismissAnimation(onClose, 220);

  const description =
    isJunior && card.juniorDescription
      ? card.juniorDescription
      : card.description;
  const contribution =
    isJunior && card.juniorContribution
      ? card.juniorContribution
      : card.contribution;
  const diet = isJunior && card.juniorDiet ? card.juniorDiet : card.diet;

  const isProductor = card.categoryId === 'productor';

  return (
    <Portal>
      <div
        className={`absolute inset-0 z-[70] flex items-end justify-center bg-black/60 backdrop-blur-xs ${
          isClosing
            ? 'animate-[overlay-fade-out_220ms_ease-in_forwards]'
            : 'animate-[overlay-fade-in_200ms_ease-out]'
        }`}
        onClick={requestClose}
      >
        <section
          role="dialog"
          aria-modal="true"
          aria-labelledby="ficha-title"
          className={`relative flex h-auto max-h-[94%] w-full max-w-[390px] flex-col overflow-hidden rounded-t-2xl border border-[var(--surface-card-border)] bg-[var(--surface-card)] shadow-[0_-12px_36px_rgba(0,0,0,0.28)] ${
            isClosing
              ? 'animate-[sheet-slide-out_220ms_cubic-bezier(0.4,0,1,1)_forwards]'
              : 'animate-[sheet-slide-in_320ms_cubic-bezier(0.22,1,0.36,1)]'
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          {/* --- PORTADA SUPERIOR FIJA, AL RAS DE LOS BORDES --- */}
          <div className="relative h-60 w-full shrink-0 overflow-hidden bg-[#171B1D]">
            <img
              src={card.detailImage ?? card.image}
              alt={card.name}
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Degradado inferior para garantizar contraste del texto */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/25 pointer-events-none"
            />

            {/* Tirador del bottom sheet */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-3 z-30 h-1.5 w-11 -translate-x-1/2 rounded-full bg-white/75 shadow-sm"
            />

            {/* Botón de cierre flotante */}
            <button
              type="button"
              onClick={requestClose}
              className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white shadow-md backdrop-blur-md transition-all hover:bg-black/60 active:scale-95 cursor-pointer"
              aria-label={t('library.card.closeAria')}
            >
              <CloseIcon />
            </button>

            {/* Textos superpuestos con alto contraste garantizado */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-5 pb-4 text-left">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/15 px-3 py-0.5 text-xs font-bold text-white shadow-xs backdrop-blur-md">
                {isProductor ? <LeafIcon /> : <PawIcon />}
                <span>{card.category}</span>
              </span>

              <h1
                id="ficha-title"
                className="mt-2 text-2xl font-extrabold leading-tight text-white tracking-tight drop-shadow-md"
              >
                {card.name}
              </h1>

              {!isJunior && card.scientificName && (
                <p className="mt-0.5 text-xs font-semibold italic text-white/90 drop-shadow-md">
                  {card.scientificName}
                </p>
              )}
            </div>
          </div>

          {/* --- CUERPO CON SCROLL INTERNO --- */}
          <div className="flex-1 min-h-0 overflow-y-auto p-5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {/* Descripción */}
            <p className="text-[13px] leading-relaxed text-[var(--text-secondary)]">
              {description}
            </p>

            {/* Bloque 1: Aporte a la Red Trófica / Bosque */}
            <section className="mt-4 flex items-start gap-3 rounded-2xl border border-[var(--surface-card-border)] bg-[var(--surface-step)] p-3.5 shadow-[var(--control-shadow)]">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-[var(--accent-soft-border)] bg-[var(--accent-soft-bg)] text-[var(--brand-olive)]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4.5 w-4.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="5" r="2" />
                  <circle cx="6" cy="17" r="2" />
                  <circle cx="18" cy="17" r="2" />
                  <path d="m11 7-4 8m6-8 4 8M8 17h8" />
                </svg>
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-[13px] font-bold text-[var(--text-primary)]">
                  {isJunior
                    ? t('library.card.helpsForest')
                    : t('library.card.contributesNetwork')}
                </h3>
                <p className="mt-1 text-[13px] leading-relaxed text-[var(--text-secondary)]">
                  {contribution}
                </p>
              </div>
            </section>

            {/* Bloque 2: Alimentación con la Mascota Contenida */}
            <section className="relative mt-3 flex items-start gap-3 rounded-2xl border border-[var(--surface-card-border)] bg-[var(--surface-step)] p-3.5 shadow-[var(--control-shadow)]">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-[var(--accent-soft-border)] bg-[var(--accent-soft-bg)] text-[var(--brand-olive)]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4.5 w-4.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M4 4h16l-2 7H6L4 4Zm2 7v3a6 6 0 0 0 12 0v-3M12 20v-4m-4-2h8" />
                </svg>
              </span>
              <div className="min-w-0 flex-1 pr-12">
                <h3 className="text-[13px] font-bold text-[var(--text-primary)]">
                  {t('library.card.eats')}
                </h3>
                <p className="mt-1 text-[13px] leading-relaxed text-[var(--text-secondary)]">
                  {diet}
                </p>
              </div>

              <div className="absolute bottom-1 right-2 w-[44px] pointer-events-none">
                <OwlMascot className="w-full h-auto" />
              </div>
            </section>
          </div>
        </section>
      </div>
    </Portal>
  );
}
