FROM node:18-alpine as builder
ENV NODE_ENV=production
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
COPY tsconfig*.json ./usr/src/app/
RUN npm install -g @nestjs/cli
RUN npm install
RUN npm install @nestjs/typeorm typeorm
RUN npm install pg


FROM builder as build1
# RUN npm install -g typescript


# FROM build1 as build2
# RUN npm run build
COPY . .
RUN npm run build
EXPOSE 5000

# CMD ["npm", "run", "start:dev"]
CMD [ "node", "dist/main.js" ]
