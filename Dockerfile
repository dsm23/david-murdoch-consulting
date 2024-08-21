FROM node:22-alpine AS build
RUN apk update
RUN apk add --no-cache libc6-compat

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

WORKDIR /app

RUN corepack enable pnpm && corepack install -g pnpm@latest-9

COPY . .

RUN pnpm install --frozen-lockfile
RUN pnpm build


FROM nginx:alpine-slim AS runtime

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080
