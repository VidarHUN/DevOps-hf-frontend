FROM node:12.2-alpine AS builder

WORKDIR /opt/web
COPY package.json ./
RUN npm install

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./
RUN ng build 

FROM nginx:1.17-alpine
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /opt/web/dist/ng-counter /usr/share/nginx/html