import "./style.scss";

import { useEffect, useState } from "react";
import { shallow } from "zustand/shallow";

import { useAppStore } from "../../clientStores/appStore";

type GithubProps = {
  owner: string;
  repo: string;
};

type ReleaseData = {
  name: string;
  published_at: string;
  prerelease: boolean;
};

const DownloadInfo = function ({ owner, repo }: GithubProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [published, setPublished] = useState("");
  const clientVersion = useAppStore((s) => s.version);
  const setAppState = useAppStore((s) => s.setState, shallow);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${owner}/${repo}/releases`)
      .then((res) =>
        res.json().then((val: ReleaseData[]) => {
          if (val.length) {
            // find latest version that is not a prerelease, the api should list them in order of newest to oldest
            const latestVersion = val.find((data) => !data.prerelease);
            const version = latestVersion?.name ? latestVersion.name.slice(1) : "";
            setAppState({ version });
            setPublished(
              latestVersion?.published_at
                ? latestVersion.published_at.split("T")[0].split("-").reverse().join(".")
                : "",
            );
          }
          setIsLoading(false);
        }),
      )
      .catch((error) => {
        console.log("Error: " + error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="download-version-info">
      <div className="download-version-current">
        {isLoading && <p>Fetching version...</p>}
        {clientVersion == "" && !isLoading && <p>Unable to fetch version</p>}
        {clientVersion != "" && (
          <>
            <p>Current version:</p>
            <p>{clientVersion}</p>
          </>
        )}
      </div>
      <div className="download-changelog">
        <a href={`https://github.com/DefGuard/client/releases/v${clientVersion}`}>
          View changelog →
        </a>
        <p>{published}</p>
      </div>
    </div>
  );
};

export default DownloadInfo;
