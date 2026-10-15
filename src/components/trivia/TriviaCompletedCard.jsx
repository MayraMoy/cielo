import { useLanguage } from '../../hooks/useLanguage';
import { GiftBox } from '../home/GiftBox';

export function TriviaCompletedCard({
  score,
  totalQuestions,
  unlockedTotal = 1,
  isJunior = false,
  onGoHome,
  onRestart,
}) {
  const { t, content } = useLanguage();
  const TRIVIA_DATA = content.trivia;
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
            <span>{t('trivia.completed.unlockedBadge', { n: unlockedTotal })}</span>
          </span>
        )}
        <h2 className="text-[22px] sm:text-[24px] font-bold text-[#1A1C16] tracking-tight">
          {hasEarnedReward
            ? isJunior
              ? reward.juniorTitle
              : reward.title
            : t('trivia.completed.retryTitle')}
        </h2>
        <p className="text-[13px] text-[#555A49] mt-1 font-medium">
          {t('trivia.completed.score', { score, total: totalQuestions })}
        </p>
      </div>

      <p className="text-[14px] leading-relaxed text-[#2B2F25] bg-[#FAF9F5] p-4 rounded-2xl border border-[#E5E7EB]">
        {hasEarnedReward
          ? isJunior
            ? reward.juniorMessage
            : reward.message
          : t('trivia.completed.needMore', {
              min: TRIVIA_DATA.minimumCorrectAnswers,
              total: totalQuestions,
            })}
      </p>

      {/* Botones de acción unificados */}
      <div className="w-full flex flex-col gap-2.5 pt-1">
        {hasEarnedReward ? (
          <button
            type="button"
            onClick={onGoHome}
            className="w-full py-3 px-4 bg-[#7E8B28] hover:bg-[#6D7821] text-white text-[14.5px] font-semibold rounded-xl shadow-sm transition-all duration-150 active:scale-[0.98] cursor-pointer"
          >
            {isJunior
              ? t('trivia.completed.goOpenGift')
              : t('trivia.completed.seeProgress')}
          </button>
        ) : (
          <button
            type="button"
            onClick={onRestart}
            className="w-full py-3 px-4 bg-[#7E8B28] hover:bg-[#6D7821] text-white text-[14.5px] font-semibold rounded-xl shadow-sm transition-all duration-150 active:scale-[0.98] cursor-pointer"
          >
            {t('trivia.completed.retry')}
          </button>
        )}
        <button
          type="button"
          onClick={hasEarnedReward ? onRestart : onGoHome}
          className="w-full py-2.5 px-4 bg-transparent hover:bg-black/5 text-[#555A49] text-xs font-medium rounded-xl transition-all cursor-pointer"
        >
          {hasEarnedReward
            ? t('trivia.completed.repeat')
            : t('trivia.completed.backHome')}
        </button>
      </div>
    </div>
  );
}
