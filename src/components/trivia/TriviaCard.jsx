import { OwlMascot } from '../home/OwlMascot';
import { useLanguage } from '../../hooks/useLanguage';

export function TriviaCard({
  question,
  currentIndex = 0,
  totalQuestions = 3,
  timerPercentage,
  timeLeft = 15,
  isTimeUp = false,
  selectedOption,
  isAnswered,
  isCorrect,
  isJunior = false,
  onSelectOption,
  onNextQuestion,
}) {
  const { t } = useLanguage();
  const timerBarStyle =
    timeLeft <= 3
      ? 'bg-red-500'
      : timeLeft <= 7
      ? 'bg-amber-500'
      : 'bg-[var(--brand-olive)]';

  const questionText =
    isJunior && question.juniorQuestion
      ? question.juniorQuestion
      : question.question;

  const explanationText =
    isJunior && question.juniorExplanation
      ? question.juniorExplanation
      : question.explanation;

  const isLastQuestion = currentIndex + 1 >= totalQuestions;

  return (
    <div className="w-full max-w-[350px] rounded-2xl border border-[var(--surface-card-border)] bg-[var(--surface-card)] p-5 shadow-[var(--card-shadow)] flex flex-col gap-3.5 transition-colors font-['Poppins'] sm:p-6">
      {/* Cabecera: Progreso de pregunta y segundos restantes */}
      <div className="flex items-center justify-between text-xs font-semibold text-[var(--text-secondary)]">
        <span className="rounded-full border border-[var(--accent-soft-border)] bg-[var(--accent-soft-bg)] px-3 py-1 text-[var(--accent-soft-text)]">
          {t('trivia.questionCounter', {
            current: currentIndex + 1,
            total: totalQuestions,
          })}
        </span>
        <span
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${
            timeLeft <= 3
              ? 'bg-red-100 text-red-700 dark:bg-[#3A2424] dark:text-[#F0B4B4]'
              : 'bg-[var(--surface-step)] text-[var(--text-secondary)]'
          }`}
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>{timeLeft}s</span>
        </span>
      </div>

      {/* 1. IMAGEN DE CABECERA */}
      <div className="w-full h-36 sm:h-40 rounded-2xl overflow-hidden shadow-xs relative">
        <img
          src={question.image}
          alt={question.imageAlt}
          className="w-full h-full object-cover select-none"
          draggable={false}
        />
      </div>

      {/* 2. TEXTO DE LA PREGUNTA CON TIPOGRAFÍA MÁS GRANDE */}
      <h2 className="px-1 text-center text-[18px] font-bold leading-snug text-[var(--text-primary)] sm:text-[19px]">
        {questionText}
      </h2>

      {/* 3. TEMPORIZADOR POR PREGUNTA */}
      <div
        className="relative h-2 w-full overflow-hidden rounded-full bg-[var(--surface-card-border)]"
        role="progressbar"
        aria-label={t('trivia.timerAria')}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={timerPercentage}
      >
        <div
          className={`h-full rounded-full transition-[width,background-color] duration-300 ease-linear ${timerBarStyle}`}
          style={{ width: `${timerPercentage}%` }}
        />
      </div>

      {/* AVISO DE TIEMPO AGOTADO */}
      {isTimeUp && (
        <div className="animate-pulse rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-center text-xs font-semibold text-red-700 dark:border-[#704040] dark:bg-[#342222] dark:text-[#F0B4B4]">
          {t('trivia.timeUp')}
        </div>
      )}

      {/* 4. OPCIONES DE RESPUESTA CON TIPOGRAFÍA CÓMODA */}
      <div className="flex flex-col gap-2.5 pt-0.5">
        {question.options.map((option, index) => {
          const isSelected = selectedOption === index;
          const isCorrectAnswer = index === question.correctIndex;

          let optionStyle =
            'border border-[var(--surface-card-border)] bg-[var(--surface-card)] text-[var(--text-primary)] shadow-[var(--control-shadow)] hover:border-[#7E8B28] hover:bg-[var(--accent-soft-bg)] dark:hover:border-[var(--text-name)]';

          if (isAnswered) {
            if (isCorrectAnswer) {
              optionStyle =
                'border-2 border-[var(--accent-soft-border)] bg-[var(--accent-soft-bg)] font-bold text-[var(--accent-soft-text)] shadow-[var(--control-shadow)]';
            } else if (isSelected && !isCorrectAnswer) {
              optionStyle =
                'border-2 border-red-400 bg-red-50 font-medium text-red-700 shadow-[var(--control-shadow)] dark:border-[#A75B5B] dark:bg-[#342222] dark:text-[#F0B4B4]';
            } else {
              optionStyle =
                'border border-[var(--surface-card-border)] bg-[var(--surface-step)] text-[var(--text-secondary)] opacity-60';
            }
          }

          return (
            <button
              key={index}
              type="button"
              disabled={isAnswered}
              onClick={() => onSelectOption(index)}
              className={`flex w-full items-center justify-center rounded-xl px-4 py-3 text-center text-[14.5px] font-semibold transition-all duration-150 cursor-pointer active:scale-[0.99] select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#687320] dark:focus-visible:outline-[#B9C76B] ${optionStyle}`}
            >
              {option}
            </button>
          );
        })}
      </div>

      {/* 5. EXPLICACIÓN EDUCATIVA DEL BÚHO Y BOTÓN PARA AVANZAR */}
      {isAnswered && (
        <div className="mt-1 flex flex-col gap-3 animate-[modal-appear_200ms_ease-out]">
          <div className="relative flex items-start gap-3 rounded-2xl border border-[var(--surface-card-border)] bg-[var(--surface-step)] p-3.5 pr-14 shadow-[var(--control-shadow)]">
            <div className="flex-1">
              <p className="mb-1 text-xs font-bold text-[var(--text-name)]">
                {isCorrect
                  ? t('trivia.correctTitle')
                  : isTimeUp
                  ? t('trivia.timeUpTitle')
                  : t('trivia.wrongTitle')}
              </p>
              <p className="text-[13.5px] leading-relaxed text-[var(--text-secondary)]">
                {explanationText}
              </p>
            </div>
            <OwlMascot className="absolute -bottom-1 right-1 w-12 h-auto pointer-events-none" />
          </div>

          <button
            type="button"
            onClick={onNextQuestion}
            className="w-full rounded-xl bg-[var(--brand-olive)] px-4 py-3 text-[14.5px] font-semibold text-white shadow-[var(--control-shadow)] transition-all hover:bg-[var(--brand-olive-hover)] active:scale-[0.98] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#687320] dark:focus-visible:outline-[#B9C76B]"
          >
            {isLastQuestion ? t('trivia.seeResult') : t('trivia.next')}
          </button>
        </div>
      )}
    </div>
  );
}
