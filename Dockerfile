FROM node:16-alpine AS builder 
WORKDIR /app 
COPY package.json . 
COPY .env . 
COPY ./public ./public 
COPY ./src ./src
RUN yarn install --production
RUN yarn build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY .env . 
COPY nginx.conf /etc/nginx/conf.d/default.conf 
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


#FROM node:18.15.0-alpine as builder
#WORKDIR C:/OurSpace/frontend
#COPY package.json .
#COPY yarn.lock .
#RUN yarn install
#COPY . .
#RUN yarn build
#
#FROM nginx:1.19.0
#WORKDIR /usr/share/nginx/html
#RUN rm -rf ./*
#COPY --from=builder C:/OurSpace/frontend/build .
#ENTRYPOINT ["nginx", "-g", "daemon off;"]