interface DownloadProps {
  owner: string;
  repo: string;
  version: string;
  platform: string;
}

export const DownloadIcon = ({ owner, repo, version, platform }: DownloadProps) => {
  return (
    <a
      href={`https://github.com/${owner}/${repo}/releases/download/v${version}/defguard-${repo}_${version}_x64_en-US.exe`}
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
