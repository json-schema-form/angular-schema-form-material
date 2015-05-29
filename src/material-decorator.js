angular.module('schemaForm')
  .config([ 'schemaFormDecoratorsProvider', function(decoratorsProvider) {
    var base = 'decorators/material/';

    decoratorsProvider.defineDecorator('materialDecorator', {
      textarea: { template: base + 'textarea.html' },
      fieldset: { template: base + 'fieldset.html' },
      'default': { template: base + 'default.html' },
      select: { template: base + 'select.html' },
      checkbox: { template: base + 'checkbox.html' },
      checkboxes: { template: base + 'checkboxes.html' },
      radios: { template: base + 'radios.html' },
      'radios-inline': { template: base + 'radios-inline.html' },
      radiobuttons: { template: base + 'radio-buttons.html' },
      submit: { template: base + 'submit.html' }
    });

    /*  decoratorsProvider.createDecorator('materialDecorator', {
        textarea: base + 'textarea.html',
        fieldset: base + 'fieldset.html',
        array: base + 'array.html',
        tabarray: base + 'tabarray.html',
        tabs: base + 'tabs.html',
        section: base + 'section.html',
        conditional: base + 'section.html',
        actions: base + 'actions.html',
        select: base + 'select.html',
        checkbox: base + 'checkbox.html',
        checkboxes: base + 'checkboxes.html',
        number: base + 'default.html',
        password: base + 'default.html',
        submit: base + 'submit.html',
        button: base + 'submit.html',
        radios: base + 'radios.html',
        'radios-inline': base + 'radios-inline.html',
        radiobuttons: base + 'radio-buttons.html',
        help: base + 'help.html',
        'default': base + 'default.html'
      });*/
  }]);
