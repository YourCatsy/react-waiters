FROM node:14 AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build


FROM node:14

WORKDIR /app

COPY --from=build /app/build /app/build

COPY --from=build /app/package.json /app/package.json

COPY --from=build /app/package-lock.json /app/package-lock.json

COPY server.js /app/server.js

RUN npm install --only=prod

CMD ["node", "server.js"]
