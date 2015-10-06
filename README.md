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
  * Needs development branch of angular schema form
  * Only inputs and textarea are implemented
  * ngModelOptions doesn't work
  * Angular material theme only works when `$mdThemingProvider.alwaysWatchTheme(true);` is used.

# Components
## Switch
> [Angular Material Reference](https://material.angularjs.org/0.11.2/#/demo/material.components.switch)

Example:

```json
{
  "schema": {
    "type": "object",
    "properties": {
      "live":  {
        "title": "Mode",
        "type": "boolean"
      }
    }
  },
  "form": [
    {
      "key":"live",
      "type":"switch"
      }
  ]
}