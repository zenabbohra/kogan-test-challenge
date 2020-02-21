# The base image
FROM node:12

# Create app directory
WORKDIR /app

# Copies both package.json AND package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

ENTRYPOINT [ "npm" ]

CMD [ "start" ]
