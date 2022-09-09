FROM node:16-alpine3.16

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm install -g -y nodemon

COPY . .

EXPOSE 3000

CMD ["npm", "start"]