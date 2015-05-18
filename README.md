Angular Material Decorator
==========================

For https://github.com/Textalk/angular-schema-form


Very very very much work in progress.

To test clone repo and:
```
npm install
bower install
gulp minify
```

Start favorite http server (http-server or puer for instance) and open
`examples/material-example.html`

There is also a `gulp watch` task that minifys on change.

Known Issues
------------
  * Almost nothing work
  * Only inputs and textare are implemented
  * No angular material "theme". Looks like an issue with us using $compile in the link function of
    our directives.  
