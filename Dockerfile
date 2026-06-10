# Stage 1: Build
FROM node:20-alpine AS build

# Install OpenSSL and libc6-compat for Prisma compatibility on Alpine Linux
RUN apk add --no-cache openssl libc6-compat

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Generate Prisma client and build Vite project
RUN npx prisma generate
RUN npm run build

# Remove development dependencies to keep the image light
RUN npm prune --omit=dev

# Stage 2: Serve with Express
FROM node:20-alpine

# Install OpenSSL and libc6-compat for Prisma compatibility on Alpine Linux
RUN apk add --no-cache openssl libc6-compat

WORKDIR /app

# Copy production assets and dependencies from stage 1
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./
COPY --from=build /app/prisma ./prisma
COPY server.js ./

EXPOSE 80

ENV PORT=80

# Auto-apply database schema migrations and run Express server
CMD ["sh", "-c", "npx prisma db push && node server.js"]
