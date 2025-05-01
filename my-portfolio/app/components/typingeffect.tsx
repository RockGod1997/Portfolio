import React, { useEffect, useRef, useState } from "react";

interface TypingEffectProps {
  text: string;
  speed?: number; // Typing speed in milliseconds
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 150 }) => {
  const [displayedText, setDisplayedText] = useState<string>("");

  // Use a ref to track the current index to avoid reinitializing on every render
  const indexRef = useRef<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (indexRef.current < text.length) {
        // Increment the index first, then append the character
        const nextIndex = indexRef.current;
        setDisplayedText((prev) => prev + text.charAt(nextIndex));
        indexRef.current += 1; // Increment the index
      } else {
        clearInterval(intervalId); // Clear the interval after the last character
      }
    }, speed);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [text, speed]);

  return <span className="text-gray-100">{displayedText}</span>;
};

export default TypingEffect;
