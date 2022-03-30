FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

ENV BACKEND=${BACKEND}
EXPOSE 5000
ENTRYPOINT ["node", "serv.js"]