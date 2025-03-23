FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN chown -R node:node /app
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build
FROM nginx:1.23-alpine AS production
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
