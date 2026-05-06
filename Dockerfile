FROM node:22-alpine AS deps
WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production && \
  cp -r node_modules /app/node_modules_prod && \
  npm ci


FROM node:22-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build


FROM node:22-alpine AS runner

LABEL org.opencontainers.image.title="Emoframe API"
LABEL org.opencontainers.image.description="API RESTful para instrumentos de IHC."

WORKDIR /app

RUN apk add --no-cache dumb-init

RUN addgroup -g 1001 -S nodejs && \
  adduser  -S nodeuser -u 1001 -G nodejs

COPY --from=deps /app/node_modules_prod ./node_modules
COPY --from=builder /app/dist ./dist
COPY package.json ./

RUN chown -R nodeuser:nodejs /app

USER nodeuser

ENV NODE_ENV=production

EXPOSE 3000

ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "dist/server.js"]
