FROM node:12.22-alpine

WORKDIR /test.api/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "node", "dist/main" ]