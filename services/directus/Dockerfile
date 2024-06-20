FROM node:18.18.0-alpine

# node-gyp dependencies
RUN apk add --update --no-cache make g++ python3 &&  \
    ln -sf python3 /usr/bin/python

# create directus user
RUN addgroup -S directus && adduser -S directus -G directus

# build directus
WORKDIR /directus

COPY package.json .

COPY ./scripts/start.sh .

RUN npm install

# start
USER directus

CMD ["sh", "-c", "cat ./start.sh | sh"]
