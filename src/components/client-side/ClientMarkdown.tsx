import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
// For v2.0.0 this import should work correctly
import rehypeLinks from "rehype-external-links";
import type { Plugin } from 'unified';

type Props = {
  data: string;
};

const ClientMarkdown = ({ data }: Props) => {
  return (
    <Markdown
      rehypePlugins={[
        rehypeRaw as Plugin,
        [
          rehypeLinks as Plugin,
          {
            target: "_blank",
            rel: ["nofollow", "noopener", "noreferrer"],
          },
        ],
      ]}
    >
      {data}
    </Markdown>
  );
};

export default ClientMarkdown;
