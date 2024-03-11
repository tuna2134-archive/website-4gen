FROM node:20-slim as builder

WORKDIR /src

ENV NEXT_OUTPUT standalone
RUN corepack enable

COPY pnpm-lock.yaml package.json ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN --mount=type=cache,target=/src/.next pnpm build && \
    cp -r /src/.next /tmp/.next

WORKDIR /tmp/.next/standalone
ENV NODE_ENV production

RUN pnpm install sharp

FROM gcr.io/distroless/nodejs20-debian12

ENV NODE_ENV production
WORKDIR /usr/src

COPY --chown=nonroot:nonroot ./public ./public
COPY --from=builder --chown=nonroot:nonroot /tmp/.next/standalone ./
COPY --from=builder --chown=nonroot:nonroot /tmp/.next/static ./.next/static

USER nonroot
EXPOSE 3000
CMD ["server.js"]