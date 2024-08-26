import { useEffect, useState } from "preact/hooks";
import type { Testmonial } from "../components/base/types/contentType";

const interval = 5000;

export function useCarousel(testmonials: Testmonial[]) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testmonials.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [testmonials.length, interval]);

  return { activeIndex };
}