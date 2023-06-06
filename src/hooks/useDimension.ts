import { useEffect, useRef } from "react";

export const useDimensions = (ref: any) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current = {
      width: ref.current.offsetWidth,
      height: ref.current.offsetHeight,
    };
  }, []);

  return dimensions.current;
};
