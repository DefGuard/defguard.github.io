import { useMemo } from "react";
import useBreakpoint from "use-breakpoint";

import ScrollSlider from "../../../../components/client-side/ScrollSlider/ScrollSlider";
import type { ScrollSliderSlide } from "../../../../components/client-side/ScrollSlider/types";
import ClientHomeScrollSlide from "../../components/client-side/ClientHomeScrollSlide/ClientHomeScrollSlide";
import {
  ClientScrollCardVariant,
  ClientScrollVariant,
} from "../../components/client-side/ClientHomeScrollSlide/type";
import slide2Image from "./assets/2fa.png?url";
import slide1Image from "./assets/scraping.png?url";
import slide3Image from "./assets/security.png?url";

const slideVariant = ClientScrollCardVariant.LINES;

type SlidesData = {
  image: string;
  content: string;
  title: string;
};

const slides: SlidesData[] = [
  {
    content:
      "Providing on-premise deployment, Defguard is valuable for organizations seeking to strengthen their security posture without depending on third-party cloud solutions that promise security but gather your data or use your company data for AI training",
    image: slide1Image,
    title: "On-premise deployment protects data from AI",
  },
  {
    image: slide2Image,
    content:
      "World's First WireGuard® VPN with 2FA/MFA - Defguard introduces unique Multi-Factor Authentication (MFA) for the WireGuard® VPN protocol, enhancing security with an added layer of user verification to support compliance with GDPR, HIPAA, PCI DSS, NIST, FISMA, and CMMC standards.",
    title: "On-premise deployment protects data from AI",
  },
  {
    image: slide3Image,
    content:
      "Our unique security approach in: architecture, Multi-Factor Authentication on WireGuard® protocol level, secure remote enrollment and onboarding provides a unique way to secure your data and applications.",
    title: "On-premise deployment protects data from AI",
  },
];

const MainContainer = () => {
  const { breakpoint } = useBreakpoint({
    mobile: 0,
    desktop: 1200,
  });

  const mobile = useMemo(() => breakpoint !== "desktop", [breakpoint]);

  const scrollSlides = useMemo((): ScrollSliderSlide[] => {
    const res: ScrollSliderSlide[] = slides.map((s, i) => ({
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      id: `section-1-slide-${i + 1}`,
      component: (
        <ClientHomeScrollSlide
          key={i}
          cardVariant={slideVariant}
          mobile={false}
          variant={ClientScrollVariant.CARD}
          {...s}
        />
      ),
    }));
    return res;
  }, []);

  return (
    <div className="scroll-sections">
      {mobile &&
        slides.map((data, i) => (
          <ClientHomeScrollSlide
            key={i}
            cardVariant={slideVariant}
            mobile={true}
            variant={ClientScrollVariant.CARD}
            {...data}
          />
        ))}
      {!mobile && <ScrollSlider components={scrollSlides} id="scroll-slider-section-1" />}
    </div>
  );
};

export default MainContainer;
