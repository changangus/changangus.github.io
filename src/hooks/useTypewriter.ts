import { useState, useEffect } from 'react';

export const useTypewriter = (words: string[], typingSpeed = 150, deletingSpeed = 100, pauseTime = 2000) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    const type = () => {
      setText(prev => {
        if (isDeleting) {
          return currentWord.substring(0, prev.length - 1);
        } else {
          return currentWord.substring(0, prev.length + 1);
        }
      });
    };

    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentWord) {
      // Finished typing word, wait before deleting
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === '') {
      // Finished deleting, move to next word
      timer = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex(prev => prev + 1);
      }, typingSpeed);
    } else {
      // Typing or deleting characters
      timer = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
};
