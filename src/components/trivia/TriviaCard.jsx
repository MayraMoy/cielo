import { OwlMascot } from '../home/OwlMascot';

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
  const timerBarStyle =
    timeLeft <= 3
      ? 'bg-red-500'
      : timeLeft <= 7
      ? 'bg-amber-500'
      : 'bg-[#7E8B28]';

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
    <div className="w-full max-w-[350px] bg-white rounded-3xl p-5 sm:p-6 shadow-[0_6px_20px_rgba(0,0,0,0.08)] border border-[#E5E7EB] flex flex-col gap-3.5 transition-all font-['Poppins']">
      {/* Cabecera: Progreso de pregunta y segundos restantes */}
      <div className="flex items-center justify-between text-xs font-semibold text-[#545C1E]">
        <span className="rounded-full bg-[#F2F4E6] border border-[#CFD79F] px-3 py-1">
          Pregunta {currentIndex + 1} de {totalQuestions}
        </span>
        <span
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${
            timeLeft <= 3 ? 'text-red-700 bg-red-100' : 'text-[#555A49] bg-[#FAF9F5]'
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
      <h2 className="text-[18px] sm:text-[19px] font-bold text-[#1A1C16] text-center leading-snug px-1">
        {questionText}
      </h2>

      {/* 3. TEMPORIZADOR POR PREGUNTA */}
      <div
        className="w-full h-2 bg-[#E5E7EB] rounded-full overflow-hidden relative"
        role="progressbar"
        aria-label="Tiempo restante para responder"
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
        <div className="bg-red-50 border border-red-200 text-red-700 text-xs py-2 px-3 rounded-xl text-center font-semibold animate-pulse">
          ¡Se acabó el tiempo! Mirá la respuesta correcta:
        </div>
      )}

      {/* 4. OPCIONES DE RESPUESTA CON TIPOGRAFÍA CÓMODA */}
      <div className="flex flex-col gap-2.5 pt-0.5">
        {question.options.map((option, index) => {
          const isSelected = selectedOption === index;
          const isCorrectAnswer = index === question.correctIndex;

          let optionStyle =
            'bg-white text-[#1A1C16] border border-[#B5C370] shadow-[0_2px_8px_rgba(52,61,29,0.06)] hover:border-[#687320] hover:bg-[#FAF9F5]';

          if (isAnswered) {
            if (isCorrectAnswer) {
              optionStyle =
                'bg-[#F2F7D9] border-2 border-[#7E8B28] text-[#556016] font-bold shadow-sm';
            } else if (isSelected && !isCorrectAnswer) {
              optionStyle =
                'bg-red-50 border-2 border-red-400 text-red-700 shadow-sm font-medium';
            } else {
              optionStyle =
                'bg-gray-50 text-gray-400 border border-gray-200 opacity-60';
            }
          }

          return (
            <button
              key={index}
              type="button"
              disabled={isAnswered}
              onClick={() => onSelectOption(index)}
              className={`w-full py-3 px-4 rounded-xl text-[14.5px] font-semibold transition-all duration-150 flex items-center justify-center text-center cursor-pointer active:scale-[0.99] select-none ${optionStyle}`}
            >
              {option}
            </button>
          );
        })}
      </div>

      {/* 5. EXPLICACIÓN EDUCATIVA DEL BÚHO Y BOTÓN PARA AVANZAR */}
      {isAnswered && (
        <div className="mt-1 flex flex-col gap-3 animate-[modal-appear_200ms_ease-out]">
          <div className="relative flex items-start gap-3 rounded-2xl border border-[#CFD79F] bg-[#F4F8DE] p-3.5 pr-14">
            <div className="flex-1">
              <p className="text-xs font-bold text-[#545C1E] mb-1">
                {isCorrect
                  ? '¡Respuesta correcta!'
                  : isTimeUp
                  ? 'Aprendamos juntos:'
                  : '¡Casi! Así funciona en la reserva:'}
              </p>
              <p className="text-[13.5px] leading-relaxed text-[#2B2F25]">
                {explanationText}
              </p>
            </div>
            <OwlMascot className="absolute -bottom-1 right-1 w-12 h-auto pointer-events-none" />
          </div>

          <button
            type="button"
            onClick={onNextQuestion}
            className="w-full py-3 px-4 bg-[#7E8B28] hover:bg-[#6D7821] text-white text-[14.5px] font-semibold rounded-xl shadow-sm transition-all active:scale-[0.98] cursor-pointer"
          >
            {isLastQuestion ? 'Ver resultado final' : 'Siguiente pregunta →'}
          </button>
        </div>
      )}
    </div>
  );
}
