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
      'border-[#CFD79F] dark:border-[#3D482B] bg-white dark:bg-[#1F241A] hover:border-[#7E8B28]';
    if (isAnswered && isCorrectOption) {
      style = 'border-[#7E8B28] ring-2 ring-[#7E8B28] bg-[#F2F7D9] dark:bg-[#2D3624]';
    } else if (isAnswered && isThis && !isCorrectOption) {
      style = 'border-red-400 bg-red-50 dark:bg-[#3A2018] opacity-90';
    } else if (isAnswered) {
      style = 'border-gray-200 dark:border-[#2C3322] opacity-60';
    }

    return (
      <button
        type="button"
        onClick={() => handleSelect(key)}
        disabled={isAnswered}
        aria-label={t('juniorGames.comparison.chooseAria', {
          name: species?.name || '',
        })}
        className={`flex flex-col items-center gap-2 rounded-2xl border-2 p-3 transition-all active:scale-95 cursor-pointer disabled:cursor-default ${style}`}
      >
        <img
          src={species?.image}
          alt={species?.name}
          className="w-24 h-24 object-contain"
          draggable={false}
        />
        <span className="text-xs font-bold text-center text-[#1A1C16] dark:text-[#F4F6ED]">
          {species?.name}
        </span>
      </button>
    );
  };

  return (
    <div className="w-full max-w-[360px] mx-auto flex flex-col gap-4">
      <div className="flex items-center justify-center">
        <span className="rounded-full bg-[#F2F4E6] dark:bg-[#242B1E] border border-[#CFD79F] dark:border-[#3D482B] px-3 py-1 text-xs font-bold text-[#545C1E] dark:text-[#DDEB7A]">
          {t('juniorGames.comparison.questionCounter', {
            current: index + 1,
            total,
          })}
        </span>
      </div>

      <h2 className="text-[17px] font-bold text-center text-[#1A1C16] dark:text-[#F4F6ED] leading-snug px-1">
        {text.prompt}
      </h2>

      <div className="grid grid-cols-2 gap-3">
        {renderOption('a', optionA)}
        {renderOption('b', optionB)}
      </div>

      {isAnswered && (
        <div className="flex flex-col gap-3 animate-[modal-appear_200ms_ease-out]">
          <div
            className={`rounded-2xl border p-3.5 text-center ${
              isCorrect
                ? 'border-[#CFD79F] bg-[#F4F8DE] dark:bg-[#2D3624] dark:border-[#3D482B]'
                : 'border-red-200 bg-red-50 dark:bg-[#3A2018] dark:border-[#5A2E22]'
            }`}
          >
            <p className="text-xs font-bold text-[#545C1E] dark:text-[#DDEB7A] mb-1">
              {isCorrect
                ? t('juniorGames.comparison.correctTitle')
                : t('juniorGames.comparison.wrongTitle')}
            </p>
            <p className="text-[13px] leading-relaxed text-[#2B2F25] dark:text-[#E6EADF]">
              {text.explanation}
            </p>
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="w-full py-3 px-4 bg-[#7E8B28] hover:bg-[#6D7821] text-white text-[14.5px] font-semibold rounded-xl shadow-sm transition-all active:scale-[0.98] cursor-pointer"
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
