import { HOME_DATA } from '../../data/homeData';

export function EmergencyFireModal({ isJunior = false, onClose }) {
  const { fireSafety } = HOME_DATA;
  const steps = isJunior ? fireSafety.juniorSteps : fireSafety.adultSteps;

  return (
    <div
      className="absolute inset-0 z-50 flex items-center justify-center bg-black/65 p-3 backdrop-blur-sm animate-[modal-appear_200ms_ease-out]"
      onClick={onClose}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="fire-modal-title"
        className="relative w-full max-w-[355px] max-h-[84vh] overflow-y-auto rounded-3xl border border-red-300 dark:border-red-900/60 bg-white dark:bg-[#1E2319] p-5 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3.5 top-3.5 rounded-full p-1 text-2xl leading-none text-neutral-700 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer"
          aria-label="Cerrar alerta de incendios"
        >
          ×
        </button>

        {/* Cabecera de Alerta e Índice de Riesgo */}
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 dark:bg-red-950/70 border border-red-300 dark:border-red-700 px-3 py-1 text-xs font-bold text-red-800 dark:text-red-200">
            <span>🔥</span>
            <span>{fireSafety.badgeText}</span>
          </span>
        </div>

        <h2
          id="fire-modal-title"
          className={`${isJunior ? 'text-xl' : 'text-lg'} font-black text-neutral-950 dark:text-neutral-50 leading-tight`}
        >
          {isJunior ? fireSafety.juniorModalTitle : fireSafety.modalTitle}
        </h2>

        <p className="mt-2 text-sm font-medium leading-relaxed text-neutral-800 dark:text-neutral-200">
          {isJunior ? fireSafety.juniorIntro : fireSafety.adultIntro}
        </p>

        {/* Pasos de acción ante principio de incendio (Protocolo PAS) */}
        <div className="fire-modal-pas mt-4 rounded-2xl bg-amber-100 dark:bg-amber-950/70 border-2 border-amber-400 dark:border-amber-600 p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-600 text-white text-xs font-black">
              !
            </span>
            <h3 className="text-xs font-black uppercase tracking-wider text-amber-950 dark:text-amber-200">
              {isJunior ? '¿Qué hacer si ves humo?' : 'Protocolo de Actuación (PAS)'}
            </h3>
          </div>
          <ul className="flex flex-col gap-2.5">
            {steps.map((step, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-sm font-bold leading-snug text-neutral-950 dark:text-amber-100"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-300 dark:bg-amber-800 text-amber-950 dark:text-amber-100 text-xs font-extrabold mt-0.5">
                  {idx + 1}
                </span>
                <span className="flex-1">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Reglas de Prevención Ambiental */}
        <div className="mt-3.5 rounded-2xl bg-[#F2F4E6] dark:bg-[#252D1D] border border-[#CFD79F] dark:border-[#424E33] p-4">
          <h3 className="text-xs font-bold text-[#545C1E] dark:text-[#D3DF83] mb-2 flex items-center gap-1.5">
            <span>🌿</span>
            <span>Cuidado de la Reserva</span>
          </h3>
          <ul className="list-disc pl-4 space-y-1.5 text-xs font-semibold text-neutral-900 dark:text-neutral-100 leading-relaxed">
            {fireSafety.preventionRules.map((rule, idx) => (
              <li key={idx}>
                {rule}
              </li>
            ))}
          </ul>
        </div>

        {/* Contactos Rápidos de Emergencia */}
        <div className="mt-4">
          <p className="text-xs font-bold text-neutral-800 dark:text-neutral-200 mb-2">
            Líneas de emergencia directa:
          </p>
          <div className="grid grid-cols-3 gap-2">
            {fireSafety.emergencyContacts.map((contact) => (
              <a
                key={contact.number}
                href={`tel:${contact.number}`}
                className="flex flex-col items-center justify-center rounded-xl border border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-950/60 py-2.5 px-1.5 text-center transition-colors hover:bg-red-100 active:scale-95"
              >
                <span className="text-sm font-black text-red-700 dark:text-red-300">
                  📞 {contact.number}
                </span>
                <span className="text-[11px] font-bold text-neutral-900 dark:text-neutral-100 leading-tight mt-0.5">
                  {contact.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-4 w-full rounded-xl bg-[#7E8B28] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#6D7821] active:scale-98 cursor-pointer"
        >
          {isJunior ? '¡Entendido, a cuidar el bosque!' : 'Entendido'}
        </button>
      </section>
    </div>
  );
}
