import useBreakpoint from "use-breakpoint";

export const useBreakpoints = () => {
  const hookRes = useBreakpoint({
    mobile: 0,
    tablet: 768,
    desktop: 992,
  });

  return hookRes;
};
