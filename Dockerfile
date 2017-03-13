FROM ubuntu:16.10
MAINTAINER Amauri Rodrigues "ardsjj@gmail.com"

RUN apt-get update
RUN apt-get -qq update
RUN apt-get install -y nodejs npm
RUN apt-get install -y usbutils
RUN apt-get install -y android-tools-adb android-tools-fastboot
RUN update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10

VOLUME ./src /usr/src/app
#ADD ./src /usr/src/app
RUN cd /usr/src/app && npm install

EXPOSE 8888

WORKDIR /usr/src/app

CMD ["npm", "start"]