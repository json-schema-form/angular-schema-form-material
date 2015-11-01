Angular Material Decorator
==========================

For https://github.com/Textalk/angular-schema-form

Work In Progress
----------------
As Angular Material has not reached 1.0.0 yet, this decorator is progressing very cautiously until that project hits it's stable milestone.

Meaning that it is **very** much a **work in progress**.

Testing
------------
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
  * Almost nothing works if the schema uses bootstrap decorator features, it does not have array or complex keys yet and many other features are still missing or have no equivalent.
  * Needs development branch of angular schema form.
  * Only basic support for inputs, textarea, radios, radiobuttons, checkboxes, datepicker and tabs are implemented.
  * Angular material theme only works when `$mdThemingProvider.alwaysWatchTheme(true);` is used.
  * Until Angular Material hits 1.0.0 there is still chances that features may break again.

Contributing
------------
Contributions are welcome! Please see [Contributing.md](CONTRIBUTING.md) for more info.

Future
------
Using the new builder opens up for a lot of optimization. Primarily we can get rid of a lot of small
watches by using build helpers. For instance, slapping on a `sf-changed` directive *only* if the
form definition has an `onChange` option.
