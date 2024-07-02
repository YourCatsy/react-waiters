# Stage 1: Build stage
FROM node:14 AS build

WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the application (if needed)
RUN npm run build

# Stage 2: Production stage
FROM nginx:alpine

# Copy build artifacts from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx configuration if needed
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
