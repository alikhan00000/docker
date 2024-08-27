# Stage 1: Build the React app
FROM node:18-alpine as builder

# Set the working directory
WORKDIR /app

# Copy only the package.json and package-lock.json files first
# This allows Docker to cache the npm install step if these files haven't changed
COPY package.json package-lock.json ./

RUN npm install -g gatsby-cli
# Install dependencies
RUN npm install --legacy-peer-deps


# Copy the entire application code
COPY . .

FROM gatsbyjs/gatsby:onbuild as build

# RUN gatsby build



# Stage 2: Serve the React app using Nginx
FROM nginx:alpine

# Expose port 80 for the Nginx server
EXPOSE 80

# Copy the build files from the builder stage to the Nginx HTML directory
COPY --from=builder /app/public /usr/share/nginx/html

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]

