FROM node:16-alpine
WORKDIR /app
COPY . /app/

VOLUME /app/dist
