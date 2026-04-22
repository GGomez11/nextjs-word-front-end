import { useState } from "react";

/**  Want to abstract the card flip handling states. This consists of creating the states here
 */

interface UseFlipCardReturn {
  isFlipped: boolean;
  displayText: boolean;
  handleFlip: () => void;
}

export function useFlipCard(): UseFlipCardReturn {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [displayText, setDisplayText] = useState(false);

  const handleFlip = () => {
    // Prevent further flips until the animation is done
    if (isFlipping) return;

    setIsFlipping(true);
    setIsFlipped((prev) => !prev);
    setTimeout(() => {
      setDisplayText((prev) => !prev);
      setIsFlipping(false);
    }, 400);
  };

  return { isFlipped, displayText, handleFlip };
}
