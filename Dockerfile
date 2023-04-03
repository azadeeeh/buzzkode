FROM ubuntu:latest
WORKDIR /app
RUN mkdir -p /root/.ssh
COPY id_rsa /root/.ssh/id_rsa
RUN chmod 600 /root/.ssh/id_rsa  
COPY known_hosts /root/.ssh/known_hosts
RUN chmod 644 /root/.ssh/known_hosts
RUN apt -y update &&\
    apt -y install git && \
    mkdir project && cd project && \
    git clone git@github.com:azadeeeh/bazkode.git
CMD ["/bin/bash"]


