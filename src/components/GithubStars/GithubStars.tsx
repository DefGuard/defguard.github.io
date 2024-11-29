import "./style.scss";

import nf from "@tuplo/numberfmt";
import { useCallback, useEffect, useState } from "react";

type Props = {
  owner: string;
  repo: string;
};

const GithubStars = function ({ owner, repo }: Props) {
  const [starCount, setStarCount] = useState<number | undefined>();

  const iconId = `${owner}-${repo}-icon`;

  const displayCount = useCallback((stars: number): string => {
    return nf(stars, "0,0a");
  }, []);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${owner}/${repo}`)
      .then((res) =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        res.json().then((val: any) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
          const count = val["stargazers_count"];
          if (count !== undefined) {
            if (typeof count === "number") {
              setStarCount(count);
            }
            if (typeof count === "string") {
              setStarCount(Number(count));
            }
          }
        }),
      )
      .catch((e: unknown) => {
        console.error(e);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (starCount === undefined) return null;

  return (
    <div className="github-stars">
      <a
        href={`https://github.com/${owner}/${repo}`}
        target="_blank"
        rel="nofollow noopener noreferrer"
        aria-label={`${owner} ${repo}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
        >
          <g clipPath={`url(#${iconId})`}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.00016 0.833496C6.10098 0.834481 4.26407 1.50713 2.81789 2.73118C1.37172 3.95522 0.410582 5.65084 0.106343 7.51483C-0.197896 9.37882 0.174597 11.2896 1.15723 12.9056C2.13986 14.5216 3.66854 15.7373 5.46993 16.3355C5.86735 16.4092 6.01704 16.1629 6.01704 15.9535C6.01704 15.7441 6.00909 15.1368 6.00644 14.473C3.78091 14.9537 3.31064 13.5338 3.31064 13.5338C2.94766 12.6118 2.42307 12.3694 2.42307 12.3694C1.69712 11.8768 2.47739 11.886 2.47739 11.886C3.2815 11.9427 3.70408 12.7066 3.70408 12.7066C4.41678 13.9224 5.57591 13.5707 6.03161 13.3652C6.10315 12.8502 6.31113 12.4998 6.54031 12.3009C4.76253 12.1007 2.89467 11.4184 2.89467 8.37044C2.88365 7.57997 3.17866 6.81553 3.71865 6.23528C3.63652 6.03507 3.3623 5.22632 3.79681 4.12778C3.79681 4.12778 4.46845 3.9144 5.99718 4.94312C7.30842 4.58658 8.69189 4.58658 10.0031 4.94312C11.5305 3.9144 12.2008 4.12778 12.2008 4.12778C12.6367 5.22368 12.3625 6.03244 12.2803 6.23528C12.822 6.81562 13.1177 7.5814 13.1056 8.37308C13.1056 11.4276 11.2338 12.1007 9.45337 12.297C9.73951 12.5446 9.99519 13.028 9.99519 13.7709C9.99519 14.8352 9.98591 15.6914 9.98591 15.9535C9.98591 16.1656 10.1303 16.4132 10.5357 16.3355C12.3373 15.7373 13.8661 14.5213 14.8487 12.9051C15.8313 11.2888 16.2036 9.3777 15.899 7.51353C15.5945 5.64936 14.6329 3.95373 13.1862 2.7299C11.7395 1.50607 9.90221 0.833857 8.0028 0.833496H8.00016Z"
              style={{ fill: "var(--text-body-primary)" }}
            />
          </g>
          <defs>
            <clipPath id={iconId}>
              <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
            </clipPath>
          </defs>
        </svg>
      </a>
      <p>☆ {displayCount(starCount ?? 0)}</p>
    </div>
  );
};

export default GithubStars;
