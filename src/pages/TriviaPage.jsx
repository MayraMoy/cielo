import { useLocation, useNavigate } from 'react-router-dom';
import { useTrivia } from '../hooks/useTrivia';
import { useUserProfile } from '../hooks/useUserProfile';
import { TriviaCard } from '../components/trivia/TriviaCard';
import { TriviaCompletedCard } from '../components/trivia/TriviaCompletedCard';

export function TriviaPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isJunior } = useUserProfile();

  const stationStep = location.state?.stationStep || 1;

  const {
    currentQuestion,
    currentIndex,
    totalQuestions,
    timerPercentage,
    timeLeft,
    isTimeUp,
    selectedOption,
    isAnswered,
    isCorrect,
    score,
    isFinished,
    unlockedTotal,
    handleSelectOption,
    handleNextQuestion,
    handleRestart,
  } = useTrivia({ isJunior, stationStep });

  return (
    <div className="w-full flex-1 relative flex flex-col justify-between items-center select-none bg-[#FAF9F5]">
      {/* 1. BARRA SUPERIOR CON BOTÓN CERRAR "✕" */}
      <div className="w-full flex items-center justify-end px-6 pt-3 z-20">
        <button
          type="button"
          onClick={() => navigate('/home')}
          className="p-1.5 text-[#1A1C16] hover:text-[#7E8B28] hover:bg-black/5 rounded-full transition-all active:scale-90 cursor-pointer"
          aria-label="Cerrar y volver al inicio"
        >
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* 2. CONTENIDO PRINCIPAL: TARJETA DE TRIVIA O FINALIZACIÓN */}
      <main className="w-full px-4 flex justify-center items-center my-auto pb-8 pt-1">
        {!isFinished ? (
          <TriviaCard
            question={currentQuestion}
            currentIndex={currentIndex}
            totalQuestions={totalQuestions}
            timerPercentage={timerPercentage}
            timeLeft={timeLeft}
            isTimeUp={isTimeUp}
            selectedOption={selectedOption}
            isAnswered={isAnswered}
            isCorrect={isCorrect}
            isJunior={isJunior}
            onSelectOption={handleSelectOption}
            onNextQuestion={handleNextQuestion}
          />
        ) : (
          <TriviaCompletedCard
            score={score}
            totalQuestions={totalQuestions}
            unlockedTotal={unlockedTotal}
            isJunior={isJunior}
            onGoHome={() => navigate('/home')}
            onRestart={handleRestart}
          />
        )}
      </main>
    </div>
  );
}
