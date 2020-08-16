import { useState, useEffect } from 'react';

const useInfiniteScroll = elementId => {
  const [isBottom, setIsBottom] = useState(false);
  useEffect(() => {
    function handleScroll() {
      let currentHeight =
        window.innerHeight + document.documentElement.scrollTop;
      const heightCoefficient = 0.99;
      const minimumHeightToTrigger =
        document.getElementById(elementId).offsetHeight * heightCoefficient;

      if (currentHeight < minimumHeightToTrigger) return;
      setIsBottom(true);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [elementId]);

  return [isBottom, setIsBottom];
};

export default useInfiniteScroll;
