import { HOME_DATA } from '../../data/homeData';
import { useTheme } from '../../hooks/useTheme';

export function EmergencyFireModal({ isJunior = false, onClose }) {
  const { fireSafety } = HOME_DATA;
  const { isDarkMode } = useTheme();
  const steps = isJunior ? fireSafety.juniorSteps : fireSafety.adultSteps;

  return (
    <div
      className="absolute inset-0 z-50 flex items-center justify-center bg-black/75 p-3 backdrop-blur-sm animate-[modal-appear_200ms_ease-out]"
      onClick={onClose}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="fire-modal-title"
        className={`fire-modal-container relative w-full max-w-[355px] max-h-[86vh] overflow-y-auto rounded-3xl border p-5 shadow-2xl transition-colors ${
          isDarkMode
            ? 'bg-[#1C2117] border-red-900/70 text-[#F4F6ED]'
            : 'bg-white border-red-200 text-[#1A1C16]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className={`absolute right-3.5 top-3.5 rounded-full p-1 text-2xl leading-none transition-colors cursor-pointer ${
            isDarkMode
              ? 'text-white/80 hover:text-white hover:bg-white/10'
              : 'text-neutral-700 hover:text-black hover:bg-black/5'
          }`}
          aria-label="Cerrar alerta de incendios"
        >
          ×
        </button>

        {/* Cabecera de Alerta e Índice de Riesgo */}
        <div className="flex items-center gap-2 mb-2">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold ${
              isDarkMode
                ? 'bg-red-950/80 border-red-600/80 text-red-200'
                : 'bg-red-100 border-red-300 text-red-800'
            }`}
          >
            <span>🔥</span>
            <span>{fireSafety.badgeText}</span>
          </span>
        </div>

        <h2
          id="fire-modal-title"
          className={`${isJunior ? 'text-xl' : 'text-lg'} font-black leading-tight mt-1 ${
            isDarkMode ? 'text-white' : 'text-neutral-950'
          }`}
        >
          {isJunior ? fireSafety.juniorModalTitle : fireSafety.modalTitle}
        </h2>

        <p
          className={`mt-2 text-sm font-medium leading-relaxed ${
            isDarkMode ? 'text-[#DDE2D3]' : 'text-neutral-800'
          }`}
        >
          {isJunior ? fireSafety.juniorIntro : fireSafety.adultIntro}
        </p>

        {/* Pasos de acción ante principio de incendio (Protocolo PAS) */}
        <div
          className={`fire-modal-pas mt-4 rounded-2xl border-2 p-4 shadow-sm transition-colors ${
            isDarkMode
              ? 'bg-[#2D1D10] border-amber-500/90'
              : 'bg-amber-100 border-amber-400'
          }`}
        >
          <div className="flex items-center gap-2 mb-3">
            <span
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-black ${
                isDarkMode ? 'bg-amber-400 text-black' : 'bg-amber-600 text-white'
              }`}
            >
              !
            </span>
            <h3
              className={`text-xs font-black uppercase tracking-wider ${
                isDarkMode ? 'text-amber-300' : 'text-amber-950'
              }`}
            >
              {isJunior ? '¿Qué hacer si ves humo?' : 'Protocolo de Actuación (PAS)'}
            </h3>
          </div>
          <ul className="flex flex-col gap-2.5">
            {steps.map((step, idx) => (
              <li
                key={idx}
                className={`flex items-start gap-2.5 text-sm font-bold leading-snug ${
                  isDarkMode ? 'text-amber-50' : 'text-neutral-950'
                }`}
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-black mt-0.5 ${
                    isDarkMode
                      ? 'bg-amber-400 text-black'
                      : 'bg-amber-300 text-amber-950'
                  }`}
                >
                  {idx + 1}
                </span>
                <span className="flex-1">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Reglas de Prevención Ambiental */}
        <div
          className={`fire-prevention-box mt-3.5 rounded-2xl border p-4 transition-colors ${
            isDarkMode
              ? 'bg-[#22291B] border-[#424E33]'
              : 'bg-[#F2F4E6] border-[#CFD79F]'
          }`}
        >
          <h3
            className={`text-xs font-bold mb-2 flex items-center gap-1.5 ${
              isDarkMode ? 'text-[#DDEB7A]' : 'text-[#545C1E]'
            }`}
          >
            <span>🌿</span>
            <span>Cuidado de la Reserva</span>
          </h3>
          <ul
            className={`list-disc pl-4 space-y-1.5 text-xs font-semibold leading-relaxed ${
              isDarkMode ? 'text-[#F4F6ED]' : 'text-neutral-900'
            }`}
          >
            {fireSafety.preventionRules.map((rule, idx) => (
              <li key={idx}>{rule}</li>
            ))}
          </ul>
        </div>

        {/* Contactos Rápidos de Emergencia */}
        <div className="mt-4">
          <p
            className={`text-xs font-bold mb-2 ${
              isDarkMode ? 'text-[#DDE2D3]' : 'text-neutral-800'
            }`}
          >
            Líneas de emergencia directa:
          </p>
          <div className="grid grid-cols-3 gap-2">
            {fireSafety.emergencyContacts.map((contact) => (
              <a
                key={contact.number}
                href={`tel:${contact.number}`}
                className={`fire-contact-card flex flex-col items-center justify-center rounded-xl border py-2.5 px-1.5 text-center transition-all hover:scale-[1.02] active:scale-95 ${
                  isDarkMode
                    ? 'bg-red-950/70 border-red-700/80 hover:bg-red-900/80'
                    : 'bg-red-50 border-red-300 hover:bg-red-100'
                }`}
              >
                <span
                  className={`text-sm font-black ${
                    isDarkMode ? 'text-red-300' : 'text-red-700'
                  }`}
                >
                  📞 {contact.number}
                </span>
                <span
                  className={`text-[11px] font-bold leading-tight mt-0.5 ${
                    isDarkMode ? 'text-white' : 'text-neutral-900'
                  }`}
                >
                  {contact.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-4 w-full rounded-xl bg-[#7E8B28] px-4 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#6D7821] active:scale-98 cursor-pointer"
        >
          {isJunior ? '¡Entendido, a cuidar el bosque!' : 'Entendido'}
        </button>
      </section>
    </div>
  );
}
