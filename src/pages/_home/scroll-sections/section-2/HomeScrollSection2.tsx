import { useBreakpoints } from "../../../../components/hooks/useBreakpoints";
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
};

const title = "Easy management with beautiful UI";
const variant = ClientScrollCardVariant.CIRCLES;

const slides: SlidesData[] = [
  {
    content:
      "Effortless User Experience with secure and remote self-service onboarding and self-service management",
    image: image1,
  },
  {
    content: "Automatic and real time clients configuration synchronization",
    image: image2,
  },
  {
    content:
      "Control the users VPN client behavior (disable users to manage their devices, allow/block All Traffic through VPN, disable other then Defguard clients)",
    image: image3,
  },
  {
    content: "Beautiful and functional UI, both for management and client.",
    image: image4,
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
          variant={ClientScrollVariant.CARD}
          cardVariant={variant}
          key={i}
          mobile={breakpoint !== "desktop"}
        />
      ))}
    </div>
  );
};

export default MainContainer;
