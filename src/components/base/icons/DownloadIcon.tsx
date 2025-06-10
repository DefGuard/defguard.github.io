import { PlatformType } from "../types/platform";

interface DownloadIconProps {
  width?: number;
  height?: number;
}

export const DownloadIcon = ({ width = 16, height = 16 }: DownloadIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path d="M8 2L8 11" stroke="currentColor" />
      <path d="M3.75 7L7.99264 11.2426L12.2353 7" stroke="currentColor" />
      <path d="M1 12V15H15V12" stroke="currentColor" />
    </svg>
  );
};
