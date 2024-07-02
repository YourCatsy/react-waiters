# Stage 1: Build the React app
FROM node:14 AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the React app using Express
FROM node:14
WORKDIR /app
COPY --from=build /app/build /app/build
COPY --from=build /app/package.json /app/package.json
COPY server.js /app/server.js
RUN npm install --only=prod
CMD ["node", "server.js"]

