import { useMemo } from "react";

import { useBreakpoints } from "../../../../components/hooks/useBreakpoints";
import ClientHomeScrollSlide from "../../components/client-side/ClientHomeScrollSlide/ClientHomeScrollSlide";
import {
  ClientScrollCardVariant,
  ClientScrollVariant,
} from "../../components/client-side/ClientHomeScrollSlide/type";
import slide2Image from "./assets/2fa.png?url";
import slide1Image from "./assets/scraping.png?url";
import slide3Image from "./assets/security.png?url";

const title = "On-premise deployment protects data from AI";
const slideVariant = ClientScrollCardVariant.LINES;

type SlidesData = {
  image: string;
  content: string;
};

const slides: SlidesData[] = [
  {
    content:
      "Providing on-premise deployment, Defguard is valuable for organizations seeking to strengthen their security posture without depending on third-party cloud solutions that promise security but gather your data or use your company data for AI training",
    image: slide1Image,
  },
  {
    image: slide2Image,
    content:
      "World's First WireGuard® VPN with 2FA/MFA - Defguard introduces unique Multi-Factor Authentication (MFA) for the WireGuard® VPN protocol, enhancing security with an added layer of user verification to support compliance with GDPR, HIPAA, PCI DSS, NIST, FISMA, and CMMC standards.",
  },
  {
    image: slide3Image,
    content:
      "Our unique security approach in: architecture, Multi-Factor Authentication on WireGuard® protocol level, secure remote enrollment and onboarding provides a unique way to secure your data and applications.",
  },
];

const MainContainer = () => {
  const { breakpoint } = useBreakpoints();
  const mobile = useMemo(() => breakpoint !== "desktop", [breakpoint]);

  return (
    <div className="scroll-sections">
      {slides.map((data, i) => (
        <ClientHomeScrollSlide
          key={i}
          title={title}
          cardVariant={slideVariant}
          mobile={mobile}
          variant={ClientScrollVariant.CARD}
          {...data}
        />
      ))}
    </div>
  );
};

export default MainContainer;
