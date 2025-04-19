import { useEffect, useState } from "react";

export const useCounterAnimation = (
  maxCount: number,
  intervalDuration: number = 100
) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < maxCount) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [count, maxCount, intervalDuration]);

  return count;
};
