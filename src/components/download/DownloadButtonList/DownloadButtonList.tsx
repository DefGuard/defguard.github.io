import "./style.scss";
import { DownloadButton } from "../../buttons/DownloadButton/DownloadButton";
import { PlatformType } from "../../base/types/platform";
import { useEffect, useState } from "preact/hooks";
import { useStore } from "@nanostores/preact";
import { clientVersion } from "../../download/DownloadInfo/versionStore";

type DownloadButtonConfig = {
    platformType: PlatformType;
    platformVersion?: string;
    architecture?: string;
};

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
        }
    ]);

  useEffect(() => {
    navigator.userAgentData
    .getHighEntropyValues(["architecture", "platform", "platformVersion"])
    .then((ua) => {
      console.log(ua);
        switch(ua.platform) {
            case 'Windows': {
                break;
            }
            case 'macOS': {
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
                        platformType: PlatformType.WINDOWS
                    }
                ]);
                break;
            }
            case 'Linux': {
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
                    }
                ]);
                break;
            }
            default: throw Error("Cannot determine user os platform!");
        }
        setIsLoading(false);
    }).catch(error => {
        console.log(error);
        setIsLoading(false);
    });
  }, []);
  const $clientVersion = useStore(clientVersion);

  if (isLoading || !buttonList.length) return null;

  return (
    <section class="download-platform">
      <DownloadButton platformType={buttonList.at(0).platformType} />
      <div class="download-separator">
        <hr />
        <p>other variants</p>
        <hr />
      </div>
      <DownloadButton platformType={PlatformType.LINUX} />
      <DownloadButton platformType={PlatformType.MACOS} />
    </section>
  );
};
