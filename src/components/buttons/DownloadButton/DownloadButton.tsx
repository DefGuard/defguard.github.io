import "./style.scss";

import { useEffect, useState } from "react";

import { CheckIcon } from "../../base/icons/CheckIcon";
import { DownloadIcon } from "../../base/icons/DownloadIcon";
import { LinuxIcon } from "../../base/icons/LinuxIcon";
import { MacOsIcon } from "../../base/icons/MacOsIcon";
import { VectorIcon } from "../../base/icons/VectorIcon";
import { WindowsIcon } from "../../base/icons/WindowsIcon";
import { PlatformType } from "../../base/types/platform";

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
  const [downloadName, setDownloadName] = useState("");

  useEffect(() => {
    switch (platform) {
      case PlatformType.WINDOWS: {
        setDownloadName(`defguard-client_${version}_x64_en-US.exe`);
        break;
      }
      case PlatformType.MACOSARM: {
        setDownloadName(`defguard-aarch64-apple-darwin-${version}.pkg`);
        break;
      }
      case PlatformType.MACOSINTEL: {
        setDownloadName(`defguard-x86_64-apple-darwin-${version}.pkg`);
        break;
      }
      case PlatformType.DEBIAN: {
        setDownloadName(`defguard-client_${version}_amd64.deb`);
        break;
      }
      case PlatformType.ARCHLINUX: {
        setDownloadName(`defguard-client_${version}_amd64.deb`);
        break;
      }
    }
  }, [platform, version]);

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
  };

  useEffect(() => {
    console.log(platformType);
  }, [platformType]);

  return (
    <div className="download-button">
      <div className="download-header">
        {platform === PlatformType.WINDOWS && (
          <>
            <div className="download-icon">
              <WindowsIcon />
              Windows
            </div>
          </>
        )}
        {(platform === PlatformType.DEBIAN || platform === PlatformType.ARCHLINUX) && (
          <>
            <div className="download-icon">
              <LinuxIcon />
              Linux
            </div>
            <div>
              {isLinuxMenuClicked && (
                <>
                  <div className="download-choice" onClick={handleToggleLinuxMenu}>
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
                <div className="download-choice" onClick={handleToggleLinuxMenu}>
                  Distribution
                  <VectorIcon />
                </div>
              )}
            </div>
          </>
        )}
        {(platform === PlatformType.MACOSARM || platform === PlatformType.MACOSINTEL) && (
          <>
            <div className="download-icon">
              <MacOsIcon />
              macOS
            </div>
            <div>
              {isAppleMenuClicked && (
                <>
                  <div className="download-choice" onClick={handleToggleAppleMenu}>
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
                <div className="download-choice" onClick={handleToggleAppleMenu}>
                  Apple Hardware
                  <VectorIcon />
                </div>
              )}
            </div>
          </>
        )}
      </div>
      <a 
        href={platform === PlatformType.ARCHLINUX ? ARCHLINK : `https://github.com/${owner}/${repo}/releases/download/v${version}/${downloadName}`}
        className="download-main"
        onClick={handleClick}
      >
        <div className="download-text">
          {(platform === PlatformType.DEBIAN ||
            platform === PlatformType.MACOSINTEL ||
            platform === PlatformType.MACOSARM ||
            platform === PlatformType.WINDOWS) && <>Download now</>}
          {platform === PlatformType.ARCHLINUX && <>AUR package</>}
          {platform === PlatformType.DEBIAN && <p>Debian package</p>}
          {platform === PlatformType.MACOSINTEL && <p>Apple Intel</p>}
          {platform === PlatformType.MACOSARM && <p>Apple ARM</p>}
        </div>
        <div className="btn">
          {isButtonClicked ? (
            <CheckIcon />
          ) : platform !== PlatformType.ARCHLINUX ? (
            <DownloadIcon />
          ) : (
            <h3>→</h3>
          )}
        </div>
      </a>
      <div className="download-footer">
        {(platform === PlatformType.DEBIAN || platform === PlatformType.ARCHLINUX) && (
          <>
            <p>
              Other ways to install defguard on linux →{" "}
              <a
                href={`https://github.com/${owner}/${repo}/releases/download/v${version}/defguard-client-linux-x86_64-v${version}.tar.gz`}
              >
                Binary
              </a>
            </p>
          </>
        )}
        {(platform === PlatformType.MACOSINTEL || platform === PlatformType.MACOSARM) && (
          <>
            <p>Requires version 10.5 or later</p>
          </>
        )}
      </div>
    </div>
  );
};
