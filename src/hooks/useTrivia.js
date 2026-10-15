import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { useLanguage } from './useLanguage';
import {
  unlockCharacterByStation,
  getUnlockedCharacters,
} from '../data/rewardProgress';

export function useTrivia({ isJunior = false, stationStep = 1 } = {}) {
  const { content } = useLanguage();
  const TRIVIA_DATA = content.trivia;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [unlockedTotal, setUnlockedTotal] = useState(getUnlockedCharacters);

  const totalTime = isJunior
    ? TRIVIA_DATA.juniorTimePerQuestion || 22
    : TRIVIA_DATA.timePerQuestion || 15;

  const [timeLeft, setTimeLeft] = useState(totalTime);
  const timerRef = useRef(null);

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

  // Función para avanzar a la siguiente pregunta o finalizar cuando el usuario presiona "Siguiente"
  const advanceQuestion = useCallback(() => {
    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setIsCorrect(null);
      setIsTimeUp(false);
      setTimeLeft(totalTime);
    } else {
      if (score >= TRIVIA_DATA.minimumCorrectAnswers) {
        const updatedCount = unlockCharacterByStation(stationStep);
        setUnlockedTotal(updatedCount);
      }
      setIsFinished(true);
    }
  }, [currentIndex, totalQuestions, totalTime, score, stationStep, TRIVIA_DATA.minimumCorrectAnswers]);

  // Manejador cuando el tiempo se agota (0 segundos)
  const handleTimeout = useCallback(() => {
    setIsAnswered(true);
    setIsTimeUp(true);
    setIsCorrect(false);
  }, []);

  // Efecto del reloj de cuenta regresiva
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

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Manejador de selección de respuesta por parte del usuario
  const handleSelectOption = (index) => {
    if (isAnswered) return;

    if (timerRef.current) clearInterval(timerRef.current);

    setSelectedOption(index);
    setIsAnswered(true);

    const correct = index === currentQuestion.correctIndex;
    setIsCorrect(correct);

    if (correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleRestart = () => {
    if (timerRef.current) clearInterval(timerRef.current);
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
    unlockedTotal,
    handleSelectOption,
    handleNextQuestion: advanceQuestion,
    handleRestart,
  };
}
