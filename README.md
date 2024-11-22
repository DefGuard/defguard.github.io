# defguard website

Defguard website built on [Astro](https://astro.build)!

## Editing content

Most of the content is written in HTML but some parts ware made with ease of configuration in mind.

### JSON

Files inside [data](./src/data/) dare written in JSON format and contain configuration such as what items are shown in navigation and footer. Those configs are `data` only and so are not in Markdown

### Markdown

Files that build content on website are written in `.mdx` files and are stored in collections within [src/content](./src/content/) directory.

### Formatter

Every content file begins with special section that defines additional information for that file's context, for example title, order of display etc.
You can find definitions of this information inside [content.ts](./src/content/config.ts).

## Content editing notes

### Pricing

Pricing is a special case where we need to render MDX directly on client side only, this means importing any components in pricing collection is forbidden because it will not work. Raw HTML is still OK since we render it through rehype-raw.

## Editor recommendation

[VSCode](https://code.visualstudio.com/download) is by far the easiest to setup.

### Recommended extensions

To get syntax highlights and all the good stuff, first you need to have installed Node.js and dependencies for this project installed, look in `Development` section.

Extensions to install:

- [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)
- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [MDX](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)

## Development

### Installing Node.js

Version of Node.js should be the same Major as the one specified in [.nvmrc](./.nvmrc) file.

#### Official source

Follow instructions from [official site](https://nodejs.org/en/download/package-manager).

#### Node version manager (NVM)(Recommended for development)

Supports using dirreferent version of Node.js for each project.

- [Windows](https://github.com/coreybutler/nvm-windows)
- [Mac/Linux](https://github.com/nvm-sh/nvm)

After correct install, in root of the project use (once):

```bash
nvm install
```

And then:

```bash
nvm use
```

### Installing dependencies

Make sure package manager pnpm is installed.
If not use this command to install it:

```bash
npm i -g pnpm
```

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

After that, built project should be in `dist` directory inside project root.
