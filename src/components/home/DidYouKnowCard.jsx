import { OwlMascot } from './OwlMascot';

export function DidYouKnowCard({ title, icon, description }) {
  return (
    <div className="bg-white rounded-3xl p-5 sm:p-6 pb-8 shadow-[0_6px_20px_rgba(0,0,0,0.08)] border border-[#E5E7EB] relative overflow-visible transition-all font-['Poppins']">
      {/* Título unificado */}
      <h2 className="text-[17px] sm:text-[18px] font-bold text-[#1A1C16] mb-2.5 flex items-center gap-1.5">
        <span>{title}</span>
        <span className="text-lg select-none">{icon}</span>
      </h2>

      {/* Contenido descriptivo con tipografía más grande para lectura en senderos */}
      <div className="pr-20 sm:pr-24">
        <p className="text-[14.5px] leading-relaxed text-[#2B2F25] font-normal">
          {description}
        </p>
      </div>

      {/* Mascota del Búho */}
      <div className="absolute -bottom-6 right-2 sm:right-3 w-24 sm:w-26 pointer-events-none drop-shadow-sm transition-transform hover:scale-105">
        <OwlMascot className="w-full h-auto" />
      </div>
    </div>
  );
}
