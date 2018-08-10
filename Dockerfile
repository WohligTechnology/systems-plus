FROM node:8.11.3
WORKDIR /usr/src/app
RUN npm install pm2 bower grunt-cli -g
RUN apt-get update && apt-get install -y curl apt-transport-https && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && apt-get install -y yarn
COPY package.json .    
COPY yarn.lock .
RUN yarn install
COPY bower.json .
RUN bower install --allow-root
COPY . .
RUN grunt ui --target=backend --production
EXPOSE 80
CMD ["pm2-runtime", "process.yml"]
