# Строим образ
FROM node:14 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Пакуем образ
FROM node:14
WORKDIR /app
COPY --from=build /app/dist /app/dist
COPY --from=build /app/package.json /app/package.json
COPY server.js /app/server.js

# Обновляем npm до последней версии
RUN npm install -g npm@latest

# Устанавливаем только продакшн зависимости
RUN npm install --only=prod

EXPOSE 80
CMD ["node", "server.js"]
