export function TriviaCard({
  question,
  timerPercentage,
  timeLeft = 15,
  isTimeUp = false,
  selectedOption,
  isAnswered,
  onSelectOption,
}) {
  const timerBarStyle =
    timeLeft <= 3
      ? "bg-red-500"
      : timeLeft <= 7
      ? "bg-amber-500"
      : "bg-[#7E8B28]";

  return (
    <div className="w-full max-w-[340px] bg-white rounded-3xl p-4 sm:p-5 shadow-[0_8px_24px_rgba(0,0,0,0.14)] border border-[#D1D5DB] flex flex-col gap-3.5 transition-all">
      
      {/* 1. IMAGEN DE CABECERA */}
      <div className="w-full h-36 sm:h-40 rounded-xl overflow-hidden shadow-xs relative">
        <img
          src={question.image}
          alt={question.imageAlt}
          className="w-full h-full object-cover select-none"
          draggable={false}
        />
      </div>

      {/* 2. TEXTO DE LA PREGUNTA */}
      <h2 className="text-[17px] sm:text-[18px] font-semibold text-[#1A1C16] text-center leading-snug px-1">
        {question.question}
      </h2>

      {/* 3. TEMPORIZADOR POR PREGUNTA */}
      <div
        className="w-full h-2.5 bg-[#D4D7DB] rounded-full overflow-hidden relative"
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
        <div className="bg-red-50 border border-red-200 text-red-700 text-xs py-1.5 px-3 rounded-xl text-center font-semibold animate-pulse">
          ⏰ ¡Se acabó el tiempo!
        </div>
      )}

      {/* 4. OPCIONES DE RESPUESTA */}
      <div className="flex flex-col gap-2.5 pt-1">
        {question.options.map((option, index) => {
          const isSelected = selectedOption === index;
          const isCorrectAnswer = index === question.correctIndex;

          let optionStyle =
            "bg-white text-[#1A1C16] border border-[#B5C370] shadow-[0_2px_8px_rgba(52,61,29,0.10)] hover:border-[#687320] hover:bg-[#FAF9F5]";

          if (isAnswered) {
            if (isCorrectAnswer) {
              optionStyle =
                "bg-[#F2F7D9] border-2 border-[#7E8B28] text-[#556016] font-semibold shadow-sm";
            } else if (isSelected && !isCorrectAnswer) {
              optionStyle =
                "bg-red-50 border-2 border-red-400 text-red-700 shadow-sm";
            } else {
              optionStyle =
                "bg-gray-50 text-gray-400 border border-gray-200 opacity-60";
            }
          }

          return (
            <button
              key={index}
              type="button"
              disabled={isAnswered}
              onClick={() => onSelectOption(index)}
              className={`w-full py-3.5 px-4 rounded-xl text-[13.5px] font-medium transition-all duration-150 flex items-center justify-center text-center cursor-pointer active:scale-[0.99] select-none ${optionStyle}`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
