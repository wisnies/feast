import { FC, useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { BTTButton } from './BackToTopButton.style';

export const BackToTopButton: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', toggleVisibility);
  }

  useEffect(() => {
    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility);
    return window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleClick = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <BTTButton isVisible={isVisible} onClick={handleClick}>
      <FaArrowUp />
    </BTTButton>
  );
};
