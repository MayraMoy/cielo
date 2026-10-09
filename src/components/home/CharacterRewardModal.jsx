import { GiftBox } from './GiftBox';
import primerPremioImg from '../../assets/primerPremio.png';

export function CharacterRewardModal({ onClose }) {
  return (
    <div
      className="absolute inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="reward-modal-title"
        className="relative w-full max-w-[340px] rounded-3xl border border-[#D1D5DB] bg-white px-6 pb-6 pt-5 text-center shadow-2xl animate-[modal-appear_220ms_ease-out]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-2xl leading-none text-[#4A4E3E] transition-colors hover:bg-black/5"
          aria-label="Cerrar premio"
        >
          ×
        </button>

        <div className="flex justify-center">
          <GiftBox className="w-20 h-20 animate-[gift-bounce_1.2s_ease-in-out_infinite]" />
        </div>
        <h2 id="reward-modal-title" className="mt-2 text-xl font-bold text-[#1A1C16]">
          ¡Felicidades!
        </h2>
        <p className="mt-1 text-sm leading-snug text-[#3C4033]">
          Nuevo personaje desbloqueado en la biblioteca
        </p>

        <div className="mx-auto mt-5 flex w-full max-w-[250px] items-center gap-3 rounded-2xl border border-[#D1D5DB] bg-white p-3 text-left shadow-md">
          <img
            src={primerPremioImg}
            alt="Primer personaje desbloqueado"
            className="h-24 w-20 shrink-0 object-contain"
          />
          <div>
            <p className="text-sm font-semibold text-[#1A1C16]">Primer personaje</p>
            <span className="mt-2 inline-flex rounded-full border border-[#99AB49] bg-[#F2F4E6] px-2.5 py-1 text-[11px] font-medium text-[#545C1E]">
              Personaje 1 de 3
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-5 w-full rounded-xl bg-[#7E8B28] px-4 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#6D7821]"
        >
          ¡Genial!
        </button>
      </section>
    </div>
  );
}
