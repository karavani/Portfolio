import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

/**
 * Custom hook for ScrollReveal animations
 * @param {Array} elements - Array of objects with selector and options
 * @param {Object} config - Global ScrollReveal configuration
 */
const useScrollReveal = (elements = [], config = {}) => {
  useEffect(() => {
    const defaultConfig = {
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true,
      ...config,
    };

    const sr = ScrollReveal(defaultConfig);

    elements.forEach(({ selector, options = {} }) => {
      sr.reveal(selector, options);
    });

    // Cleanup function
    return () => {
      elements.forEach(({ selector }) => {
        sr.clean(selector);
      });
    };
  }, [elements, config]);
};

export default useScrollReveal;

