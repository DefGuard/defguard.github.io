import "./style.scss";
import { WindowsIcon } from "../../base/icons/WindowsIcon";
import { MacOsIcon } from "../../base/icons/MacOsIcon";
import { LinuxIcon } from "../../base/icons/LinuxIcon";
import { DownloadIcon } from "../../base/icons/DownloadIcon";
import { CopyIcon } from "../../base/icons/CopyIcon";
import { VectorIcon } from "../../base/icons/VectorIcon";
import { PlatformType } from "../../base/types/platform";

interface Platform {
  type: PlatformType;
}

// https://github.com/DefGuard/client/releases/download/v0.4.0/defguard-client_0.4.0_x64_en-US.exe
export const DownloadButton = ({ type }: Platform) => {
  const handleClick = () => {
    // fetch("https://github.com/DefGuard/client/releases/download/v0.4.0/defguard-client_0.4.0_x64_en-US.exe");
    console.log("dupa");
  }

  return (
    <div class="download-button">
      <div class="download-header">
        {type === PlatformType.WINDOWS && (
          <>
            <div class="download-icon">
              <WindowsIcon />
              Windows
            </div>
          </>
        )}
        {type === PlatformType.LINUX && (
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
        {type === PlatformType.MACOS && (
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
      <div class="download-main" onClick={() => handleClick()}>
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
            {/* TODO(cpprian): add links to AppImage and Binary */}
            <p>
              Other ways to install defguard on linux → <a href="#">AppImage</a> |{" "}
              <a href="#">Binary</a>
            </p>
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
