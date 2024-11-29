import { type ReactNode } from "react";

import {
  ClientScrollCardVariant,
  ClientScrollVariant,
} from "../../components/client-side/ClientHomeScrollSlide/type";
import HomeScrollSection from "../HomeScrollSection";
import image1 from "./assets/slide-1.png?url";
import image2 from "./assets/slide-2.png?url";
import image3 from "./assets/slide-3.png?url";

type SlidesData = {
  image: string;
  content: ReactNode;
  title: string;
};

const slides: SlidesData[] = [
  {
    title: "Open Source for trust and transparency",
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
    title: "Integrations",
  },
  {
    title: "Portability & speed",
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
  return (
    <HomeScrollSection
      cardVariant={ClientScrollCardVariant.CIRCLES}
      variant={ClientScrollVariant.SIMPLE}
      data={slides}
      scrollerId="section-3-slides"
    />
  );
};

export default MainContainer;
