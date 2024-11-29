import {
  ClientScrollCardVariant,
  ClientScrollVariant,
} from "../../components/client-side/ClientHomeScrollSlide/type";
import HomeScrollSection from "../HomeScrollSection";
import image1 from "./assets/slide-1.png?url";
import image2 from "./assets/slide-2.png?url";
import image3 from "./assets/slide-3.png?url";
import image4 from "./assets/slide-4.png?url";

type SlidesData = {
  image: string;
  content: string;
  title: string;
};

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
  return (
    <HomeScrollSection
      data={slides}
      cardVariant={variant}
      variant={ClientScrollVariant.CARD}
      scrollerId="section-2-slider"
    />
  );
};

export default MainContainer;
