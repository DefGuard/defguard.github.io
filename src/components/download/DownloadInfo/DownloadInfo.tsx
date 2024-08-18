import { useEffect, useState } from "preact/hooks";
import "./style.scss";

type GithubProps = {
    owner: string;
    repo: string;
};

const DownloadInfo = function ({ owner, repo }: GithubProps) {
    const [latestVersion, setLatestVersion] = useState("");
    const [published, setPublished] = useState("");

    useEffect(() => {
        fetch(`https://api.github.com/repos/${owner}/${repo}/releases`).then((res) =>
            res.json().then((val) => {
                if (val.length) {
                    const data = val[0];
                    setLatestVersion(data.name ? data.name.slice(1) : "");

                    // 2024-07-08T12:58:59Z -> 08.07.2024
                    setPublished(
                        data.published_at ?
                            data.published_at.split('T')[0].split('-').reverse().join('.')
                            : ""
                    );
                }
            })
        ).catch(error => {
            console.log("Error:" + error);
        });
    })

    return (
        <div class="download-version-info">
            <div class="download-version-current">
                {latestVersion == '' && <p>Unable to fetch version</p>}
                {latestVersion != '' && 
                    <>
                        <p>Current version:</p>
                        <p>{latestVersion}</p>
                    </>
                }
            </div>
            <div class="download-changelog">
                <a href="https://github.com/DefGuard/client/releases">View changelog →</a>
                <p>{published}</p>
            </div>
        </div>
    );
};

export default DownloadInfo;
