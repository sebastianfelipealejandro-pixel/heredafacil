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

# Stage 2: Serve with Express
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Copy build files from stage 1 and server.js
COPY --from=build /app/dist ./dist
COPY server.js ./

EXPOSE 80

ENV PORT=80

CMD ["node", "server.js"]
