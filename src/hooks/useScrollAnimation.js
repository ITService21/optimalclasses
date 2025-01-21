import { useEffect, useRef } from "react";

const useScrollAnimation = (animationClass, threshold = 0.5) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add animation class when element is in view
          entry.target.classList.add(animationClass);

          // Remove the animation class after the animation completes (1s duration)
          setTimeout(() => {
            entry.target.classList.remove(animationClass);
          }, 1000);  // Match this to your animation duration
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [animationClass, threshold]);

  return elementRef;
};

export default useScrollAnimation;
