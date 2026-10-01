
FROM node:24-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

ARG PUBLIC_API_URL
ENV PUBLIC_API_URL="https://api-service-437273688250.us-central1.run.app"

RUN npm run build
RUN npm prune --production

FROM node:24-alpine
WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules?
COPY package.json .

ENV PORT=8080
EXPOSE 8080

CMD ["node", "build"]