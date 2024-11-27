import type { ReactNode } from "react";

import ClientHomeScrollSlide from "../../components/client-side/ClientHomeScrollSlide/ClientHomeScrollSlide";
import {
  ClientScrollCardVariant,
  ClientScrollVariant,
} from "../../components/client-side/ClientHomeScrollSlide/type";
import image1 from "./assets/slide-1.png?url";
import image2 from "./assets/slide-2.png?url";
import image3 from "./assets/slide-3.png?url";
import { useBreakpoints } from "../../../../components/hooks/useBreakpoints";

type SlidesData = {
  image: string;
  content: ReactNode;
};

const title = "Easy management with beautiful UI";
const variant = ClientScrollCardVariant.CIRCLES;

const slides: SlidesData[] = [
  {
    content: (
      <ul>
        <li>
          Automate processes that involve your organization&apos;s data using: API - all
          functionalities are exposed via REST API
        </li>
        <li>
          Webhooks - outgoing webhooks are a simple way for defguard to notify your
          systems of ongoing changes in identity management (user was added, deleted,
          modified) or hardware key provisioning (easily propagateGPG/PGP or SSH keys to
          your internal systems)
        </li>
      </ul>
    ),
    image: image1,
  },
  {
    content: (
      <p>
        Looking for transparent and verifiable security solutions and not promises? As an
        open-source platform, Defguard offers full transparency, enabling organizations to
        verify security protocols and the actual code, ensuring trust through visible,
        verifiable security practices and not promises.
      </p>
    ),
    image: image2,
  },
  {
    content: (
      <p>
        We&apos;ve implemented defguard in Rust for code portability, security, and speed.
        You can easily run defguard on various Linux-based systems on x86, arm, and other
        architectures (including Raspberry PI, OpenWRT, etc.) and Unix systems FreeBSD,
        OpenBSD, and others. We&apos;ve prepared various Linux and OPNsense® (FreeBSD)
        but we are constantly working on other platforms.
      </p>
    ),
    image: image3,
  },
];

const MainContainer = () => {
  const { breakpoint } = useBreakpoints();
  return (
    <div className="scroll-sections">
      {slides.map((data, i) => (
        <ClientHomeScrollSlide
          {...data}
          title={title}
          variant={ClientScrollVariant.SIMPLE}
          cardVariant={variant}
          key={i}
          mobile={breakpoint !== "desktop"}
        />
      ))}
    </div>
  );
};

export default MainContainer;
