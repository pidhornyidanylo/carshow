FROM node:18-slim

RUN apt-get update

# create app directory
WORKDIR /usr/src/app

# install app dependencies
COPY package*.json ./

RUN npm install

# bundle app source
COPY . . 

# expose port and start app
EXPOSE 3000

# build the app
RUN npm run build

# change user to node
USER node

CMD ["npm", "start"]