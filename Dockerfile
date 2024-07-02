FROM nginx:latest as build

# Install npm and other dependencies
RUN apt-get update && apt-get install -y npm \
    # Add other necessary installations here

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy build artifacts from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx configuration if needed
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

# Command to run nginx
CMD ["nginx", "-g", "daemon off;"]
