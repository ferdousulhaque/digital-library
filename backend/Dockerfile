FROM node:20-alpine

# Create app directory
WORKDIR /opt/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Install packages
RUN npm install

# Install PM2
RUN npm i -g pm2 pm2-logrotate

# Bundle app source
COPY src ./src
# COPY tests ./tests
COPY .env ./.env

COPY --chown=node:node \
     app.yaml \
     tsconfig.json \
     ./  

EXPOSE ${PORT}

# Typescript to JS Compiler
RUN npm run compile

# Running the application from PM2
CMD [ "pm2-runtime", "app.yaml"]
# CMD [ "node", "/opt/app/dist/server.js"]

# HEALTHCHECK --interval=21s --timeout=3s --start-period=10s CMD node ./dist/healthcheck.js