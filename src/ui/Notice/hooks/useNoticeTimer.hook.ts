import { useState, useEffect } from 'react';

interface UseNoticeTimerProps {
  autoClose?: boolean;
  duration?: number;
  onClose: () => void;
}

interface UseNoticeTimerReturn {
  progress: number;
  isPaused: boolean;
  setIsPaused: (paused: boolean) => void;
}

/**
 * Hook для управления уведомлениями
 *
 * @param {UseNoticeTimerProps} props - Объект с настройками
 * @param {boolean} props.autoClose - Автоматическое закрытие
 * @param {number} props.duration - Время закрытия
 * @param {() => void} props.onClose - Callback на закрытие
 * @returns {UseNoticeTimerReturn} - Объект с настройками
 */
export const useNoticeTimer = ({
  autoClose = true,
  duration = 5000,
  onClose
}: UseNoticeTimerProps): UseNoticeTimerReturn => {
  const [progress, setProgress] = useState(100);
  const [isPaused, setIsPaused] = useState(false);

  // Авто-закрытие и прогресс-бар
  useEffect(() => {
    if (!autoClose || isPaused) return;

    const totalTime = duration;
    const intervalTime = 50;
    const steps = totalTime / intervalTime;
    const decrement = 100 / steps;

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev <= 0) {
          clearInterval(progressInterval);
          onClose();
          return 0;
        }
        return prev - decrement;
      });
    }, intervalTime);

    return () => clearInterval(progressInterval);
  }, [autoClose, duration, isPaused, onClose]);

  return {
    progress,
    isPaused,
    setIsPaused
  };
};