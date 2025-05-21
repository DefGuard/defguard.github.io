import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
// For v2.0.0 this import should work correctly
import rehypeLinks from "rehype-external-links";

type Props = {
  data: string;
};

const ClientMarkdown = ({ data }: Props) => {
  return (
    <Markdown
      rehypePlugins={[
        rehypeRaw,
        [
          rehypeLinks,
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
