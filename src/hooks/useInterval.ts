import { useEffect, useRef } from 'react';

function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current && savedCallback.current();
    }
    
    if (delay) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }

  }, [delay]);
}

export default useInterval;
