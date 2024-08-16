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
                {type === PlatformType.WINDOWS &&
                    <>
                        <WindowsIcon />
                        Windows
                    </>
                }
                {
                    type === PlatformType.LINUX && 
                    <>
                        <LinuxIcon />
                        Linux
                    </>
                }
                {
                    type === PlatformType.MACOS &&
                    <>
                        <MacOsIcon />
                        macOS
                    </>
                }
            </div>
            <div class="download-main">
                <div class="download-text">
                    <h3>Download now</h3>
                    <p>Apple Silicon</p>
                </div>
                <DownloadIcon />
            </div>
            <div class="download-footer">
                Requires version 10.5 or later
            </div>
        </div>
    );
};