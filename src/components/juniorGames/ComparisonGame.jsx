import { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const QUESTIONS = [
  { id: 'q1', optionA: 'molle', optionB: 'carpincho', correct: 'a' },
  { id: 'q2', optionA: 'halcon', optionB: 'carpincho', correct: 'b' },
  { id: 'q3', optionA: 'halcon', optionB: 'molle', correct: 'a' },
];

export function ComparisonGame({ speciesById = {}, onComplete }) {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);

  const current = QUESTIONS[index];
  const total = QUESTIONS.length;
  const text = t(`juniorGames.comparison.questions.${current.id}`) || {};
  const isAnswered = selected !== null;
  const isCorrect = selected === current.correct;
  const isLast = index + 1 >= total;

  const optionA = speciesById[current.optionA];
  const optionB = speciesById[current.optionB];

  const handleSelect = (key) => {
    if (isAnswered) return;
    setSelected(key);
  };

  const handleNext = () => {
    if (isLast) {
      onComplete?.();
      return;
    }
    setIndex((prev) => prev + 1);
    setSelected(null);
  };

  const renderOption = (key, species) => {
    const isThis = selected === key;
    const isCorrectOption = current.correct === key;

    let style =
      'border-[var(--surface-card-border)] bg-[var(--surface-card)] hover:border-[var(--brand-olive)]';
    if (isAnswered && isCorrectOption) {
      style = 'border-[var(--brand-olive)] bg-[var(--surface-card)] ring-1 ring-[var(--brand-olive)]';
    } else if (isAnswered && isThis && !isCorrectOption) {
      style = 'border-[var(--status-error-border)] bg-[var(--surface-card)]';
    } else if (isAnswered) {
      style = 'border-[var(--surface-card-border)] bg-[var(--surface-card)] opacity-60';
    }

    return (
      <button
        type="button"
        onClick={() => handleSelect(key)}
        disabled={isAnswered}
        aria-label={t('juniorGames.comparison.chooseAria', {
          name: species?.name || '',
        })}
        className={`flex flex-col items-center gap-2 rounded-2xl border-2 bg-[var(--surface-card)] p-3 shadow-[var(--control-shadow)] transition-all active:scale-95 cursor-pointer disabled:cursor-default focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#687320] dark:focus-visible:outline-[#C5D76A] ${style}`}
      >
        <img
          src={species?.image}
          alt={species?.name}
          className="w-24 h-24 object-contain"
          draggable={false}
        />
        <span className="text-xs font-bold text-center text-[var(--text-primary)]">
          {species?.name}
        </span>
      </button>
    );
  };

  return (
    <div className="mx-auto flex w-full max-w-[360px] flex-col gap-4">
      <p className="text-sm leading-snug text-[var(--text-secondary)]">
        {t('juniorGames.comparison.challengeIntro')}
      </p>

      <div className="flex flex-col gap-2">
        <p className="text-left text-xs font-semibold text-[var(--text-secondary)]">
          {t('juniorGames.comparison.questionCounter', {
            current: index + 1,
            total,
          })}
        </p>
        <div
          className="grid grid-cols-3 gap-1.5"
          role="progressbar"
          aria-label={t('juniorGames.comparison.progressAria')}
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={index + 1}
        >
          {QUESTIONS.map((question, step) => (
            <span
              key={question.id}
              className={`h-1 rounded-full ${
                step <= index
                  ? 'bg-[var(--brand-olive)]'
                  : 'bg-[var(--surface-card-border)]'
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      <h2 className="px-1 text-left text-[17px] font-bold leading-snug text-[var(--text-primary)]">
        {text.prompt}
      </h2>

      <div className="grid grid-cols-2 gap-3">
        {renderOption('a', optionA)}
        {renderOption('b', optionB)}
      </div>

      {isAnswered && (
        <div className="flex flex-col gap-3 animate-[modal-appear_200ms_ease-out]">
          <div
            role="status"
            aria-live="polite"
            className={`rounded-2xl border bg-[var(--surface-card)] p-3.5 text-center ${
              isCorrect
                ? 'border-[var(--brand-olive)]'
                : 'border-[var(--status-error-border)]'
            }`}
          >
            <p className={`mb-1 text-xs font-bold ${isCorrect ? 'text-[var(--brand-olive)]' : 'text-[var(--status-error-text)]'}`}>
              {isCorrect
                ? t('juniorGames.comparison.correctTitle')
                : t('juniorGames.comparison.wrongTitle')}
            </p>
            <p className="text-[13px] leading-relaxed text-[var(--text-secondary)]">
              {text.explanation}
            </p>
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="min-h-12 w-full rounded-2xl bg-[var(--brand-olive)] px-4 py-3 text-[14.5px] font-semibold text-white shadow-[var(--control-shadow)] transition-all hover:bg-[var(--brand-olive-hover)] active:scale-[0.98] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#687320] dark:focus-visible:outline-[#C5D76A]"
          >
            {isLast
              ? t('juniorGames.comparison.seeResult')
              : t('juniorGames.comparison.next')}
          </button>
        </div>
      )}
    </div>
  );
}
