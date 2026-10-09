import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { TRIVIA_DATA } from '../data/triviaData';
import { unlockFirstCharacter } from '../data/rewardProgress';

export function useTrivia() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const totalTime = TRIVIA_DATA.timePerQuestion || 15;
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const timerRef = useRef(null);
  const advanceTimerRef = useRef(null);

  const questions = TRIVIA_DATA.questions;
  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;

  // Porcentaje de progreso de preguntas para la barra general
  const progressPercentage = useMemo(() => {
    return Math.round(((currentIndex + 1) / totalQuestions) * 100);
  }, [currentIndex, totalQuestions]);

  // Porcentaje restante del temporizador
  const timerPercentage = useMemo(() => {
    return Math.round((timeLeft / totalTime) * 100);
  }, [timeLeft, totalTime]);

  // Función para avanzar a la siguiente pregunta o finalizar
  const advanceQuestion = useCallback(() => {
    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setIsCorrect(null);
      setIsTimeUp(false);
      setTimeLeft(totalTime);
    } else {
      setIsFinished(true);
    }
  }, [currentIndex, totalQuestions, totalTime]);

  // Manejador cuando el tiempo se agota (0 segundos)
  const handleTimeout = useCallback(() => {
    setIsAnswered(true);
    setIsTimeUp(true);
    setIsCorrect(false);

    advanceTimerRef.current = setTimeout(() => {
      advanceQuestion();
    }, 1500);
  }, [advanceQuestion]);

  // Efecto del reloj de cuenta regresiva (15 segundos por pregunta)
  useEffect(() => {
    if (isAnswered || isFinished) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isAnswered, isFinished, handleTimeout]);

  useEffect(() => () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
  }, []);

  useEffect(() => {
    if (isFinished && score >= TRIVIA_DATA.minimumCorrectAnswers) {
      unlockFirstCharacter();
    }
  }, [isFinished, score]);

  // Manejador de selección de respuesta por parte del usuario
  const handleSelectOption = (index) => {
    if (isAnswered) return;

    // Detener reloj inmediatamente
    if (timerRef.current) clearInterval(timerRef.current);

    setSelectedOption(index);
    setIsAnswered(true);

    const correct = index === currentQuestion.correctIndex;
    setIsCorrect(correct);

    if (correct) {
      setScore((prev) => prev + 1);
    }

    // Avanza tras feedback visual de 1.2s
    advanceTimerRef.current = setTimeout(() => {
      advanceQuestion();
    }, 1200);
  };

  const handleRestart = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(null);
    setIsTimeUp(false);
    setScore(0);
    setIsFinished(false);
    setTimeLeft(totalTime);
  };

  return {
    currentQuestion,
    currentIndex,
    totalQuestions,
    progressPercentage,
    timeLeft,
    totalTime,
    timerPercentage,
    isTimeUp,
    selectedOption,
    isAnswered,
    isCorrect,
    score,
    isFinished,
    handleSelectOption,
    handleRestart,
  };
}
