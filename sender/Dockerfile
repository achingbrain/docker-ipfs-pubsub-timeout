FROM node:10

COPY ./package.json /app/package.json

WORKDIR /app

RUN npm install --production

COPY ./index.js /app/index.js

WORKDIR /app

CMD node .
