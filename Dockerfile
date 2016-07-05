FROM surycat/js-toolset:0.2.0

USER devuser
WORKDIR ${WORKSPACE}

ADD . ${WORKSPACE}
RUN npm install && bower install

CMD /bin/bash