# Stage 1: Build
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the project (Vite outputs to /app/dist)
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy build files from stage 1 to Nginx default public directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration for single-page app routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
