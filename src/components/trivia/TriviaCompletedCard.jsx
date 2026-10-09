import { GiftBox } from '../home/GiftBox';
import { TRIVIA_DATA } from '../../data/triviaData';

export function TriviaCompletedCard({ score, totalQuestions, onGoHome, onRestart }) {
  const { reward } = TRIVIA_DATA;
  const hasEarnedReward = score >= TRIVIA_DATA.minimumCorrectAnswers;

  return (
    <div className="w-full max-w-[340px] bg-white rounded-3xl p-6 shadow-[0_8px_24px_rgba(0,0,0,0.14)] border border-[#D1D5DB] flex flex-col items-center text-center gap-4 animate-fade-in">
      {/* Icono de regalo animado */}
      {hasEarnedReward && (
        <div className="transform hover:scale-110 transition-transform my-2">
          <GiftBox className="w-20 h-20" />
        </div>
      )}

      <div>
        {hasEarnedReward && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F2F4E6] text-[#687320] border border-[#CFD79F] mb-2">
            <span>🎉</span>
            <span>{reward.characterUnlocked}</span>
          </span>
        )}
        <h2 className="text-2xl font-bold text-[#1A1C16] tracking-tight">
          {hasEarnedReward ? reward.title : '¡Inténtalo de nuevo!'}
        </h2>
        <p className="text-xs text-[#636856] mt-1">
          Acertaste {score} de {totalQuestions} preguntas.
        </p>
      </div>

      <p className="text-xs leading-relaxed text-[#4A4E3E] bg-white p-3 rounded-xl border border-[#D8DDC7]">
        {hasEarnedReward
          ? reward.message
          : `Necesitas acertar al menos ${TRIVIA_DATA.minimumCorrectAnswers} de ${totalQuestions} preguntas para ganar el premio. ¡Vuelve a intentarlo!`}
      </p>

      {/* Botones de acción */}
      <div className="w-full flex flex-col gap-2 pt-2">
        {hasEarnedReward ? (
          <button
            type="button"
            onClick={onGoHome}
            className="w-full py-3 px-4 bg-[#7E8B28] hover:bg-[#6D7821] text-white text-sm font-medium rounded-xl shadow-sm transition-all duration-150 active:scale-[0.98] cursor-pointer"
          >
            Ver mi personaje en el Inicio
          </button>
        ) : (
          <button
            type="button"
            onClick={onRestart}
            className="w-full py-3 px-4 bg-[#7E8B28] hover:bg-[#6D7821] text-white text-sm font-medium rounded-xl shadow-sm transition-all duration-150 active:scale-[0.98] cursor-pointer"
          >
            Volver a intentar
          </button>
        )}
        <button
          type="button"
          onClick={hasEarnedReward ? onRestart : onGoHome}
          className="w-full py-2.5 px-4 bg-transparent hover:bg-black/5 text-[#636856] text-xs font-medium rounded-xl transition-all cursor-pointer"
        >
          {hasEarnedReward ? 'Repetir la trivia' : 'Volver al inicio'}
        </button>
      </div>
    </div>
  );
}
