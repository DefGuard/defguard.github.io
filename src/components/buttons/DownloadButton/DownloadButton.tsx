import "./style.scss";
import { WindowsIcon } from "../../base/icons/WindowsIcon";
import { MacOsIcon } from "../../base/icons/MacOsIcon";
import { LinuxIcon } from "../../base/icons/LinuxIcon";
import { DownloadIcon } from "../../base/icons/DownloadIcon";
import { CopyIcon } from "../../base/icons/CopyIcon";
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

export const DownloadButton = ({ platformType, owner, repo, version }: DownloadProps) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isLinuxMenuClicked, setIsLinuxMenuClicked] = useState(false);
  const [isAppleMenuClicked, setIsAppleMenuClicked] = useState(false);

  const DEB_COMMAND = `sudo pkg -i https://github.com/${owner}/${repo}/releases/download/v${version}/defguard-client_${version}_amd64.deb`;
  const LINUX_COMMAND = `curl -L https://github.com/${owner}/${repo}/releases/download/v${version}/defguard-client-linux-x86_64-v${version}.tar.gz`;
  const [currentCommand, setCurrentCommand] = useState(LINUX_COMMAND);
  console.log(currentCommand);

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

  return (
    <div class="download-button">
      <div class="download-header">
        {platformType === PlatformType.WINDOWS && (
          <>
            <div class="download-icon">
              <WindowsIcon />
              Windows
            </div>
          </>
        )}
        {platformType === PlatformType.LINUX && (
          <>
            <div class="download-icon">
              <LinuxIcon />
              Linux
            </div>
            <div>
              {isLinuxMenuClicked && (
                <>
                  <div class="download-choice" onClick={handleToggleLinuxMenu}>
                    Stable
                    <VectorIcon />
                  </div>
                  <div
                    className={`download-menu ${isLinuxMenuClicked ? "open" : "closed"}`}
                  >
                    <ul>
                      <li>
                        <a
                          onClick={() => {
                            setCurrentCommand(DEB_COMMAND);
                            setIsLinuxMenuClicked(false);
                          }}
                        >
                          DEB
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            setCurrentCommand(LINUX_COMMAND);
                            setIsLinuxMenuClicked(false);
                          }}
                        >
                          Linux
                        </a>
                      </li>
                    </ul>
                  </div>
                </>
              )}
              {!isLinuxMenuClicked && (
                <div class="download-choice" onClick={handleToggleLinuxMenu}>
                  Stable
                  <VectorIcon />
                </div>
              )}
            </div>
          </>
        )}
        {(platformType === PlatformType.MACOSARM ||
          platformType === PlatformType.MACOSINTEL) && (
          <>
            <div class="download-icon">
              <MacOsIcon />
              macOS
            </div>
            <div>
              {isAppleMenuClicked && (
                <>
                  <div class="download-choice" onClick={handleToggleAppleMenu}>
                    Apple Chip
                    <VectorIcon />
                  </div>
                  <div
                    className={`download-menu ${isAppleMenuClicked ? "open" : "closed"}`}
                  >
                    <ul>
                      <li>
                        <a
                          onClick={() => setIsAppleMenuClicked(false)}
                          href={`https://github.com/${owner}/${repo}/releases/download/v${version}/defguard-x86_64-apple-darwin-${version}.pkg`}
                        >
                          Intel
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => setIsAppleMenuClicked(false)}
                          href={`https://github.com/${owner}/${repo}/releases/download/v${version}/defguard-aarch64-apple-darwin-${version}.pkg`}
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
                  Apple Chip
                  <VectorIcon />
                </div>
              )}
            </div>
          </>
        )}
      </div>
      <div class="download-main">
        <div class="download-text">
          {platformType === PlatformType.WINDOWS && (
            <>
              <h3>Download now</h3>
            </>
          )}
          {platformType === PlatformType.LINUX && (
            <>
              <p>{currentCommand}</p>
            </>
          )}
          {platformType === PlatformType.MACOSINTEL && (
            <>
              <h3>Download now</h3>
              <p>Apple Intel</p>
            </>
          )}
          {platformType === PlatformType.MACOSARM && (
            <>
              <h3>Download now</h3>
              <p>Apple Silicon</p>
            </>
          )}
        </div>
        <div class="copy" onClick={handleClick}>
          {(platformType === PlatformType.WINDOWS ||
            platformType === PlatformType.MACOSINTEL ||
            platformType === PlatformType.MACOSARM) && (
            <>
              {isButtonClicked ? (
                <CheckIcon />
              ) : (
                <DownloadIcon
                  platformType={platformType}
                  owner={owner}
                  repo={repo}
                  version={version}
                />
              )}
            </>
          )}
          {platformType === PlatformType.LINUX && (
            <>
              {isButtonClicked ? <CheckIcon /> : <CopyIcon textToCopy={currentCommand} />}
            </>
          )}
        </div>
      </div>
      <div class="download-footer">
        {platformType === PlatformType.LINUX && (
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
                href={`https://github.com/${owner}/${repo}/releases/download/v${version}/defguard-service-linux-x86_64-v${version}.tar.gz`}
              >
                Binary
              </a>
            </p>
          </>
        )}
        {(platformType === PlatformType.MACOSINTEL ||
          platformType === PlatformType.MACOSARM) && (
          <>
            <p>Requires version 10.5 or later</p>
          </>
        )}
      </div>
    </div>
  );
};
