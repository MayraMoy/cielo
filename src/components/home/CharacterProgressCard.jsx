import { GiftBox } from './GiftBox';

export function CharacterProgressCard({
  title,
  buttonText,
  unlockedCount = 0,
  onOpenReward,
  onStartGame,
}) {
  const totalSteps = 3;

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-[0_6px_20px_rgba(0,0,0,0.12)] border border-[#D1D5DB] transition-all">
      {/* Título de la tarjeta */}
      <h2 className="text-[15px] sm:text-[16px] font-medium text-[#1A1C16] mb-4">
        {title}
      </h2>

      {/* Barra de progreso con 3 regalos */}
      <div
        className="relative w-full py-3 my-2 flex items-center justify-between"
        role="progressbar"
        aria-label="Personajes desbloqueados"
        aria-valuemin={0}
        aria-valuemax={totalSteps}
        aria-valuenow={Math.min(unlockedCount, totalSteps)}
      >
        {/* Barra de progreso de personajes */}
        <div className="absolute left-[16.6667%] right-[16.6667%] top-1/2 -translate-y-1/2 h-2.5 bg-[#D1D5DB] rounded-full z-0" />
        <div
          className="absolute left-[16.6667%] top-1/2 -translate-y-1/2 h-2.5 bg-[#7E8B28] rounded-full z-0 transition-[width] duration-700"
          style={{ width: `${(Math.min(unlockedCount, totalSteps) / totalSteps) * (2 / 3) * 100}%` }}
        />

        {/* Premios desbloqueados y pendientes */}
        <div className="relative z-10 flex items-center justify-around w-full px-2">
          {Array.from({ length: totalSteps }, (_, index) => {
            const isUnlocked = index < unlockedCount;

            return (
              <button
                key={index}
                type="button"
                onClick={() => isUnlocked && onOpenReward(index)}
                disabled={!isUnlocked}
                aria-label={isUnlocked ? `Abrir premio ${index + 1}` : `Premio ${index + 1} bloqueado`}
                className={`rounded-full transition-transform ${isUnlocked ? 'cursor-pointer hover:scale-110 focus-visible:outline-2 focus-visible:outline-[#7E8B28]' : 'cursor-not-allowed opacity-50'}`}
              >
                <GiftBox className={`w-14 h-14 sm:w-16 sm:h-16 ${isUnlocked ? 'animate-[gift-bounce_1.8s_ease-in-out_infinite]' : ''}`} />
              </button>
            );
          })}
        </div>
      </div>

      {/* Botón de acción alineado a la derecha */}
      <div className="flex justify-end mt-4">
        <button
          type="button"
          onClick={onStartGame}
          className="bg-[#7E8B28] hover:bg-[#6D7821] text-white text-[13px] sm:text-sm font-medium px-5 py-2.5 rounded-lg shadow-sm transition-all duration-200 active:scale-[0.98] cursor-pointer"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
