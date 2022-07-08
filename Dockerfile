FROM node:lts-alpine

WORKDIR /app

# Install app dependencies
COPY package*.json /app
RUN yarn install

# Bundle app source
COPY . /app

# Run unit tests
RUN yarn test

CMD ["yarn", "start"]
