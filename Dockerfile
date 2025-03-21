# Use Node.js as the base image
FROM node:16-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY jvdocs.trueselph.com/ ./

# Build the Docusaurus static site
RUN npm run build

# Use a lightweight HTTP server to serve the static files
FROM nginx:alpine

# Copy the built files from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
