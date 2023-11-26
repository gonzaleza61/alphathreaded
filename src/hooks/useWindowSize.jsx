import { useLayoutEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const handlesize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useLayoutEffect(() => {
    handlesize();

    window.addEventListener("resize", handlesize);

    return () => window.removeEventListener("reize", handlesize);
  }, []);

  return windowSize;
};

export default useWindowSize;
