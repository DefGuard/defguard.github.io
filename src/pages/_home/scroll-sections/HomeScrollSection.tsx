import { type ReactNode, useMemo } from "react";
import useBreakpoint from "use-breakpoint";

import ScrollSlider from "../../../components/client-side/ScrollSlider/ScrollSlider";
import type { ScrollSliderSlide } from "../../../components/client-side/ScrollSlider/types";
import ClientHomeScrollSlide from "../components/client-side/ClientHomeScrollSlide/ClientHomeScrollSlide";
import {
  ClientScrollCardVariant,
  ClientScrollVariant,
} from "../components/client-side/ClientHomeScrollSlide/type";

type Props = {
  data: {
    image: string;
    content: ReactNode;
    title: string;
  }[];
  variant: ClientScrollVariant;
  cardVariant: ClientScrollCardVariant;
  scrollerId: string;
};

const Component = ({ data, variant, scrollerId, cardVariant }: Props) => {
  const { breakpoint } = useBreakpoint({
    mobile: 0,
    desktop: 1200,
  });

  const scrollSliders = useMemo(() => {
    const res: ScrollSliderSlide[] = data.map((s, i) => ({
      id: `${scrollerId}-slide-${i + 1}`,
      component: (
        <ClientHomeScrollSlide
          {...s}
          variant={ClientScrollVariant.CARD}
          cardVariant={cardVariant}
          mobile={false}
        />
      ),
    }));
    return res;
  }, [cardVariant, data, scrollerId]);

  return (
    <div className="scroll-sections">
      {breakpoint === "desktop" && (
        <ScrollSlider id={scrollerId} components={scrollSliders} />
      )}
      <div className="static-slides">
        {data.map((s, i) => (
          <ClientHomeScrollSlide
            {...s}
            variant={variant}
            cardVariant={cardVariant}
            mobile={true}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Component;
