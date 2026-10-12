import { HOME_DATA } from '../../data/homeData';

export function EmergencyFireModal({ isJunior = false, onClose }) {
  const { fireSafety } = HOME_DATA;
  const steps = isJunior ? fireSafety.juniorSteps : fireSafety.adultSteps;

  return (
    <div
      className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 p-3 backdrop-blur-sm"
      onClick={onClose}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="fire-modal-title"
        className="relative w-full max-w-[355px] max-h-[82vh] overflow-y-auto rounded-3xl border border-red-200 bg-white p-5 shadow-2xl animate-[modal-appear_220ms_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3.5 top-3.5 rounded-full p-1 text-2xl leading-none text-[#4A4E3E] hover:bg-black/5 cursor-pointer"
          aria-label="Cerrar alerta de incendios"
        >
          ×
        </button>

        {/* Cabecera de Alerta e Índice de Riesgo */}
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 border border-red-300 px-3 py-1 text-xs font-semibold text-red-800">
            <span>🔥</span>
            <span>{fireSafety.badgeText}</span>
          </span>
        </div>

        <h2
          id="fire-modal-title"
          className={`${isJunior ? 'text-xl' : 'text-lg'} font-bold text-[#1A1C16] leading-tight`}
        >
          {isJunior ? fireSafety.juniorModalTitle : fireSafety.modalTitle}
        </h2>

        <p
          className={`mt-1.5 ${
            isJunior ? 'text-[13px]' : 'text-xs'
          } leading-relaxed text-[#3C4033]`}
        >
          {isJunior ? fireSafety.juniorIntro : fireSafety.adultIntro}
        </p>

        {/* Pasos de acción ante principio de incendio */}
        <div className="mt-3.5 rounded-2xl bg-amber-50/90 border border-amber-200 p-3.5">
          <h3 className="text-xs font-bold uppercase tracking-wide text-amber-900 mb-2">
            {isJunior ? '¿Qué hacer si ves humo?' : 'Protocolo de Actuación (PAS)'}
          </h3>
          <ul className="flex flex-col gap-2">
            {steps.map((step, idx) => (
              <li
                key={idx}
                className={`${
                  isJunior ? 'text-[13px] font-medium' : 'text-[11.5px]'
                } leading-snug text-[#2B2F25]`}
              >
                {step}
              </li>
            ))}
          </ul>
        </div>

        {/* Reglas de Prevención Ambiental */}
        <div className="mt-3 rounded-2xl bg-[#F2F4E6] border border-[#CFD79F] p-3">
          <h3 className="text-xs font-bold text-[#545C1E] mb-1.5">
            🌿 Cuidado de la Reserva
          </h3>
          <ul className="list-disc pl-4 space-y-1">
            {fireSafety.preventionRules.map((rule, idx) => (
              <li
                key={idx}
                className={`${
                  isJunior ? 'text-xs' : 'text-[11px]'
                } text-[#3C4033] leading-snug`}
              >
                {rule}
              </li>
            ))}
          </ul>
        </div>

        {/* Contactos Rápidos de Emergencia */}
        <div className="mt-3.5">
          <p className="text-[11px] font-semibold text-[#555A49] mb-2">
            Líneas de emergencia directa:
          </p>
          <div className="grid grid-cols-3 gap-2">
            {fireSafety.emergencyContacts.map((contact) => (
              <a
                key={contact.number}
                href={`tel:${contact.number}`}
                className="flex flex-col items-center justify-center rounded-xl border border-red-200 bg-red-50/70 py-2 px-1 text-center transition-colors hover:bg-red-100"
              >
                <span className="text-sm font-bold text-red-700">
                  📞 {contact.number}
                </span>
                <span className="text-[10px] font-medium text-[#3C4033] leading-tight mt-0.5">
                  {contact.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-4 w-full rounded-xl bg-[#7E8B28] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#6D7821] cursor-pointer"
        >
          {isJunior ? '¡Entendido, a cuidar el bosque!' : 'Entendido'}
        </button>
      </section>
    </div>
  );
}
