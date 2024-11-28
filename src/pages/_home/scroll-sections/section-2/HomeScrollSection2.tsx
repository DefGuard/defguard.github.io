import { useMemo } from "react";
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
import image4 from "./assets/slide-4.png?url";

type SlidesData = {
  image: string;
  content: string;
  title: string;
};

const title = "Easy management with beautiful UI";
const variant = ClientScrollCardVariant.CIRCLES;

const slides: SlidesData[] = [
  {
    content:
      "Effortless User Experience with secure and remote self-service onboarding and self-service management",
    image: image1,
    title: "Easy management with beautiful UI",
  },
  {
    content: "Automatic and real time clients configuration synchronization",
    image: image2,
    title: "Easy management with beautiful UI",
  },
  {
    content:
      "Control the users VPN client behavior (disable users to manage their devices, allow/block All Traffic through VPN, disable other then Defguard clients)",
    image: image3,
    title: "Easy management with beautiful UI",
  },
  {
    content: "Beautiful and functional UI, both for management and client.",
    image: image4,
    title: "Easy management with beautiful UI",
  },
];
const MainContainer = () => {
  const { breakpoint } = useBreakpoint({
    mobile: 0,
    desktop: 1200,
  });
  const scrollSlides = useMemo(() => {
    const res: ScrollSliderSlide[] = slides.map((s, i) => ({
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      id: `section-2-slide-${i}`,
      component: (
        <ClientHomeScrollSlide
          {...s}
          title={title}
          variant={ClientScrollVariant.CARD}
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
      {breakpoint === "desktop" && (
        <ScrollSlider id="section-2-slider" components={scrollSlides} />
      )}
      {breakpoint === "mobile" &&
        slides.map((data, i) => (
          <ClientHomeScrollSlide
            {...data}
            title={title}
            variant={ClientScrollVariant.CARD}
            cardVariant={variant}
            key={i}
            mobile={true}
          />
        ))}
    </div>
  );
};

export default MainContainer;
