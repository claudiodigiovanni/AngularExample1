FROM node:carbon
RUN mkdir /myapp
RUN mkdir /myapp/src
WORKDIR /myapp
COPY package.json .
COPY package-lock.json .
COPY angular.json .
COPY README.md .
COPY tsconfig.json .
RUN ["apt-get", "update"]
RUN ["apt-get", "install", "-y", "vim"]
ENV PATH node_modules/.bin:$PATH
RUN ["npm", "install"]
EXPOSE 4200
#CMD ng serve --host=0.0.0.0
