FROM node:12-alpine

WORKDIR /app
COPY . /app

RUN set -x \
  && yarn \
  && yarn build

FROM node:12-alpine

WORKDIR /app

COPY --from=0 /app/dist /app/dist
COPY --from=0 /app/package.json /app
COPY --from=0 /app/yarn.lock /app

RUN set -x \
  && apk --no-cache add tzdata \
  && cp /usr/share/zoneinfo/Brazil/East /etc/localtime \
  && echo Brazil/East > /etc/timezone \
  && apk del tzdata \
  && yarn install --prod \
  && yarn cache clean

CMD node /app/dist/index.js