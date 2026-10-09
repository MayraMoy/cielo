import { useNavigate } from 'react-router-dom';
import { useTrivia } from '../hooks/useTrivia';
import { TriviaCard } from '../components/trivia/TriviaCard';
import { TriviaCompletedCard } from '../components/trivia/TriviaCompletedCard';
import { BottomNavbar } from '../components/common/BottomNavbar';

export function TriviaPage() {
  const navigate = useNavigate();
  const {
    currentQuestion,
    totalQuestions,
    timerPercentage,
    timeLeft,
    isTimeUp,
    selectedOption,
    isAnswered,
    score,
    isFinished,
    handleSelectOption,
    handleRestart,
  } = useTrivia();

  return (
    <div className="w-full flex-1 relative flex flex-col justify-between items-center select-none bg-[#FAF9F5]">
      
      {/* 1. BOTÓN DE CERRAR "✕" EN LA ESQUINA SUPERIOR DERECHA */}
      <div className="w-full flex justify-end px-6 pt-2 z-20">
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

      {/* 2. CONTENIDO PRINCIPAL: TARJETA DE TRIVIA CON TEMPORIZADOR O TARJETA DE FINALIZACIÓN */}
      <main className="w-full px-4 flex justify-center items-center my-auto pb-6">
        {!isFinished ? (
          <TriviaCard
            question={currentQuestion}
            timerPercentage={timerPercentage}
            timeLeft={timeLeft}
            isTimeUp={isTimeUp}
            selectedOption={selectedOption}
            isAnswered={isAnswered}
            onSelectOption={handleSelectOption}
          />
        ) : (
          <TriviaCompletedCard
            score={score}
            totalQuestions={totalQuestions}
            onGoHome={() => navigate('/home')}
            onRestart={handleRestart}
          />
        )}
      </main>

      {/* 3. NAVBAR INFERIOR FLOTANTE ANCLADO */}
      <BottomNavbar
        activeTab="scan"
        onTabChange={(tabId) => {
          if (tabId === 'home') navigate('/home');
        }}
        onScanQR={() => navigate('/scan')}
        onOpenLibrary={() => navigate('/library')}
      />
    </div>
  );
}
