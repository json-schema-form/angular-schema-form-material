# Angular Material Decorator

The up-to-date version of this README is available at the original repo: [json-schema-form/angular-schema-form-material](https://github.com/json-schema-form/angular-schema-form-material).


## Fork deployment process

* _develop_ is the default branch. Any pull request submitted to the original repo shall be made from this branch.
* _master_ is a used as a deployment branch and is specific to Optiflows release workflow.


## How to build (docker-based)

* Since all build and release assets are only available in the _master_ branch, you need to copy the following files in your development branch manually:

**Dockerfile**:
```Dockerfile
FROM surycat/js-toolset:0.2.0
USER devuser
WORKDIR ${WORKSPACE}
ADD . ${WORKSPACE}
RUN npm install && bower install
CMD /bin/bash
```

**docker-compose.yml**:
```yml
asfm:
    build: .
    volumes:
        - ./tmp/:/home/devuser/tmp/
```

* Build the image with:
```bash
docker-compose build
```
* Run the container with:
```bash
docker-compose run --rm afsm
```
* Inside the container, build the library with:
```bash
gulp
```
* Finally, move `material-decorator.js` in  `./tmp/` to get the final asset out of the container.
