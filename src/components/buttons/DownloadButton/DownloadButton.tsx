import "./style.scss";
import { WindowsIcon } from "../../base/icons/WindowsIcon";
import { MacOsIcon } from "../../base/icons/MacOsIcon";
import { LinuxIcon } from "../../base/icons/LinuxIcon";
import { DownloadIcon } from "../../base/icons/DownloadIcon";
import { CopyIcon } from "../../base/icons/CopyIcon";
import { VectorIcon } from "../../base/icons/VectorIcon";
import { PlatformType } from "../../base/types/platform";

interface DownloadProps {
  platformType: PlatformType;
  owner: string;
  repo: string;
  version: string;
  platformVersion?: string;
  architecture?: string;
}

export const DownloadButton = ({
  platformType,
  owner,
  repo,
  version,
  architecture,
}: DownloadProps) => {
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
            <div class="download-choice">
              Stable
              <VectorIcon />
            </div>
          </>
        )}
        {platformType === PlatformType.MACOS && (
          <>
            <div class="download-icon">
              <MacOsIcon />
              macOS
            </div>
            <div class="download-choice">
              Apple Silicon
              <VectorIcon />
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
              <p>curl -f https://defguard.net/install.sh | sh</p>
            </>
          )}
          {platformType === PlatformType.MACOS && (
            <>
              <h3>Download now</h3>
              <p>Apple Silicon</p>
            </>
          )}
        </div>
        {platformType === PlatformType.WINDOWS && (
          <DownloadIcon owner={owner} repo={repo} version={version} />
        )}
        {platformType === PlatformType.MACOS && (
          <DownloadIcon owner={owner} repo={repo} version={version} />
        )}
        {platformType === PlatformType.LINUX && <CopyIcon />}
      </div>
      <div class="download-footer">
        {platformType === PlatformType.LINUX && (
          <>
            {/* TODO(cpprian): add links to AppImage and Binary */}
            <p>
              Other ways to install defguard on linux → <a href="">AppImage</a> |{" "}
              <a href="#">Binary</a>
            </p>
          </>
        )}
        {platformType === PlatformType.MACOS && (
          <>
            <p>Requires version 10.5 or later</p>
          </>
        )}
      </div>
    </div>
  );
};
