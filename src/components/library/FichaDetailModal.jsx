import { OwlMascot } from '../home/OwlMascot';

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
  const description =
    isJunior && card.juniorDescription
      ? card.juniorDescription
      : card.description;
  const contribution =
    isJunior && card.juniorContribution
      ? card.juniorContribution
      : card.contribution;
  const diet = isJunior && card.juniorDiet ? card.juniorDiet : card.diet;

  const isProductor = card.category === 'Productor';

  return (
    <div
      className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs animate-[modal-appear_200ms_ease-out]"
      onClick={onClose}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="ficha-title"
        className="relative w-full max-w-[340px] overflow-hidden rounded-3xl border border-[#E5E7EB] dark:border-[#38402D] bg-white dark:bg-[#1A1F15] shadow-2xl transition-all"
        onClick={(event) => event.stopPropagation()}
      >
        {/* --- PORTADA SUPERIOR CON INFORMACIÓN SUPERPUESTA Y CAPA OSCURA --- */}
        <div className="relative h-48 w-full bg-[#1A1C16]">
          {/* Imagen Hero con opacidad controlada para oscurecerla */}
          <img
            src={card.detailImage ?? card.image}
            alt={card.name}
            className="h-full w-full object-cover opacity-75"
          />

          {/* Capa de oscurecimiento general y degradado inferior */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 pointer-events-none"
          />

          {/* Botón de cierre flotante */}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white shadow-md backdrop-blur-md transition-all hover:bg-black/60 active:scale-95 cursor-pointer"
            aria-label="Cerrar ficha"
          >
            <CloseIcon />
          </button>

          {/* Textos superpuestos con alto contraste garantizado */}
          <div className="absolute inset-x-0 bottom-0 z-10 p-4.5 pb-3.5 text-left">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/15 px-3 py-0.5 text-xs font-bold text-white shadow-xs backdrop-blur-md">
              {isProductor ? <LeafIcon /> : <PawIcon />}
              <span>{card.category}</span>
            </span>

            <h1
              id="ficha-title"
              className="mt-2 text-xl font-extrabold leading-tight text-white tracking-tight drop-shadow-md"
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

        {/* --- CUERPO DEL MODAL --- */}
        <div className="p-4.5">
          {/* Descripción */}
          <p className="text-xs leading-relaxed text-[#434837] dark:text-[#D1D8C5]">
            {description}
          </p>

          {/* Bloque 1: Aporte a la Red Trófica / Bosque */}
          <section className="mt-3.5 flex items-start gap-3 rounded-2xl border border-[#DCE3B5] dark:border-[#3E492D] bg-[#F7F9EE] dark:bg-[#232A1C] p-3 shadow-2xs">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#E2EA81]/40 dark:bg-[#344023] border border-[#CBD598] dark:border-[#4B5A34] text-[#545C1E] dark:text-[#DDEB7A]">
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
              <h3 className="text-xs font-bold text-[#1A1C16] dark:text-[#F4F6ED]">
                {isJunior
                  ? '¿Cómo ayuda al bosque?'
                  : '¿Qué aporta a la red trófica?'}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-[#4A503D] dark:text-[#C5CEB8]">
                {contribution}
              </p>
            </div>
          </section>

          {/* Bloque 2: Alimentación con la Mascota Contenida */}
          <section className="relative mt-2.5 flex items-start gap-3 rounded-2xl border border-[#DCE3B5] dark:border-[#3E492D] bg-[#F7F9EE] dark:bg-[#232A1C] p-3 shadow-2xs">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#E2EA81]/40 dark:bg-[#344023] border border-[#CBD598] dark:border-[#4B5A34] text-[#545C1E] dark:text-[#DDEB7A]">
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
              <h3 className="text-xs font-bold text-[#1A1C16] dark:text-[#F4F6ED]">
                Se alimenta de...
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-[#4A503D] dark:text-[#C5CEB8]">
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
  );
}