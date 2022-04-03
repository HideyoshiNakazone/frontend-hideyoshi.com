FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

ENV BACKEND=${BACKEND}
EXPOSE ${PORT}
ENTRYPOINT ["node", "serv.js"]