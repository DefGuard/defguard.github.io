import { useEffect, useState } from "preact/hooks";
import "./style.scss";
import { useStore } from "@nanostores/preact";
import { clientVersion } from "../../store/versionStore";

type GithubProps = {
  owner: string;
  repo: string;
};

const DownloadInfo = function ({ owner, repo }: GithubProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [published, setPublished] = useState("");
  const $clientVersion = useStore(clientVersion);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${owner}/${repo}/releases`)
      .then((res) =>
        res.json().then((val) => {
          if (val.length) {
            const data = val[0];
            clientVersion.set(data.name ? data.name.slice(1) : "");

            // 2024-07-08T12:58:59Z -> 08.07.2024
            setPublished(
              data.published_at
                ? data.published_at.split("T")[0].split("-").reverse().join(".")
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
  });

  return (
    <div class="download-version-info">
      <div class="download-version-current">
        {isLoading && <p>Fetching version...</p>}
        {$clientVersion == "" && !isLoading && <p>Unable to fetch version</p>}
        {$clientVersion != "" && (
          <>
            <p>Current version:</p>
            <p>{$clientVersion}</p>
          </>
        )}
      </div>
      <div class="download-changelog">
        <a href="https://github.com/DefGuard/client/releases">View changelog →</a>
        <p>{published}</p>
      </div>
    </div>
  );
};

export default DownloadInfo;
