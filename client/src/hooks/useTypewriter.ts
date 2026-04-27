import { useState, useEffect } from 'react';

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
}

export function useTypewriter({ text, speed = 50, delay = 0, onComplete }: UseTypewriterOptions) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setDisplayText(text);
      setIsComplete(true);
      onComplete?.();
      return;
    }

    let timeoutId: NodeJS.Timeout;
    let currentIndex = 0;

    const startTyping = () => {
      setIsTyping(true);
      
      const typeNextChar = () => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
          timeoutId = setTimeout(typeNextChar, speed);
        } else {
          setIsTyping(false);
          setIsComplete(true);
          onComplete?.();
        }
      };

      typeNextChar();
    };

    timeoutId = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, speed, delay, onComplete]);

  return { displayText, isTyping, isComplete };
}

interface UseTypewriterSequenceOptions {
  items: { text: string; speed?: number }[];
  initialDelay?: number;
  delayBetween?: number;
}

export function useTypewriterSequence({ items, initialDelay = 0, delayBetween = 200 }: UseTypewriterSequenceOptions) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayTexts, setDisplayTexts] = useState<string[]>(items.map(() => ''));
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setDisplayTexts(items.map(item => item.text));
      setIsComplete(true);
      setHasStarted(true);
      return;
    }

    const startTimeout = setTimeout(() => {
      setHasStarted(true);
    }, initialDelay);

    return () => clearTimeout(startTimeout);
  }, [items, initialDelay]);

  useEffect(() => {
    if (!hasStarted) return;
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    if (currentIndex >= items.length) {
      setIsComplete(true);
      return;
    }

    const item = items[currentIndex];
    let charIndex = 0;
    const speed = item.speed || 50;

    const typeNextChar = () => {
      if (charIndex < item.text.length) {
        setDisplayTexts(prev => {
          const newTexts = [...prev];
          newTexts[currentIndex] = item.text.slice(0, charIndex + 1);
          return newTexts;
        });
        charIndex++;
        setTimeout(typeNextChar, speed);
      } else {
        setTimeout(() => {
          setCurrentIndex(prev => prev + 1);
        }, delayBetween);
      }
    };

    typeNextChar();
  }, [currentIndex, hasStarted, items, delayBetween]);

  return { displayTexts, isComplete, currentIndex };
}
