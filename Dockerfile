# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY package.json /usr/local/app/
COPY package-lock.json /usr/local/app/
COPY tsconfig.app.json /usr/local/app/
COPY tsconfig.json /usr/local/app/
COPY tsconfig.spec.json /usr/local/app/
COPY angular.json /usr/local/app/
COPY src/. /usr/local/app/src/


# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/backoffice /usr/share/nginx/html

# Expose port 80
EXPOSE 80


#docker build -t backoffice:0.1.1 .
#docker run -p 7070:80 backoffice:0.1.1