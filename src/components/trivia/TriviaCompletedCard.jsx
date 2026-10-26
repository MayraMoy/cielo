import { useLanguage } from '../../hooks/useLanguage';
import { GiftBox } from '../home/GiftBox';
import { BadgeCheck } from 'lucide-react';

export function TriviaCompletedCard({
  score,
  totalQuestions,
  isJunior = false,
  onGoHome,
  onRestart,
}) {
  const { t, content } = useLanguage();
  const TRIVIA_DATA = content.trivia;
  const { reward } = TRIVIA_DATA;
  const hasEarnedReward = score >= TRIVIA_DATA.minimumCorrectAnswers;

  return (
    <div className="flex w-full max-w-[350px] flex-col items-center gap-4 rounded-2xl border border-[var(--surface-card-border)] bg-[var(--surface-card)] p-6 text-center shadow-[var(--card-shadow)] animate-[modal-appear_220ms_ease-out] font-['Poppins']">
      {/* Icono de regalo animado */}
      {hasEarnedReward && (
        <div className="transform hover:scale-110 transition-transform my-1">
          <GiftBox className="w-20 h-20 animate-[gift-bounce_1.2s_ease-in-out_infinite]" />
        </div>
      )}

      <div>
        {hasEarnedReward && (
          <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-[var(--accent-soft-border)] bg-[var(--accent-soft-bg)] px-3 py-1 text-xs font-semibold text-[var(--accent-soft-text)]">
            <BadgeCheck className="h-4 w-4" aria-hidden="true" />
            <BadgeCheck className="h-4 w-4" aria-hidden="true" />
          </span>
        )}
        <h2 className="text-[22px] font-bold tracking-tight text-[var(--text-primary)] sm:text-[24px]">
          {hasEarnedReward
            ? isJunior
              ? reward.juniorTitle
              : reward.title
            : t('trivia.completed.retryTitle')}
        </h2>
        <p className="mt-1 text-[13px] font-medium text-[var(--text-secondary)]">
          {t('trivia.completed.score', { score, total: totalQuestions })}
        </p>
      </div>

      <p className="rounded-2xl border border-[var(--surface-card-border)] bg-[var(--surface-step)] p-4 text-[14px] leading-relaxed text-[var(--text-secondary)]">
        {hasEarnedReward
          ? isJunior
            ? reward.juniorMessage
            : reward.message
          : t('trivia.completed.needMore', {
              min: TRIVIA_DATA.minimumCorrectAnswers,
              total: totalQuestions,
            })}
      </p>

      {/* Botones de acciÃ³n unificados */}
      <div className="w-full flex flex-col gap-2.5 pt-1">
        {hasEarnedReward ? (
          <button
            type="button"
            onClick={onGoHome}
            className="w-full rounded-xl bg-[var(--brand-olive)] px-4 py-3 text-[14.5px] font-semibold text-white shadow-[var(--control-shadow)] transition-all duration-150 hover:bg-[var(--brand-olive-hover)] active:scale-[0.98] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#687320] dark:focus-visible:outline-[#B9C76B]"
          >
            {isJunior
              ? t('trivia.completed.goOpenGift')
              : t('trivia.completed.seeProgress')}
          </button>
        ) : (
          <button
            type="button"
            onClick={onRestart}
            className="w-full rounded-xl bg-[var(--brand-olive)] px-4 py-3 text-[14.5px] font-semibold text-white shadow-[var(--control-shadow)] transition-all duration-150 hover:bg-[var(--brand-olive-hover)] active:scale-[0.98] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#687320] dark:focus-visible:outline-[#B9C76B]"
          >
            {t('trivia.completed.retry')}
          </button>
        )}
        <button
          type="button"
          onClick={hasEarnedReward ? onRestart : onGoHome}
          className="w-full rounded-xl bg-transparent px-4 py-2.5 text-xs font-medium text-[var(--text-secondary)] transition-all hover:bg-[var(--surface-step)] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#687320] dark:focus-visible:outline-[#B9C76B]"
        >
          {hasEarnedReward
            ? t('trivia.completed.repeat')
            : t('trivia.completed.backHome')}
        </button>
      </div>
    </div>
  );
}
