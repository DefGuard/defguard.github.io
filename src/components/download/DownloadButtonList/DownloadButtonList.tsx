import "./style.scss";

import { useStore } from "@nanostores/preact";
import { useEffect, useState } from "react";

import { detectOperatingSystem } from "../../../utils/detectOpratingSystem.ts";
import { PlatformType } from "../../base/types/platform";
import { DownloadButton } from "../../buttons/DownloadButton/DownloadButton";
import { clientVersion } from "../../store/versionStore";

type DownloadButtonConfig = {
  platformType: PlatformType;
};

const OWNER = "DefGuard";
const REPO = "client";

export const DownloadButtonList = () => {
  const [isLoading, setIsLoading] = useState(true);
  // set Windows option as a default
  const [buttonList, setButtonList] = useState<DownloadButtonConfig[]>([
    {
      platformType: PlatformType.WINDOWS,
    },
    {
      platformType: PlatformType.DEBIAN,
    },
    {
      platformType: PlatformType.MACOSARM,
    },
  ]);

  const $clientVersion = useStore(clientVersion);

  useEffect(() => {
    detectOperatingSystem().then((val) => {
      switch (val) {
        case "ARM": {
          setButtonList([
            {
              platformType: PlatformType.MACOSARM,
            },
            {
              platformType: PlatformType.DEBIAN,
            },
            {
              platformType: PlatformType.WINDOWS,
            },
          ]);
          break;
        }
        case "Intel": {
          setButtonList([
            {
              platformType: PlatformType.MACOSINTEL,
            },
            {
              platformType: PlatformType.DEBIAN,
            },
            {
              platformType: PlatformType.WINDOWS,
            },
          ]);
          break;
        }
        case "Linux": {
          setButtonList([
            {
              platformType: PlatformType.DEBIAN,
            },
            {
              platformType: PlatformType.WINDOWS,
            },
            {
              platformType: PlatformType.MACOSARM,
            },
          ]);
          break;
        }
      }
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return null;

  return (
    <section className="download-platform">
      <DownloadButton
        platformType={buttonList[0].platformType}
        owner={OWNER}
        repo={REPO}
        version={$clientVersion}
      />
      <div className="download-separator">
        <hr />
        <p>other variants</p>
        <hr />
      </div>
      <DownloadButton
        platformType={buttonList[1].platformType}
        owner={OWNER}
        repo={REPO}
        version={$clientVersion}
      />
      <DownloadButton
        platformType={buttonList[2].platformType}
        owner={OWNER}
        repo={REPO}
        version={$clientVersion}
      />
    </section>
  );
};
