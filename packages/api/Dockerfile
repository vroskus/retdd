FROM --platform=linux/x86_64 node:16-alpine AS build-stage

ENV PACKAGE api
ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8

WORKDIR /home/node/app

COPY package.json ./
COPY lerna.json ./
COPY yarn.lock ./

COPY packages/$PACKAGE /home/node/app/packages/$PACKAGE

COPY utilities/ /home/node/app/utilities/

WORKDIR /home/node/app/packages/$PACKAGE

RUN yarn install --production --no-optional

RUN yarn start:build

FROM --platform=linux/x86_64 node:16-alpine AS run-stage

ENV PACKAGE api
ENV PORT 8080
EXPOSE 8080

COPY --from=build-stage /home/node/app/utilities /home/node/app/utilities
COPY --from=build-stage /home/node/app/node_modules /home/node/app/node_modules
COPY --from=build-stage /home/node/app/package.json /home/node/app/package.json
COPY --from=build-stage /home/node/app/packages/$PACKAGE/dist /home/node/app/packages/$PACKAGE/dist
COPY --from=build-stage /home/node/app/packages/$PACKAGE/package.json /home/node/app/packages/$PACKAGE/package.json
COPY --from=build-stage /home/node/app/packages/$PACKAGE/node_modules /home/node/app/packages/$PACKAGE/node_modules

WORKDIR /home/node/app/packages/$PACKAGE

HEALTHCHECK --interval=1m CMD wget --no-verbose --tries=1 --spider http://localhost:$PORT || exit 1

CMD yarn start:serve
