FROM node:10-alpine

COPY docker/prod/ecosystem.json /dist/ecosystem.json
ADD . /app

WORKDIR /app

RUN yarn install
RUN yarn build
RUN yarn install --production --force

RUN mv /app/dist /dist \
  && mv /app/node_modules /dist/node_modules \
  && mv /app/package.json /dist/package.json

# Cria uma segunda imagem mais leve com os arquivos compilados
FROM node:10-alpine

COPY --from=0 /dist /var/www

RUN npm install -g pm2

WORKDIR /var/www

CMD pm2-docker start ecosystem.json