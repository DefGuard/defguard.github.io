FROM node:21.5 as deps
WORKDIR /app
COPY package.json .
COPY pnpm-lock.yaml .

RUN npm install -g pnpm

RUN pnpm install --frozen-lockfile

FROM deps as builder

WORKDIR /app

COPY --from=0 /app/node_modules .

COPY . .

CMD pnpm build
