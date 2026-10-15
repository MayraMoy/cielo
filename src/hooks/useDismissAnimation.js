import { useCallback, useEffect, useRef, useState } from 'react';

export function useDismissAnimation(onClose, duration = 220) {
  const [isClosing, setIsClosing] = useState(false);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  const requestClose = useCallback(() => {
    setIsClosing((prev) => (prev ? prev : true));
  }, []);

  useEffect(() => {
    if (!isClosing) return undefined;
    const timer = setTimeout(() => onCloseRef.current?.(), duration);
    return () => clearTimeout(timer);
  }, [isClosing, duration]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') requestClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [requestClose]);

  return { isClosing, requestClose };
}
