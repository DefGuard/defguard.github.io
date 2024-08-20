import "./style.scss";
import { DownloadButton } from "../../buttons/DownloadButton/DownloadButton";
import { PlatformType } from "../../base/types/platform";
import { useEffect, useState } from "preact/hooks";
import { useStore } from "@nanostores/preact";
import { clientVersion } from "../../store/versionStore";

type DownloadButtonConfig = {
  platformType: PlatformType;
  platformVersion?: string;
  architecture?: string;
};

const OWNER = "Defguard";
const REPO = "client";

export const DownloadButtonList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [buttonList, setButtonList] = useState<DownloadButtonConfig[]>([
    {
      platformType: PlatformType.WINDOWS,
    },
    {
      platformType: PlatformType.LINUX,
    },
    {
      platformType: PlatformType.MACOS,
    },
  ]);

    const $clientVersion = useStore(clientVersion);

  useEffect(() => {
    navigator.userAgentData
      .getHighEntropyValues(["architecture", "platform", "platformVersion"])
      .then((ua) => {
        console.log(ua);
        switch (ua.platform) {
          case "Windows": {
            break;
          }
          case "macOS": {
            setButtonList([
              {
                platformType: PlatformType.MACOS,
                platformVersion: ua.platformVersion,
                architecture: ua.architecture,
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
                platformVersion: ua.platformVersion,
                architecture: ua.architecture,
              },
              {
                platformType: PlatformType.WINDOWS,
              },
              {
                platformType: PlatformType.MACOS,
              },
            ]);
            break;
          }
          default:
            throw Error("Cannot determine user os platform!");
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
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
        platformVersion={buttonList[0].platformVersion}
        architecture={buttonList[0].architecture}
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
        platformVersion={buttonList[1].platformVersion}
        architecture={buttonList[1].architecture}
      />
      <DownloadButton
        platformType={buttonList[2].platformType}
        owner={OWNER}
        repo={REPO}
        version={$clientVersion}
        platformVersion={buttonList[2].platformVersion}
        architecture={buttonList[2].architecture}
      />
    </section>
  );
};
