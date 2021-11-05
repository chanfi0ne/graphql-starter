FROM node:16-alpine as builder

ENV NODE_ENV build

WORKDIR /app

RUN chown -R node:node /app

USER node

COPY --chown=node:node .  /app

RUN npm ci --only=production

FROM node:16-alpine

# For handling Kernel signals properly
RUN apk add --no-cache tini

ENV NODE_ENV production

USER node
WORKDIR /app

RUN ls -al

COPY --from=builder /app/package*.json /app/
COPY --from=builder /app/node_modules/ /app/node_modules/
COPY --from=builder /app/dist/ /app/dist/

# Expose API port
EXPOSE 3000
ENTRYPOINT ["/sbin/tini", "--"]

CMD ["npm","run", "start:prod"]