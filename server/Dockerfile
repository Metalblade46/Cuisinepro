# Use the official Bun image
FROM oven/bun:1

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json bun.lock ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy the rest of the application
COPY . .

# # Build the application (Failing due to issue with bun)
# RUN bun run build

# Expose the port the app runs on
EXPOSE 3001

# Start the application
CMD ["bun", "start"] 