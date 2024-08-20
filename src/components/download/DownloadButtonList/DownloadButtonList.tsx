import "./style.scss";
import { DownloadButton } from "../../buttons/DownloadButton/DownloadButton";
import { PlatformType } from "../../base/types/platform";
import { useEffect, useState } from "preact/hooks";
import { useStore } from "@nanostores/preact";
import { clientVersion } from "../../store/versionStore";
import { detectOperatingSystem } from "../../../utils/detectOpratingSystem.ts";

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
      platformType: PlatformType.LINUX,
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
              platformType: PlatformType.LINUX,
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
              platformType: PlatformType.LINUX,
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
              platformType: PlatformType.LINUX,
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
    <section class="download-platform">
      <DownloadButton
        platformType={buttonList[0].platformType}
        owner={OWNER}
        repo={REPO}
        version={$clientVersion}
      />
      <div class="download-separator">
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
