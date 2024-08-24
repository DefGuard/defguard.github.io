FROM node:22-alpine AS base

RUN apk update
RUN corepack enable

FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml /app/
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile --prod=false

FROM deps AS build
WORKDIR /app
COPY --from=deps /app/node_modules /app/node_modules
COPY src /app/src
COPY public /app/public
COPY astro.config.mjs .prettierrc.mjs .prettierignore eslint.config.js package.json pnpm-lock.yaml tsconfig.json /app/
RUN pnpm build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
