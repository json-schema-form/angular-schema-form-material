Contributing
------------
We love contributions!

Contact @davidlgj or @Anthropic to ensure you don't work on something already in progress!

A few things to note:
  * Error messages are not handled in the standard Angular Material way due to ASF behaviour.
  To add messages to a template add **sf-messages** to the **parent** you want messages to be the last child of.
  * Look at the API page for the Angular Material component you are looking at, there are possibly a few attributes
  not used in the demo that may be useful. Please try to add as many useful attributes as you can, we can discuss the
  best way to implement them in the ASF form data.

  As an example, if the template requires a remote titleMap, consider adding optionData as a variable in the form definition that can contain a text string reference to a variable on the sf-form $scope.

**Please base any merge request on the *development* branch instead of *master*.**

The reason for this is that we're only really using *development* for now but will eventually start trying to use
[git flow](http://danielkummer.github.io/git-flow-cheatsheet/), and it makes merging your pull
request a heck of a lot easier for us.

Please **avoid including the material-decorator.js or material-decorator.min.js** as that can make merging harder, and we
will always generate these files when we make a new release.

With new features we love to see updates to the docs as well as tests, that makes it super
easy and fast for us to merge it!

Also consider running any code through the **JavaScript Code Style** checker [jscs](https://github.com/mdevils/node-jscs)
(or even better use it in your editor) using the .jscsrc file in the repo root, which should be picked up by the IDE. You can also us `gulp jscs` to
check your code.
