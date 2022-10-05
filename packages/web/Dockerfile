FROM --platform=linux/x86_64 node:16-alpine AS build-stage

ENV PACKAGE web
ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8

RUN apk add --update --no-cache git python3 make g++

WORKDIR /home/node/app

COPY package.json ./
COPY lerna.json ./
COPY yarn.lock ./

COPY packages/$PACKAGE /home/node/app/packages/$PACKAGE
COPY packages/api /home/node/app/packages/api

COPY utilities/ /home/node/app/utilities/

WORKDIR /home/node/app/packages/$PACKAGE

RUN yarn install --production --no-optional

RUN yarn start:build

FROM --platform=linux/x86_64 node:16-alpine AS run-stage

ENV PACKAGE web
ENV PORT 8080
EXPOSE 8080

RUN yarn global add serve

COPY --from=build-stage /home/node/app/packages/$PACKAGE/src/config.js /home/node/app/packages/$PACKAGE/src/config.js
COPY --from=build-stage /home/node/app/packages/$PACKAGE/dist /home/node/app/packages/$PACKAGE/dist
COPY --from=build-stage /home/node/app/packages/$PACKAGE/scripts /home/node/app/packages/$PACKAGE/scripts
COPY --from=build-stage /home/node/app/packages/$PACKAGE/package.json /home/node/app/packages/$PACKAGE/package.json

WORKDIR /home/node/app/packages/$PACKAGE

HEALTHCHECK --interval=1m CMD wget --no-verbose --tries=1 --spider http://localhost:$PORT || exit 1

CMD yarn start:serve
