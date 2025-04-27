import { useEffect, useState } from "react";

export const useElementDistanceFromTop = (elementId: string) => {
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const element = document.getElementById(elementId);

    if (!element) return console.error("Element not found");

    const rect = element.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const distanceToTop = rect.top + scrollTop;

    setDistance(distanceToTop);
  }, []);

  return distance;
};
