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

# Stage 2: Serve with Express
FROM node:20-alpine

# Install OpenSSL and libc6-compat for Prisma compatibility on Alpine Linux
RUN apk add --no-cache openssl libc6-compat

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies
RUN npm ci --omit=dev

# Copy build files, server.js, and prisma schema
COPY --from=build /app/dist ./dist
COPY server.js ./
COPY prisma ./prisma

# Generate Prisma Client inside the production container
RUN npx prisma generate

EXPOSE 80

ENV PORT=80

# Auto-apply database schema migrations and run Express server
CMD ["sh", "-c", "npx prisma db push && node server.js"]
