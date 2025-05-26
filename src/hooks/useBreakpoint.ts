import { useEffect, useState } from "react";

interface BreakpointConfig {
  mobile: number;
  desktop: number;
}

export const useBreakpoint = (config: BreakpointConfig) => {
  const [breakpoint, setBreakpoint] = useState<"mobile" | "desktop">("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setBreakpoint(width >= config.desktop ? "desktop" : "mobile");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => { window.removeEventListener("resize", handleResize); };
  }, [config.desktop]);

  return { breakpoint };
};
