##FROM ubuntu:latest
##LABEL authors="veseha"
##
##ENTRYPOINT ["top", "-b"]
#
## syntax=docker/dockerfile:1.4
#
## 1. For build React app
#FROM node:lts AS development
#
## Set working directory
#WORKDIR /SimpleTaskManager
#
##
#COPY package.json /SimpleTaskManager/package.json
#COPY package-lock.json /SimpleTaskManager/package-lock.json
#
## Same as npm install
#RUN npm ci
#
#COPY . /SimpleTaskManager
#
#ENV CI=true
#ENV PORT=3000
#
#CMD [ "npm", "start" ]
#
#FROM development AS build
#
#RUN npm run build
#
#
#FROM development as dev-envs
#RUN <<EOF
#apt-get update
#apt-get install -y --no-install-recommends git
#EOF
#
#RUN <<EOF
#useradd -s /bin/bash -m vscode
#groupadd docker
#usermod -aG docker vscode
#EOF
## install Docker tools (cli, buildx, compose)
#COPY --from=gloursdocker/docker / /
#CMD [ "npm", "start" ]
#
## 2. For Nginx setup
#FROM nginx:alpine
#
## Copy config nginx
#COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf
#
#WORKDIR /usr/share/nginx/html
#
## Remove default nginx static assets
#RUN rm -rf ./*
#
## Copy static assets from builder stage
#COPY --from=build /app/build .
#
## Containers run nginx with global directives and daemon off
#ENTRYPOINT ["nginx", "-g", "daemon off;"]


# Use an official Node runtime as the base image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle app source
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the app when the container launches
CMD ["npm", "start"]
