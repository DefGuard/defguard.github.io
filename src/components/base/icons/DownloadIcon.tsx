import { useEffect, useState } from "react";

import { PlatformType } from "../types/platform";

interface DownloadProps {
  platformType: PlatformType;
  owner: string;
  repo: string;
  version: string;
}

export const DownloadIcon = ({ platformType, owner, repo, version }: DownloadProps) => {
  const [downloadName, setDownloadName] = useState("");

  useEffect(() => {
    switch (platformType) {
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
    }
  }, [platformType, version]);

  return (
    <a
      href={`https://github.com/${owner}/${repo}/releases/download/v${version}/${downloadName}`}
      aria-label="download-icon"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path d="M8 2L8 11" stroke="#222222" />
        <path d="M3.75 7L7.99264 11.2426L12.2353 7" stroke="#222222" />
        <path d="M1 12V15H15V12" stroke="#222222" />
      </svg>
    </a>
  );
};
