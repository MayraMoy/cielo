import { GiftBox } from '../home/GiftBox';
import { TRIVIA_DATA } from '../../data/triviaData';

export function TriviaCompletedCard({
  score,
  totalQuestions,
  unlockedTotal = 1,
  isJunior = false,
  onGoHome,
  onRestart,
}) {
  const { reward } = TRIVIA_DATA;
  const hasEarnedReward = score >= TRIVIA_DATA.minimumCorrectAnswers;

  return (
    <div className="w-full max-w-[350px] bg-white rounded-3xl p-6 shadow-[0_6px_20px_rgba(0,0,0,0.08)] border border-[#E5E7EB] flex flex-col items-center text-center gap-4 animate-[modal-appear_220ms_ease-out] font-['Poppins']">
      {/* Icono de regalo animado */}
      {hasEarnedReward && (
        <div className="transform hover:scale-110 transition-transform my-1">
          <GiftBox className="w-20 h-20 animate-[gift-bounce_1.2s_ease-in-out_infinite]" />
        </div>
      )}

      <div>
        {hasEarnedReward && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F2F4E6] text-[#687320] border border-[#CFD79F] mb-2">
            <span>🎉</span>
            <span>{unlockedTotal}/3 Regalos desbloqueados</span>
          </span>
        )}
        <h2 className="text-[22px] sm:text-[24px] font-bold text-[#1A1C16] tracking-tight">
          {hasEarnedReward
            ? isJunior
              ? reward.juniorTitle
              : reward.title
            : '¡Inténtalo de nuevo!'}
        </h2>
        <p className="text-[13px] text-[#555A49] mt-1 font-medium">
          Acertaste {score} de {totalQuestions} preguntas.
        </p>
      </div>

      <p className="text-[14px] leading-relaxed text-[#2B2F25] bg-[#FAF9F5] p-4 rounded-2xl border border-[#E5E7EB]">
        {hasEarnedReward
          ? isJunior
            ? reward.juniorMessage
            : reward.message
          : `Necesitas acertar al menos ${TRIVIA_DATA.minimumCorrectAnswers} de ${totalQuestions} preguntas para ganar el premio. ¡Vuelve a intentarlo!`}
      </p>

      {/* Botones de acción unificados */}
      <div className="w-full flex flex-col gap-2.5 pt-1">
        {hasEarnedReward ? (
          <button
            type="button"
            onClick={onGoHome}
            className="w-full py-3 px-4 bg-[#7E8B28] hover:bg-[#6D7821] text-white text-[14.5px] font-semibold rounded-xl shadow-sm transition-all duration-150 active:scale-[0.98] cursor-pointer"
          >
            {isJunior ? '🎁 ¡Ir a abrir mi regalo!' : 'Ver mi avance en el Inicio'}
          </button>
        ) : (
          <button
            type="button"
            onClick={onRestart}
            className="w-full py-3 px-4 bg-[#7E8B28] hover:bg-[#6D7821] text-white text-[14.5px] font-semibold rounded-xl shadow-sm transition-all duration-150 active:scale-[0.98] cursor-pointer"
          >
            Volver a intentar
          </button>
        )}
        <button
          type="button"
          onClick={hasEarnedReward ? onRestart : onGoHome}
          className="w-full py-2.5 px-4 bg-transparent hover:bg-black/5 text-[#555A49] text-xs font-medium rounded-xl transition-all cursor-pointer"
        >
          {hasEarnedReward ? 'Repetir la trivia' : 'Volver al inicio'}
        </button>
      </div>
    </div>
  );
}
