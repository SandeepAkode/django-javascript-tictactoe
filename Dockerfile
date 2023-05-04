FROM ubuntu:20.04
RUN apt-get -y update && apt-get -y install libmysqlclient-dev && apt-get -y install mysql-client
RUN apt-get -y install python3.8 && apt-get install -y python3-pip
RUN apt-get install -y locales && locale-gen en_US en_US.UTF-8
ENV LANG en_US.UTF-8 && LANGUAGE en_US:en && LC_ALL en_US.UTF-8

ENV PYTHONUNBUFFERED=1
WORKDIR /code
COPY requirements.txt /code/
RUN pip install -r requirements.txt
COPY . /code/
