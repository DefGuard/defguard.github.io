import { WindowsIcon } from "../../base/icons/WindowsIcon";
import { MacOsIcon } from "../../base/icons/MacOsIcon";
import { LinuxIcon } from "../../base/icons/LinuxIcon";
import { DownloadIcon } from "../../base/icons/DownloadIcon";
import { CopyIcon } from "../../base/icons/CopyIcon";
import "./style.scss";
import { PlatformType } from "../../base/types/platform";

interface Platform {
  type: PlatformType;
}

export const DownloadButton = ({ type }: Platform) => {
  return (
    <div class="download-button">
      <div class="download-header">
        {type === PlatformType.WINDOWS && (
          <>
            <WindowsIcon />
            Windows
          </>
        )}
        {type === PlatformType.LINUX && (
          <>
            <LinuxIcon />
            Linux
          </>
        )}
        {type === PlatformType.MACOS && (
          <>
            <MacOsIcon />
            macOS
          </>
        )}
      </div>
      <div class="download-main" onClick={() => console.log("dupa")}>
        <div class="download-text">
          {type === PlatformType.WINDOWS && (
            <>
              <h3>Download now</h3>
            </>
          )}
          {type === PlatformType.LINUX && (
            <>
              <p>curl -f https://defguard.net/install.sh | sh</p>
            </>
          )}
          {type === PlatformType.MACOS && (
            <>
              <h3>Download now</h3>
              <p>Apple Silicon</p>
            </>
          )}
        </div>
        {(type === PlatformType.WINDOWS || type === PlatformType.MACOS) && (
          <DownloadIcon />
        )}
        {type === PlatformType.LINUX && <CopyIcon />}
      </div>
      <div class="download-footer">
        {type === PlatformType.LINUX && (
          <>
            <a href="https://github.com/DefGuard/client/releases">
              Other ways to install defguard on linux →
            </a>
          </>
        )}
        {type === PlatformType.MACOS && (
          <>
            <p>Requires version 10.5 or later</p>
          </>
        )}
      </div>
    </div>
  );
};
