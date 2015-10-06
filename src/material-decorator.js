angular.module('schemaForm')
  .config([ 'schemaFormDecoratorsProvider', 'sfBuilderProvider',
function(decoratorsProvider, sfBuilderProvider) {
    var base = 'decorators/material/';

    var simpleTransclusion  = sfBuilderProvider.builders.simpleTransclusion;
    var ngModelOptions = sfBuilderProvider.builders.ngModelOptions;
    var ngModel        = sfBuilderProvider.builders.ngModel;
    var sfField        = sfBuilderProvider.builders.sfField;

    var defaults = [ sfField, ngModel, ngModelOptions ];

    decoratorsProvider.defineDecorator('materialDecorator', {
      textarea: { template: base + 'textarea.html', builder: defaults },
      fieldset: { template: base + 'fieldset.html', builder: [ sfField, simpleTransclusion ] },
      'default': { template: base + 'default.html', builder: defaults },
      select: { template: base + 'select.html', builder: defaults },
      checkbox: { template: base + 'checkbox.html', builder: defaults },
      checkboxes: { template: base + 'checkboxes.html', builder: defaults },
      radios: { template: base + 'radios.html', builder: defaults },
      'radios-inline': { template: base + 'radios-inline.html', builder: defaults },
      radiobuttons: { template: base + 'radio-buttons.html', builder: defaults },
      submit: { template: base + 'submit.html', builder: defaults },
      switch: { template: base +  'switch.html', builder: defaults}
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
