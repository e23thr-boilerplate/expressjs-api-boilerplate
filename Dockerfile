FROM node:16-alpine

ARG NODE_ENV=development

ENV NODE_ENV=$NODE_ENV

WORKDIR /app

COPY . .

RUN npm install --production

CMD ["node", "bin/www"]