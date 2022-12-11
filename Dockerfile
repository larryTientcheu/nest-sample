FROM node as builder
ENV NODE_ENV=production
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
COPY tsconfig.json ./usr/src/app/
RUN npm install


FROM builder as build1
COPY tsconfig.build.json ./usr/src/app/

RUN npm install -g typescript
RUN npm install -g @nestjs/cli

FROM build1 as build2
# RUN npm run build

COPY . /usr/src/app/
EXPOSE 5000

CMD ["npm", "run", "start"]
