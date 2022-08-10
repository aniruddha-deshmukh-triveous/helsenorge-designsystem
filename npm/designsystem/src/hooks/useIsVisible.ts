import { useState } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';

/**
 * Sjekk om et HTML-element er synlig i vinduet, eller ikke.
 *
 * @param ref Element som skal observeres
 * @param threshold Hvor synlig må elementet være? Default = 1 (helt synlig)
 * @param options Objekt med options for IntersectionObserver, f.eks. threshold for å bestemme når callbacken skal fyres
 * @returns true hvis objektet er synlig lik threshold eller mer, false hvis ikke
 */
export const useIsVisible = (ref: React.RefObject<HTMLElement>, threshold = 1, options?: IntersectionObserverInit): boolean => {
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersectChange: IntersectionObserverCallback = entries => {
    setIsVisible(entries[0].intersectionRatio >= threshold);
  };

  useIntersectionObserver(ref, handleIntersectChange, { threshold, ...options });

  return isVisible;
};
