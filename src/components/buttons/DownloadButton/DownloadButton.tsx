import "./style.scss";
import { WindowsIcon } from "../../base/icons/WindowsIcon";
import { MacOsIcon } from "../../base/icons/MacOsIcon";
import { LinuxIcon } from "../../base/icons/LinuxIcon";
import { DownloadIcon } from "../../base/icons/DownloadIcon";
import { VectorIcon } from "../../base/icons/VectorIcon";
import { PlatformType } from "../../base/types/platform";
import { CheckIcon } from "../../base/icons/CheckIcon";
import { useState } from "preact/hooks";

interface DownloadProps {
  platformType: PlatformType;
  owner: string;
  repo: string;
  version: string;
}

const ARCHLINK = "https://aur.archlinux.org/packages/defguard-client";

export const DownloadButton = ({ platformType, owner, repo, version }: DownloadProps) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isLinuxMenuClicked, setIsLinuxMenuClicked] = useState(false);
  const [isAppleMenuClicked, setIsAppleMenuClicked] = useState(false);
  const [platform, setPlatform] = useState(platformType);

  const handleClick = () => {
    setIsButtonClicked(true);
    setTimeout(() => {
      setIsButtonClicked(false);
    }, 800);
  };

  const handleToggleAppleMenu = () => {
    setIsAppleMenuClicked(!isAppleMenuClicked);
  };

  const handleToggleLinuxMenu = () => {
    setIsLinuxMenuClicked(!isLinuxMenuClicked);
  };

  const swapPlatform = (_platform: PlatformType) => {
    setPlatform(_platform);
  }

  return (
    <div class="download-button">
      <div class="download-header">
        {platform === PlatformType.WINDOWS && (
          <>
            <div class="download-icon">
              <WindowsIcon />
              Windows
            </div>
          </>
        )}
        {(
          platform === PlatformType.DEBIAN ||
          platform === PlatformType.ARCHLINUX
        ) && (
          <>
            <div class="download-icon">
              <LinuxIcon />
              Distribution
            </div>
            <div>
              {isLinuxMenuClicked && (
                <>
                  <div class="download-choice" onClick={handleToggleLinuxMenu}>
                    Distribution
                    <VectorIcon />
                  </div>
                  <div
                    className={`download-menu ${isLinuxMenuClicked ? "open" : "closed"}`}
                  >
                    <ul>
                      <li>
                        <a
                          onClick={() => {
                            swapPlatform(PlatformType.DEBIAN);
                            setIsLinuxMenuClicked(false);
                          }}
                        >
                          Debian
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            swapPlatform(PlatformType.ARCHLINUX);
                            setIsLinuxMenuClicked(false);
                          }}
                        >
                          ArchLinux
                        </a>
                      </li>
                    </ul>
                  </div>
                </>
              )}
              {!isLinuxMenuClicked && (
                <div class="download-choice" onClick={handleToggleLinuxMenu}>
                  Distribution
                  <VectorIcon />
                </div>
              )}
            </div>
          </>
        )}
        {(platform === PlatformType.MACOSARM ||
          platform === PlatformType.MACOSINTEL) && (
          <>
            <div class="download-icon">
              <MacOsIcon />
              macOS
            </div>
            <div>
              {isAppleMenuClicked && (
                <>
                  <div class="download-choice" onClick={handleToggleAppleMenu}>
                    Apple Hardware
                    <VectorIcon />
                  </div>
                  <div
                    className={`download-menu ${isAppleMenuClicked ? "open" : "closed"}`}
                  >
                    <ul>
                      <li>
                        <a
                          onClick={() => {
                            swapPlatform(PlatformType.MACOSINTEL);
                            setIsAppleMenuClicked(false);
                          }}
                        >
                          Intel
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            swapPlatform(PlatformType.MACOSARM);
                            setIsAppleMenuClicked(false);
                          }}
                        >
                          ARM
                        </a>
                      </li>
                    </ul>
                  </div>
                </>
              )}
              {!isAppleMenuClicked && (
                <div class="download-choice" onClick={handleToggleAppleMenu}>
                  Apple Hardware
                  <VectorIcon />
                </div>
              )}
            </div>
          </>
        )}
      </div>
      <div class="download-main">
        <div class="download-text">
          {(
            platform === PlatformType.DEBIAN ||
            platform === PlatformType.MACOSINTEL ||
            platform === PlatformType.MACOSARM ||
            platform === PlatformType.WINDOWS
          ) && <h3>Download now</h3>}
          {platform === PlatformType.ARCHLINUX && <h3>AUR package</h3>}
          {platform === PlatformType.ARCHLINUX && <>{ARCHLINK}</>}
          {platform === PlatformType.DEBIAN && <p>Debian package</p>}
          {platform === PlatformType.MACOSINTEL && <p>Apple Intel</p>}
          {platform === PlatformType.MACOSARM && <p>Apple ARM</p>}
        </div>
        <div class="btn" onClick={handleClick}>
          {isButtonClicked ? (
            <CheckIcon />
          ) : (platform !== PlatformType.ARCHLINUX ?
            <DownloadIcon
              platformType={platform}
              owner={owner}
              repo={repo}
              version={version}
            /> :
            <h3><a href={ARCHLINK}>→</a></h3>
          )}
        </div>
      </div>
      <div class="download-footer">
        {(
          platform === PlatformType.DEBIAN ||
          platform === PlatformType.ARCHLINUX
        ) && (
          <>
            <p>
              Other ways to install defguard on linux →{" "}
              <a
                href={`https://github.com/${owner}/${repo}/releases/download/v${version}/defguard-client_${version}_amd64.AppImage`}
              >
                AppImage
              </a>{" "}
              |{" "}
              <a
                href={`https://github.com/${owner}/${repo}/releases/download/v${version}/defguard-client-linux-x86_64-v${version}.tar.gz`}
              >
                Binary
              </a>
            </p>
          </>
        )}
        {(platform === PlatformType.MACOSINTEL ||
          platform === PlatformType.MACOSARM) && (
          <>
            <p>Requires version 10.5 or later</p>
          </>
        )}
      </div>
    </div>
  );
};
