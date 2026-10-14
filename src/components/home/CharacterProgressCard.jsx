import { GiftBox } from './GiftBox';

export function CharacterProgressCard({
  title,
  buttonText,
  unlockedCount = 0,
  openedRewards = [],
  onOpenReward,
  onStartGame,
}) {
  const totalSteps = 3;

  return (
    <div className="bg-[#F7F4EE] dark:bg-[#20251B] rounded-[28px] p-4 pb-3.5 shadow-[0_10px_24px_rgba(38,44,19,0.05)] dark:shadow-[0_10px_24px_rgba(0,0,0,0.22)] border border-[#E7E4D8] dark:border-[#3D4633] transition-all font-['Poppins']">
      <h2 className="text-[17px] sm:text-[18px] font-semibold text-[#1A1C16] dark:text-[#F4F6ED] text-left leading-tight mb-4 tracking-[-0.02em]">
        {title}
      </h2>

      <div
        className="relative w-full py-3 mt-1 mb-4"
        role="progressbar"
        aria-label="Personajes desbloqueados"
        aria-valuemin={0}
        aria-valuemax={totalSteps}
        aria-valuenow={Math.min(unlockedCount, totalSteps)}
      >
        <div className="absolute left-[15%] right-[15%] bottom-1 h-1 bg-[#D8D4CA] dark:bg-[#46503B] rounded-full z-0" />
        <div
          className="absolute left-[15%] bottom-1 h-1 bg-[#687320] dark:bg-[#A4B544] rounded-full z-0 transition-[width] duration-700"
          style={{ width: `${(Math.min(unlockedCount, totalSteps) / totalSteps) * 70}%` }}
        />

        <div className="relative z-10 flex items-center justify-between w-full px-2">
          {Array.from({ length: totalSteps }, (_, index) => {
            const isUnlocked = index < unlockedCount;
            const isOpened = openedRewards.includes(index);

            return (
              <button
                key={index}
                type="button"
                onClick={() => isUnlocked && onOpenReward(index)}
                disabled={!isUnlocked}
                aria-label={
                  isUnlocked
                    ? isOpened
                      ? `Ver premio ${index + 1} reclamado`
                      : `Abrir premio ${index + 1}`
                    : `Premio ${index + 1} bloqueado`
                }
                className={`rounded-full transition-transform ${isUnlocked ? 'cursor-pointer hover:scale-110 focus-visible:outline-2 focus-visible:outline-[#687320] dark:focus-visible:outline-[#C5D76A]' : 'cursor-not-allowed opacity-50'}`}
              >
                <GiftBox
                  isOpen={isOpened}
                  className={`w-14 h-14 sm:w-16 sm:h-16 ${isUnlocked && !isOpened ? 'animate-[gift-bounce_1.8s_ease-in-out_infinite]' : ''}`}
                />
              </button>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        onClick={onStartGame}
        className="w-full bg-[#687320] hover:bg-[#59631B] dark:bg-[#758326] dark:hover:bg-[#859435] text-white text-[14px] font-bold px-5 py-3 rounded-[18px] shadow-[0_8px_16px_rgba(126,139,40,0.18)] transition-all duration-200 active:scale-[0.98] cursor-pointer"
      >
        {buttonText}
      </button>
    </div>
  );
}
