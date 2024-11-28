import { type ReactNode, useMemo } from "react";
import useBreakpoint from "use-breakpoint";

import ScrollSlider from "../../../../components/client-side/ScrollSlider/ScrollSlider";
import type { ScrollSliderSlide } from "../../../../components/client-side/ScrollSlider/types";
import ClientHomeScrollSlide from "../../components/client-side/ClientHomeScrollSlide/ClientHomeScrollSlide";
import {
  ClientScrollCardVariant,
  ClientScrollVariant,
} from "../../components/client-side/ClientHomeScrollSlide/type";
import image1 from "./assets/slide-1.png?url";
import image2 from "./assets/slide-2.png?url";
import image3 from "./assets/slide-3.png?url";

type SlidesData = {
  image: string;
  content: ReactNode;
  title: string;
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
    title: "Easy management with beautiful UI",
  },
  {
    title: "Easy management with beautiful UI",
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
    title: "Easy management with beautiful UI",
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
  const { breakpoint } = useBreakpoint({
    mobile: 0,
    desktop: 1200,
  });

  const scrollSlides = useMemo(() => {
    const res: ScrollSliderSlide[] = slides.map((data, i) => ({
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      id: `section-3-slide-${i + 1}`,
      component: (
        <ClientHomeScrollSlide
          {...data}
          title={title}
          variant={ClientScrollVariant.SIMPLE}
          cardVariant={variant}
          key={i}
          mobile={false}
        />
      ),
    }));
    return res;
  }, []);

  return (
    <div className="scroll-sections">
      {breakpoint === "mobile" &&
        slides.map((data, i) => (
          <ClientHomeScrollSlide
            {...data}
            title={title}
            variant={ClientScrollVariant.SIMPLE}
            cardVariant={variant}
            key={i}
            mobile={true}
          />
        ))}
      {breakpoint === "desktop" && (
        <ScrollSlider id="section-3-slider" components={scrollSlides} />
      )}
    </div>
  );
};

export default MainContainer;
