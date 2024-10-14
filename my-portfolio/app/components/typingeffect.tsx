// components/TypingEffect.tsx

import React, { useEffect, useState } from "react";

interface TypingEffectProps {
  text: string;
  speed?: number; // speed is optional
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 150 }) => {
  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return (
    <span className="text-gray-100 dark:text-gray-300">{displayedText}</span>
  );
};

export default TypingEffect;
