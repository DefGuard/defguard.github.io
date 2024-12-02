import Markdown from "react-markdown";
import rehypeExternalLinks from "rehype-external-links";
import rehypeRaw from "rehype-raw";

type Props = {
  data: string;
};

const ClientMarkdown = ({ data }: Props) => {
  return (
    <Markdown
      rehypePlugins={[
        rehypeRaw,
        [
          rehypeExternalLinks,
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
