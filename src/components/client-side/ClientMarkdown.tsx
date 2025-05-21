import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import type { Plugin } from 'unified';

// Remove the rehype-external-links import and use the string-based configuration from astro.config.mjs
type Props = {
  data: string;
};

const ClientMarkdown = ({ data }: Props) => {
  return (
    <Markdown
      rehypePlugins={[
        // Cast to unknown first to satisfy TypeScript
        [rehypeRaw as unknown as Plugin]
      ]}
    >
      {data}
    </Markdown>
  );
};

export default ClientMarkdown;
