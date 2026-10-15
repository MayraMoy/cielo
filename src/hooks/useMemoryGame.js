import { useState, useEffect, useCallback } from 'react';

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function useMemoryGame({ speciesIds = [], onComplete } = {}) {
  const [deck] = useState(() => {
    const pairs = speciesIds.flatMap((id) => [
      { uid: `${id}-a`, speciesId: id },
      { uid: `${id}-b`, speciesId: id },
    ]);
    return shuffle(pairs);
  });

  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  const isComplete =
    speciesIds.length > 0 && matched.length === speciesIds.length;

  useEffect(() => {
    if (isComplete) {
      onComplete?.();
    }
  }, [isComplete, onComplete]);

  const handleFlip = useCallback(
    (uid, speciesId) => {
      if (isLocked) return;
      if (flipped.includes(uid)) return;
      if (matched.includes(speciesId)) return;

      const next = [...flipped, uid];
      setFlipped(next);

      if (next.length === 2) {
        setMoves((prev) => prev + 1);
        const [firstUid, secondUid] = next;
        const first = deck.find((card) => card.uid === firstUid);
        const second = deck.find((card) => card.uid === secondUid);

        if (first.speciesId === second.speciesId) {
          setMatched((prev) => [...prev, first.speciesId]);
          setFlipped([]);
        } else {
          setIsLocked(true);
          setTimeout(() => {
            setFlipped([]);
            setIsLocked(false);
          }, 900);
        }
      }
    },
    [deck, flipped, isLocked, matched]
  );

  const reset = useCallback(() => {
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setIsLocked(false);
  }, []);

  return {
    deck,
    flipped,
    matched,
    moves,
    isComplete,
    handleFlip,
    reset,
  };
}
