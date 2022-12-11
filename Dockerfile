FROM node:18-alpine as development
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=development
RUN npm install -g @nestjs/cli
COPY . .
RUN npm run build

FROM development as production
ENV NODE_ENV=production

WORKDIR /usr/src/app
RUN npm install --only=production
COPY . .

COPY --from=development /usr/src/app/dist ./dist

EXPOSE 5000
CMD [ "node", "dist/main.js" ]


