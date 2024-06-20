FROM node:18.18.0-alpine

# node-gyp dependencies
RUN apk add --update --no-cache make g++ python3 &&  \
    ln -sf python3 /usr/bin/python

# create directus user
RUN addgroup -S directus && adduser -S directus -G directus

# Setup Directus
WORKDIR /directus

# Install Directus
COPY package.json .
RUN npm install

# Copy directus files
COPY ./snapshots/ ./snapshots
COPY ./scripts/start.sh .

# Start
USER directus

CMD ["sh", "-c", "cat ./start.sh | sh"]
