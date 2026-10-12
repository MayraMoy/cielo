import { OwlMascot } from './OwlMascot';

export function DidYouKnowCard({ title, icon, description, isJunior = false }) {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 pb-7 shadow-[0_6px_20px_rgba(0,0,0,0.12)] border border-[#D1D5DB] relative overflow-visible transition-all">
      {/* Título con ícono vegetal */}
      <h2
        className={`${
          isJunior ? 'text-[18px]' : 'text-[16px] sm:text-[17px]'
        } font-bold text-[#1A1C16] mb-2.5 flex items-center gap-1.5`}
      >
        <span>{title}</span>
        <span className="text-base select-none">{icon}</span>
      </h2>

      {/* Contenido descriptivo con espacio reservado a la derecha para el búho */}
      <div className="pr-20 sm:pr-24">
        <p
          className={`${
            isJunior ? 'text-[14.5px] font-medium' : 'text-[13px] sm:text-[13.5px] font-normal'
          } leading-relaxed text-[#2B2F25]`}
        >
          {description}
        </p>
      </div>

      {/* Mascota del Búho sobresaliendo en la esquina inferior derecha con las patitas afuera */}
      <div className="absolute -bottom-7 right-2 sm:right-3 w-24 sm:w-26 pointer-events-none drop-shadow-sm transition-transform hover:scale-105">
        <OwlMascot className="w-full h-auto" />
      </div>
    </div>
  );
}
