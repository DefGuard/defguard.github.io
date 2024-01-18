# Defguard website

## Editing content
Most of the content is written in HTML but some parts ware made with ease of configuration in mind.

### JSON
Files inside [data](./src/data/) dare written in JSON format and contain configuration such as what items are shown in navigation and footer. Those configs are `data` only and so are not in Markdown

### Markdown
Files that build content on website are written in `.mdx` files and are stored in collections within [src/content](./src/content/) directory.

### Frontmatter
Every content file begins with special section that defines additional information for that file's context, for example title, order of display etc.
You can find definitions of this information inside [content.ts](./src/content/config.ts).


## Development

Install Node.js version specified inside `.nvmrc` and install `pnpm`  
Then run install dependencies with:
```bash
pnpm install
```
And then run development server with:
```bash
pnpm dev
```

### Building project
With correct Node.js environment run:
```bash
pnpm build
```
